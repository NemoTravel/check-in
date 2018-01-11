import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stepper from 'components/Stepper';

class Main extends React.Component {
	static propTypes = {
		currentStep: PropTypes.number.isRequired
	};

	shouldComponentUpdate(nextProps) {
		return nextProps.currentStep !== this.props.currentStep;
	}

	render() {
		const { currentStep } = this.props;

		return (
			<section className="checkin">
				<Stepper activeStep={currentStep}/>
			</section>
		);
	}
}

export default connect(state => {
	return {
		currentStep: state.currentStep
	};
})(Main);
