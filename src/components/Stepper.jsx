import React, { Fragment } from 'react';
import MUIStepper, { Step, StepLabel } from 'material-ui/Stepper';
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
			<Fragment>
				<MUIStepper className="checkin-stepper" activeStep={this.props.activeStep} >
					{this.stepsLabels.map(label => (
						<Step className="checkin-stepper__step" key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</MUIStepper>

				<div className="checkin-stepper-content">
					{this.steps[this.props.activeStep]}
				</div>
			</Fragment>
		);
	}
}

export default Stepper;
