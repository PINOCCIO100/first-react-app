import React from 'react';
import s from './Profile.module.css';
import banner from './banner.jpg';

import UserCard from './UserCard/UserCard';
import PostBlock from './PostBlock/PostBlock';

function Profile({ store }) {
  const { usersProfileInfo, currentUserID } = store.state;

  const userProfileInfo = usersProfileInfo[currentUserID.id];
  return (
    <div className={s.profile}>
      <div className={s.profileWrapper}>
        <div className={s.banner}>
          <img src={banner} alt="banner" />
        </div>
        <UserCard userProfileInfo={userProfileInfo} />
        <PostBlock store={store} />
      </div>
    </div>
  );
}

export default Profile;