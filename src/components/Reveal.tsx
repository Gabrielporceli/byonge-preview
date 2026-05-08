import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delayIndex?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delayIndex = 0, className = "" }) => {
  return (
    <motion.div
      className={`reveal ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            delay: delayIndex * 0.08,
            ease: "easeOut"
          }
        }
      }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
