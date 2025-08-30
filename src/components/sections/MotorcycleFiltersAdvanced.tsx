import React from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface MotorcycleFilters {
  category: string;
  priceMin: number;
  priceMax: number;
  transmission: string;
  fuel: string;
  searchQuery: string;
  sortBy: string;
  brand: string;
  engineSize: string;
}

interface MotorcycleFiltersAdvancedProps {
  filters: MotorcycleFilters;
  setFilters: React.Dispatch<React.SetStateAction<MotorcycleFilters>>;
  onClose?: () => void;
}

export const MotorcycleFiltersAdvanced: React.FC<MotorcycleFiltersAdvancedProps> = ({
  filters,
  setFilters,
  onClose,
}) => {
  const brands = ['Honda', 'Yamaha', 'Kawasaki', 'NIU', 'Gogoro'];
  const engineSizes = ['125cc', '150cc', '155cc', '300cc', '500cc', 'Электро'];

  const clearFilters = () => {
    setFilters({
      category: '',
      priceMin: 0,
      priceMax: 2000,
      transmission: '',
      fuel: '',
      searchQuery: '',
      sortBy: 'price-asc',
      brand: '',
      engineSize: '',
    });
  };

  return (
    <div className="bg-dark-900/90 backdrop-blur-xl border border-dark-800/50 rounded-2xl p-6 sticky top-4">
      {onClose && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Фильтры</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Поиск</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              placeholder="Марка или модель..."
              className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Цена за день: {filters.priceMin}₽ - {filters.priceMax}₽
          </label>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={filters.priceMin}
              onChange={(e) => setFilters({ ...filters, priceMin: Number(e.target.value) })}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer slider-thumb"
            />
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={filters.priceMax}
              onChange={(e) => setFilters({ ...filters, priceMax: Number(e.target.value) })}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer slider-thumb"
            />
          </div>
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Марка</label>
          <select
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Все марки</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Engine Size */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Объем двигателя</label>
          <select
            value={filters.engineSize}
            onChange={(e) => setFilters({ ...filters, engineSize: e.target.value })}
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Любой объем</option>
            {engineSizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Коробка передач</label>
          <div className="space-y-2">
            {[
              { value: '', label: 'Любая' },
              { value: 'automatic', label: 'Автоматическая' },
              { value: 'manual', label: 'Механическая' },
            ].map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="transmission"
                  value={option.value}
                  checked={filters.transmission === option.value}
                  onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                  className="w-4 h-4 text-orange-500 bg-dark-800 border-dark-600 focus:ring-orange-500"
                />
                <span className="ml-2 text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Тип топлива</label>
          <div className="space-y-2">
            {[
              { value: '', label: 'Любое' },
              { value: 'petrol', label: 'Бензин' },
              { value: 'electric', label: 'Электричество' },
            ].map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="fuel"
                  value={option.value}
                  checked={filters.fuel === option.value}
                  onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                  className="w-4 h-4 text-orange-500 bg-dark-800 border-dark-600 focus:ring-orange-500"
                />
                <span className="ml-2 text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={clearFilters}
          className="w-full py-3 bg-dark-800/50 hover:bg-dark-700/50 text-gray-300 hover:text-white rounded-lg transition-all border border-dark-700 hover:border-dark-600"
        >
          Сбросить фильтры
        </motion.button>
      </div>
    </div>
  );
};