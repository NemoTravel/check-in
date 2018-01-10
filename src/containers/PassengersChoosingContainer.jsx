import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PassengersChoosing from 'components/steps/PassengersChoosing';
import { nextStep, previousStep } from 'store/actions';

class PassengersChoosingContainer extends React.Component {
	static propTypes = {
		nextStep: PropTypes.func.isRequired,
		previousStep: PropTypes.func.isRequired
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return <PassengersChoosing nextStepHandler={this.props.nextStep} backStepHandler={this.props.previousStep}/>;
	}
}

export default connect(null, dispatch => {
	return {
		nextStep: bindActionCreators(nextStep, dispatch),
		previousStep: bindActionCreators(previousStep, dispatch)
	};
})(PassengersChoosingContainer);
