import { combineReducers } from 'redux';
import orderSearchingReducer from 'store/orderSearching/reducer';
import currentStepReducer from 'store/currentStep/reducer';

export default combineReducers({
	currentStep: currentStepReducer,
	orderSearching: orderSearchingReducer
});
