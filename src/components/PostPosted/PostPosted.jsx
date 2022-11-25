import React from 'react';
import usersInfo from '../usersDataBase';
import './PostPosted.css';

function PostPosted(props) {
  const photo = usersInfo.list[props.id].photo;
  const message = props.message;
  return ( 
    <div className="post-posted">
      <div className="post-posted__user-photo">
        <img src={photo} alt="post-posted__user-photo" />
      </div>
      <div className="post-posted__message">
        {message}
      </div>
    </div>
  );
}

export default PostPosted;