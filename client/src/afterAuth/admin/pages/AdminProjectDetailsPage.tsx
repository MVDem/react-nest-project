import { useSelector } from 'react-redux';
import { IStateUser, Plc, Project } from '../../../assets/types/type';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  addPlcProject,
  getProjectUser,
  removePlcProject,
} from '../../../assets/http/requests';
import { NavLink } from 'react-router-dom';
import styles from './scss/projectDetailsPage.module.scss';

export default function ProjectDetails() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [system, setSystem] = useState('');
  const [project, setProject] = useState<Project>();
  const user = useSelector((state: IStateUser) => state.user);
  const { userId, projectId } = useParams();

  const getProject = () => {
    const bodySent = {
      projectId: projectId,
    };
    getProjectUser(bodySent, user.token, setProject);
  };

  useEffect(() => {
    getProject();
  }, [projectId]);

  const handleClickAddPlc = () => {
    const bodySent = {
      name: name,
      url: url,
      system: system,
      projectId: projectId,
    };
    if (name !== '' && url !== '' && system !== '') {
      addPlcProject(bodySent, user.token, getProject);
      setName('');
      setUrl('');
      setSystem('');
    }
  };

  const handleClickRemovePlc = (e: Plc) => {
    const bodySent = {
      plcId: e.id,
      projectId: projectId,
    };
    removePlcProject(bodySent, user.token, getProject);
  };

  return (
    <div className={styles.dashBoardAdmin}>
      <div className={styles.projectDetails}>
        <section className={styles.projectDetails__back}>
          <NavLink
            to={`/dashboard/admin/user/${userId}`}
            className={styles.projectDetails__text}
          >
            back
          </NavLink>
        </section>
        <section className={styles.projectDetails__info}>
          <p className={styles.projectDetails__text}>
            Project id : {project?.id}
          </p>
          <p className={styles.projectDetails__text}>
            Project name : {project?.name}
          </p>
          <p className={styles.projectDetails__text}>
            Project address : {project?.adress}
          </p>
        </section>
        <section className={styles.plcList}>
          <div className={styles.plcList__rowTitle}>
            <div className={styles.plcList__columnTitle}>Id</div>
            <div className={styles.plcList__columnTitle}>Name</div>
            <div className={styles.plcList__columnTitle}>Url</div>
            <div className={styles.plcList__columnTitle}>System</div>
            <div className={styles.plcList__columnTitle}>Action</div>
          </div>
          <div className={styles.plcList__row}>
            <div className={styles.plcList__column}></div>
            <div className={styles.plcList__column}>
              <input
                placeholder="write the name"
                className={styles.plcList__form}
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.plcList__column}>
              <input
                placeholder="write the adress"
                className={styles.plcList__form}
                required={true}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className={styles.plcList__column}>
              <input
                placeholder="write the adress"
                className={styles.plcList__form}
                required={true}
                value={system}
                onChange={(e) => setSystem(e.target.value)}
              />
            </div>
            <div className={styles.plcList__column}>
              <button
                className={styles.plcList__btn}
                onClick={handleClickAddPlc}
              >
                Add project
              </button>
            </div>
          </div>
          {project?.plcs?.map((e, i) => {
            return (
              <div key={i} className={styles.plcList__row}>
                <div className={styles.plcList__column}>{e.id}</div>
                <div className={styles.plcList__column}>{e.name}</div>
                <div className={styles.plcList__column}>{e.url}</div>
                <div className={styles.plcList__column}>{e.system}</div>
                <div className={styles.plcList__column}>
                  <button className={styles.plcList__btn}>
                    <img src="/img/edit.png" alt="edit" />
                  </button>
                  <button
                    className={styles.plcList__btn}
                    onClick={() => handleClickRemovePlc(e)}
                  >
                    <img src="/img/trash.png" alt="trash" />
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
