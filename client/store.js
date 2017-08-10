import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

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
export const history = createBrowserHistory();

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer); 
  });
}

const store = createStore(connectRouter(history)(rootReducer),
              defaultState,
              compose(
                applyMiddleware(routerMiddleware(history)),
              ));

export default store;
