import { createSelector } from 'reselect';
import moment from 'moment';

const getForm = state => state.orderSearching;

export const formIsValid = createSelector(
	[ getForm ],
	state => {
		let isValid = true;
		const todayMidnight = moment();

		todayMidnight.set('hour', 0);
		todayMidnight.set('minute', 0);
		todayMidnight.set('second', 0);

		if (!state.lastName) {
			isValid = false;
		}
		else if (!state.ticketNumber) {
			isValid = false;
		}
		else if (!state.departureDate) {
			isValid = false;
		}
		else if (state.departureDate.unix() < todayMidnight.unix()) {
			isValid = false;
		}
		else if (!state.flightNumber) {
			isValid = false;
		}

		return isValid;
	}
);
