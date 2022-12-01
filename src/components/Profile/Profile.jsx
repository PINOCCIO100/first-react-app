import React from 'react';
import s from './Profile.module.css';
import banner from './banner.jpg';

import UserCard from './UserCard/UserCard';
import PostBlock from './PostBlock/PostBlock';

function Profile({ state }) {
  const { usersProfileInfo, currentUserID } = state;

  const userProfileInfo = usersProfileInfo.list[currentUserID];
  return (
    <div className={s.profile}>
      <div className={s.profileWrapper}>
        <div className={s.banner}>
          <img src={banner} alt="banner" />
        </div>
        <UserCard userProfileInfo={userProfileInfo} />
        <PostBlock state={state} />
      </div>
    </div>
  );
}

export default Profile;