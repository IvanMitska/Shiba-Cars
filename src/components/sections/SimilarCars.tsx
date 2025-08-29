import React from 'react';
import { CarCard } from '../ui/CarCard';
import type { Car } from '../../types/index';

interface SimilarCarsProps {
  cars: Car[];
}

export const SimilarCars: React.FC<SimilarCarsProps> = ({ cars }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Похожие автомобили</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};