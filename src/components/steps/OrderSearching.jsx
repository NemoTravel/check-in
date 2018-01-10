import React from 'react';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import i18n from '@nemo.travel/i18n';
import Button from 'components/ui/MainButton';

class OrderSearching extends React.Component {
	static propTypes = {
		nextStepHandler: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.handleNext = this.handleNext.bind(this);
	}

	handleNext() {
		this.props.nextStepHandler();
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return <div className="checkin-orderSearching">
			<Typography className="checkin-title" type="headline">
				{i18n('step-1__title')}
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
					{i18n('step-1__nextButton')}
				</Button>
			</div>
		</div>;
	}
}

export default OrderSearching;
