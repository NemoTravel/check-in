import { passengersChoosingInitialState } from 'state';
import {
	SELECT_PASSENGER,
	DESELECT_PASSENGER,
	DESELECT_ALL_PASSENGER,
	OPEN_DIALOG,
	CLOSE_DIALOG
} from 'store/passengersChoosing/actions';

const passengersChoosingReducer = (state = passengersChoosingInitialState, action = {}) => {
	let newSelectedPassengers = [];

	switch (action.type) {
		case SELECT_PASSENGER:
			newSelectedPassengers = [...state.selectedPassengers];
			newSelectedPassengers.push(parseInt(action.payload));

			return { ...state, selectedPassengers: newSelectedPassengers };

		case DESELECT_PASSENGER:
			const passPayloadId = parseInt(action.payload);

			newSelectedPassengers = state.selectedPassengers.filter(passId => {
				return passId !== passPayloadId;
			});

			return { ...state, selectedPassengers: newSelectedPassengers };

		case DESELECT_ALL_PASSENGER:
			return { ...state, selectedPassengers: [] };

		case OPEN_DIALOG:
			return { ...state, isOpen: true };

		case CLOSE_DIALOG:
			return { ...state, isOpen: false };
	}

	return state;
};

export default passengersChoosingReducer;
