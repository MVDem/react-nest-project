import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IStateUser, User } from '../types/type';
import { useEffect, useState } from 'react';
import MenuAdmin from './admin/menuAdmin';
import MenuUsers from './users/menuUsers';
import { getUserDetales } from '../http/requests';
import { removeUser } from '../store/userSlice';
import ClockDate from './lib/clock-date';
import { NavLink } from 'react-router-dom';

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
    <div className="layout-container">
      <header className="header">
        <div className="header__wrapper">
          <button className="header__btn-burger">
            <img src="/image/burger.svg" alt="Logo" />
          </button>
          <div className="header__clock">
            <ClockDate />
          </div>
          <div className="header__user">
            <button className="header__userBtn">
              <p className="header__userName">{userDetales?.сompanyName}</p>
              <div className="header__userLogo">
                <img src="/image/avatar.jpg" alt="Logo" />
              </div>
            </button>
            <div className="header__menu">
              {isUser && (
                <NavLink to={`/dashboard/user/profile/${user.id}`}>
                  <button className="header__link">Profile</button>
                </NavLink>
              )}
              <button className="header__link" onClick={() => logaut()}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="menu">
        {isAdmin && <MenuAdmin />}
        {isUser && <MenuUsers />}
      </section>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__wrapper">
          <div>
            <p className="footer__copy">© 2023 MVDem.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
