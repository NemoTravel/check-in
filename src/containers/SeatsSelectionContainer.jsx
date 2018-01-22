import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SeatsSelection from 'components/steps/SeatsSelection';
import { nextStep, previousStep } from 'store/currentStep/actions';
import { getPassengers } from 'store/passengersChoosing/selectors';

class SeatsSelectionContainer extends React.Component {
	static propTypes = {
		passengers: PropTypes.array.isRequired,
		nextStep: PropTypes.func.isRequired,
		previousStep: PropTypes.func.isRequired
	};

	render() {
		return <SeatsSelection
			passengers={this.props.passengers}
			nextStepHandler={this.props.nextStep}
			backStepHandler={this.props.previousStep}
		/>;
	}
}

export default connect(
	state => {
		return {
			passengers: getPassengers(state)
		};
	},
	dispatch => {
		return {
			nextStep: bindActionCreators(nextStep, dispatch),
			previousStep: bindActionCreators(previousStep, dispatch)
		};
	}
)(SeatsSelectionContainer);
