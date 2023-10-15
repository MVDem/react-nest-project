import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div className="home">
        <div className="home__wrapper">
          <h1 className="home__title">Homepage</h1>
          <NavLink to="/signin">
            <button className="home__btn">Вход</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="home__btn">Регистрация</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
