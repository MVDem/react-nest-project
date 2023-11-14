import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IStateUser, User } from '../../assets/types/type';
import { useEffect, useState } from 'react';
import MenuAdmin from '../../afterAuthAdmin/components/menuAdmin';
import MenuUsers from '../components/menuUsers';
import { getUserDetales } from '../../assets/http/requests';
import { removeUser } from '../../assets/store/userSlice';
import ClockDate from '../components/clock-date';
import { NavLink } from 'react-router-dom';
import styles from './scss/layOut.module.scss';

export default function Layout() {
  const [userDetales, setUserDetales] = useState<User>();

  const dispach = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: IStateUser) => state.user);

  const isAdmin = user.roles?.find((e) => e === 'ADMIN');

  const isUser = user.roles?.find((e) => e === 'USER');

  useEffect(() => {
    getUserDetales({ userId: user.id }, user.token, setUserDetales);
  }, [user]);

  function logaut() {
    dispach(removeUser());
    navigate('/', { replace: true });
  }

  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <button className={styles.header__btnBurger}>
            <img src="/img/burger.svg" alt="Logo" />
          </button>
          <div className={styles.header__clock}>
            <ClockDate />
          </div>
          <div className={styles.header__user}>
            <button className={styles.header__userBtn}>
              <p className={styles.header__userName}>
                {userDetales?.сompanyName}
              </p>
              <div className={styles.header__userLogo}>
                <img src="/img/avatar.jpg" alt="Logo" />
              </div>
            </button>
            <div className={styles.header__menu}>
              {isUser && (
                <NavLink to={`/dashboard/user/profile/${user.id}`}>
                  <button className={styles.header__link}>Profile</button>
                </NavLink>
              )}
              <button className={styles.header__link} onClick={() => logaut()}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.menu}>
        {isAdmin && <MenuAdmin />}
        {isUser && <MenuUsers />}
      </section>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer__wrapper}>
          <div>
            <p className={styles.footer__copy}>© 2023 MVDem.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
