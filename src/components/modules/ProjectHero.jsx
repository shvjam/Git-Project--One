import './ProjectHero.css';

export default function ProjectHero({ project }) {
  return (
    <div className="project-hero-container">
      <img src={project.image} alt={project.title} />
      <div className="project-hero-overlay">
        <div className="project-hero-content">
          <h1>{project.title}</h1>
          <div className="project-details">
            <span><strong>نقش:</strong> {project.role}</span>
            <span><strong>آژانس:</strong> {project.agency}</span>
            <span><strong>سال:</strong> {project.completed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
