import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  description?: string;
  popular?: boolean;
}

interface CustomLocationSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  locations: Location[];
}

export const CustomLocationSelector: React.FC<CustomLocationSelectorProps> = ({ 
  value, 
  onChange, 
  label,
  locations 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (location.description && location.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const popularLocations = filteredLocations.filter(location => location.popular);
  const otherLocations = filteredLocations.filter(location => !location.popular);

  const handleLocationSelect = (locationName: string) => {
    onChange(locationName);
    setIsOpen(false);
    setSearchQuery('');
  };

  const selectedLocation = locations.find(loc => loc.name === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <label className="block text-sm font-medium text-gray-400 mb-3">
          <MapPin className="inline w-4 h-4 mr-2 text-orange-400" />
          {label}
        </label>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white transition-all duration-300 text-left flex items-center justify-between ${
            isOpen ? 'ring-2 ring-orange-500 border-transparent' : ''
          }`}
        >
          <span className="truncate">
            {selectedLocation ? selectedLocation.name : 'Выберите место'}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[9999] mt-2 bg-dark-900/95 backdrop-blur-xl border border-orange-500/30 rounded-xl shadow-2xl overflow-hidden max-h-80"
            style={{
              top: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().bottom + 8 : 'auto',
              left: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().left : 'auto',
              width: dropdownRef.current ? dropdownRef.current.offsetWidth : 'auto'
            }}
          >
            {/* Search Input */}
            <div className="p-4 border-b border-orange-500/20">
              <input
                type="text"
                placeholder="Поиск локации..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white text-sm placeholder-gray-500"
                autoFocus
              />
            </div>

            <div className="max-h-60 overflow-y-auto">
              {/* Popular Locations */}
              {popularLocations.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                    Популярные места
                  </div>
                  {popularLocations.map((location) => (
                    <motion.button
                      key={location.id}
                      type="button"
                      onClick={() => handleLocationSelect(location.name)}
                      whileHover={{ backgroundColor: 'rgba(234, 88, 12, 0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 text-left hover:bg-orange-500/10 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex-1">
                        <div className="text-white font-medium">{location.name}</div>
                        {location.description && (
                          <div className="text-xs text-gray-400 mt-1">{location.description}</div>
                        )}
                      </div>
                      {value === location.name && (
                        <Check className="w-4 h-4 text-orange-500" />
                      )}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Other Locations */}
              {otherLocations.length > 0 && (
                <div>
                  {popularLocations.length > 0 && (
                    <div className="border-t border-orange-500/20 px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Другие места
                    </div>
                  )}
                  {otherLocations.map((location) => (
                    <motion.button
                      key={location.id}
                      type="button"
                      onClick={() => handleLocationSelect(location.name)}
                      whileHover={{ backgroundColor: 'rgba(234, 88, 12, 0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 text-left hover:bg-orange-500/10 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex-1">
                        <div className="text-white font-medium">{location.name}</div>
                        {location.description && (
                          <div className="text-xs text-gray-400 mt-1">{location.description}</div>
                        )}
                      </div>
                      {value === location.name && (
                        <Check className="w-4 h-4 text-orange-500" />
                      )}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* No Results */}
              {filteredLocations.length === 0 && (
                <div className="px-4 py-8 text-center text-gray-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <div className="text-sm">Локация не найдена</div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};