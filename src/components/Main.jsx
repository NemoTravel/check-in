import React from 'react';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import MUIButton from 'material-ui/Button';

import Button from 'components/ui/Button';
import OrderSearching from 'components/steps/OrderSearching';
import PassengersChoosing from 'components/steps/PassengersChoosing';
import SeatsSelection from 'components/steps/SeatsSelection';
import Results from 'components/steps/Results';

class Main extends React.Component {
	state = {
		activeStep: 0
	};

	steps = [
		<OrderSearching/>,
		<PassengersChoosing/>,
		<SeatsSelection/>,
		<Results/>
	];

	stepsNextButtons = [
		'Найти заказ',
		'Выбрать места',
		'Пройти регистрацию'
	];

	stepsLabels = [
		'Поиск заказа',
		'Выбор пассажиров',
		'Выбор мест',
		'Посадочный талон'
	];

	handleNext = () => {
		this.setState({
			activeStep: this.state.activeStep + 1
		});
	};

	handleBack = () => {
		this.setState({
			activeStep: this.state.activeStep - 1
		});
	};

	render() {
		const { activeStep } = this.state;
		const lastStep = this.steps.length - 1;

		return (
			<div>
				<Stepper activeStep={activeStep}>
					{this.stepsLabels.map(label => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				<div>
					{this.steps[activeStep]}

					<div>
						{activeStep !== 0 && activeStep < lastStep ? <MUIButton disabled={activeStep === 0} onClick={this.handleBack}>
							Назад
						</MUIButton> : null}

						{activeStep < lastStep ? <Button onClick={this.handleNext}>
							{this.stepsNextButtons[activeStep]}
						</Button> : null}
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
