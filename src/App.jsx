import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CursorProvider } from './contexts/CursorContext';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import EntryPage from './components/EntryPage';
import Cursor from './components/Cursor';
import './App.css';
import './pages/About.css';
import './components/EntryPage.css';
import './components/Cursor.css';

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function App() {
  const location = useLocation();
  const [showEntryPage, setShowEntryPage] = useState(true);

  const handleEnter = () => {
    setShowEntryPage(false);
  };

  return (
    <CursorProvider>
      <Cursor />
      {showEntryPage ? (
        <EntryPage onEnter={handleEnter} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project/:id" element={<Project />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      )}
    </CursorProvider>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
