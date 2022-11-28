import React from 'react';
import s from './DialogsMessages.module.css';
import usersInfo from './../../usersDataBase';

import DialogsText from './DialogsText/DialogsText';

function DialogsMessages(props) {
  return (
    <div className={s.DialogsMessages}>
      <div className={s.DialogsMessages__container}>
        <div className={s.DialogsMessages__item}>
          <DialogsText My userID="2" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText userID="1" usersInfo={usersInfo} />
        </div>
        <div className={s.DialogsMessages__item}>
          <DialogsText My userID="2" usersInfo={usersInfo} />
        </div>
      </div>
    </div>
  );
}

export default DialogsMessages;