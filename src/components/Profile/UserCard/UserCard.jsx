import s from './UserCard.module.css';
import anonymPhoto from '../../../media/usersPhoto/default.png';
function UserCard({ userProfileInfo }) {
  return (
    <div className={s.UserCard}>
      <div className={s.UserCard__userProfilePhoto}>
        <img src={userProfileInfo.photo || anonymPhoto} alt="UserCard__photo" className={s.UserCard__photo} />
      </div>
      <div className={s.UserCard__textPart}>
        <h1 className={s.UserCard__userName}>{userProfileInfo.name}</h1>
        <div className={s.UserCard__userInfo}>
          <div>E-mail: <span>{userProfileInfo.email}</span></div>
          <div>City: <span>{userProfileInfo.address.city}</span></div>
          <div>Company: <span>{userProfileInfo.company.name}</span></div>
          <div>Web Site: <a target='_blank' rel="noreferrer" href={userProfileInfo.website}>{userProfileInfo.website}</a></div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;