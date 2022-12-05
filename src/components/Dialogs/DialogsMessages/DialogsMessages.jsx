import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './DialogsMessages.module.css';

import DialogsText from './DialogsText/DialogsText';
import DialogsMessageSender from './DialogsMessageSender/DialogsMessageSender';
import { getMessageSenderTextActionCreator, sendMessageSenderTextActionCreator, setMessageSenderTextActionCreator } from '../../../dataBase/state';
import DialogsMessagesList from './DialogsMessagesList/DialogsMessagesList';

export function DialogsMessages({ store }) {
  const {
    userMessages,
    currentUserID,
    usersProfileInfo,
  } = store.state;

  const { userID } = useParams();
  const stateOfDialogsMessages = () => {
    let key = 1;
    return userMessages.list[currentUserID.id].list[userID].map(({ me, message }) => {
      const messageAttributes = {
        my: me,
        message: message,
        userProfileInfo: usersProfileInfo.list[me ? currentUserID.id : userID],
      };
      return <DialogsText key={key++} messageAttributes={messageAttributes} />
    });
  }

  const [arrayOfDialogText, setArrayOfDialogText] = useState(stateOfDialogsMessages());

  useEffect(() => {
    setArrayOfDialogText(stateOfDialogsMessages());
  }, [userID]);

  const getTextFromBLL = () => {
    return store.dispatch(getMessageSenderTextActionCreator());
  }
  const setTextToBLL = (currentTextUI) => {
    store.dispatch(setMessageSenderTextActionCreator(currentTextUI));
  }
  const sendText = () => {
    store.dispatch(sendMessageSenderTextActionCreator(userID));
    setArrayOfDialogText(stateOfDialogsMessages());
  };

  return (
    <div className={s.DialogsMessages}>
      <div className={s.DialogsMessages__container + " scrollBar"}>
        <DialogsMessagesList arrayOfDialogText={arrayOfDialogText} />
      </div>
      <DialogsMessageSender
        getTextFromBLL={getTextFromBLL}
        setTextToBLL={setTextToBLL}
        sendText={sendText}
      />
    </div >
  );
}
