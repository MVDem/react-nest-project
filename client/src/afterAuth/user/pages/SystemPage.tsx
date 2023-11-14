import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IStateProjects } from '../../../assets/types/type';

export default function SystemPage() {
  const { projects } = useSelector((state: IStateProjects) => state.projects);
  const { projectId } = useParams();
  const project = projects?.find((e) => e.id === projectId);
  console.log(project);

  return (
    <section className="systems__content">
      <p>projectId: {projectId}</p>
    </section>
  );
}
