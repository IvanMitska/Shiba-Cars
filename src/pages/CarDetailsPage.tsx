import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cars } from '../data/cars';
import { CarGallery } from '../components/sections/CarGallery';
import { CarInfo } from '../components/sections/CarInfo';
import { BookingCard } from '../components/sections/BookingCard';
import { SimilarCars } from '../components/sections/SimilarCars';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const car = cars.find(c => c.id === id);
  
  if (!car) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Автомобиль не найден</h1>
        <Button onClick={() => navigate('/cars')}>Вернуться к каталогу</Button>
      </div>
    );
  }

  const similarCars = cars
    .filter(c => c.category === car.category && c.id !== car.id)
    .slice(0, 3);

  return (
    <div className="bg-dark-950 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CarGallery 
              images={car.images} 
              has3DModel={car.brand === 'Porsche' && car.model === '911 Carrera'} 
            />
            <CarInfo car={car} />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-24">
              <BookingCard car={car} />
            </div>
          </motion.div>
        </div>

        {similarCars.length > 0 && (
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SimilarCars cars={similarCars} />
          </motion.div>
        )}
      </div>
    </div>
  );
};