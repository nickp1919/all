/// <reference types="node" />
declare class EventRegistration {
    constructor(delay?: number);
    eventList: {
        [key: string]: Map<symbol, Function>;
    };
    idTimeout?: NodeJS.Timeout;
    delay: number;
    execute: (event: Event) => void;
    createCategory: (eventName: string) => void;
    add: (eventName: string, fn: Function) => symbol;
    updateEventListener: (eventName: string) => void;
    remove: (eventName: string, id: symbol) => void;
}
export default EventRegistration;
