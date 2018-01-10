import React from 'react';
import MUIButton from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Button from 'components/ui/MainButton';

class SeatsSelection extends React.Component {
	static propTypes = {
		nextStepHandler: PropTypes.func,
		backStepHandler: PropTypes.func
	};

	render() {
		return (
			<div className="checkin-seatsSelection">
				<Typography className="checkin-title" type="headline">
					Выберите места
				</Typography>

				<div className="checkin-bottomButtons">
					<MUIButton className="checkin-bottomButtons__back" onClick={this.handleBack}>
						Назад
					</MUIButton>

					<Button className="checkin-bottomButtons__next" onClick={this.handleNext}>
						Пройти регистрацию
					</Button>
				</div>
			</div>
		);
	}
}

export default SeatsSelection;
