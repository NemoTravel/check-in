import { createSelector } from 'reselect';

const getPassengersIds = state => state.passengersChoosing.passengersIds;
const getPassengersData = state => state.passengersChoosing.passengers;
const getSelectedPassengers = state => state.passengersChoosing.selectedPassengers;

export const getPassengers = createSelector(
	[ getPassengersIds, getPassengersData ],
	(passengersIds, passengersData) => {
		const result = [];

		passengersIds.forEach(passengerId => {
			if (passengersData.hasOwnProperty(passengerId)) {
				result.push(passengersData[passengerId]);
			}
		});

		return result;
	}
);

export const formIsValid = createSelector(
	[ getSelectedPassengers ],
	state => {
		let isValid = false;

		for (const passId in state) {
			if (state.hasOwnProperty(passId) && state[passId] === true) {
				isValid = true;
				break;
			}
		}

		return isValid;
	}
);
