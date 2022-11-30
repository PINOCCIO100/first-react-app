import React from 'react';
import s from './DialogsMessages.module.css';
import { currentUserID } from './../../../dataBase/usersProfileInfo';

import DialogsText from './DialogsText/DialogsText';
import { userMessages } from '../../../dataBase/usersMessages/userMessages';
import { useParams } from 'react-router-dom';

function DialogsMessages(props) {
  const {userID} = useParams();
  let key = 1;
  const arrayOfDialogText = userMessages.list[userID]
    .map(({ me, message }) => <DialogsText my={me} key={key++} userID={me ? currentUserID : userID} message={message} />);
  return (
    <div className={s.DialogsMessages + " scrollBar"}>
      <div className={s.DialogsMessages__container}>
        <div className={s.DialogsMessages__item}>
          {arrayOfDialogText}
        </div>
      </div>
    </div>
  );
}

export { DialogsMessages };