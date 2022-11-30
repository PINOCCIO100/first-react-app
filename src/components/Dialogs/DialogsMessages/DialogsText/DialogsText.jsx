import React from 'react';
import s from './DialogsText.module.css';
import { usersInfo } from '../../../../dataBase/usersProfileInfo/usersProfileInfo';


function DialogsText({ userID, my, message }) {
  const userInfo = usersInfo.list[userID];
  const signOfMe = my ? s.DialogsText__My : "";
  return (
    <div className={s.DialogsText + " " + signOfMe}>
      <div className={s.DialogsText__container}>
        <div className={s.DialogsText__column}>
          <div className={s.DialogsText__item}>
            <div className={s.DialogsText__photo}>
              <img src={userInfo.photo} alt="" />
            </div>
          </div>
          <div className={s.DialogsText__item}>
            <div className={s.DialogsText__name}>{userInfo.name}</div>
          </div>
        </div>
        <div className={s.DialogsText__column}>
          <div className={s.DialogsText__item}>
            <div className={s.DialogsText__text}>{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogsText;