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
import store from './store';

const router = (
  <Provider store={store}>
    <Router>
        <Route path="/" component={Main} />
    </Router>
  </Provider>

);
render(router, document.getElementById('root'));
