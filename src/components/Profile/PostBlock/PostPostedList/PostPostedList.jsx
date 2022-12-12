import { useEffect } from 'react';
import { React } from 'react';
import s from './PostPostedList.module.css';
import PostPosted from './PostPosted/PostPosted';

function PostPostedList({ initializePosts, usersProfileInfo, children }) {
  useEffect(() => {
    initializePosts()
  }, []);
  return (
    <div className={s.postPostedList + " scrollBar"} >
      {
        children.map((post) => {
          return (<PostPosted
            key={post.messageID}
            post={post}
            photo={usersProfileInfo[post.userID].photo} />);
        })
      }
    </div>
  );
}

export default PostPostedList;