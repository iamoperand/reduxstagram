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



const router = (
  <ConnectedRouter history={history}>
      <Route path="/" component={Main} />
  </ConnectedRouter>
);

render(router, document.getElementById('root'));
