import React from 'react';
import { usersProfileInfo, currentUserID } from '../../../../../dataBase/usersProfileInfo/usersProfileInfo';
import ButtonRating from './ButtonRating/ButtonRating';
import s from './PostPosted.module.css';

function PostPosted({ post }) {
  const { userID, message, rating } = post;
  const { photo } = usersProfileInfo.list[userID];
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
          <ButtonRating like={rating.likes} />
          <ButtonRating dislike={rating.dislikes} />
        </div>
      </div>
    </div>
  );
}

export default PostPosted;