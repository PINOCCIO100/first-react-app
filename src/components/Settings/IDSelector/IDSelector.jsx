import { React, useState } from 'react';
import s from './IDSelector.module.css';
// TODO как-то убрать импорты
import { setCurretUserIDActionCreator } from '../../../dataBase/reducers/usersProfileInfoReducer';

function IDSelector({ store }) {
  const {
    ProfileState: { usersProfileInfo, currentUserID },
  } = store.getState();

  const [curUsID, setCurUsID] = useState(currentUserID);
  const onChange = (e) => {
    store.dispatch(setCurretUserIDActionCreator(e.target.value));
    setCurUsID(store.getState().ProfileState.currentUserID);
  }

  let usersList = Object.keys(usersProfileInfo).map((userID) => {
    return <option key={userID} value={userID}>{userID}</option>
  });
  return (
    <div className={s.IDSelector}>
      <p className={s.IDSelector__infoText}>
        Current user ID is <span>{curUsID}</span>
      </p>
      <select onChange={onChange} defaultValue={currentUserID}>
        {usersList}
      </select>
    </div>
  );
}

export default IDSelector