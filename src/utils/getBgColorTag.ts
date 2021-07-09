export type ColorType = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11';

export const getBgColorTag = (color: string) => {
  if (color.includes('tag')) {
    return color.substr(3, 2) as ColorType;
  } else {
    return color ? color : '01';
  }
};
