import { NavLink } from 'react-router-dom';
import { IStateProjects, IStateUser, Project } from '../../assets/types/type';
import { getAllProjectsUser } from '../../assets/http/requests';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProjects } from '../../assets/store/projectsSlice';
import styles from './scss/menuUser.module.scss';

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
      <nav className={styles.menuMain}>
        <NavLink to={`/dashboard`} className={styles.menuMain__link}>
          <button type="button" className={styles.menuMain__btn}>
            Home
          </button>
        </NavLink>
        {projects?.map((e, i) => {
          return (
            <NavLink
              key={i}
              to={`/dashboard/user/${e.id}`}
              className={styles.menuMain__link}
            >
              <button type="button" className={styles.menuMain__btn}>
                {e.adress}
              </button>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
