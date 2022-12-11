import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './DialogsMessagesList.module.css';

function DialogsMessagesList({ initializeMessages, children }) {
  useEffect(() => {
    initializeMessages();
  }, [useParams().userID]);
  return (
    <div className={s.DialogsMessagesList}>
      {children}
    </div>
  );
}

export default DialogsMessagesList;