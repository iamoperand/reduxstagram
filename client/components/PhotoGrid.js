import React from 'react';



class PhotoGrid extends React.Component {
  render(){
    return (
      <div className="photo-grid">
        {JSON.stringify(this.props)}
      </div>

    )
  }
}

export default PhotoGrid;
