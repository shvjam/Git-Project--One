import './TextIntro.css';

export default function TextIntro({ text }) {
  return (
    <div className="text-intro-container">
      <p>{text}</p>
    </div>
  );
}
