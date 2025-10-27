import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import TextIntro from '../components/modules/TextIntro';
import Media from '../components/modules/Media';
import TextTwoColumns from '../components/modules/TextTwoColumns';
import Awards from '../components/modules/Awards';
import ProjectHero from '../components/modules/ProjectHero';
import '../components/modules/TextIntro.css';
import '../components/modules/Media.css';
import '../components/modules/TextTwoColumns.css';
import '../components/modules/Awards.css';
import '../components/modules/ProjectHero.css';

const moduleComponents = {
  TextIntro,
  Media,
  TextTwoColumns,
  Awards,
};

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>پروژه‌ای پیدا نشد</div>;
  }

  return (
    <div style={{ color: 'white', background: '#000' }}>
      <ProjectHero project={project} />
      {project.modules.map((module, index) => {
        const ModuleComponent = moduleComponents[module.component];
        if (!ModuleComponent) {
          console.warn(`Module not found -> ${module.component}`);
          return null;
        }
        return <ModuleComponent key={index} {...module} />;
      })}
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <Link to="/" className="back-to-home">بازگشت به خانه</Link>
      </div>
    </div>
  );
}
