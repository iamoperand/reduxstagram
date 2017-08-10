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
          <Link to="/">Reduxstagram</Link>
        </h1>


        <Switch>
          <Route exact path="/" render={() => (<PhotoGrid {...this.props}/>)}/>
          <Route path="/view/:postId" render={() => (<Single {...this.props}/>)} />
        </Switch>
      </div>
    )
  }
}

export default Main;
