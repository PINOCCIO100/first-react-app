import React from 'react';
import s from './IDSelector.module.css';

function IDSelector({ store }) {
  const { currentUserID, usersProfileInfo } = store.state;
  const onChange = (e) => {
    currentUserID.setID(e.target.value);
    store.rerenderApp();
  }

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