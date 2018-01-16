import { NEXT_STEP, PREVIOUS_STEP } from 'store/currentStep/actions';

const currentStepReducer = (state = 0, action = {}) => {
	switch (action.type) {
		case NEXT_STEP:
			return state + 1;

		case PREVIOUS_STEP:
			return state - 1;
	}

	return state;
};

export default currentStepReducer;
