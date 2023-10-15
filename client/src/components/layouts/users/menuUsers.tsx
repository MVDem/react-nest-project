import { NavLink } from 'react-router-dom';
import { IStateProjects, IStateUser, Project } from '../../types/type';
import { getAllProjectsUser } from '../../http/requests';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProjects } from '../../store/projectsSlice';

export default function MenuUsers() {
  const user = useSelector((state: IStateUser) => state.user);
  const { projects } = useSelector((state: IStateProjects) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    const bodySent = {
      userId: user.id,
    };

    const cb = (e: Project[]) => {
      dispatch(setProjects(e));
    };

    getAllProjectsUser(bodySent, user.token, cb);
  }, []);

  return (
    <>
      <nav className="menu-main">
        <NavLink to={`/dashboard`} className="menu-main__link">
          <button type="button" className="menu-main__btn">
            Home
          </button>
        </NavLink>
        {projects?.map((e, i) => {
          return (
            <NavLink
              key={i}
              to={`/dashboard/user/${e.id}`}
              className="menu-main__link"
            >
              <button type="button" className="menu-main__btn">
                {e.adress}
              </button>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
