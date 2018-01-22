import moment from 'moment';

export const currentStepInitialState = 2;

export const orderSearchingInitialState = {
	lastName: 'GRIGORIEV',
	ticketNumber: '01234567890123',
	departureDate: moment(),
	flightNumber: 'SU-167'
};

export const passengersChoosingInitialState = {
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
