import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './DialogsMessages.module.css';
// TODO как-то убрать импорты

import TextInput from '../../_sharedComponents/TextInput/TextInput';
import DialogsText from './DialogsText/DialogsText';
import DialogsMessagesList from './DialogsMessagesList/DialogsMessagesList';
import { setMessageSenderTextActionCreator, sendMessageSenderTextActionCreator } from '../../../dataBase/reducers/usersMessagesReducer';

export function DialogsMessages({ store }) {
  const {
    ProfileState: { usersProfileInfo, currentUserID },
  } = store.getState();

  const { userID } = useParams();
  const stateOfDialogsMessages = () => {
    let key = 1;
    return store.getState().DialogsState.usersMessages[currentUserID][userID].map(({ me, message }) => {
      const messageAttributes = {
        my: me,
        message: message,
        userProfileInfo: usersProfileInfo[me ? currentUserID : userID],
      };
      return <DialogsText key={key++} messageAttributes={messageAttributes} />
    });
  }

  const [arrayOfDialogText, setArrayOfDialogText] = useState(stateOfDialogsMessages());
  // TODO разобраться почему без useEffect'а не обнавляется arrayOfDialogText
  useEffect(() => {
    setArrayOfDialogText(stateOfDialogsMessages());
  }, [userID]);

  const setTextToBLL = (currentTextUI) => {
    store.dispatch(setMessageSenderTextActionCreator(currentUserID, userID, currentTextUI));
  }
  const getTextFromBLL = () => {
    return store.getState().DialogsState.usersMessageSenderText[currentUserID][userID];
  }
  const sendText = () => {
    store.dispatch(sendMessageSenderTextActionCreator(currentUserID, userID));
    setArrayOfDialogText(stateOfDialogsMessages(currentUserID));
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
