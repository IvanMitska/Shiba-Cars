import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Zap, Gauge, Fuel } from 'lucide-react';
import type { Motorcycle } from '../../types/index';
import { formatCurrency } from '../../utils/formatters';

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export const MotorcycleCard: React.FC<MotorcycleCardProps> = ({ motorcycle }) => {
  const categoryNames = {
    scooter: 'Скутер',
    sport: 'Спорт',
    touring: 'Туринг',
    cruiser: 'Круизер',
    adventure: 'Адвенчер',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-dark-900/50 backdrop-blur-xl border border-dark-800/50 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
    >
      <Link to={`/motorcycle/${motorcycle.id}`} className="block">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={motorcycle.image}
              alt={`${motorcycle.brand} ${motorcycle.model}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold rounded-full">
              {categoryNames[motorcycle.category]}
            </span>
          </div>

          {!motorcycle.available && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold">
                Недоступен
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                {motorcycle.brand} {motorcycle.model}
              </h3>
              <p className="text-gray-400 text-sm">{motorcycle.year} год</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-500">
                {formatCurrency(motorcycle.pricePerDay)}
              </div>
              <div className="text-xs text-gray-400">за день</div>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-white font-medium">{motorcycle.rating}</span>
            <span className="text-gray-400 text-sm">({motorcycle.reviews} отзывов)</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Gauge className="w-4 h-4 text-orange-400" />
              <span className="text-sm">{motorcycle.engineSize}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm capitalize">{motorcycle.transmission === 'automatic' ? 'Авто' : 'Мех'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Fuel className="w-4 h-4 text-orange-400" />
              <span className="text-sm">{motorcycle.fuel === 'petrol' ? 'Бензин' : 'Электро'}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm line-clamp-2 mb-4">
            {motorcycle.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {motorcycle.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-dark-800/50 text-gray-300 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
            {motorcycle.features.length > 3 && (
              <span className="px-2 py-1 bg-dark-800/50 text-gray-300 text-xs rounded-md">
                +{motorcycle.features.length - 3}
              </span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!motorcycle.available}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              motorcycle.available
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {motorcycle.available ? 'Забронировать' : 'Недоступен'}
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
};