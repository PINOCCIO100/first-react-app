import React from 'react';
import usersInfo from '../../../../usersDataBase';
import s from './PostPosted.module.css';

function PostPosted(props) {
  const photo = usersInfo.list[props.id].photo;
  const message = props.message;
  return ( 
    <div className={s["post-posted"]}>
      <div className={s["post-posted__user-photo"]}>
        <img src={photo} alt="post-posted__user-photo" />
      </div>
      <div className={s["post-posted__message"]}>
        {`
        agemessagemessagemessagemessagemessagemessagemessagemesagemessagemessagemessagemessagemessagemessagemessagemesagemessagemessagemessagemessagemessagemessagemessagemesagemessagemessagemessagemessagemessagemessagemessagemesagemessagemessagemessagemessagemessagemessagemessagemes
        `}
      </div>
      <div className={s["post-posted__rating-buttons"]}>
        <button className={s['btn-like']}>Like</button>
        <button className={s['btn-dislike']}>Dislike</button>
      </div>
    </div>
  );
}

export default PostPosted;