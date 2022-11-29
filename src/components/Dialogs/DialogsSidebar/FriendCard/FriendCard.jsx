import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './FriendCard.module.css';

function FriendCard(props) {
  const userID = props.userID;
  const userInfo = props.usersInfo.list[userID];
  const navLinkStyle = ({ isActive }) => 'Link ' + (isActive ? s.active : "");
  return (
    <div className={s.FriendCard}>
      <NavLink className={navLinkStyle} to={"user-" + userID}>
        <div className={s.FriendCard__name}>{userInfo.name}</div>
      </NavLink>
    </div>
  );
}

export default FriendCard;