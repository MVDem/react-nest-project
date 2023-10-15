import { useSelector } from 'react-redux';
import { IStateUser, Plc, Project } from '../components/types/type';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  addPlcProject,
  getProjectUser,
  removePlcProject,
} from '../components/http/requests';
import { NavLink } from 'react-router-dom';

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
    <div className="dashBoardAdmin">
      <div className="projectDetails">
        <section className="projectDetails__back">
          <NavLink
            to={`/dashboard/admin/user/${userId}`}
            className="projectDetails__text"
          >
            back
          </NavLink>
        </section>
        <section className="projectDetails__info">
          <p className="projectDetails__text">Project id : {project?.id}</p>
          <p className="projectDetails__text">Project name : {project?.name}</p>
          <p className="projectDetails__text">
            Project address : {project?.adress}
          </p>
        </section>
        <section className="plcList">
          <div className="plcList__row-title">
            <div className="plcList__column-title">Id</div>
            <div className="plcList__column-title">Name</div>
            <div className="plcList__column-title">Url</div>
            <div className="plcList__column-title">System</div>
            <div className="plcList__column-title">Action</div>
          </div>
          <div className="plcList__row">
            <div className="plcList__column"></div>
            <div className="plcList__column">
              <input
                placeholder="write the name"
                className="plcList__form"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="plcList__column">
              <input
                placeholder="write the adress"
                className="plcList__form"
                required={true}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="plcList__column">
              <input
                placeholder="write the adress"
                className="plcList__form"
                required={true}
                value={system}
                onChange={(e) => setSystem(e.target.value)}
              />
            </div>
            <div className="plcList__column">
              <button className="plcList__btn" onClick={handleClickAddPlc}>
                Add project
              </button>
            </div>
          </div>
          {project?.plcs?.map((e, i) => {
            return (
              <div key={i} className="plcList__row plcList__content">
                <div className="plcList__column">{e.id}</div>
                <div className="plcList__column">{e.name}</div>
                <div className="plcList__column">{e.url}</div>
                <div className="plcList__column">{e.system}</div>
                <div className="plcList__column">
                  <button className="plcList__btn">
                    <img src="/image/edit.png" alt="avatar" />
                  </button>
                  <button
                    className="plcList__btn"
                    onClick={() => handleClickRemovePlc(e)}
                  >
                    <img src="/image/trash.png" alt="avatar" />
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
