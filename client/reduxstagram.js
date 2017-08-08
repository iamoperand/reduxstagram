// let's go!

import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';


render(<Main></Main>, document.getElementById('root'));
