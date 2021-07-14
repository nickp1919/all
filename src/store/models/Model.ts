/*
Логика работы:
1) Если в схеме просто указать имена полей которые в чистую пришли с бэка, то они заполнятся автоматически.
2) Если нужно создать свое поле в редьюсере или просто переименовать поле с бэка, то делаем так

с бэка приходит:
stats: {
  items: {
    ACTIVE: 3
  },
  total: 2
}

statistics: { // создаем свое поле
  _extended: true, // сообщает от том что мы хотим изменить нэйминг
  initialPropName: 'stats',  // указываем если нам нужно получить данные из конкретного поля с бэка
  value: {  // обязательное поле, так как заполнит редьюсер дефолтными данными если поле stats с бэка не придет или будет undefined
    total: 0,  // указали поле в чистом виде
    inProgress: {
      _extended: true,
      initialPropName: 'items.ACTIVE', // можно указать путь объекта откуда брать данные, корень будет браться из initialPropName указанный у родителя объекта
      value: 0,
    },
    completed: {
      _extended: true,
      initialPropName: 'items.CLOSED',
      value: 0,
    },
    notStarted: {
      _extended: true,
      initialPropName: 'items.TEMPLATE',
      value: 0,
    },
  },
},
*/

import isEmpty from 'lodash.isempty';

import {
  isNumber,
  isString,
  isBoolean,
  isNull,
  isUndefined,
  isArrayCount,
  isObject,
  isArray,
} from '@utils-lib';

type TPropObject = {
  [key: string]: any;
};

export type TNormalizers = {
  [key: string]: any[];
};

export class Model {
  protected readonly NORMALIZERS: TNormalizers = {};

  /*
    Основной метод для нормализации данных. Вызывается из дочернего класса.
    Если в дочернем классе нет метода для нормализации конкретного экшена, то вызов нормализации по схеме.
  */
  normalize(actionType: string, data: any): any {
    const normalizerData = this.getNormalizer(actionType, this.NORMALIZERS);

    if (!normalizerData) {
      return {
        type: actionType,
        payload: data,
      };
    }

    const [schema, normalizer] = normalizerData;

    if (normalizer) {
      return normalizer(actionType, schema, data);
    }

    const payload = this.normalizeWithSchema(data, schema);

    return { type: actionType, payload };
  }

  private isPrimitiveValue<T>(value: T): boolean {
    return isNumber(value) || isString(value) || isBoolean(value);
  }

  private getNormalizer(actionType: string, normalizers: TNormalizers) {
    return normalizers[actionType];
  }

  private isExtendedSchemaValue(value: any): boolean {
    return isObject(value) && !!value._extended;
  }

  private isEmptyObject<T extends object>(value: T): boolean {
    return isObject(value) && isEmpty(value);
  }

  // Парсинг данных поля из схемы
  private extractFieldData(field: [string, any]): TPropObject {
    const [basePropName, fieldValue] = field;
    const isExtended = this.isExtendedSchemaValue(fieldValue);
    const searchPropName = isExtended ? fieldValue.initialPropName || basePropName : basePropName;
    const schemaValue = isExtended ? fieldValue.value : fieldValue;

    return { basePropName, searchPropName, schemaValue };
  }

  // Преобразование схемы в значение для выходящих данных.
  private convertSchemaToValue(schema: any): any {
    if (isArray(schema)) {
      return [];
    }

    if (this.isPrimitiveValue(schema) || isNull(schema) || isUndefined(schema)) {
      return schema;
    }

    return Object.entries(schema).reduce<{ [key: string]: any }>((result, field) => {
      const [prop, fieldValue]: [string, any] = field;
      const isPrimitive = this.isPrimitiveValue(fieldValue);

      if (isPrimitive) {
        result[prop] = fieldValue;

        return result;
      }

      const isExtended = this.isExtendedSchemaValue(fieldValue);
      const propValue = isExtended ? fieldValue.value : fieldValue;
      result[prop] = this.convertSchemaToValue(propValue);

      return result;
    }, {});
  }

  // Получение значения из входящих данных по свойству/массиву свойств
  private getDataByProp(data: any, prop: any): any {
    if (isString(prop)) {
      if (prop.indexOf('.') > -1) {
        const arrProp = prop.split('.');
        let result: any = undefined;

        if (isArrayCount(arrProp)) {
          arrProp.forEach((propName: string, i: number) => {
            if (i === 0) {
              result = data[propName];
            } else {
              result = result[propName];
            }
          });
        }

        return result;
      }

      return data[prop as string];
    }

    return (prop as string[]).reduce((result, propName) => {
      if (isUndefined(result)) {
        result = data[propName];
      }

      return result;
    }, undefined);
  }

  // Нормализация посредством строгой схемы данных.
  normalizeWithSchema(data: any, schema: any): any {
    const isExtendedValue = this.isExtendedSchemaValue(schema);

    if (isUndefined(schema)) {
      return data;
    }

    const schemaValue = isExtendedValue ? schema.value : schema;
    const isNullorEmptySchema = isNull(schemaValue) || this.isEmptyObject(schemaValue);
    const isArraySchema = isArray(schemaValue);

    if (isNullorEmptySchema) {
      return !isUndefined(data) ? data : schemaValue;
    }

    if (isArraySchema) {
      return this.normalizeArray(data, schema);
    }

    return Object.entries(schemaValue).reduce((result: TPropObject, field) => {
      const { basePropName, searchPropName, schemaValue } = this.extractFieldData(field);
      const dataPropValue = this.getDataByProp(data, searchPropName);
      const isExist = !isUndefined(dataPropValue);

      if (!isExist) {
        result[basePropName] = this.convertSchemaToValue(schemaValue);

        return result;
      }

      result[basePropName] = this.getValue(dataPropValue, schemaValue);

      return result;
    }, {});
  }

  // Метод для получения значения свойства.
  private getValue<T, U>(dataValue: T, schemaValue: U) {
    const withValue = !isNull(dataValue);
    const isPrimitive = this.isPrimitiveValue(schemaValue);

    if (!withValue) {
      return this.convertSchemaToValue(schemaValue);
    }

    if (isPrimitive) {
      return dataValue;
    }

    const isArrayValue = isArray(schemaValue);
    const valueFn = isArrayValue ? this.normalizeArray : this.normalizeWithSchema;

    return valueFn.call(this, dataValue, schemaValue);
  }

  // Метод для нормализации, если значение свойства - массив.
  private normalizeArray<T, U>(array: T[], schemaArray: U[]) {
    const isEmptySchema = isArrayCount(schemaArray) === 0;
    const isEmptyData = isArrayCount(array) === 0;

    if (isEmptySchema) {
      return array;
    }

    const withSchema = this.isExtendedSchemaValue(schemaArray[0]);

    if (withSchema) {
      return isEmptyData
        ? array
        : array.map((item) => this.normalizeWithSchema(item, schemaArray[0]));
    }

    return isEmptyData ? schemaArray : array;
  }
}
