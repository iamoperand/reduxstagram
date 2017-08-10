import React from 'react';
import Photo from './Photo';
//import Comments

class Single extends React.Component {
  render(){
    //index of the post
    const i = this.props.posts.findIndex((post) => post.code ===
    this.props.match.params.postId);

    console.log(i);
    return (
      <div className="single-photo">
        I'm the single
      </div>
    )
  }
}

export default Single;
