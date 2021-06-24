import { combineActions } from 'redux-actions';

const actionsCombiner = (...actions: string[]) => {
  const combinedActions = combineActions(...actions) as unknown;

  return combinedActions as string;
};

export default actionsCombiner;
