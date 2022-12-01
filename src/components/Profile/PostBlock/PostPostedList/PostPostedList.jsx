import React from 'react';
import s from './PostPostedList.module.css';
// import { currentUserID } from '../../../../dataBase/usersProfileInfo/usersProfileInfo';
// import { usersPosts } from '../../../../dataBase/usersPosts/usersPosts';

import PostPosted from './PostPosted/PostPosted';

function PostPostedList({ state }) {
  const { usersPosts, currentUserID } = state;
  let postedPosts = usersPosts.list[currentUserID]
    .map((post) => <PostPosted key={post.messageID} post={post} />);
  return (
    <div className={s.postPostedList + " scrollBar"}>
      {postedPosts}
    </div>
  );
}

export default PostPostedList;