import './EntryPage.css';

export default function EntryPage({ onEnter }) {
  return (
    <div className="entry-page">
      <div className="intro">
        <h1>اسم من جولیو است</h1>
        <button onClick={onEnter}>ورود</button>
      </div>
    </div>
  );
}
