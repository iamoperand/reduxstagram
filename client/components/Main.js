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
          <Route {...this.props} path="/view/:postId" component={Single} />
        </Switch>
      </div>
    )
  }
}

export default Main;
