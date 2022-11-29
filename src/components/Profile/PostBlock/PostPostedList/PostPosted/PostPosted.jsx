import React from 'react';
import { usersInfo, currentUserID } from '../../../../../dataBase/usersProfileInfo';
import s from './PostPosted.module.css';

function PostPosted(props) {
  const photo = usersInfo.list[props.id].photo;
  // const message = props.message;
  return (
    <div className={s["post-posted"]}>
      <div className={s["post-posted__user-photo"]}>
        <img src={photo} alt="post-posted__user-photo" />
      </div>
      <div className={s["post-posted__msg-and-btns-cont"]}>
        <div className={s["post-posted__message"]}>
          <p>
            {`
            agemessagemessagemessageagemessagemessagemessageagemessagemessagemessageagemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage agemessagemessagemessage
            `}
          </p>
        </div>
        <div className={s["post-posted__rating-buttons"]}>
          <button className={s['btn-like']}>Like</button>
          <button className={s['btn-dislike']}>Dislike</button>
        </div>
      </div>
    </div>
  );
}

export default PostPosted;