import { useEffect } from 'react';
import { React } from 'react';
import s from './PostPostedList.module.css';


function PostPostedList({ initializePosts, children }) {
  useEffect(() => {
    initializePosts()
  }, []);
  return (
    <div className={s.postPostedList + " scrollBar"} >
      {children}
    </div>
  );
}

export default PostPostedList;