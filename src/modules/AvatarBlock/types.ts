import { ReactNode } from 'react';
import { TEstimatedPerson } from '@types-lib';

export declare type Style = 'default' | 'black';

export interface AvatarVariants {
  /**
   * @default "l"
   */
  size?: Size;
}

export interface CounterProps {
  /**
   * @default m
   */
  size?: Size;
  /**
   * @default default
   */
  style?: Style;
  /**
   * @default false
   */
  bordered?: boolean;
}

export interface AvatarProps extends AvatarVariants {
  src?: string;
  initials?: string;
  noCandidate?: boolean;
  candidateGrade?: number | string;
  label?: ReactNode;
  hasBadge?: boolean;
  status?: ReactNode;
  children?: ReactNode;
  verificationStatus?: VerificationStatus;
  user: Partial<TEstimatedPerson>;
}

export type VerificationStatus = 'accept' | 'decline' | 'no_result';
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface StyledContentProps {
  size: Size;
}

export type MapToCounterSize = Partial<Record<Size, CounterProps['size']>>;

export type buttonSize = 'm' | 's';
export type SizeAvatar = 'm' | 's' | 'xs';
export type stackType = 'ordinary' | 'double';

export interface AvatarStackProps {
  /**
   * @default ordinary
   */
  type?: stackType;
  /**
   * @default m
   */
  size?: SizeAvatar;
  children: ReactNode;
}

export interface ButtonProps {
  size?: buttonSize;
  children: ReactNode;
  onClick?: () => void;
}
