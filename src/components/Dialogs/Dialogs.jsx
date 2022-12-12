import s from './Dialogs.module.css';
import { Route, Routes } from 'react-router-dom';

import { DialogsSidebar } from './DialogsSidebar/DialogsSidebar';
import { DialogsMessages } from './DialogsMessages/DialogsMessages';

function Dialogs({ store }) {
  return (
    <div className={s.Dialogs}>
      <div className={s.Dialogs__wrapper}>
        <h1 className={s.Dialogs__title}>
          Dialogs
        </h1>
        <div className={s.Dialogs__body}>
          <div className={s.Dialogs__sidebar}>
            <DialogsSidebar store={store} />
          </div>
          <div className={s.Dialogs__messages}>
            <Routes>
              <Route index />
              <Route path="user/:userID" element={<DialogsMessages/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dialogs;