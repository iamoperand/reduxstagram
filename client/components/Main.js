import React from 'react';

import {
Route,
Link,
Switch
} from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h1>
          <Link to="/reduxstagram">Reduxstagram</Link>
        </h1>


        <Switch>
          <Route exact path="/reduxstagram/" render={props => (<PhotoGrid {...this.props} {...props}/>)}/>
          <Route path="/reduxstagram/view/:postId" render={props => (<Single {...this.props} {...props}/>)} />
        </Switch>
      </div>
    )
  }
}

export default Main;
