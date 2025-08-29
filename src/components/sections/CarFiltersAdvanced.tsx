import React, { useState } from 'react';
import { Search, X, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Filters {
  category: string;
  priceMin: number;
  priceMax: number;
  transmission: string;
  fuel: string;
  searchQuery: string;
  sortBy: string;
  brand: string;
  year: { min: number; max: number };
  seats: number;
}

interface CarFiltersAdvancedProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onClose?: () => void;
}

// Popular car brands with real logos
const carBrands = [
  { id: 'toyota', name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1200px-Toyota_carlogo.svg.png' },
  { id: 'honda', name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Honda_logo.svg/1024px-Honda_logo.svg.png' },
  { id: 'bmw', name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png' },
  { id: 'mercedes', name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/800px-Mercedes-Benz_Logo_2010.svg.png' },
  { id: 'audi', name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi_Logo_2016.svg/2560px-Audi_Logo_2016.svg.png' },
  { id: 'lexus', name: 'Lexus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lexus_Logo.svg/2048px-Lexus_Logo.svg.png' },
  { id: 'mazda', name: 'Mazda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Mazda_logo_%282018%29.svg/1280px-Mazda_logo_%282018%29.svg.png' },
  { id: 'nissan', name: 'Nissan', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo_2020.svg/1024px-Nissan_logo_2020.svg.png' },
  { id: 'ford', name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png' },
  { id: 'volkswagen', name: 'VW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1024px-Volkswagen_logo_2019.svg.png' },
  { id: 'porsche', name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Porsche_Monogram.svg/1024px-Porsche_Monogram.svg.png' },
  { id: 'tesla', name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png' },
];

const categories = [
  { id: 'all', name: 'Все', icon: 'https://carloson.ru/uploads/images/auto_6%402x-175x55.png' },
  { id: 'suv', name: 'Внедорожники', icon: 'https://carloson.ru/uploads/images/auto_6%402x-175x55.png' },
  { id: 'premium', name: 'Премиум', icon: 'https://carloson.ru/uploads/images/auto_5%402x-175x55.png' },
  { id: 'business', name: 'Бизнес', icon: 'https://carloson.ru/uploads/images/auto_1%402x-175x55.png' },
  { id: 'sport', name: 'Спорткары', icon: 'https://carloson.ru/uploads/images/auto_4%402x-175x55.png' },
  { id: 'minivan', name: 'Минивэны', icon: 'https://carloson.ru/uploads/images/auto_7%402x-175x55.png' },
  { id: 'comfort', name: 'Комфорт', icon: 'https://carloson.ru/uploads/images/auto_8%402x-175x55.png' },
  { id: 'coupe', name: 'Кабриолеты', icon: 'https://carloson.ru/uploads/images/auto_2%402x-175x55.png' },
  { id: 'electric', name: 'Электро', icon: 'https://carloson.ru/uploads/images/auto_3%402x-175x55.png' },
];

export const CarFiltersAdvanced: React.FC<CarFiltersAdvancedProps> = ({ filters, setFilters, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    brands: true,
    categories: true,
    price: true,
    transmission: false,
    fuel: false,
    year: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleReset = () => {
    setFilters({
      category: '',
      priceMin: 0,
      priceMax: 20000,
      transmission: '',
      fuel: '',
      searchQuery: '',
      sortBy: 'price-asc',
      brand: '',
      year: { min: 2015, max: 2024 },
      seats: 0,
    });
  };


  return (
    <div className="bg-black/95 backdrop-blur-xl rounded-2xl border border-orange-500/20 overflow-hidden shadow-2xl shadow-orange-500/10">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-orange-500/10 bg-gradient-to-r from-black via-dark-900 to-black">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
            <SlidersHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
            Фильтры
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="text-xs sm:text-sm text-orange-500 hover:text-orange-400 transition-colors px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-orange-500/10"
            >
              Сбросить
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="relative mt-4">
          <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-orange-400/60" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
            placeholder="Поиск по названию..."
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-black/50 border border-orange-500/20 text-white text-sm sm:text-base rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/40 focus:bg-black/70 placeholder-gray-400 transition-all"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-orange-500/10">
        <button
          onClick={() => toggleSection('categories')}
          className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-orange-500/5 transition-all duration-200"
        >
          <span className="text-sm sm:text-base font-semibold text-white">Категории</span>
          {expandedSections.categories ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        <AnimatePresence>
          {expandedSections.categories && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilters({ ...filters, category: cat.id === 'all' ? '' : cat.id })}
                    className={`
                      px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all flex flex-col items-center gap-1.5 sm:gap-2
                      ${filters.category === (cat.id === 'all' ? '' : cat.id)
                        ? 'bg-gradient-to-br from-orange-500/30 to-orange-600/20 text-orange-300 border border-orange-500/40 shadow-lg shadow-orange-500/20'
                        : 'bg-black/40 text-gray-300 border border-white/10 hover:bg-black/60 hover:border-orange-500/30 hover:text-white'
                      }
                    `}
                  >
                    <img 
                      src={cat.icon} 
                      alt={cat.name}
                      className="h-6 sm:h-8 w-auto object-contain"
                      style={{
                        filter: filters.category === (cat.id === 'all' ? '' : cat.id) 
                          ? 'brightness(1.2)' 
                          : 'brightness(0.7)'
                      }}
                    />
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Brands */}
      <div className="border-b border-orange-500/10">
        <button
          onClick={() => toggleSection('brands')}
          className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-orange-500/5 transition-all duration-200"
        >
          <span className="text-sm sm:text-base font-semibold text-white">Марки</span>
          {expandedSections.brands ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        <AnimatePresence>
          {expandedSections.brands && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 max-h-60 sm:max-h-80 overflow-y-auto custom-scrollbar">
                {carBrands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => setFilters({ ...filters, brand: filters.brand === brand.id ? '' : brand.id })}
                    className={`
                      px-2 sm:px-3 py-3 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all flex flex-col items-center gap-1.5 sm:gap-2
                      ${filters.brand === brand.id
                        ? 'bg-gradient-to-br from-orange-500/30 to-orange-600/20 text-orange-300 border border-orange-500/40 shadow-lg shadow-orange-500/20'
                        : 'bg-black/40 text-gray-300 border border-white/10 hover:bg-black/60 hover:border-orange-500/30 hover:text-white'
                      }
                    `}
                  >
                    <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain"
                        style={{
                          filter: filters.brand === brand.id
                            ? 'brightness(1.2)' 
                            : 'brightness(0.7) grayscale(0.3)'
                        }}
                      />
                    </div>
                    <span>{brand.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price Range */}
      <div className="border-b border-orange-500/10">
        <button
          onClick={() => toggleSection('price')}
          className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-orange-500/5 transition-all duration-200"
        >
          <span className="text-sm sm:text-base font-semibold text-white">Цена за день</span>
          {expandedSections.price ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        <AnimatePresence>
          {expandedSections.price && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <input
                    type="number"
                    value={filters.priceMin}
                    onChange={(e) => setFilters({ ...filters, priceMin: Number(e.target.value) })}
                    placeholder="От"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-orange-500/20 text-white text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/40 focus:bg-black/70 transition-all"
                  />
                  <span className="text-orange-400/60 text-base sm:text-lg">—</span>
                  <input
                    type="number"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({ ...filters, priceMax: Number(e.target.value) })}
                    placeholder="До"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-orange-500/20 text-white text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/40 focus:bg-black/70 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({ ...filters, priceMax: Number(e.target.value) })}
                    className="w-full accent-orange-500 h-2"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">0₽</span>
                    <span className="font-semibold text-orange-400">
                      {filters.priceMax.toLocaleString('ru-RU')}₽
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Transmission */}
      <div className="border-b border-orange-500/10">
        <button
          onClick={() => toggleSection('transmission')}
          className="w-full px-6 py-5 flex items-center justify-between hover:bg-orange-500/5 transition-all duration-200"
        >
          <span className="text-base font-semibold text-white">Коробка передач</span>
          {expandedSections.transmission ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        <AnimatePresence>
          {expandedSections.transmission && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-6 pb-6 overflow-hidden"
            >
              <div className="space-y-3">
                {[
                  { value: '', label: 'Любая' },
                  { value: 'automatic', label: 'Автоматическая' },
                  { value: 'manual', label: 'Механическая' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer group p-3 rounded-lg hover:bg-orange-500/5 transition-all">
                    <input
                      type="radio"
                      name="transmission"
                      value={option.value}
                      checked={filters.transmission === option.value}
                      onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                      className="w-5 h-5 text-orange-500 bg-black/50 border-orange-500/30 focus:ring-orange-500/50 focus:ring-2"
                    />
                    <span className="ml-3 text-base text-gray-300 group-hover:text-orange-200 transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fuel Type */}
      <div className="border-b border-orange-500/10">
        <button
          onClick={() => toggleSection('fuel')}
          className="w-full px-6 py-5 flex items-center justify-between hover:bg-orange-500/5 transition-all duration-200"
        >
          <span className="text-base font-semibold text-white">Тип топлива</span>
          {expandedSections.fuel ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        <AnimatePresence>
          {expandedSections.fuel && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-6 pb-6 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '', label: 'Любое' },
                  { value: 'petrol', label: 'Бензин' },
                  { value: 'diesel', label: 'Дизель' },
                  { value: 'hybrid', label: 'Гибрид' },
                  { value: 'electric', label: 'Электро' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilters({ ...filters, fuel: option.value })}
                    className={`
                      px-4 py-3 rounded-lg text-base font-medium transition-all
                      ${filters.fuel === option.value
                        ? 'bg-gradient-to-br from-orange-500/30 to-orange-600/20 text-orange-300 border-2 border-orange-500/40 shadow-lg shadow-orange-500/20'
                        : 'bg-black/40 text-gray-300 border-2 border-white/10 hover:bg-black/60 hover:border-orange-500/30 hover:text-white'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Apply Button */}
      <div className="p-4 sm:p-6">
        <button 
          onClick={onClose}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
        >
          Показать результаты
        </button>
      </div>
    </div>
  );
};