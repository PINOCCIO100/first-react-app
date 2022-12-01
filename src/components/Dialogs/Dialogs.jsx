import React from 'react';
import s from './Dialogs.module.css';
import { Route, Routes } from 'react-router-dom';

import { DialogsSidebar } from './DialogsSidebar/DialogsSidebar';
import { DialogsMessages } from './DialogsMessages/DialogsMessages';

function Dialogs({ state }) {
  const { userMessages, currentUserID, usersProfileInfo } = state;
  const stateTo__DialogsSidebar = { usersProfileInfo };
  const stateTo__DialogsMessages = { userMessages, currentUserID, usersProfileInfo };

  return (
    <div className={s.Dialogs}>
      <div className={s.Dialogs__wrapper}>
        <h1 className={s.Dialogs__title}>
          Dialogs
        </h1>
        <div className={s.Dialogs__body}>
          <div className={s.Dialogs__sidebar}>
            <DialogsSidebar state={stateTo__DialogsSidebar} />
          </div>
          <div className={s.Dialogs__messages}>
            <Routes>
              <Route index />
              <Route path="user/:userID" element={<DialogsMessages state={stateTo__DialogsMessages} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dialogs;