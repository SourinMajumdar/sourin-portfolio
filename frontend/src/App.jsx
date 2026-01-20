import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.jsx';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
import IntroAnimation from './components/IntroAnimation';
import useDarkMode from './hooks/useDarkMode.jsx';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  
  return (
    <div className="App">
      {/* Show intro animation first */}
      {showIntro && (
        <IntroAnimation onAnimationComplete={() => setShowIntro(false)} />
      )}
      
      {/* Main content */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
        <ScrollToTop/>
      </BrowserRouter>
    </div>
  );
}

export default App;