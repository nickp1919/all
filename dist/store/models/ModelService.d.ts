interface IModelService {
    normalize: <T>(actionType: string, data: T) => T;
}
export declare type TReducerName = string;
export declare class ModelService implements IModelService {
    private readonly service;
    readonly MODELS: any;
    constructor(reducerName: string, MODELS: any);
    private getReducerService;
    normalize<T>(actionType: string, data: T): any;
}
export {};
