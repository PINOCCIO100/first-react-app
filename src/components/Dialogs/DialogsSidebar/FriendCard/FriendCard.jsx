import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './FriendCard.module.css';

import ProfilePhoto from '../../../#sharedComponents/ProfilePhoto/ProfilePhoto';

function FriendCard({ userID, state }) {
  const { usersProfileInfo } = state;
  const userProfileInfo = usersProfileInfo.list[userID]
  const navLinkStyle = ({ isActive }) =>
    [(isActive ? s.active : ""), s.NavLink, 'Link'].join(" ");
  return (
    <div className={s.FriendCard}>
      <ProfilePhoto className={s.FriendCard__photo} src={userProfileInfo.photo} />
      <NavLink className={navLinkStyle} to={"user/" + userID}>
        <div className={s.FriendCard__name}>{userProfileInfo.name}</div>
      </NavLink>
    </div>
  );
}

export default FriendCard;