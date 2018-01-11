import React from 'react';
import moment from 'moment';
import { DatePicker } from 'material-ui-pickers';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import i18n from '@nemo.travel/i18n';
import Button from 'components/ui/MainButton';
import DateRange from 'material-ui-icons/DateRange';

class OrderSearching extends React.Component {
	static propTypes = {
		nextStepHandler: PropTypes.func.isRequired,
		changeDepartureDateHandler: PropTypes.func.isRequired,
		changeFlightNumberHandler: PropTypes.func.isRequired,
		changeLastNameHandler: PropTypes.func.isRequired,
		changeTicketNumberHandler: PropTypes.func.isRequired,
		lastName: PropTypes.string.isRequired,
		ticketNumber: PropTypes.string.isRequired,
		departureDate: PropTypes.object,
		flightNumber: PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);
		this.handleNext = this.handleNext.bind(this);
		this.handleLastName = this.handleLastName.bind(this);
		this.handleDepartureDate = this.handleDepartureDate.bind(this);
		this.handleFlightNumber = this.handleFlightNumber.bind(this);
		this.handleTicketNumber = this.handleTicketNumber.bind(this);
	}

	handleNext() {
		this.props.nextStepHandler();
	}

	handleLastName(event) {
		this.props.changeLastNameHandler(event.target.value);
	}

	handleDepartureDate(date) {
		this.props.changeDepartureDateHandler(date);
	}

	handleFlightNumber(event) {
		this.props.changeFlightNumberHandler(event.target.value);
	}

	handleTicketNumber(event) {
		this.props.changeTicketNumberHandler(event.target.value);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.lastName !== this.props.lastName ||
			nextProps.ticketNumber !== this.props.ticketNumber ||
			nextProps.departureDate !== this.props.departureDate ||
			nextProps.flightNumber !== this.props.flightNumber;
	}

	render() {
		const visibleDepartureDate = this.props.departureDate ? this.props.departureDate : moment();

		return <div className="checkin-orderSearching">
			<Typography className="checkin-title">
				{i18n('step-1__title')}
			</Typography>

			<div className="checkin-orderSearching__rows">
				<div className="checkin-orderSearching__row">
					<TextField
						InputProps={{ spellCheck: false, autoFocus: true }}
						className="checkin-orderSearching__input"
						helperText="Как в билете"
						label="Фамилия пассажира"
						onChange={this.handleLastName}
						value={this.props.lastName}
					/>

					<TextField
						InputProps={{ spellCheck: false }}
						className="checkin-orderSearching__input"
						helperText="13 символов"
						label="Номер билета"
						onChange={this.handleTicketNumber}
						value={this.props.ticketNumber}
					/>
				</div>

				<div className="checkin-orderSearching__row">
					<DatePicker
						InputProps={{ spellCheck: false }}
						className="checkin-orderSearching__input"
						helperText="В формате дд.мм.гггг"
						label="Дата вылета"
						onChange={this.handleDepartureDate}
						value={visibleDepartureDate}
						keyboardIcon={<DateRange/>}
						format={'DD.MM.YYYY'}
						keyboard={true}
						disablePast={true}
						autoOk={true}
						minDate={moment()}
						mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
					/>

					<TextField
						InputProps={{ spellCheck: false }}
						className="checkin-orderSearching__input"
						helperText="В формате AB-123"
						label="Номер рейса"
						onChange={this.handleFlightNumber}
						value={this.props.flightNumber}
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
