import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import OrderSearching from 'components/steps/OrderSearching';
import { nextStep } from 'store/actions';

class OrderSearchingContainer extends React.Component {
	static propTypes = {
		nextStep: PropTypes.func.isRequired
	};

	render() {
		return <OrderSearching nextStepHandler={this.props.nextStep}/>;
	}
}

export default connect(null, dispatch => {
	return {
		nextStep: bindActionCreators(nextStep, dispatch)
	};
})(OrderSearchingContainer);
