// let's go!

import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import App from './components/App';


//import from react-router-dom
import {
BrowserRouter as Router,
Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router'

{/*
ConnectedRouter (in raw terms) demonstrate the function of a smart component.
When you will have a look in react-dev-tools, then you will know that
there is a Connect(ConnectedRouter) which sort of encloses the dumb/presentational
component into it, and implements mapStateToProps and mapDispatchToProps to sort of
provide the props to ConnectedRouter
*/}
const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
       <Route path="/reduxstagram" component={App} />
    </ConnectedRouter>
  </Provider>
);
render(router, document.getElementById('root'));
