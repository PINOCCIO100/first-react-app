import React from 'react';
import s from './DialogsMessagesList.module.css';

function DialogsMessagesList({ children }) {
  return (
    <div className={s.DialogsMessagesList}>
      {children}
    </div>
  );
}

export default DialogsMessagesList;