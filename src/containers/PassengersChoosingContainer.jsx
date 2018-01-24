import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PassengersChoosing from 'components/steps/PassengersChoosing';
import {
	deselectPassenger,
	selectPassenger,
	confirmPassengers,
	clearPassengers,
	closeDialog
} from 'store/passengersChoosing/actions';
import { getPassengers, formIsValid } from 'store/passengersChoosing/selectors';

class PassengersChoosingContainer extends React.Component {
	static propTypes = {
		isOpen: PropTypes.bool.isRequired,
		formIsValid: PropTypes.bool.isRequired,
		passengers: PropTypes.array.isRequired,
		selectPassenger: PropTypes.func.isRequired,
		deselectPassenger: PropTypes.func.isRequired,
		confirmPassengers: PropTypes.func.isRequired,
		closeDialog: PropTypes.func.isRequired,
		clearPassengers: PropTypes.func.isRequired
	};

	render() {
		return <PassengersChoosing
			isOpen={this.props.isOpen}
			passengers={this.props.passengers}
			formIsValid={this.props.formIsValid}

			closeDialogHandler={this.props.closeDialog}
			selectPassengerHandler={this.props.selectPassenger}
			deselectPassengerHandler={this.props.deselectPassenger}
			confirmPassengersHandler={this.props.confirmPassengers}
			clearPassengersHandler={this.props.clearPassengers}
		/>;
	}
}

export default connect(
	state => {
		return {
			passengers: getPassengers(state),
			formIsValid: formIsValid(state),
			isOpen: state.passengersChoosing.isOpen
		};
	},
	dispatch => {
		return {
			confirmPassengers: bindActionCreators(confirmPassengers, dispatch),
			closeDialog: bindActionCreators(closeDialog, dispatch),
			selectPassenger: bindActionCreators(selectPassenger, dispatch),
			deselectPassenger: bindActionCreators(deselectPassenger, dispatch),
			clearPassengers: bindActionCreators(clearPassengers, dispatch)
		};
	}
)(PassengersChoosingContainer);
