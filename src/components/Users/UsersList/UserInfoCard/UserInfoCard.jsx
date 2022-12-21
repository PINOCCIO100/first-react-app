import ProfilePhoto from '../../../_sharedComponents/ProfilePhoto/ProfilePhoto';
import s from './UserInfoCard.module.css';
import anonymPhoto from '../../../../media/usersPhoto/default.png';
import { NavLink } from 'react-router-dom';

function UserInfoCard({ user, follow, unfollow }) {
  return (
    <div className={s.UserInfoCard}>
      <div className={s.UserInfoCard__container}>
        <div className={s.UserInfoCard__column}>
          <NavLink to={`/profile/${user.id}`}>
            <ProfilePhoto
              src={user.photo ?? anonymPhoto}
              className={s.UserInfoCard__photo}
            />
          </NavLink>
          <button
            onClick={() => user.followed ? unfollow(user.id) : follow(user.id)}
            className={[s.UserInfoCard__followButton, user.followed ? s.follow : s.unfollow].join(' ')}
          >
            {user.followed ? 'Follow' : 'Unfollow'}
          </button>
        </div>
        <div className={s.UserInfoCard__column}>
          <div className={s.UserInfoCard__info}>
            <h2 className={s.UserInfoCard__name}>{user.name}</h2>
            <div className={s.UserInfoCard__status}>{user.website}</div>
            <div className={s.UserInfoCard__city}>{user.address.city}</div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default UserInfoCard;