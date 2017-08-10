import React from 'react';



class Single extends React.Component {
  render(){
    return (
      <div className="single-photo">
        {JSON.stringify(this.props)}
      </div>
    )
  }
}

export default Single;
