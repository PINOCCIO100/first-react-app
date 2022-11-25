import React from 'react';
import './Profile.css'
import banner from './banner.jpg';
import UserCard from '../UserCard/UserCard';
import PostBlock from '../PostBlock/PostBlock';
import usersInfo from '../usersDataBase';

function Profile(props) {
  const userInfo = usersInfo.list[2];
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="banner">
          <img src={banner} alt="banner" />
        </div>
        <UserCard userInfo={userInfo} />
        <PostBlock />
      </div>
    </div>
  );
}

export default Profile;