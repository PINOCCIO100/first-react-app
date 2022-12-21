import s from './IDSelector.module.css';

function IDSelector({ currentUserID, usersProfileInfoDefault, setCurrentUserID }) {
  const onChange = (e) => {
    setCurrentUserID(e.target.value);
  }
  return (
    <div className={s.IDSelector}>
      <p className={s.IDSelector__infoText}>
        Current user ID is <span>{currentUserID}</span>
      </p>
      <select onChange={onChange} defaultValue={currentUserID}>
        {
          usersProfileInfoDefault.map((user) => <option key={user.id} value={user.id}>{user.id}</option>)
        }
      </select>
    </div>
  );
}

export default IDSelector