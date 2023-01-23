import { NavLink } from 'react-router-dom';

import style from './NavBarAuth.module.css';

const NavBarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={style.link}>
        register
      </NavLink>
      <NavLink to="/login">login</NavLink>
    </div>
  );
};

export default NavBarAuth;
