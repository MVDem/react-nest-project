import { NavLink } from 'react-router-dom';

export default function MenuAdmin() {
  return (
    <>
      <nav className="menu-main">
        <NavLink to={`/dashboard`} className="menu-main__link">
          <button type="button" className="menu-main__btn">
            Home
          </button>
        </NavLink>
        <NavLink to={`/dashboard/admin/users`} className="menu__link">
          <button type="button" className="menu-main__btn">
            Users
          </button>
        </NavLink>
      </nav>
    </>
  );
}
