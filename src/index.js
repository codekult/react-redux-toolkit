import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import storeDefaults from './store/storeDefaults';

import App from './containers/App';
import ErrorPage from './components/ErrorPage';

Promise.all(
    Promise.resolve('response'),
    Promise.resolve('anotherResponse')
)
.then({[response, anotherResponse]} => {
    const store = configureStore({
        ...storeDefaults,
        response,
        anotherResponse
    });

    render(<App store={store}/>, document.getElementById('root'));
})
.catch(err => {
    console.error('Error: ', err)
    render(<ErrorPage message="An error happened during page load, try refreshing the page or visit us later." />, document.getElementById('root'));
});
