import React from 'react';
import { Star, Users, Fuel, Settings, Gauge, Zap, Wind, Shield } from 'lucide-react';
import type { Car } from '../../types/index';

interface CarInfoProps {
  car: Car;
}

export const CarInfo: React.FC<CarInfoProps> = ({ car }) => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">
          {car.brand} {car.model}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{car.rating}</span>
            <span>({car.reviews} отзывов)</span>
          </div>
          <span>•</span>
          <span>Год выпуска: {car.year}</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white text-white mb-3">Описание</h2>
        <p className="text-gray-300">{car.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white text-white mb-3">Характеристики</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Мест</p>
              <p className="font-semibold text-white">{car.seats}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Коробка</p>
              <p className="font-semibold text-white">
                {car.transmission === 'automatic' ? 'Автомат' : 'Механика'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Fuel className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Топливо</p>
              <p className="font-semibold text-white">
                {car.fuel === 'petrol' ? 'Бензин' :
                 car.fuel === 'diesel' ? 'Дизель' :
                 car.fuel === 'hybrid' ? 'Гибрид' :
                 car.fuel === 'electric' ? 'Электро' : car.fuel}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Gauge className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Двигатель</p>
              <p className="font-semibold text-white">{car.specifications.engine}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Мощность</p>
              <p className="font-semibold text-white">{car.specifications.power}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Wind className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">0-100 км/ч</p>
              <p className="font-semibold text-white">{car.specifications.acceleration}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white text-white mb-3">Особенности</h2>
        <div className="flex flex-wrap gap-2">
          {car.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 glass-effect-light text-gray-300 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg glass-effect-light">
        <div className="flex items-center gap-2 text-green-400">
          <Shield className="w-5 h-5" />
          <span className="font-semibold text-white">Полная страховка включена</span>
        </div>
        <p className="text-sm text-green-300 mt-1">
          КАСКО и ОСАГО уже включены в стоимость аренды
        </p>
      </div>
    </div>
  );
};