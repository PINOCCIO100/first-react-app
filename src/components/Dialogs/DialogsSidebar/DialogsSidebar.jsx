import React from 'react';
import s from './DialogsSidebar.module.css';

import FriendCard from './FriendCard/FriendCard';

function DialogsSidebar({ state }) {
  const { usersProfileInfo } = state;
  const listOfFriends = Object.keys(usersProfileInfo.list)
    .map((friendID) => <FriendCard key={friendID} userID={friendID} state={state} />);
  return (
    <div className={s.DialogsSidebar}>
      <ul className={s.DialogsSidebar__container}>
        <li className={s.DialogsSidebar__item}>
          {listOfFriends}
        </li>
      </ul>
    </div>
  );
}

export { DialogsSidebar };