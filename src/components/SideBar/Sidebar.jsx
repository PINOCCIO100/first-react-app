import React from 'react';
// import './Sidebar.css';
import s from './Sidebar.module.css';

function Sidebar(props) {
  const {sidebar , ...rest} = s; 
  return (
    <div className={s['side-bar']}>
      <ul>
        <li><a href='#'>Profile</a></li>
        <li><a href='#'>Messages</a></li>
        <li><a href='#'>News</a></li>
        <li><a href='#'>Music</a></li>
        <li><a href='#'>Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;