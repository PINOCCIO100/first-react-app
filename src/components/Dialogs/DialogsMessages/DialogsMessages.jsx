import { React, useState } from 'react';
import s from './DialogsMessages.module.css';
// TODO как-то убрать импорты

import TextInputDialogsMessagesContainer from './TextInputDialogsMessagesContainer/TextInputDialogsMessagesContainer';
import DialogsMessagesListContainer from './DialogsMessagesListContainer/DialogsMessagesListContainer';


export function DialogsMessages() {

  const [arrayOfDialogText, setArrayOfDialogText] = useState([]);

  return (
    <div className={s.DialogsMessages}>
      <div className={s.DialogsMessages__container + " scrollBar"}>
        <DialogsMessagesListContainer setArrayOfDialogText={setArrayOfDialogText} >
          {arrayOfDialogText}
        </DialogsMessagesListContainer>
      </div>
      <TextInputDialogsMessagesContainer
        setArrayOfDialogText={setArrayOfDialogText}
        className={s.DialogsMessages__TextInput}
      />
    </div >
  );
}
