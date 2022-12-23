import s from './Header.module.css';
import logo from './apple.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={s.Header}>
      <div className={s.Header__logo}>
        <img src={logo} alt="ico" />
      </div>
      <div className={s.Header__login}>
        <NavLink
          to={'/login'}
          className={s.Header__navLink}
        >Login</NavLink>
      </div>
    </header >
  );
}

export default Header;
