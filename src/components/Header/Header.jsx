import React from 'react';
import s from './Header.module.css';
import logo from './apple.png';

function Header(props) {
  return (
    <header className={s["header"]}>
      <div className={s["header__logo"]}>
        <img src={logo} alt="ico" />
      </div>
    </header >
  );
}

export default Header;
