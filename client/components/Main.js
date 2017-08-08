import React from 'react';

import { Link } from 'react-router';

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

        {React.cloneElement(this.props.children, this.props)}

      </div>
    )
  }
}

export default Main;
