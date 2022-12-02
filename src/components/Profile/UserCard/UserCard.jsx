import React from 'react';
import s from './UserCard.module.css';

function UserCard({ userProfileInfo }) {

  return (
    <div className={s.UserCard}>
      <div className={s.UserCard__userProfilePhoto}>
        <img src={userProfileInfo.photo} alt="UserCard__photo" className={s.UserCard__photo} />
      </div>
      <div className={s.UserCard__textPart}>
        <h1 className={s.UserCard__userName}>{userProfileInfo.name}</h1>
        <div className={s.UserCard__userInfo}>
          <div>Date of Birth: <span>{userProfileInfo.birthDate}</span></div>
          <div>City: <span>{userProfileInfo.city}</span></div>
          <div>Eductaion: <span>{userProfileInfo.education}</span></div>
          <div>Web Site: <a target='_blank' rel="noreferrer" href={userProfileInfo.webSite}>{userProfileInfo.webSite}</a></div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;