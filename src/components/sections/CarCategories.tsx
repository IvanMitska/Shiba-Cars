import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  value: string;
  svgPath: string;
}

// Using car icons from carloson.ru reference
const categories: Category[] = [
  {
    id: 'suv',
    name: 'Внедорожники',
    value: 'suv',
    svgPath: 'https://carloson.ru/uploads/images/auto_6%402x-175x55.png'
  },
  {
    id: 'premium',
    name: 'Премиум',
    value: 'premium',
    svgPath: 'https://carloson.ru/uploads/images/auto_5%402x-175x55.png'
  },
  {
    id: 'business',
    name: 'Бизнес',
    value: 'business',
    svgPath: 'https://carloson.ru/uploads/images/auto_1%402x-175x55.png'
  },
  {
    id: 'sport',
    name: 'Спорткары',
    value: 'sport',
    svgPath: 'https://carloson.ru/uploads/images/auto_4%402x-175x55.png'
  },
  {
    id: 'minivan',
    name: 'Минивэны',
    value: 'minivan',
    svgPath: 'https://carloson.ru/uploads/images/auto_7%402x-175x55.png'
  },
  {
    id: 'comfort',
    name: 'Комфорт',
    value: 'comfort',
    svgPath: 'https://carloson.ru/uploads/images/auto_8%402x-175x55.png'
  },
  {
    id: 'coupe',
    name: 'Кабриолеты',
    value: 'coupe',
    svgPath: 'https://carloson.ru/uploads/images/auto_2%402x-175x55.png'
  },
  {
    id: 'electric',
    name: 'Электромобили',
    value: 'electric',
    svgPath: 'https://carloson.ru/uploads/images/auto_3%402x-175x55.png'
  }
];


interface CarCategoriesProps {
  onCategoryClick?: (category: string) => void;
  selectedCategory?: string | null;
  showTitle?: boolean;
}

export const CarCategories: React.FC<CarCategoriesProps> = ({ 
  onCategoryClick, 
  selectedCategory,
  showTitle = true 
}) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    } else {
      navigate(`/cars?category=${category}`);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              <span className="text-white">Категории </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">автомобилей</span>
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
              onClick={() => handleCategoryClick(category.value)}
              className={`
                group relative flex flex-col items-center py-5 px-3 rounded-2xl transition-all duration-300 cursor-pointer
                ${selectedCategory === category.value 
                  ? 'bg-gradient-to-b from-orange-500/25 to-orange-500/5 border-orange-500/60 shadow-lg shadow-orange-500/20' 
                  : 'bg-dark-900/30 hover:bg-gradient-to-b hover:from-white/15 hover:to-white/5 border-dark-700/40 hover:border-dark-600/60'
                }
                border backdrop-blur-sm overflow-hidden
              `}
            >
              {/* Glow effect when selected */}
              {selectedCategory === category.value && (
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
              )}
              
              <div 
                className={`
                  mb-3 h-10 transition-all duration-300 flex items-center justify-center relative
                  ${selectedCategory === category.value 
                    ? 'scale-110' 
                    : 'group-hover:scale-105'
                  }
                `}
              >
                <img
                  src={category.svgPath}
                  alt={category.name}
                  className="h-full w-auto object-contain transition-all duration-300"
                  style={{
                    filter: selectedCategory === category.value 
                      ? 'brightness(1.3) contrast(1.2) drop-shadow(0 0 12px rgba(254, 197, 45, 0.8))' 
                      : 'brightness(1.2) contrast(1.1) opacity(0.85)',
                    maxWidth: '110px'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.value) {
                      e.currentTarget.style.filter = 'brightness(1.4) contrast(1.2) opacity(1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.value) {
                      e.currentTarget.style.filter = 'brightness(1.2) contrast(1.1) opacity(0.85)';
                    }
                  }}
                />
              </div>
              
              <span 
                className={`
                  text-xs font-medium transition-all duration-300 text-center leading-tight
                  ${selectedCategory === category.value 
                    ? 'text-orange-500 font-semibold' 
                    : 'text-gray-300 group-hover:text-white'
                  }
                `}
              >
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>

        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center"
          >
            <button
              onClick={() => onCategoryClick && onCategoryClick(null)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Все категории
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};