// let's go!

import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import Main from './components/Main';


//import from react-router-dom
import {
BrowserRouter as Router,
Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router'

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
       <Route path="/" component={Main} />
    </ConnectedRouter>
  </Provider>
);
render(router, document.getElementById('root'));
