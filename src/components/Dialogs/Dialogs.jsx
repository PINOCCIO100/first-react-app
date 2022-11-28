import React from 'react';
import s from './Dialogs.module.css';
import userInfo from './../usersDataBase'

import DialogsWithWFriends from './DialogsWithFriends/DialogsWithFriends';
import DialogsMessages from './DialogsMessages/DialogsMessages';

function Dialogs(props) {
  return (
    <div className={s.Dialogs}>
      <div className={s.Dialogs__wrapper}>
        <h1 className={s.Dialogs__title}>
          Dialogs
        </h1>
        <div className={s.Dialogs__body}>
          <div className={s.Dialogs__friends}>
            <DialogsWithWFriends />
          </div>
          <div className={s.Dialogs__messages}>
            <DialogsMessages/>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dialogs;