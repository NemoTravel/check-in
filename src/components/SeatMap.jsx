import React from 'react';
import Typography from 'material-ui/Typography';
import Row from 'components/seatMap/Row';

class SeatMap extends React.Component {
	render() {
		const rows = [];

		for (let i = 1; i < 26; i++) {
			rows.push(i);
		}

		return <table className="checkin-seatsSelection-passenger-seatsMap-map">
			<thead>
				<tr>
					<th/>
					<th><Typography>A</Typography></th>
					<th><Typography>B</Typography></th>
					<th><Typography>C</Typography></th>
					<th/>
					<th><Typography>D</Typography></th>
					<th><Typography>E</Typography></th>
					<th><Typography>F</Typography></th>
					<th/>
				</tr>
			</thead>

			<tbody>
				{rows.map(row => (
					<Row key={row} number={row}/>
				))}
			</tbody>
		</table>;
	}
}

export default SeatMap;
