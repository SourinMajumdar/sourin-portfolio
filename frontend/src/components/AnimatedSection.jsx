import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.2,
    margin: "-100px"
  });

  // Disable animation on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <motion.div
      ref={ref}
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : (isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 })}
      exit={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{
        duration: isMobile ? 0 : 0.45,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
