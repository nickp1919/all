import { isArrayCount, isString } from '@utils';
import { colors } from '@globalStyled';

export function hexToRgba(hexCode: string, opacity = 100) {
  if (!isString(hexCode)) {
    return '';
  }

  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
}

export function getColorFromTheme(name: string) {
  if (!name && !isString(name)) return '';

  const arr = name.split('.');

  if (isArrayCount(arr) === 1) {
    return colors[name as keyof typeof colors];
  }

  return arr.reduce<any>((result, item) => {
    if (result) {
      result = result[item];
    }
    return result;
  }, colors);
}
