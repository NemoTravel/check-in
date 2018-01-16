import moment from 'moment/moment';

export const currentStepInitialState = 0;

export const orderSearchingInitialState = {
	lastName: '',
	ticketNumber: '',
	departureDate: moment(),
	flightNumber: ''
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
