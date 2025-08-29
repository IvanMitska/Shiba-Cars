import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Fuel, Settings, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Car } from '../../types/index';
import { formatPrice } from '../../utils/formatters';
import { Button } from './Button';
import { cn } from '../../utils/cn';
import { useFavoritesStore } from '../../store/useFavoritesStore';

interface CarCardProps {
  car: Car;
  index?: number;
}

export const CarCard: React.FC<CarCardProps> = ({ car, index = 0 }) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(car.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(car.id);
  };

  const categoryStyles = {
    economy: 'from-gray-600 to-gray-700',
    comfort: 'from-blue-600 to-blue-700',
    business: 'from-purple-600 to-purple-700',
    premium: 'from-accent-gold to-accent-goldDark',
    sport: 'from-orange-600 to-orange-700',
    suv: 'from-green-600 to-green-700',
  };

  const categoryLabels = {
    economy: 'Эконом',
    comfort: 'Комфорт',
    business: 'Бизнес',
    premium: 'Премиум',
    sport: 'Спорт',
    suv: 'Внедорожник',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link to={`/cars/${car.id}`} className="block h-full">
        <div className="glass-effect rounded-2xl overflow-hidden hover:shadow-premium transition-all duration-500 group h-full flex flex-col border border-dark-800/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-orange-500/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
          <div className="relative h-56 lg:h-64 overflow-hidden z-10">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {!car.available && (
              <div className="absolute inset-0 bg-dark-950/70 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Недоступен</span>
              </div>
            )}
            
            <motion.button
              onClick={handleFavoriteClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "absolute top-4 right-4 p-2.5 glass-effect-light rounded-xl transition-all duration-300",
                favorite ? "text-orange-500 shadow-orange-500/30" : "text-white hover:text-orange-400"
              )}
            >
              <Heart className={cn("w-5 h-5", favorite && "fill-current")} />
            </motion.button>
            
            <div className={cn(
              "absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r shadow-lg",
              categoryStyles[car.category as keyof typeof categoryStyles] || 'from-gray-600 to-gray-700'
            )}>
              <span className="flex items-center gap-1">
                {car.category === 'premium' && <Sparkles className="w-3 h-3" />}
                {categoryLabels[car.category as keyof typeof categoryLabels] || car.category}
              </span>
            </div>

            {car.rating >= 4.8 && (
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-xs font-semibold text-black flex items-center gap-1 shadow-lg">
                <TrendingUp className="w-3 h-3" />
                Популярный выбор
              </div>
            )}
          </div>

          <div className="p-6 flex-1 flex flex-col relative z-10">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                {car.brand} {car.model}
              </h3>
              <p className="text-sm text-gray-500">{car.year} год</p>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-orange-400 fill-current" />
                <span className="text-sm font-medium text-gray-300">{car.rating}</span>
              </div>
              <span className="text-dark-600">•</span>
              <span className="text-sm text-gray-400">{car.reviews} отзывов</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="glass-effect-light rounded-lg p-2 text-center">
                <Users className="w-4 h-4 text-orange-400 mx-auto mb-1" />
                <span className="text-xs text-gray-300 block">{car.seats} мест</span>
              </div>
              <div className="glass-effect-light rounded-lg p-2 text-center">
                <Settings className="w-4 h-4 text-orange-400 mx-auto mb-1" />
                <span className="text-xs text-gray-300 block">
                  {car.transmission === 'automatic' ? 'АКП' : 'МКП'}
                </span>
              </div>
              <div className="glass-effect-light rounded-lg p-2 text-center">
                <Fuel className="w-4 h-4 text-orange-400 mx-auto mb-1" />
                <span className="text-xs text-gray-300 block">
                  {car.fuel === 'petrol' ? 'Бензин' :
                   car.fuel === 'diesel' ? 'Дизель' :
                   car.fuel === 'hybrid' ? 'Гибрид' :
                   car.fuel === 'electric' ? 'Электро' : car.fuel}
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">от</span>
                  <span className="text-3xl font-bold gradient-text">
                    {formatPrice(car.pricePerDay)}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">/день</span>
                </div>
                {car.discount && (
                  <div className="text-right">
                    <span className="text-xs line-through text-gray-500 block">
                      {formatPrice(car.pricePerDay * 1.2)}
                    </span>
                    <span className="text-sm font-semibold text-green-400">-20%</span>
                  </div>
                )}
              </div>

              <Button 
                size="sm" 
                disabled={!car.available}
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 disabled:from-gray-600 disabled:to-gray-700 disabled:shadow-none transition-all duration-300"
              >
                {car.available ? 'Забронировать' : 'Недоступен'}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};