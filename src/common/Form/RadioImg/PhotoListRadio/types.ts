import { TFile } from '@types';

export type PhotoListRadioProps = {
  photos: TFile[];
  checked: boolean;
  onClick: Function;
};
