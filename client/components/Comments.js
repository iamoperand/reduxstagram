import React from 'react';


class Comments extends React.Component {

  renderComment(comment, i) {
      console.log(comment);
  }
  render(){
    return (
      <div className="comment">
        {this.props.postComments.map(this.renderComment)}
      </div>
    )
  }
}

export default Comments;
