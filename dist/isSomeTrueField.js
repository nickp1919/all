import { isArrayCount } from './index';
export const isSomeTrueField = (source, field) => {
    if (isArrayCount(source)) {
        for (let i = 0; i < source.length; i++) {
            if (source[i][field]) {
                return true;
            }
        }
    }
    return false;
};
