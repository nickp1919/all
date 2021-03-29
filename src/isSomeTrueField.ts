import { isArrayCount } from './index';

export const isSomeTrueField = (source: Array<any>, field: string) => {
   if (isArrayCount(source)) {
     for (let i = 0; i < source.length; i++) {
       if (source[i][field]) {
         return true;
       }
     }
   }

   return false;
};
