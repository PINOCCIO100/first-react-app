import React from 'react';
import s from './DialogsSidebar.module.css';
import { usersInfo, currentUserID } from './../../../dataBase/usersProfileInfo';

import FriendCard from './FriendCard/FriendCard';


function DialogsWithWFriends(props) {
  return (
    <div className={s.DialogsSidebar}>
      <ul className={s.DialogsSidebar__container}>
        <li className={s.DialogsSidebar__item}>
          <FriendCard userID="1" usersInfo={usersInfo} />
          <FriendCard userID="2" usersInfo={usersInfo} />
          <FriendCard userID="3" usersInfo={usersInfo} />
        </li>
      </ul>
    </div>
  );
}

export default DialogsWithWFriends;