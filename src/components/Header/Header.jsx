import React from 'react';
import './Header.css';
import logo from './apple.png';

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="ico" />
      </div>
    </header >
  );
}

export default Header;
