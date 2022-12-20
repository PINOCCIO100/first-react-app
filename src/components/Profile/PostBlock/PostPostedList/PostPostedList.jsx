import s from './PostPostedList.module.css';
import PostPosted from './PostPosted/PostPosted';

function PostPostedList({ usersProfileInfo, curUserPosts }) {
  return (
    <div className={s.postPostedList + " scrollBar"} >
      {
        curUserPosts.map((post) => {
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