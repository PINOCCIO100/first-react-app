import React from 'react';
import './UserCard.css'

function UserCard(props) {

  return (
    <div className="UserCard">
      <div className="UserCard__user-photo">
        <img src={props.userInfo.photo} alt="UserCard__photo" className="UserCard__photo" />
      </div>
      <div className="UserCard__text-part">
        <h1 className="UserCard__user-name">{props.userInfo.name}</h1>
        <div className="UserCard__user-info">
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