import s from './DialogsSidebar.module.css';

import FriendCard from './FriendCard/FriendCard';

function DialogsSidebar({ store }) {

  const { ProfileState: { usersProfileInfo } } = store.getState();
  const listOfFriends = Object.keys(usersProfileInfo)
    .map((friendID) => <FriendCard key={friendID} userID={friendID} store={store} />);

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