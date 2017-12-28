import React from 'react';
import {
	FormControl,
	FormGroup,
	FormControlLabel
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

class PassengersChoosing extends React.Component {
	render() {
		return (
			<FormControl component="fieldset">
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								value="gilad"
							/>
						}
						label="Григорьев Олег"
					/>

					<FormControlLabel
						control={
							<Checkbox
								value="jason"
							/>
						}
						label="Григорьева Ольга"
					/>
				</FormGroup>
			</FormControl>

		);
	}
}

export default PassengersChoosing;
