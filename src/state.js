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
			name: 'GRIGORIEVA OLGA',
			gender: 'Женский',
			birthDate: '11.11.1991',
			documentNumber: '0123456789',
			nationality: 'Российская Федерация'
		},
		2: {
			id: 2,
			name: 'GRIGORIEV OLEG',
			gender: 'Мужской',
			birthDate: '12.02.1990',
			documentNumber: '9876543210',
			nationality: 'Российская Федерация'
		}
	}
};
