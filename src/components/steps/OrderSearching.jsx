import React from 'react';
import TextField from 'material-ui/TextField';

class OrderSearching extends React.Component {
	render() {
		return <div>
			<TextField
				label="Фамилия"
				helperText="Фамилия одного из пассажиров"
			/>

			<TextField
				label="Номер билета"
				helperText="Номер билета пассажира"
			/>

			<TextField
				label="Дата вылета"
				helperText="В формате дд.мм.гггг"
			/>

			<TextField
				label="Номер рейса"
				helperText="В формате AB-123"
			/>
		</div>;
	}
}

export default OrderSearching;
