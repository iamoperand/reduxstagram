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

const router = (
  <Router>
      <Route path="/" component={Main} />
  </Router>
);

render(router, document.getElementById('root'));
