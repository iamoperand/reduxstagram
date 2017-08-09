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

import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';

import { Provider } from 'react-redux';


const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/" component={Main} />
    </ConnectedRouter>
  </Provider>
);

render(router, document.getElementById('root'));
