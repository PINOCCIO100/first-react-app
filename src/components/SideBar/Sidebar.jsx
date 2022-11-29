import React from 'react';
import { Link } from 'react-router-dom';
import s from './Sidebar.module.css';


function Sidebar(props) {
  return (
    <div className={s.sideBar}>
      <ul>
        <li>
          <Link className={s.link + " Link"} to='/profile'>Profile</Link>
        </li>
        <li>
          <Link className={s.link + " Link"} to='/dialogs'>Messages</Link>
        </li>
        <li>
          <Link className={s.link + " Link"} to='/news'>News</Link>
        </li>
        <li>
          <Link className={s.link + " Link"} to='/music'>Music</Link>
        </li>
        <li>
          <Link className={s.link + " Link"} to='/settings'>Settings</Link>
        </li>
      </ul>
    </div >
  );
}

export default Sidebar;