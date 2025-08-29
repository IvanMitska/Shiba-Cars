import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CarCategories } from '../components/sections/CarCategories';
import { CarFiltersAdvanced } from '../components/sections/CarFiltersAdvanced';
import { CarGrid } from '../components/sections/CarGrid';
import { cars } from '../data/cars';
import type { Car } from '../types/index';
import { SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CarsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: categoryFromUrl || '',
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

  useEffect(() => {
    if (categoryFromUrl) {
      setFilters(prev => ({ ...prev, category: categoryFromUrl }));
    }
  }, [categoryFromUrl]);

  // Prevent body scroll when mobile filter is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileFilterOpen]);

  const handleCategoryClick = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
      setFilters({ ...filters, category });
    } else {
      setSearchParams({});
      setFilters({ ...filters, category: '' });
    }
  };

  const filteredCars = useMemo(() => {
    let result = [...cars];

    if (filters.category) {
      result = result.filter(car => car.category === filters.category);
    }

    if (filters.transmission) {
      result = result.filter(car => car.transmission === filters.transmission);
    }

    if (filters.fuel) {
      result = result.filter(car => car.fuel === filters.fuel);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(car =>
        car.brand.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query)
      );
    }

    result = result.filter(car =>
      car.pricePerDay >= filters.priceMin && car.pricePerDay <= filters.priceMax
    );

    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case 'price-desc':
        result.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="bg-black min-h-screen">
      <CarCategories 
        selectedCategory={filters.category || null}
        onCategoryClick={handleCategoryClick}
        showTitle={false}
      />
      
      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full bg-dark-900/50 backdrop-blur-xl border border-dark-800/50 rounded-xl px-4 py-3 flex items-center justify-between text-white hover:bg-dark-800/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-orange-500" />
              <span className="font-medium">Фильтры</span>
              {[filters.category, filters.brand, filters.transmission, filters.fuel].filter(v => v && v !== '').length > 0 && (
                <span className="bg-orange-500 text-black text-xs px-2 py-0.5 rounded-full font-semibold">
                  {[filters.category, filters.brand, filters.transmission, filters.fuel].filter(v => v && v !== '').length}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-400">Нажмите для открытия</span>
          </button>
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8">
          {filters.category ? (
            <>
              <span className="text-gray-400">Категория: </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                {filters.category === 'suv' ? 'Внедорожники' :
                 filters.category === 'premium' ? 'Премиум' :
                 filters.category === 'business' ? 'Бизнес' :
                 filters.category === 'sport' ? 'Спорткары' :
                 filters.category === 'minivan' ? 'Минивэны' :
                 filters.category === 'comfort' ? 'Комфорт' :
                 filters.category === 'coupe' ? 'Кабриолеты' :
                 filters.category === 'electric' ? 'Электромобили' :
                 filters.category === 'economy' ? 'Эконом' : filters.category}
              </span>
            </>
          ) : 'Все автомобили'}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block lg:col-span-1">
            <CarFiltersAdvanced filters={filters} setFilters={setFilters} />
          </div>

          {/* Mobile Filters Modal */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <CarFiltersAdvanced 
                    filters={filters} 
                    setFilters={setFilters}
                    onClose={() => setIsMobileFilterOpen(false)}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="lg:col-span-3">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-gray-400">
                Найдено: <span className="font-semibold text-white">{filteredCars.length}</span> автомобилей
              </p>
              
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="w-full sm:w-auto px-4 py-2 bg-dark-900/50 border border-dark-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="price-asc">Сначала дешевле</option>
                <option value="price-desc">Сначала дороже</option>
                <option value="rating">По рейтингу</option>
                <option value="popular">По популярности</option>
              </select>
            </div>
            
            <CarGrid cars={filteredCars} />
          </div>
        </div>
      </div>
    </div>
  );
};