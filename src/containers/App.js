import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';

import NoMatch from './../components/NoMatch';
import Counter from './../containers/Counter';

const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Counter} />
                <Miss component={NoMatch} />
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
