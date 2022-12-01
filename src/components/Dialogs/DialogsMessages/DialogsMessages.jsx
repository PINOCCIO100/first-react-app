import React from 'react';
import { useParams } from 'react-router-dom';
import s from './DialogsMessages.module.css';

import DialogsText from './DialogsText/DialogsText';

function DialogsMessages({ state }) {
  const { userMessages, currentUserID } = state;
  const { userID } = useParams();
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