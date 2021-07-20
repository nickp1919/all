import { createActions } from 'redux-actions';
export var AddAssessment360Estimators;
(function (AddAssessment360Estimators) {
    AddAssessment360Estimators["Pending"] = "[Pending] \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0435 360";
})(AddAssessment360Estimators || (AddAssessment360Estimators = {}));
export var RemoveAssessment360Estimators;
(function (RemoveAssessment360Estimators) {
    RemoveAssessment360Estimators["Pending"] = "[Pending] \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0435 360";
})(RemoveAssessment360Estimators || (RemoveAssessment360Estimators = {}));
createActions({
    [AddAssessment360Estimators.Pending]: (payload) => payload,
    [RemoveAssessment360Estimators.Pending]: (payload) => payload,
});
