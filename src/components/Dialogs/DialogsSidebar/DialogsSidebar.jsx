import React from 'react';
import s from './DialogsSidebar.module.css';
import usersInfo from './../../usersDataBase';

import FriendCard from './FriendCard/FriendCard';


function DialogsWithWFriends(props) {
  return (
    <div className={s.DialogsSidebar}>
      <ul className={s.DialogsSidebar__container}>
        <li className={s.DialogsSidebar__item}>
          <FriendCard userID="2" usersInfo={usersInfo} />
        </li>
        <li className={s.DialogsSidebar__item}>
          <FriendCard userID="1" usersInfo={usersInfo} />
        </li>
        <li className={s.DialogsSidebar__item}>
          <FriendCard userID="1" usersInfo={usersInfo} />
        </li>
        <li className={s.DialogsSidebar__item}>
          <FriendCard userID="1" usersInfo={usersInfo} />
        </li>
      </ul>
    </div>
  );
}

export default DialogsWithWFriends;