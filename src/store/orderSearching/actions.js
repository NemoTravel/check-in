import { formIsValid } from 'store/orderSearching/selectors';
import { openDialog } from 'store/passengersChoosing/actions';

export const CHANGE_LAST_NAME = 'action_change_last_name';
export const CHANGE_TICKET_NUMBER = 'action_change_ticket_number';
export const CHANGE_DEPARTURE_DATE = 'action_change_departure_date';
export const CHANGE_FLIGHT_NUMBER = 'action_change_flight_number';

export const changeLastName = lastName => {
	return {
		type: CHANGE_LAST_NAME,
		payload: lastName
	};
};

export const changeTicketNumber = ticketNumber => {
	return {
		type: CHANGE_TICKET_NUMBER,
		payload: ticketNumber
	};
};

export const changeDepartureDate = date => {
	return {
		type: CHANGE_DEPARTURE_DATE,
		payload: date
	};
};

export const changeFlightNumber = flightNumber => {
	return {
		type: CHANGE_FLIGHT_NUMBER,
		payload: flightNumber
	};
};

export const searchOrder = () => {
	return (dispatch, getState) => {
		const state = getState();

		if (formIsValid(state)) {
			dispatch(openDialog());
		}
		else {
			// form data is invalid
		}
	};
};
