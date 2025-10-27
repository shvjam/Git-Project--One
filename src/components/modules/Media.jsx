import './Media.css';

export default function Media({ media }) {
  return (
    <div className="media-container">
      {media.map((item, index) => {
        const isVideo = item.src.endsWith('.mp4');
        return (
          <div key={index} className="media-item">
            {isVideo ? (
              <video src={item.src} alt={item.alt} autoPlay loop muted />
            ) : (
              <img src={item.src} alt={item.alt} />
            )}
          </div>
        );
      })}
    </div>
  );
}
