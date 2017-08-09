import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux'
{/*
  import { syncHistoryWithStore } from 'react-router-redux';
  import { browserHistory } from 'react-router';
*/}

//import the root reducer
import rootReducer from './reducers/index';

//import the data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
  posts,
  comments
};

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(rootReducer, defaultState, applyMiddleware(middleware));

{/*
  export const history = syncHistoryWithStore(browserHistory, store);
*/}

export default store;
