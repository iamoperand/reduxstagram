import React from 'react';



class PhotoGrid extends React.Component {
  render(){
    return (
      <div className="photo-grid">
        <pre>
            {JSON.stringify(this.props.posts, null, " ")}
        </pre>

      </div>

    )
  }
}

export default PhotoGrid;
