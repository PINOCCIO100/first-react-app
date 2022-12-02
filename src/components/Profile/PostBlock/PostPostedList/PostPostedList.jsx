import React from 'react';
import s from './PostPostedList.module.css';

import PostPosted from './PostPosted/PostPosted';

function PostPostedList({ state, trigger }) {
  const { usersPosts, currentUserID, usersProfileInfo } = state;

  let postedPosts = usersPosts.list[currentUserID.id]
    .map((post) => <PostPosted
      key={post.messageID}
      post={post}
      photo={usersProfileInfo.list[post.userID].photo}
    />);
  return (
    <div className={s.postPostedList + " scrollBar"} trigger={+trigger}>
      {postedPosts}
    </div>
  );
}

export default PostPostedList;