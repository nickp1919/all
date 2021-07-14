interface IModelService {
  normalize: <T>(actionType: string, data: T) => T;
}

export type TReducerName = string;

export class ModelService implements IModelService {
  private readonly service: any;
  readonly MODELS: any;

  constructor(reducerName: string, MODELS: any) {
    this.MODELS = MODELS;
    this.service = this.getReducerService(reducerName);
  }

  private getReducerService(reducerName: TReducerName) {
    const models = this.MODELS;
    const Constructor = this.MODELS[reducerName as keyof typeof models];

    return new Constructor();
  }

  normalize<T>(actionType: string, data: T) {
    return this.service.normalize(actionType, data);
  }
}
