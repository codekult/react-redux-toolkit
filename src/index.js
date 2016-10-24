import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import storeDefaults from './store/storeDefaults';

import App from './containers/App';

const store = configureStore(storeDefaults);

render(<App store={store}/>, document.getElementById('root'));
