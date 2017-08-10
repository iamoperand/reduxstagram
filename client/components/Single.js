import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render(){

    const { postId } = this.props.match.params;

    //index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId);

    //get us the post
    const post = this.props.posts[i];

    const postComments = this.props.comments[postId] || [];


    return (
      <div className="single-photo">
        <Photo index={i} post={post} {...this.props} />
        <Comments />
      </div>
    )
  }
}

export default Single;
