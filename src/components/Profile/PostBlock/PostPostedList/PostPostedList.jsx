import React from 'react';
import s from './PostPostedList.module.css';
import { currentUserID } from '../../../../dataBase/usersProfileInfo/usersProfileInfo';
import { usersPosts } from '../../../../dataBase/usersPosts/usersPosts';

import PostPosted from './PostPosted/PostPosted';

function PostPostedList(props) {
  let postedPosts = usersPosts.list[currentUserID]
    .map((post) => <PostPosted key={post.messageID} post={post} />);
  return (
    <div className={s["post-posted-list"] + " scrollBar"}>
      {postedPosts}
    </div>
  );
}

export default PostPostedList;