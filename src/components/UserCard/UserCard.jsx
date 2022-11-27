import React from 'react';
import s from './UserCard.module.css';

function UserCard(props) {

  return (
    <div className={s["UserCard"]}>
      <div className={s["UserCard__user-photo"]}>
        <img src={props.userInfo.photo} alt="UserCard__photo" className={s["UserCard__photo"]} />
      </div>
      <div className={s["UserCard__text-part"]}>
        <h1 className={s["UserCard__user-name"]}>{props.userInfo.name}</h1>
        <div className={s["UserCard__user-info"]}>
          <div>Date of Birth: <span>{props.userInfo.birthDate}</span></div>
          <div>City: <span>{props.userInfo.city}</span></div>
          <div>Eductaion: <span>{props.userInfo.education}</span></div>
          <div>Web Site: <a target='_blank' href={props.userInfo.webSite}>{props.userInfo.webSite}</a></div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;