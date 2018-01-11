import React from 'react';
import MUIStepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import PropTypes from 'prop-types';
import i18n from '@nemo.travel/i18n';

import OrderSearchingContainer from 'containers/OrderSearchingContainer';
import PassengersChoosingContainer from 'containers/PassengersChoosingContainer';
import SeatsSelectionContainer from 'containers/SeatsSelectionContainer';

class Stepper extends React.Component {
	static propTypes = {
		activeStep: PropTypes.number.isRequired
	};

	steps = [
		<OrderSearchingContainer/>,
		<PassengersChoosingContainer/>,
		<SeatsSelectionContainer/>
	];

	stepsLabels = [
		i18n('step-1__label'),
		i18n('step-2__label'),
		i18n('step-3__label'),
		i18n('step-4__label')
	];

	shouldComponentUpdate(nextProps) {
		return nextProps.activeStep !== this.props.activeStep;
	}

	render() {
		return (
			<MUIStepper orientation="vertical" className="checkin-stepper" activeStep={this.props.activeStep}>
				{this.stepsLabels.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>{this.steps[this.props.activeStep]}</StepContent>
					</Step>
				))}
			</MUIStepper>
		);
	}
}

export default Stepper;
