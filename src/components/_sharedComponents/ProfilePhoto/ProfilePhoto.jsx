import React from 'react';
import s from './ProfilePhoto.module.css';

function ProfilePhoto({ src, className }) {
  className = typeof (className) == 'boolean' ? "" : className;
  return (
    <div className={[s.ProfilePhoto, className].join(' ')}>
      <div className={s.ProfilePhoto__container}>
        <img src={src} alt="photo" />
      </div>
    </div>
  );
}

export default ProfilePhoto;