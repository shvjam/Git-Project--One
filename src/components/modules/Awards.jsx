import './Awards.css';

export default function Awards({ awards }) {
  return (
    <div className="awards-container">
      <h3>جوایز</h3>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            {award}
          </div>
        ))}
      </div>
    </div>
  );
}
