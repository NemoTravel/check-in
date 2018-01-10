import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SeatsSelection from 'components/steps/SeatsSelection';
import { nextStep, previousStep } from 'store/currentStep/actions';

class SeatsSelectionContainer extends React.Component {
	static propTypes = {
		nextStep: PropTypes.func.isRequired,
		previousStep: PropTypes.func.isRequired
	};

	render() {
		return <SeatsSelection nextStepHandler={this.props.nextStep} backStepHandler={this.props.previousStep}/>;
	}
}

export default connect(null, dispatch => {
	return {
		nextStep: bindActionCreators(nextStep, dispatch),
		previousStep: bindActionCreators(previousStep, dispatch)
	};
})(SeatsSelectionContainer);
