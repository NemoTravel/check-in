import React from 'react';
import Stepper from 'components/Stepper';
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

	render() {
		const { activeStep } = this.state;

		return (
			<section className="checkin">
				<Stepper activeStep={activeStep}/>

				<div className="checkin-content">
					{this.steps[activeStep]}
				</div>
			</section>
		);
	}
}

export default Main;
