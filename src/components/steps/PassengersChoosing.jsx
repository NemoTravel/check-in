import React from 'react';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
import {
	FormControl,
	FormGroup,
	FormControlLabel
} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import i18n from '@nemo.travel/i18n';
import PropTypes from 'prop-types';

class PassengersChoosing extends React.Component {
	static propTypes = {
		isOpen: PropTypes.bool.isRequired,
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
		return nextProps.formIsValid !== this.props.formIsValid ||
			nextProps.passengers !== this.props.passengers ||
			nextProps.isOpen !== this.props.isOpen;
	}

	render() {
		return <Dialog
			open={this.props.isOpen}
			ignoreBackdropClick={true}
			ignoreEscapeKeyUp={true}
			maxWidth="xs"
			onEntering={this.handleNext}
			aria-labelledby="confirmation-dialog-title"
		>
			<DialogTitle id="confirmation-dialog-title">
				{i18n('step-2__title')}
			</DialogTitle>

			<DialogContent>
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
			</DialogContent>

			<DialogActions>
				<Button onClick={this.handleBack}>
					{i18n('step-2__backButton')}
				</Button>

				<Button disabled={!this.props.formIsValid} onClick={this.handleNext} color="accent">
					{i18n('step-2__nextButton')}
				</Button>
			</DialogActions>
		</Dialog>;
	}
}

export default PassengersChoosing;
