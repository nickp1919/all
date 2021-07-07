import { isObject } from "./";
export function cloneArray(array) {
    if (Array.isArray(array)) {
        return array.map(function (el) {
            if (Array.isArray(el)) {
                return cloneArray(el);
            }
            if (isObject(el) && el.constructor === Object) {
                return deepCloneObject(el, {});
            }
            return el;
        });
    }
    return [];
}
export function deepCloneObject(source, target) {
    if (typeof target !== 'object' || !target) {
        return;
    }
    for (const sourceKey in source) {
        if (Object.prototype.hasOwnProperty.call(source, sourceKey)) {
            const value = source[sourceKey];
            if (Array.isArray(value)) {
                target[sourceKey] = cloneArray(value);
            }
            else if (isObject(value) && value.constructor === Object) {
                target[sourceKey] = deepCloneObject(value, {});
            }
            else {
                target[sourceKey] = value;
            }
        }
    }
    return target;
}
export function cloneObject(target) {
    if (typeof target !== 'object' || !target) {
        return;
    }
    const _target = {};
    for (const sourceKey in target) {
        if (Object.prototype.hasOwnProperty.call(target, sourceKey)) {
            _target[sourceKey] = target[sourceKey];
        }
    }
    return _target;
}
