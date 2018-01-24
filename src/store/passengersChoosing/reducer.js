import { passengersChoosingInitialState } from 'state';
import {
	SELECT_PASSENGER,
	DESELECT_PASSENGER,
	DESELECT_ALL_PASSENGER,
	OPEN_DIALOG,
	CLOSE_DIALOG
} from 'store/passengersChoosing/actions';

const passengersChoosingReducer = (state = passengersChoosingInitialState, action = {}) => {
	switch (action.type) {
		case SELECT_PASSENGER:
			return { ...state, selectedPassengers: { ...state.selectedPassengers, [action.payload]: true } };

		case DESELECT_PASSENGER:
			return { ...state, selectedPassengers: { ...state.selectedPassengers, [action.payload]: false } };

		case DESELECT_ALL_PASSENGER:
			return { ...state, selectedPassengers: {} };

		case OPEN_DIALOG:
			return { ...state, isOpen: true };

		case CLOSE_DIALOG:
			return { ...state, isOpen: false };
	}

	return state;
};

export default passengersChoosingReducer;
