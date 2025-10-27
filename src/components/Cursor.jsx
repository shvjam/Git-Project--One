import { useEffect, useRef } from 'react';
import { useCursor } from '../contexts/CursorContext';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const { cursorStyle } = useCursor();

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className={`custom-cursor ${cursorStyle}`} ref={cursorRef} />;
}
