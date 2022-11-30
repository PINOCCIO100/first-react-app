import React from 'react';
import { NavLink } from 'react-router-dom';
import { usersInfo } from '../../../../dataBase/usersProfileInfo/usersProfileInfo';
import s from './FriendCard.module.css';

import ProfilePhoto from '../../../#sharedComponents/ProfilePhoto/ProfilePhoto';

function FriendCard({ userID }) {
  const userInfo = usersInfo.list[userID]
  const navLinkStyle = ({ isActive }) =>
     [(isActive ? s.active : ""), s.NavLink, 'Link'].join(" ");
  return (
    <div className={s.FriendCard}>
      <ProfilePhoto className={s.FriendCard__photo} src={userInfo.photo} />
      <NavLink className={navLinkStyle} to={"user/" + userID}>
        <div className={s.FriendCard__name}>{userInfo.name}</div>
      </NavLink>
    </div>
  );
}

export default FriendCard;