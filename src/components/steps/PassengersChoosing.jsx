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
import Button from 'components/ui/MainButton';

class PassengersChoosing extends React.Component {
	static propTypes = {
		nextStepHandler: PropTypes.func,
		backStepHandler: PropTypes.func
	};

	render() {
		return (
			<div className="checkin-passengersChoosing">
				<Typography className="checkin-title" type="headline">
					Выберите пассажиров для регистрации
				</Typography>

				<FormControl component="fieldset">
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									value="gilad"
								/>
							}
							label="Григорьев Олег"
						/>

						<FormControlLabel
							control={
								<Checkbox
									value="jason"
								/>
							}
							label="Григорьева Ольга"
						/>
					</FormGroup>
				</FormControl>

				<div className="checkin-bottomButtons checkin-bottomButtons_passengersChoosing">
					<MUIButton className="checkin-bottomButtons__back" onClick={this.handleBack}>
						Назад
					</MUIButton>

					<Button className="checkin-bottomButtons__next" onClick={this.handleNext}>
						Далее
					</Button>
				</div>
			</div>
		);
	}
}

export default PassengersChoosing;
