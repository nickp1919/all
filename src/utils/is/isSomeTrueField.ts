import { isArrayCount } from '@utils';

const isSomeTrueField = <T>(source: any, field: string) => {
  if (isArrayCount(source)) {
    for (let i = 0; i < source.length; i++) {
      if (source[i][field]) {
        return true;
      }
    }
  }

  return false;
};

export default isSomeTrueField;
