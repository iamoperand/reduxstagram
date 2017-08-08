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

        {/*
          {this.props.children}
          // but with the above syntax, we won't be able to
          // pass on this.props which will be fed by react-router.
          // So, to accomodate all of that, we need to use:
          // React.cloneElement
        */}
        <Switch>
          <Route {...this.props} exact path="/" component={PhotoGrid} />
          <Route {...this.props} path="/view/:postId" component={Single} />
        </Switch>
      </div>
    )
  }
}

export default Main;
