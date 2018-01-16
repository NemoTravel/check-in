import { SELECT_PASSENGER, DESELECT_PASSENGER, DESELECT_ALL_PASSENGER } from 'store/passengersChoosing/actions';

const initialState = {
	selectedPassengers: {},
	passengersIds: [1, 2],
	passengers: {
		1: {
			id: 1,
			name: 'GRIGORIEVA OLGA'
		},
		2: {
			id: 2,
			name: 'GRIGORIEV OLEG'
		}
	}
};

const passengersChoosingReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SELECT_PASSENGER:
			return { ...state, selectedPassengers: { ...state.selectedPassengers, [action.payload]: true } };

		case DESELECT_PASSENGER:
			return { ...state, selectedPassengers: { ...state.selectedPassengers, [action.payload]: false } };

		case DESELECT_ALL_PASSENGER:
			return { ...state, selectedPassengers: {} };
	}

	return state;
};

export default passengersChoosingReducer;
