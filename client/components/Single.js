import React from 'react';



class Single extends React.Component {
  render(){
    return (
      <div className="single-photo">
        <pre>
          {JSON.stringify(this.props.comments, null, " ")}
        </pre>
      </div>
    )
  }
}

export default Single;
