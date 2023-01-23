import css from './LoginForm.module.css';

import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.elements['email'].value,
      password: e.currentTarget.elements['password'].value,
    };

    dispatch(login(data));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input type="email" name="email" placeholder="Enter email" required />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
