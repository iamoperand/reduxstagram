import React from 'react';
import { Link } from 'react-router-dom';

class Photo extends React.Component {
 render(){
   const { post, index, comments } = this.props;
   return (
     <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${this.props.post.code}`}>
            {this.props.post.caption}
          </Link>
        </div>
     </figure>
   )
 }
};

export default Photo;
