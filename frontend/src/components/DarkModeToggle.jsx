import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode, isMobile = false }) => {
  return (
    <motion.button
      className={`dark-mode-toggle ${isMobile ? 'mobile' : 'desktop'}`}
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="toggle-icon-wrapper"
        initial={false}
        animate={{
          rotate: isDarkMode ? 360 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        {isDarkMode ? (
          <Moon size={20} className="toggle-icon" />
        ) : (
          <Sun size={20} className="toggle-icon" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
