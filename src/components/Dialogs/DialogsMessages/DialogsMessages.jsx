import { React } from 'react';
import { useParams } from 'react-router-dom';
import s from './DialogsMessages.module.css';

import DialogsText from './DialogsText/DialogsText';
import DialogsMessageSender from './DialogsMessageSender/DialogsMessageSender';


function DialogsMessages({ store }) {
  const { userMessages, currentUserID, usersProfileInfo } = store.state;
  const { userID } = useParams();

  let key = 1;
  const arrayOfDialogText = userMessages.list[userID]
    .map(({ me, message }) => {
      const messageAttributes = {
        my: me,
        message: message,
        userProfileInfo: usersProfileInfo.list[me ? currentUserID.id : userID],
      };
      return <DialogsText key={key++} messageAttributes={messageAttributes} />
    });
  return (
    <div className={s.DialogsMessages}>
      <div className={s.DialogsMessages__container + " scrollBar"}>
        {arrayOfDialogText}
      </div>
      <DialogsMessageSender />
    </div >
  );
}

export { DialogsMessages };