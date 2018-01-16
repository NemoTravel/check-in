import { combineReducers } from 'redux';
import orderSearchingReducer from 'store/orderSearching/reducer';
import passengersChoosingReducer from 'store/passengersChoosing/reducer';
import currentStepReducer from 'store/currentStep/reducer';

export default combineReducers({
	currentStep: currentStepReducer,
	orderSearching: orderSearchingReducer,
	passengersChoosing: passengersChoosingReducer
});
