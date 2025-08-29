import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/logo.png';

interface ShibaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const ShibaLogo: React.FC<ShibaLogoProps> = ({ 
  className = '', 
  size = 'md',
  animated = false 
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const Logo = (
    <img 
      src={logoImg}
      alt="Shiba Cars Logo"
      className={`${sizes[size]} ${className} object-contain rounded-full`}
      style={{
        background: 'transparent'
      }}
    />
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20 
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {Logo}
      </motion.div>
    );
  }

  return Logo;
};