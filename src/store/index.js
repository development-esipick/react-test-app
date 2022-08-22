import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';
import { logger } from './middleware';

import createHistory from 'history/createBrowserHistory';


// Build the middleware for intercepting and dispatching navigation actions

const getMiddleware = () => {
    return applyMiddleware(logger);

};

export const store = createStore(
    reducer, composeWithDevTools(getMiddleware()));