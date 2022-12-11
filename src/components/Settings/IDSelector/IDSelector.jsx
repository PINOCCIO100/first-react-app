import { useState } from 'react';
import s from './IDSelector.module.css';
// TODO как-то убрать импорты

function IDSelector({ setInfoFToBLL, getInfoFromBLL, children }) {

  const [curUsID, setCurUsID] = useState(getInfoFromBLL());
  const onChange = (e) => {
    setInfoFToBLL(e.target.value);
    setCurUsID(getInfoFromBLL());
  }

  return (
    <div className={s.IDSelector}>
      <p className={s.IDSelector__infoText}>
        Current user ID is <span>{curUsID}</span>
      </p>
      <select onChange={onChange} defaultValue={curUsID}>
        {children}
      </select>
    </div>
  );
}

export default IDSelector