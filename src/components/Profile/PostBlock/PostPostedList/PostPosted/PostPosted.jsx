import React from 'react';
import { usersInfo, currentUserID } from '../../../../../dataBase/usersProfileInfo/usersProfileInfo';
import s from './PostPosted.module.css';

function PostPosted({ userID, message }) {
  const photo = usersInfo.list[userID].photo;
  return (
    <div className={s.postPosted}>

      <div className={s.postPosted__userPhoto}>
        <img src={photo} alt="postPosted__userPhoto" />
      </div>
      <div className={s.postPosted__msgAndBtnsCont}>
        <div className={s.postPosted__message}>
          <p>
            {message}
          </p>
        </div>
        <div className={s.postPosted__ratingButtons}>
          <button className={s.btnLike}>Like</button>
          <button className={s.btnDislike}>Dislike</button>
        </div>
      </div>
    </div>
  );
}

export default PostPosted;