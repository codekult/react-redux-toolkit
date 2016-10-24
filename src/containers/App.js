import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';

import Main from './../components/Main';
import NoMatch from './../components/NoMatch';

const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Match pattern="/" component={Main} />
                <Miss component={NoMatch} />
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
