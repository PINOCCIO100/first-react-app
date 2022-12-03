import React from 'react';
import s from './IDSelector.module.css';
// TODO как-то убрать импорты
import { setCurretUserIDActionCreator } from '../../../dataBase/state';

function IDSelector({ store }) {
  const { currentUserID, usersProfileInfo } = store.state;
  const onChange = (e) => store.dispatch(setCurretUserIDActionCreator(e.target.value));

  let usersList = Object.keys(usersProfileInfo.list).map((userID) => {
    return <option key={userID} value={userID}>{userID}</option>
  });
  return (
    <div className={s.IDSelector}>
      <p className={s.IDSelector__infoText}>
        Current user ID is <span>{currentUserID.id}</span>
      </p>
      <select onChange={onChange} defaultValue={currentUserID.id}>
        {usersList}
      </select>
    </div>
  );
}

export default IDSelector