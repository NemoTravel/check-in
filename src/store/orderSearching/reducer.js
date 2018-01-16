import { orderSearchingInitialState } from 'state';
import {
	CHANGE_DEPARTURE_DATE,
	CHANGE_FLIGHT_NUMBER,
	CHANGE_LAST_NAME,
	CHANGE_TICKET_NUMBER
} from 'store/orderSearching/actions';

const orderSearchingReducer = (state = orderSearchingInitialState, action = {}) => {
	switch (action.type) {
		case CHANGE_DEPARTURE_DATE:
			return { ...state, departureDate: action.payload };

		case CHANGE_FLIGHT_NUMBER:
			return { ...state, flightNumber: action.payload };

		case CHANGE_LAST_NAME:
			return { ...state, lastName: action.payload };

		case CHANGE_TICKET_NUMBER:
			return { ...state, ticketNumber: action.payload };
	}

	return state;
};

export default orderSearchingReducer;
