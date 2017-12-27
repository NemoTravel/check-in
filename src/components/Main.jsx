import React from 'react';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const getStepContent = step => {
	switch (step) {
		case 0:
			return 'Select campaign settings...';
		case 1:
			return 'What is an ad group anyways?';
		case 2:
			return 'This is the bit I really care about!';
		default:
			return 'Unknown step';
	}
};

class Main extends React.Component {
	state = {
		activeStep: 0,
		skipped: new Set()
	};

	isStepSkipped(step) {
		return this.state.skipped.has(step);
	}

	handleNext = () => {
		const { activeStep } = this.state;
		let { skipped } = this.state;

		if (this.isStepSkipped(activeStep)) {
			skipped = new Set(skipped.values());
			skipped.delete(activeStep);
		}

		this.setState({
			activeStep: activeStep + 1,
			skipped
		});
	};

	handleBack = () => {
		const { activeStep } = this.state;

		this.setState({
			activeStep: activeStep - 1
		});
	};

	render() {
		const steps = [
			'Поиск заказа',
			'Выбор пассажиров',
			'Выбор мест',
			'Посадочный талон'
		];
		const { activeStep } = this.state;

		return (
			<div>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const
							props = {},
							labelProps = {};

						return (
							<Step key={label} {...props}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				<div>
					{activeStep === steps.length ? (
						<div>
							<Typography>
								All steps completed - you&quot;re finished
							</Typography>
						</div>
					) : (
						<div>
							<Typography>{getStepContent(activeStep)}</Typography>
							<div>
								<Button
									disabled={activeStep === 0}
									onClick={this.handleBack}
								>
									Back
								</Button>
								<Button raised color="primary" onClick={this.handleNext}>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Main;
