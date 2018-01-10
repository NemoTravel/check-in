import { NEXT_STEP, PREVIOUS_STEP } from 'store/actions';

const initialState = {
	currentStep: 0
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT_STEP:
			return { ...state, currentStep: state.currentStep + 1 };

		case PREVIOUS_STEP:
			return { ...state, currentStep: state.currentStep - 1 };
	}

	return state;
};

export default rootReducer;
