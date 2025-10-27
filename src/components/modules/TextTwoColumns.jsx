import './TextTwoColumns.css';

export default function TextTwoColumns({ title, text, technologies }) {
  return (
    <div className="text-two-columns-container">
      <div className="column">
        <h3>{title}</h3>
      </div>
      <div className="column">
        <p>{text}</p>
        {technologies && (
          <div className="technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
