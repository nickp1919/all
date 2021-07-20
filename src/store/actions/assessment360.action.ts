import { createActions } from 'redux-actions';

import { TEstimatorsSendType } from '@types';

export enum AddAssessment360Estimators {
  Pending = '[Pending] добавить оценщиков на оценке 360',
}

export enum RemoveAssessment360Estimators {
  Pending = '[Pending] удалить оценщиков на оценке 360',
}

createActions({
  [AddAssessment360Estimators.Pending]: (payload: TEstimatorsSendType) => payload,

  [RemoveAssessment360Estimators.Pending]: (payload: TEstimatorsSendType) => payload,
});
