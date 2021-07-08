export type OptionType = {
  test?: string;
  survey?: string;
};

import { TEST } from '@constants-lib';

const getTestType = (status: string, option?: OptionType) => {
  const { TYPE } = TEST;
  const { test, survey } = option || {};

  switch (status) {
    case TYPE.TEST.value:
      return test ? test : TYPE.TEST.name;
    case TYPE.SURVEY.value:
      return survey ? survey : TYPE.SURVEY.name;
    default:
      return '';
  }
};

export default getTestType;
