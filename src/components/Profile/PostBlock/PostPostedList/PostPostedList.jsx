import { React } from 'react';
import s from './PostPostedList.module.css';


function PostPostedList({ postedPosts }) {
  return (
    <div className={s.postPostedList + " scrollBar"} >
      {postedPosts}
    </div>
  );
}

export default PostPostedList;