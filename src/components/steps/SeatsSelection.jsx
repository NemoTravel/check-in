import React from 'react';
import MUIButton from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import i18n from '@nemo.travel/i18n';
import Button from 'components/ui/MainButton';

class SeatsSelection extends React.Component {
	static propTypes = {
		nextStepHandler: PropTypes.func.isRequired,
		backStepHandler: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.handleNext = this.handleNext.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}

	handleNext() {
		this.props.nextStepHandler();
	}

	handleBack() {
		this.props.backStepHandler();
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div className="checkin-seatsSelection">
				<Typography className="checkin-title">
					{i18n('step-3__title')}
				</Typography>

				<div className="checkin-bottomButtons">
					<MUIButton className="checkin-bottomButtons__back" onClick={this.handleBack}>
						{i18n('step-2__backButton')}
					</MUIButton>

					<Button className="checkin-bottomButtons__next" onClick={this.handleNext}>
						{i18n('step-3__nextButton')}
					</Button>
				</div>
			</div>
		);
	}
}

export default SeatsSelection;
