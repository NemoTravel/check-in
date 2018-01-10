import React from 'react';
import MUIButton from 'material-ui/Button';
import { withStyles } from 'material-ui/styles/index';
import PropTypes from 'prop-types';

const styles = {
	label: {
		color: '#fff'
	}
};

class Button extends React.Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};

	render() {
		const { children, classes, ...restProps } = this.props;
		const defaultProps = {
			raised: true,
			color: 'accent',
			classes
		};

		const resultProps = {
			...defaultProps,
			...restProps
		};

		return (
			<MUIButton {...resultProps}>
				{children}
			</MUIButton>
		);
	}
}

export default withStyles(styles)(Button);
