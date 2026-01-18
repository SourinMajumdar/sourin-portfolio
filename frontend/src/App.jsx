import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.jsx';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  
  return (
    <div className="App">
      {/* Show intro animation first */}
      {showIntro && (
        <IntroAnimation onAnimationComplete={() => setShowIntro(false)} />
      )}
      
      {/* Main content */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <ScrollToTop/>
      </BrowserRouter>
    </div>
  );
}

export default App;