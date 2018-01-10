import React from 'react';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Button from 'components/ui/MainButton';

class OrderSearching extends React.Component {
	static propTypes = {
		nextStepHandler: PropTypes.func
	};

	handleNext() {
		this.props.nextStepHandler();
	}

	render() {
		return <div className="checkin-orderSearching">
			<Typography className="checkin-title" type="headline">
				Укажите данные о заказе
			</Typography>

			<div className="checkin-orderSearching__rows">
				<div className="checkin-orderSearching__row">
					<TextField
						InputProps={{ spellCheck: false }}
						className="checkin-orderSearching__input"
						helperText="Как в билете"
						label="Фамилия пассажира"
					/>

					<TextField
						InputProps={{ spellCheck: false }}
						className="checkin-orderSearching__input"
						helperText="13 символов"
						label="Номер билета"
					/>
				</div>

				<div className="checkin-orderSearching__row">
					<TextField
						InputProps={{ spellCheck: false }}
						className="checkin-orderSearching__input"
						helperText="В формате дд.мм.гггг"
						label="Дата вылета"
					/>

					<TextField
						InputProps={{ spellCheck: false }}
						className="checkin-orderSearching__input"
						helperText="В формате AB-123"
						label="Номер рейса"
					/>
				</div>
			</div>

			<div className="checkin-bottomButtons">
				<Button className="checkin-bottomButtons__next" onClick={this.handleNext} disabled={false}>
					Далее
				</Button>
			</div>
		</div>;
	}
}

export default OrderSearching;
