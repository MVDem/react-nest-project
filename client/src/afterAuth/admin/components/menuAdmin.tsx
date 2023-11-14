import { NavLink } from 'react-router-dom';
import styles from './scss/menuAdmin.module.scss';

export default function MenuAdmin() {
  return (
    <>
      <nav className={styles.menuMain}>
        <NavLink to={`/dashboard`} className={styles.menuMain__link}>
          <button type="button" className={styles.menuMain__btn}>
            Home
          </button>
        </NavLink>
        <NavLink to={`/dashboard/admin/users`} className={styles.menu__link}>
          <button type="button" className={styles.menuMain__btn}>
            Users
          </button>
        </NavLink>
      </nav>
    </>
  );
}
