import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Stepper from 'components/Stepper';
import OrderSearchingContainer from 'containers/OrderSearchingContainer';
import PassengersChoosingContainer from 'containers/PassengersChoosingContainer';
import SeatsSelection from 'components/steps/SeatsSelection';

class Main extends React.Component {
	static propTypes = {
		currentStep: PropTypes.number.isRequired
	};

	steps = [
		<OrderSearchingContainer/>,
		<PassengersChoosingContainer/>,
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
