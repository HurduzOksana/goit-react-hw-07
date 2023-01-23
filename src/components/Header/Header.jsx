import { NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import useAuth from 'hooks/useAuth';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={styles.Header}>
        <NavLink className={styles.Nav} to="/">
          Home
        </NavLink>
        <NavLink className={styles.Nav} to="/register">
          Register
        </NavLink>
        <NavLink className={styles.Nav} to="/login">
          Login
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
