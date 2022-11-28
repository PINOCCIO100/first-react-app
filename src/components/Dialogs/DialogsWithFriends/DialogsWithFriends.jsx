import React from 'react';
import s from './DialogsWithFriends.module.css';
import usersInfo from './../../usersDataBase';

import FriendCard from './FriendCard/FriendCard';


function DialogsWithWFriends(props) {
  return (
    <div className={s.DialogsWithFriends}>
      <ul className={s.DialogsWithFriends__container}>
        <li className={s.DialogsWithFriends__item}>
          <FriendCard userID="2" usersInfo={usersInfo} />
        </li>
        <li className={s.DialogsWithFriends__item}>
          <FriendCard userID="1" usersInfo={usersInfo} />
        </li>
        <li className={s.DialogsWithFriends__item}>
          <FriendCard userID="1" usersInfo={usersInfo} />
        </li>
        <li className={s.DialogsWithFriends__item}>
          <FriendCard userID="1" usersInfo={usersInfo} />
        </li>
      </ul>
    </div>
  );
}

export default DialogsWithWFriends;