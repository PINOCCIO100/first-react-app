import React from 'react';
import s from './Settings.module.css';

import IDSelector from './IDSelector/IDSelector';

function Settings({ state, actions }) {
  const { currentUserID } = state;

  return (
    <div className={s.Settings}>
      <div className={s.Settings__wrapper}>
        <h1 className={s.Settings__title}>
          Settings
        </h1>
        <div className={s.Settings_body}>
          <p className={s.Setting__infoText}>
            Current user ID is <span>{currentUserID.id}</span>
          </p>
          <IDSelector state={state} actions={actions} />
        </div>
      </div>
    </div>
  );
}

export default Settings;