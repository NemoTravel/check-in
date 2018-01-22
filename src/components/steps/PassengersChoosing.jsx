import React from 'react';
import {
	FormControl,
	FormGroup,
	FormControlLabel
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import MUIButton from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import i18n from '@nemo.travel/i18n';

import Button from 'components/ui/MainButton';
import FlightInfo from 'components/FlightInfo';

class PassengersChoosing extends React.Component {
	static propTypes = {
		formIsValid: PropTypes.bool.isRequired,
		passengers: PropTypes.array.isRequired,
		selectPassengerHandler: PropTypes.func.isRequired,
		deselectPassengerHandler: PropTypes.func.isRequired,
		confirmPassengersHandler: PropTypes.func.isRequired,
		clearPassengersHandler: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.handleNext = this.handleNext.bind(this);
		this.handleBack = this.handleBack.bind(this);
		this.handlePassengerChange = this.handlePassengerChange.bind(this);
	}

	handleNext() {
		this.props.confirmPassengersHandler();
	}

	handleBack() {
		this.props.clearPassengersHandler();
	}

	handlePassengerChange(event) {
		if (event.target.checked) {
			this.props.selectPassengerHandler(event.target.value);
		}
		else {
			this.props.deselectPassengerHandler(event.target.value);
		}
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.formIsValid !== this.props.formIsValid || nextProps.passengers !== this.props.passengers;
	}

	render() {
		return <div className="checkin-passengersChoosing">
			<div className="checkin-passengersChoosing-form">
				<Typography className="checkin-title" type="headline">
					{i18n('step-2__title')}
				</Typography>

				<FormControl component="fieldset">
					<FormGroup>
						{this.props.passengers.map(passenger => (
							<FormControlLabel
								key={passenger.id}
								control={
									<Checkbox
										onChange={this.handlePassengerChange}
										value={passenger.id.toString()}
									/>
								}
								label={passenger.name}
							/>
						))}
					</FormGroup>
				</FormControl>

				<div className="checkin-bottomButtons checkin-bottomButtons_passengersChoosing">
					<MUIButton className="checkin-bottomButtons__back" onClick={this.handleBack}>
						{i18n('step-2__backButton')}
					</MUIButton>

					<Button className="checkin-bottomButtons__next" disabled={!this.props.formIsValid} onClick={this.handleNext}>
						{i18n('step-2__nextButton')}
					</Button>
				</div>
			</div>

			<FlightInfo/>
		</div>;
	}
}

export default PassengersChoosing;
