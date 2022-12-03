import React from 'react';
import s from './Settings.module.css';

import IDSelector from './IDSelector/IDSelector';

function Settings({ store }) {
  return (
    <div className={s.Settings}>
      <div className={s.Settings__wrapper}>
        <h1 className={s.Settings__title}>
          Settings
        </h1>
        <div className={s.Settings__body}>
          <IDSelector store={store} />
        </div>
      </div>
    </div>
  );
}

export default Settings;