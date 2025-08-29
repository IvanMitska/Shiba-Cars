import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Автомобилей в парке' },
  { value: 50000, suffix: '+', label: 'Довольных клиентов' },
  { value: 5, suffix: '', label: 'Лет на рынке' },
  { value: 98, suffix: '%', label: 'Клиентов рекомендуют нас' },
];

const AnimatedCounter: React.FC<{ 
  value: number; 
  suffix: string; 
  inView: boolean 
}> = ({ value, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 50;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString('ru-RU')}{suffix}
    </span>
  );
};

export const Statistics: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 lg:py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-transparent to-orange-950/10"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">ShibaCars</span>
            <span className="text-white ml-3">в цифрах</span>
          </h2>
          <p className="text-lg text-gray-400">
            Факты и цифры о нашей компании
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="glass-effect-light rounded-2xl p-8 border border-dark-800/50 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 transform">
                <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    inView={isInView} 
                  />
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};