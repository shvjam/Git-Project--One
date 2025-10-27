import './ProjectHero.css';

export default function ProjectHero({ project }) {
  return (
    <div className="project-hero-container">
      <img src={project.image} alt={project.title} />
      <div className="project-hero-overlay">
        <h1>{project.title}</h1>
      </div>
    </div>
  );
}
