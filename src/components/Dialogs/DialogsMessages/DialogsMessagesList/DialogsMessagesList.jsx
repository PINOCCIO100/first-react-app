import React from 'react';
import s from './DialogsMessagesList.module.css';

function DialogsMessagesList({ arrayOfDialogText }) {
  return (
    <div className={s.DialogsMessagesList}>
      {arrayOfDialogText}
    </div>
  );
}

export default DialogsMessagesList;