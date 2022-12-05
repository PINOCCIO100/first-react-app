import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './DialogsMessages.module.css';
// TODO как-то убрать импорты
import { getMessageSenderTextActionCreator, sendMessageSenderTextActionCreator, setMessageSenderTextActionCreator } from '../../../dataBase/store';

import TextInput from '../../_sharedComponents/TextInput/TextInput';
import DialogsText from './DialogsText/DialogsText';
import DialogsMessageSender from './DialogsMessageSender/DialogsMessageSender';
import DialogsMessagesList from './DialogsMessagesList/DialogsMessagesList';

export function DialogsMessages({ store }) {
  const {
    usersMessages,
    currentUserID,
    usersProfileInfo,
  } = store.state;

  const { userID } = useParams();
  const stateOfDialogsMessages = () => {
    let key = 1;
    return usersMessages.list[currentUserID.id].list[userID].map(({ me, message }) => {
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
    return store.dispatch(getMessageSenderTextActionCreator(userID));
  }
  const setTextToBLL = (currentTextUI) => {
    store.dispatch(setMessageSenderTextActionCreator(userID, currentTextUI));
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
      <TextInput
        className={s.DialogsMessages__TextInput}
        getTextFromBLL={getTextFromBLL}
        setTextToBLL={setTextToBLL}
        sendText={sendText}
        labels={{
          placeholder: 'Text your message...',
          button: 'Send',
        }}
      />
    </div >
  );
}
