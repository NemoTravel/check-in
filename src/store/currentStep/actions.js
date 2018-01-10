export const NEXT_STEP = 'action_next_step';
export const PREVIOUS_STEP = 'action_previous_step';

export const nextStep = () => {
	return {
		type: NEXT_STEP
	};
};

export const previousStep = () => {
	return {
		type: PREVIOUS_STEP
	};
};
