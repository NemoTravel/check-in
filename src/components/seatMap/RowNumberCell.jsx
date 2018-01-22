import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

class RowNumberCell extends React.Component {
	static propTypes = {
		number: PropTypes.number.isRequired
	};

	render() {
		return <td className="checkin-seatsSelection-passenger-seatsMap-map__cell checkin-seatsSelection-passenger-seatsMap-map__cell_rowNumber">
			<Typography>{this.props.number}</Typography>
		</td>;
	}
}

export default RowNumberCell;
