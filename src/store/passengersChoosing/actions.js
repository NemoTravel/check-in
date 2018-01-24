import { nextStep, previousStep } from 'store/currentStep/actions';
import { formIsValid } from 'store/passengersChoosing/selectors';

export const SELECT_PASSENGER = 'action_select_passenger';
export const DESELECT_PASSENGER = 'action_deselect_passenger';
export const DESELECT_ALL_PASSENGER = 'action_deselect_all_passenger';
export const OPEN_DIALOG = 'acion_open_dialog';
export const CLOSE_DIALOG = 'acion_close_dialog';

export const openDialog = () => {
	return {
		type: OPEN_DIALOG
	};
};

export const closeDialog = () => {
	return {
		type: CLOSE_DIALOG
	};
};

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
	};
};

export const confirmPassengers = () => {
	return (dispatch, getState) => {
		const state = getState();

		if (formIsValid(state)) {
			dispatch(closeDialog());
			dispatch(nextStep());
		}
		else {
			// form data is invalid
		}
	};
};
