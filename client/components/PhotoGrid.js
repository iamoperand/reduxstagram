import React from 'react';

import Photo from './Photo';

class PhotoGrid extends React.Component {
  render(){
    return (
      <div className="photo-grid">
          {this.props.posts.map((post, index)=> (<Photo {...this.props} key={index} index={index} post={post} />))}
      </div>
      {/*
        key prop is not accessible inside the Photo Component. 
        That is why, we are passing index as another prop to access it inside
        the Photo Component
      */}
    )
  }
}

export default PhotoGrid;
