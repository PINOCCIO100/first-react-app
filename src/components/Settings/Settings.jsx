import React from 'react';
import s from './Settings.module.css';

import IDSelectorContainer from './IDSelector/IDSelectorContainer/IDSelectorContainer';

function Settings() {
  return (
    <div className={s.Settings}>
      <div className={s.Settings__wrapper}>
        <h1 className={s.Settings__title}>
          Settings
        </h1>
        <div className={s.Settings__body}>
          <IDSelectorContainer />
        </div>
      </div>
    </div>
  );
}

export default Settings;