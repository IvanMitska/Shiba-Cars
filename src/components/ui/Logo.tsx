import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { ShibaLogo } from './ShibaLogo';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md', animated = false }) => {
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const logoContent = (
    <div className={cn('flex items-center gap-3', className)}>
      <ShibaLogo size={size} animated={animated} />
      <div className={cn('font-display font-bold tracking-wider', textSizes[size])}>
        <span className="text-white">SHIBA</span>
        <span className="text-orange-500">CARS</span>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {logoContent}
      </motion.div>
    );
  }

  return logoContent;
};