import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IStateProjects } from '../../assets/types/type';

export default function SystemsPage() {
  const { projects } = useSelector((state: IStateProjects) => state.projects);
  const [plcNum, setPlcNum] = useState(0);
  const { projectId } = useParams();
  const numProjectId = projectId ? +projectId : 0;
  const project = projects?.find((e) => e.id === numProjectId);

  const handleSetPlc = (e: number) => {
    setPlcNum(e);
  };

  return (
    <div className="systems">
      <section className="systems__menu">
        {project?.plcs?.map((e, i) => {
          return (
            <button
              key={i}
              type="button"
              className="systems__btn"
              onClick={() => handleSetPlc(i)}
            >
              {e.name}
            </button>
          );
        })}
      </section>
      <section className="systems__content">
        {project?.plcs![plcNum].system === 'HightVolt' ? (
          // <HightVoltCard />
          <p>1</p>
        ) : (
          // <LowVoltCard key={+id!} prop={system!} />
          <p>2</p>
        )}
      </section>
    </div>
  );
}
