import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './DialogsMessages.module.css';

import DialogsText from './DialogsText/DialogsText';
import DialogsMessageSender from './DialogsMessageSender/DialogsMessageSender';
import { getMessageSenderTextActionCreator, sendMessageSenderTextActionCreator, setMessageSenderTextActionCreator } from '../../../dataBase/state';

export function DialogsMessages({ store }) {
  const {
    userMessages,
    currentUserID,
    usersProfileInfo,
  } = store.state;

  const { userID } = useParams();

  const stateOfDialogsMessages = () => {
    let key = 1;
    console.log(userID);
    return userMessages.list[currentUserID.id].list[userID].map(({ me, message }) => {
      const messageAttributes = {
        my: me,
        message: message,
        userProfileInfo: usersProfileInfo.list[me ? currentUserID.id : userID],
      };
      return <DialogsText key={key++} messageAttributes={messageAttributes} />
    });
  }
  const [arrayOfDialogText, setArrayOfDialogText] = useState(stateOfDialogsMessages()); //!!!

  const getTextFromBLL = () => {
    store.dispatch(getMessageSenderTextActionCreator());
  }
  const setTextToBLL = (currentTextUI) => {
    store.dispatch(setMessageSenderTextActionCreator(currentTextUI));
  }
  const sendText = () => {
    store.dispatch(sendMessageSenderTextActionCreator(userID));
    setArrayOfDialogText(stateOfDialogsMessages());
    // store.rerender();
    // setArrayOfDialogText((prev) => prev + 1); //!!!
  };

  return (
    <div className={s.DialogsMessages}>
      <div className={s.DialogsMessages__container + " scrollBar"}>
        {arrayOfDialogText}
      </div>
      <DialogsMessageSender
        getTextFromBLL={getTextFromBLL}
        setTextToBLL={setTextToBLL}
        sendText={sendText}
      />
    </div >
  );
}
