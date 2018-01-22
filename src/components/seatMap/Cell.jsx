import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {
	static propTypes = {
		status: PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	render() {
		const status = this.props.status || 'free';
		const cellClassName = `checkin-seatsSelection-passenger-seatsMap-map-seat checkin-seatsSelection-passenger-seatsMap-map-seat_${status}`;

		return <td className="checkin-seatsSelection-passenger-seatsMap-map__cell">
			<div className={cellClassName}/>
		</td>;
	}
}

export default Cell;
