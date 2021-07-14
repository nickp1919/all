import { combineActions } from 'redux-actions';
const actionsCombiner = (...actions) => {
    const combinedActions = combineActions(...actions);
    return combinedActions;
};
export default actionsCombiner;
