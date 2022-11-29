import React from 'react';
import s from './Dialogs.module.css';

import DialogsSidebar from './DialogsSidebar/DialogsSidebar';
import DialogsMessages from './DialogsMessages/DialogsMessages';
import { Route, Routes } from 'react-router-dom';

function Dialogs() {

  return (
    <div className={s.Dialogs}>
      <div className={s.Dialogs__wrapper}>
        <h1 className={s.Dialogs__title}>
          Dialogs
        </h1>
        <div className={s.Dialogs__body}>
          <div className={s.Dialogs__sidebar}>
            <DialogsSidebar />
          </div>
          <div className={s.Dialogs__messages}>
            <Routes>
              <Route index element={<DialogsMessages userID="1" />} />
              <Route path="user-1" element={<DialogsMessages userID="1" bgc="red" />} />
              <Route path="user-2" element={<DialogsMessages userID="2" bgc="blue" />} />
              <Route path="user-3" element={<DialogsMessages userID="3" bgc="yellow" />} />
              <Route path='*' element={<DialogsMessages userID="1" bgc="black" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dialogs;