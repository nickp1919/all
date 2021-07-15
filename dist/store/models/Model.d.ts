export declare type TNormalizers = {
    [key: string]: any[];
};
export declare class Model {
    protected readonly NORMALIZERS: TNormalizers;
    normalize(actionType: string, data: any): any;
    private isPrimitiveValue;
    private getNormalizer;
    private isExtendedSchemaValue;
    private isEmptyObject;
    private extractFieldData;
    private convertSchemaToValue;
    private getDataByProp;
    normalizeWithSchema(data: any, schema: any): any;
    private getValue;
    private normalizeArray;
}
