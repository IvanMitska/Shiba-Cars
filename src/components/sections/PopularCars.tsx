import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../../data/cars';
import { CarCard } from '../ui/CarCard';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const PopularCars: React.FC = () => {
  const popularCars = cars.slice(0, 6);

  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Популярные</span>
            <span className="text-white ml-3">автомобили</span>
          </h2>
          <p className="text-lg text-gray-400">
            Самые востребованные модели нашего автопарка
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/cars">
            <Button size="lg">
              Все автомобили
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};