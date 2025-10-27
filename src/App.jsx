import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import EntryPage from './components/EntryPage';
import './App.css';
import './pages/About.css';
import './components/EntryPage.css';

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

  if (showEntryPage) {
    return <EntryPage onEnter={handleEnter} />;
  }

  return (
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
