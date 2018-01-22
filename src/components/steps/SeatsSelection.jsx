import React from 'react';
import MUIButton from 'material-ui/Button';
import ExpansionPanel, {
	ExpansionPanelSummary,
	ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import PropTypes from 'prop-types';
import i18n from '@nemo.travel/i18n';

import Button from 'components/ui/MainButton';
import FlightInfo from 'components/FlightInfo';
import SeatMap from 'components/SeatMap';

class SeatsSelection extends React.Component {
	static propTypes = {
		passengers: PropTypes.array.isRequired,
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
		return <div className="checkin-seatsSelection">
			<div className="checkin-seatsSelection-form">
				<Typography className="checkin-title" type="headline">
					{i18n('step-3__title')}
				</Typography>

				{this.props.passengers.map(passenger => (
					<ExpansionPanel className="checkin-seatsSelection-passenger" key={passenger.id}>
						<ExpansionPanelSummary className="checkin-seatsSelection-passenger__summary" expandIcon={<ExpandMoreIcon />}>
							<Typography className="checkin-seatsSelection-passenger__name">{passenger.name}</Typography>
							<Typography className="checkin-seatsSelection-passenger__seat">Место не выбрано</Typography>
						</ExpansionPanelSummary>

						<ExpansionPanelDetails className="checkin-seatsSelection-passenger__inner">
							<ul className="checkin-seatsSelection-passenger-info">
								<li className="checkin-seatsSelection-passenger-info-item">
									<div className="checkin-seatsSelection-passenger-info-item__title">Имя</div>
									<Typography className="checkin-seatsSelection-passenger-info-item__value">{passenger.name}</Typography>
								</li>

								<li className="checkin-seatsSelection-passenger-info-item">
									<div className="checkin-seatsSelection-passenger-info-item__title">Пол</div>
									<Typography className="checkin-seatsSelection-passenger-info-item__value">{passenger.gender}</Typography>
								</li>

								<li className="checkin-seatsSelection-passenger-info-item">
									<div className="checkin-seatsSelection-passenger-info-item__title">Дата рождения</div>
									<Typography className="checkin-seatsSelection-passenger-info-item__value">{passenger.birthDate}</Typography>
								</li>

								<li className="checkin-seatsSelection-passenger-info-item">
									<div className="checkin-seatsSelection-passenger-info-item__title">Тип документа</div>
									<Typography className="checkin-seatsSelection-passenger-info-item__value">Паспорт</Typography>
								</li>

								<li className="checkin-seatsSelection-passenger-info-item">
									<div className="checkin-seatsSelection-passenger-info-item__title">Номер документа</div>
									<Typography className="checkin-seatsSelection-passenger-info-item__value">{passenger.documentNumber}</Typography>
								</li>

								<li className="checkin-seatsSelection-passenger-info-item">
									<div className="checkin-seatsSelection-passenger-info-item__title">Национальность</div>
									<Typography className="checkin-seatsSelection-passenger-info-item__value">{passenger.nationality}</Typography>
								</li>
							</ul>

							<div className="checkin-seatsSelection-passenger-seatsMap">
								<div className="checkin-seatsSelection-passenger-seatsMap__hints">
									<div className="checkin-seatsSelection-passenger-seatsMap-hint">
										<div className="checkin-seatsSelection-passenger-seatsMap-hint__seat checkin-seatsSelection-passenger-seatsMap-hint__seat_free"/>
										<Typography className="checkin-seatsSelection-passenger-seatsMap-hint__label">свободное</Typography>
									</div>

									<div className="checkin-seatsSelection-passenger-seatsMap-hint">
										<div className="checkin-seatsSelection-passenger-seatsMap-hint__seat checkin-seatsSelection-passenger-seatsMap-hint__seat_selected"/>
										<Typography className="checkin-seatsSelection-passenger-seatsMap-hint__label">выбранное</Typography>
									</div>

									<div className="checkin-seatsSelection-passenger-seatsMap-hint">
										<div className="checkin-seatsSelection-passenger-seatsMap-hint__seat checkin-seatsSelection-passenger-seatsMap-hint__seat_paid"/>
										<Typography className="checkin-seatsSelection-passenger-seatsMap-hint__label">платное</Typography>
									</div>

									<div className="checkin-seatsSelection-passenger-seatsMap-hint">
										<div className="checkin-seatsSelection-passenger-seatsMap-hint__seat checkin-seatsSelection-passenger-seatsMap-hint__seat_occupied"/>
										<Typography className="checkin-seatsSelection-passenger-seatsMap-hint__label">занятое</Typography>
									</div>
								</div>

								<div className="checkin-seatsSelection-passenger-seatsMap__wrapper">
									<SeatMap/>
								</div>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				))}

				<div className="checkin-bottomButtons">
					<MUIButton className="checkin-bottomButtons__back" onClick={this.handleBack}>
						{i18n('step-2__backButton')}
					</MUIButton>

					<Button className="checkin-bottomButtons__next" onClick={this.handleNext}>
						{i18n('step-3__nextButton')}
					</Button>
				</div>
			</div>

			<FlightInfo/>
		</div>;
	}
}

export default SeatsSelection;
