import React from 'react';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';

import OrderSearching from 'components/steps/OrderSearching';
import PassengersChoosing from 'components/steps/PassengersChoosing';
import SeatsSelection from 'components/steps/SeatsSelection';

class Main extends React.Component {
	state = {
		activeStep: 0
	};

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

	steps = [
		<OrderSearching nextStepHandler={this.handleNext}/>,
		<PassengersChoosing nextStepHandler={this.handleNext} backStepHandler={this.handleBack}/>,
		<SeatsSelection nextStepHandler={this.handleNext} backStepHandler={this.handleBack}/>
	];

	stepsLabels = [
		'Поиск заказа',
		'Выбор пассажиров',
		'Выбор мест',
		'Посадочный талон'
	];

	render() {
		const { activeStep } = this.state;

		return (
			<section className="checkin">
				<Stepper className="checkin-stepper" activeStep={activeStep}>
					{this.stepsLabels.map(label => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				<div className="checkin-content">
					{this.steps[activeStep]}
				</div>
			</section>
		);
	}
}

export default Main;
