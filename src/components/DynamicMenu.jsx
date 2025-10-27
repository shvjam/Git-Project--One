import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { projects } from '../data/projects';
import { useCursor } from '../contexts/CursorContext';
import './DynamicMenu.css';

export default function DynamicMenu() {
  const scroll = useScroll();
  const { setCursorStyle } = useCursor();
  const [activeProject, setActiveProject] = useState(0);
  const [visible, setVisible] = useState(false);

  useFrame(() => {
    const projectIndex = Math.floor(scroll.offset * projects.length);
    setActiveProject(projectIndex);

    if (scroll.offset > 0.1 && scroll.offset < 0.9) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const handleMouseEnter = () => {
    setCursorStyle('hover');
  };

  const handleMouseLeave = () => {
    setCursorStyle('default');
  };

  return (
    <div className={`dynamic-menu ${visible ? 'visible' : ''}`}>
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={index === activeProject ? 'active' : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={`/project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
