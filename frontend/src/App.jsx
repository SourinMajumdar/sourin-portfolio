import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.jsx';
import AllProjects from './pages/AllProjects.jsx';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
import IntroAnimation from './components/IntroAnimation';
import useDarkMode from './hooks/useDarkMode.jsx';
import useAccentColor from './hooks/useAccentColor.jsx';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [accentId, changeAccent] = useAccentColor();

  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Hey! Come back! 🥺";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);


  return (
    <div className="App">
      {/* Show intro animation first */}
      {showIntro && (
        <IntroAnimation onAnimationComplete={() => setShowIntro(false)} />
      )}
      
      {/* Main content */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} accentId={accentId} changeAccent={changeAccent} />} />
          <Route path="/projects" element={<AllProjects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
        <ScrollToTop accentId={accentId} changeAccent={changeAccent} />
      </BrowserRouter>
    </div>
  );
}

export default App;