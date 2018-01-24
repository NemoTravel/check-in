import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import OrderSearchingContainer from 'containers/OrderSearchingContainer';
import SeatsSelectionContainer from 'containers/SeatsSelectionContainer';

class Stepper extends React.Component {
	static propTypes = {
		activeStep: PropTypes.number.isRequired
	};

	steps = [
		<OrderSearchingContainer/>,
		<SeatsSelectionContainer/>
	];

	shouldComponentUpdate(nextProps) {
		return nextProps.activeStep !== this.props.activeStep;
	}

	render() {
		return (
			<Fragment>
				<div className="checkin-stepper-content">
					{this.steps[this.props.activeStep]}
				</div>
			</Fragment>
		);
	}
}

export default Stepper;
