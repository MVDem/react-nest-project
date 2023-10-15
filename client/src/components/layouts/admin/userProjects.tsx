import { useSelector } from 'react-redux';
import { IStateUser, Project } from '../../types/type';
import { addProjectUser, removeProjectUser } from '../../http/requests';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
      <section className="projectList">
        <div className="projectList__row-title">
          <div className="projectList__column-title">Id</div>
          <div className="projectList__column-title">Name</div>
          <div className="projectList__column-title">Adress</div>
          <div className="projectList__column-title">Action</div>
        </div>
        <div className="projectList__row">
          <div className="projectList__column"></div>
          <div className="projectList__column">
            <input
              placeholder="write the name"
              className="projectList__form"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="projectList__column">
            <input
              placeholder="write the adress"
              className="projectList__form"
              required={true}
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div className="projectList__column">
            <button
              className="projectList__btn"
              onClick={handleClickAddProject}
            >
              <img src="/image/add.png" alt="avatar" />
            </button>
          </div>
        </div>
        {props.projects?.map((e, i) => {
          return (
            <div key={i} className="projectList__row projectList__content ">
              <NavLink
                to={`/dashboard/admin/user/${id}/${e.id}`}
                className="projectList__column projectList__link"
              >
                {e.id}
              </NavLink>
              <NavLink
                to={`/dashboard/admin/user/${id}/${e.id}`}
                className="projectList__column projectList__link"
              >
                {e.name}
              </NavLink>
              <NavLink
                to={`/dashboard/admin/user/${id}/${e.id}`}
                className="projectList__column projectList__link"
              >
                {e.adress}
              </NavLink>
              <div className="projectList__column">
                <button className="projectList__btn">
                  <img src="/image/edit.png" alt="avatar" />
                </button>
                <button
                  className="projectList__btn"
                  onClick={() => handleClickRemoveProject(e)}
                >
                  <img src="/image/trash.png" alt="avatar" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
