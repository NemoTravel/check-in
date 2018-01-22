import React from 'react';
import PropTypes from 'prop-types';
import Cell from 'components/seatMap/Cell';
import RowNumberCell from 'components/seatMap/RowNumberCell';
import EmptyCell from 'components/seatMap/EmptyCell';

class Row extends React.Component {
	static propTypes = {
		number: PropTypes.number.isRequired
	};

	render() {
		return <tr className="checkin-seatsSelection-passenger-seatsMap-map__row">
			<RowNumberCell number={this.props.number}/>
			<Cell/>
			<Cell/>
			<Cell/>
			<EmptyCell/>
			<Cell/>
			<Cell/>
			<Cell/>
			<RowNumberCell number={this.props.number}/>
		</tr>;
	}
}

export default Row;
