import React from 'react';
import Tooltip from 'material-ui/Tooltip';
import AccessTimeIcon from 'material-ui-icons/AccessTime';

class FlightInfo extends React.Component {
	render() {
		return (
			<section className="checkin-flightInfo">
				<div className="checkin-flightInfo-status">
					<Tooltip PopperProps={{ className: 'checkin-flightInfo-status-tooltip' }} placement="top" title="Онлайн регистрация открыта с 07:00 10.02.2018 до 06:20 11.02.2018">
						<div className="checkin-flightInfo-status__pane">
							<AccessTimeIcon className="checkin-flightInfo-status__pane-icon"/>
							<span className="checkin-flightInfo-status__pane-title">Регистрация открыта</span>
						</div>
					</Tooltip>
				</div>

				<div className="checkin-flightInfo-flight">
					<div className="checkin-flightInfo-header">
						<div className="checkin-flightInfo-header-location">
							<div className="checkin-flightInfo-header-location__time">07:00</div>
							<div className="checkin-flightInfo-header-location__code">RTW</div>
						</div>

						<div className="checkin-flightInfo-header-separator">
							<div className="checkin-flightInfo-header-separator__routeType">Прямой рейс</div>
							<div className="checkin-flightInfo-header-separator__flightTime">1 ч 30 мин</div>
						</div>

						<div className="checkin-flightInfo-header-location">
							<div className="checkin-flightInfo-header-location__time">08:30</div>
							<div className="checkin-flightInfo-header-location__code">DME</div>
						</div>
					</div>

					<div className="checkin-flightInfo-airline">
						<img className="checkin-flightInfo-airline__logo" src="http://www.saratovairlines.ru/_layouts/Images/SaraviaParts/decorations/logo.png" alt="6W"/>

						<div className="checkin-flightInfo-airline__flightNumber">
							<div className="checkin-flightInfo-airline__flightNumber-label">Рейс</div>
							<div className="checkin-flightInfo-airline__flightNumber-value">6w-767</div>
						</div>

						<div className="checkin-flightInfo-airline__aircraft">
							<div className="checkin-flightInfo-airline__aircraft-label">Самолет</div>
							<div className="checkin-flightInfo-airline__aircraft-value">Embraer 190</div>
						</div>
					</div>

					<div className="checkin-flightInfo-route">
						<div className="checkin-flightInfo-route__header">
							<div className="checkin-flightInfo-route__header-label">Вылет</div>
							<div className="checkin-flightInfo-route__header-label">Прилет</div>
						</div>

						<div className="checkin-flightInfo-route__segments">
							<div className="checkin-flightInfo-route-segment">
								<div className="checkin-flightInfo-route-segment__location">Саратов</div>
								<div className="checkin-flightInfo-route-segment__time">11 февраля в 07:00</div>
							</div>

							<div className="checkin-flightInfo-route__segments-separator">
								<svg className="checkin-flightInfo-route__segments-separator__svg">
									<polyline xmlns="http://www.w3.org/2000/svg" opacity="0.5" fill="none" stroke="#B0B0B0" strokeMiterlimit="10" enableBackground="new" points="0,0 12,20 0,40"/>
								</svg>
							</div>

							<div className="checkin-flightInfo-route-segment">
								<div className="checkin-flightInfo-route-segment__location">Москва, Домодедово</div>
								<div className="checkin-flightInfo-route-segment__time">11 февраля в 08:30</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default FlightInfo;
