import 'ponyfills';
import 'whatwg-fetch';
import './css/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import i18n from '@nemo.travel/i18n';

import Main from './components/Main';
import { getStore } from './store';

export const init = (config = {}) => {
	if (!config.rootElement) {
		throw Error('Please specify `rootElement` parameter in the configuration object.');
	}

	const localizationStorage = require(`i18n/${config.locale}`);
	const store = getStore(config);
	const themeObject = require('./themes/default').default;
	const theme = createMuiTheme(themeObject);

	i18n.init(localizationStorage);

	ReactDOM.render(
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<Main/>
			</MuiThemeProvider>
		</Provider>,
		config.rootElement
	);
};
