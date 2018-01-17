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
		formIsValid: PropTypes.bool.isRequired,
		searchOrderHandler: PropTypes.func.isRequired,
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
		this.props.searchOrderHandler();
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
		const todayMidnight = moment();

		todayMidnight.set('hour', 0);
		todayMidnight.set('minute', 0);
		todayMidnight.set('second', 0);

		const dateIsValid = this.props.departureDate.unix() < todayMidnight.unix();

		return <div className="checkin-orderSearching">
			<div className="checkin-orderSearching-conditions">
				<Typography className="checkin-title" type="headline">
					{i18n('step-1__conditions__title')}
				</Typography>

				<Typography align="justify" paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus ex eget aliquet lobortis. Etiam nec risus risus. Aliquam fermentum, risus nec vehicula congue, est felis bibendum lectus, tristique porttitor quam urna consequat urna. Pellentesque elementum ut quam ac congue. Donec enim purus, eleifend ac rhoncus quis, vulputate a massa. Maecenas fringilla turpis id nisi imperdiet, vitae aliquam dolor pharetra. Sed at orci venenatis, ultricies dui at, sagittis nunc. Curabitur eget pharetra odio, placerat porta massa.
				</Typography>

				<Typography align="justify">
					Aenean porttitor dui et enim ornare, sed condimentum nunc commodo. Proin maximus ex id dictum efficitur. Sed id luctus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin laoreet odio ac velit cursus semper. Morbi scelerisque lacus nec lorem aliquam viverra. Etiam quis accumsan dui, sit amet laoreet sapien.
				</Typography>
			</div>

			<div className="checkin-orderSearching-form">
				<Typography className="checkin-title" type="headline">
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
							error={dateIsValid}
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
					<Button className="checkin-bottomButtons__next" disabled={!this.props.formIsValid} onClick={this.handleNext}>
						{i18n('step-1__nextButton')}
					</Button>
				</div>
			</div>
		</div>;
	}
}

export default OrderSearching;
