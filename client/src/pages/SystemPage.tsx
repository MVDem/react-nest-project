import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IStateProjects } from '../components/types/type';

export default function SystemPage() {
  const { projects } = useSelector((state: IStateProjects) => state.projects);
  const { projectId } = useParams();
  const project = projects?.find((e) => e.id === projectId);

  return (
    <section className="systems__content">
      <p>projectId: {projectId}</p>
    </section>
  );
}
