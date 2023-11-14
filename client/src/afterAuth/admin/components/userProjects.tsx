import { useSelector } from 'react-redux';
import { IStateUser, Project } from '../../../assets/types/type';
import {
  addProjectUser,
  removeProjectUser,
} from '../../../assets/http/requests';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './scss/userProjects.module.scss';

export default function UserProjects(props: {
  id: string | undefined;
  getuserDetailed: any;
  projects: Project[] | undefined;
}) {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const user = useSelector((state: IStateUser) => state.user);
  const id = props.id;

  const handleClickAddProject = () => {
    const bodySent = {
      name: name,
      adress: adress,
      userId: id,
    };
    if (name !== '' && adress !== '') {
      addProjectUser(bodySent, user.token, props.getuserDetailed);
      setName('');
      setAdress('');
    }
  };

  const handleClickRemoveProject = (e: Project) => {
    const bodySent = {
      projectId: e.id,
      userId: props.id,
    };
    removeProjectUser(bodySent, user.token, props.getuserDetailed);
  };

  return (
    <>
      <section className={styles.projectList}>
        <div className={styles.projectList__rowTitle}>
          <div className={styles.projectList__columnTitle}>Id</div>
          <div className={styles.projectList__columnTitle}>Name</div>
          <div className={styles.projectList__columnTitle}>Adress</div>
          <div className={styles.projectList__columnTitle}>Action</div>
        </div>
        <div className={styles.projectList__row}>
          <div className={styles.projectList__column}></div>
          <div className={styles.projectList__column}>
            <input
              placeholder="write the name"
              className={styles.projectList__form}
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.projectList__column}>
            <input
              placeholder="write the adress"
              className={styles.projectList__form}
              required={true}
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div className={styles.projectList__column}>
            <button
              className={styles.projectList__btn}
              onClick={handleClickAddProject}
            >
              <img src="/img/add.png" alt="add" />
            </button>
          </div>
        </div>
        {props.projects?.map((e, i) => {
          return (
            <div key={i} className={styles.projectList__row}>
              <NavLink
                to={`/dashboard/admin/user/${id}/${e.id}`}
                className={styles.projectList__column}
              >
                {e.id}
              </NavLink>
              <NavLink
                to={`/dashboard/admin/user/${id}/${e.id}`}
                className={styles.projectList__column}
              >
                {e.name}
              </NavLink>
              <NavLink
                to={`/dashboard/admin/user/${id}/${e.id}`}
                className={styles.projectList__column}
              >
                {e.adress}
              </NavLink>
              <div className={styles.projectList__column}>
                <button className={styles.projectList__btn}>
                  <img src="/img/edit.png" alt="edit" />
                </button>
                <button
                  className={styles.projectList__btn}
                  onClick={() => handleClickRemoveProject(e)}
                >
                  <img src="/img/trash.png" alt="trash" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
