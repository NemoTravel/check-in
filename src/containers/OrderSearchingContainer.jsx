import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import OrderSearching from 'components/steps/OrderSearching';
import { formIsValid } from 'store/orderSearching/selectors';
import {
	changeDepartureDate,
	changeFlightNumber,
	changeLastName,
	changeTicketNumber,
	searchOrder
} from 'store/orderSearching/actions';

class OrderSearchingContainer extends React.Component {
	static propTypes = {
		formIsValid: PropTypes.bool.isRequired,
		searchOrder: PropTypes.func.isRequired,
		changeDepartureDate: PropTypes.func.isRequired,
		changeFlightNumber: PropTypes.func.isRequired,
		changeLastName: PropTypes.func.isRequired,
		changeTicketNumber: PropTypes.func.isRequired,
		lastName: PropTypes.string.isRequired,
		ticketNumber: PropTypes.string.isRequired,
		departureDate: PropTypes.object,
		flightNumber: PropTypes.string.isRequired
	};

	render() {
		return <OrderSearching
			changeDepartureDateHandler={this.props.changeDepartureDate}
			changeFlightNumberHandler={this.props.changeFlightNumber}
			changeLastNameHandler={this.props.changeLastName}
			changeTicketNumberHandler={this.props.changeTicketNumber}
			searchOrderHandler={this.props.searchOrder}

			formIsValid={this.props.formIsValid}
			lastName={this.props.lastName}
			ticketNumber={this.props.ticketNumber}
			departureDate={this.props.departureDate}
			flightNumber={this.props.flightNumber}
		/>;
	}
}

export default connect(
	state => {
		return {
			formIsValid: formIsValid(state),
			lastName: state.orderSearching.lastName,
			ticketNumber: state.orderSearching.ticketNumber,
			departureDate: state.orderSearching.departureDate,
			flightNumber: state.orderSearching.flightNumber
		};
	},
	dispatch => {
		return {
			searchOrder: bindActionCreators(searchOrder, dispatch),
			changeDepartureDate: bindActionCreators(changeDepartureDate, dispatch),
			changeFlightNumber: bindActionCreators(changeFlightNumber, dispatch),
			changeLastName: bindActionCreators(changeLastName, dispatch),
			changeTicketNumber: bindActionCreators(changeTicketNumber, dispatch)
		};
	}
)(OrderSearchingContainer);
