import React from 'react';
import PropTypes from 'prop-types';

export default class AbstractStep extends React.Component {
	static propTypes = {
		nextStepHandler: PropTypes.func.isRequired,
		backStepHandler: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.handleBack = this.handleBack.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handleBack() {
		this.props.backStepHandler();
	}

	handleNext() {
		this.props.nextStepHandler();
	}
}
