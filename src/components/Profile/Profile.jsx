import React from 'react';
import s from './Profile.module.css';
import banner from './banner.jpg';

import UserCard from './UserCard/UserCard';
import PostBlock from './PostBlock/PostBlock';
import { usersInfo, currentUserID } from '../../dataBase/usersProfileInfo/usersProfileInfo';

function Profile(props) {
  const userInfo = usersInfo.list[currentUserID];
  return (
    <div className={s.profile}>
      <div className={s.profileWrapper}>
        <div className={s.banner}>
          <img src={banner} alt="banner" />
        </div>
        <UserCard userInfo={userInfo} />
        <PostBlock />
      </div>
    </div>
  );
}

export default Profile;