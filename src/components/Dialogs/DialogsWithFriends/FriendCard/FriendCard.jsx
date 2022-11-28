import React from 'react';
import s from './FriendCard.module.css';

function FriendCard(props) {
  const userID = props.userID;
  const userInfo = props.usersInfo.list[userID];
  return (
    <div className={s.FriendCard}>
      <div className={s.FriendCard__name}>{userInfo.name}</div>
    </div>
  );
}

export default FriendCard;