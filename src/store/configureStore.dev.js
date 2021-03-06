import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger  from 'redux-logger';

import rootReducer from './../reducers/root';

const logger = createLogger();

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
);

export default configureStore;
