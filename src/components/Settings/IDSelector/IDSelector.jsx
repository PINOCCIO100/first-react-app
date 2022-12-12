import s from './IDSelector.module.css';

function IDSelector({ currentUserID, usersProfileInfo, setInfoFToBLL }) {
  const onChange = (e) => {
    setInfoFToBLL(e.target.value);
  }
  return (
    <div className={s.IDSelector}>
      <p className={s.IDSelector__infoText}>
        Current user ID is <span>{currentUserID}</span>
      </p>
      <select onChange={onChange} defaultValue={currentUserID}>
        {
          Object.keys(usersProfileInfo)
            .map((userID) => <option key={userID} value={userID}>{userID}</option>)
        }
      </select>
    </div>
  );
}

export default IDSelector