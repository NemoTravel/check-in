import { nextStep, previousStep } from 'store/currentStep/actions';
import { formIsValid } from 'store/passengersChoosing/selectors';

export const SELECT_PASSENGER = 'action_select_passenger';
export const DESELECT_PASSENGER = 'action_deselect_passenger';
export const DESELECT_ALL_PASSENGER = 'action_deselect_all_passenger';

export const selectPassenger = passengerId => {
	return {
		type: SELECT_PASSENGER,
		payload: passengerId
	};
};

export const deselectPassenger = passengerId => {
	return {
		type: DESELECT_PASSENGER,
		payload: passengerId
	};
};

export const deselectAllPassengers = () => {
	return {
		type: DESELECT_ALL_PASSENGER
	};
};

export const clearPassengers = () => {
	return dispatch => {
		dispatch(deselectAllPassengers());
		dispatch(previousStep());
	};
};

export const confirmPassengers = () => {
	return (dispatch, getState) => {
		const state = getState();

		if (formIsValid(state)) {
			dispatch(nextStep());
		}
		else {
			// form data is invalid
		}
	};
};
