export class ModelService {
    constructor(reducerName, MODELS) {
        this.MODELS = MODELS;
        this.service = this.getReducerService(reducerName);
    }
    getReducerService(reducerName) {
        const models = this.MODELS;
        const Constructor = this.MODELS[reducerName];
        return new Constructor();
    }
    normalize(actionType, data) {
        return this.service.normalize(actionType, data);
    }
}
