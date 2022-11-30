import React from 'react';
import s from './DialogsSidebar.module.css';

import FriendCard from './FriendCard/FriendCard';
import { usersInfo } from '../../../dataBase/usersProfileInfo';

function DialogsSidebar(props) {
  const listOfFriends = Object.keys(usersInfo.list)
    .map((friendID) => <FriendCard key={friendID} userID={friendID} />);
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