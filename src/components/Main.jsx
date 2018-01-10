import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Stepper from 'components/Stepper';
import OrderSearching from 'components/steps/OrderSearching';
import PassengersChoosing from 'components/steps/PassengersChoosing';
import SeatsSelection from 'components/steps/SeatsSelection';

class Main extends React.Component {
	static propTypes = {
		currentStep: PropTypes.number.isRequired
	};

	steps = [
		<OrderSearching/>,
		<PassengersChoosing/>,
		<SeatsSelection/>
	];

	shouldComponentUpdate(nextProps) {
		return nextProps.currentStep !== this.props.currentStep;
	}

	render() {
		const { currentStep } = this.props;

		return (
			<section className="checkin">
				<Stepper activeStep={currentStep}/>

				<div className="checkin-content">
					{this.steps[currentStep]}
				</div>
			</section>
		);
	}
}

export default connect(state => {
	return {
		currentStep: state.currentStep
	};
})(Main);
