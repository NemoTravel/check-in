import { NEXT_STEP, PREVIOUS_STEP } from 'store/currentStep/actions';
import { currentStepInitialState } from 'state';

const currentStepReducer = (state = currentStepInitialState, action = {}) => {
	switch (action.type) {
		case NEXT_STEP:
			return state + 1;

		case PREVIOUS_STEP:
			return state - 1;
	}

	return state;
};

export default currentStepReducer;
