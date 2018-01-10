import React from 'react';
import MUIStepper, { Step, StepLabel } from 'material-ui/Stepper';
import PropTypes from 'prop-types';

class Stepper extends React.Component {
	static propTypes = {
		activeStep: PropTypes.number.isRequired
	};

	stepsLabels = [
		'Поиск заказа',
		'Выбор пассажиров',
		'Выбор мест',
		'Посадочный талон'
	];

	shouldComponentUpdate(nextProps) {
		return nextProps.activeStep !== this.props.activeStep;
	}

	render() {
		return (
			<MUIStepper className="checkin-stepper" activeStep={this.props.activeStep}>
				{this.stepsLabels.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</MUIStepper>
		);
	}
}

export default Stepper;
