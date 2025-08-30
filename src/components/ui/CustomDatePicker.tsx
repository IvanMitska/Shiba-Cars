import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, isAfter, isBefore } from 'date-fns';
import { ru } from 'date-fns/locale';

interface CustomDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  minDate?: Date;
  maxDate?: Date;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ 
  value, 
  onChange, 
  label,
  minDate = new Date(),
  maxDate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedDate = value ? new Date(value) : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Добавляем дни предыдущего месяца для заполнения первой недели
  const startDate = new Date(monthStart);
  startDate.setDate(startDate.getDate() - monthStart.getDay());
  
  const endDate = new Date(monthEnd);
  endDate.setDate(endDate.getDate() + (6 - monthEnd.getDay()));
  
  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

  const handleDateSelect = (date: Date) => {
    onChange(format(date, 'yyyy-MM-dd'));
    setIsOpen(false);
  };

  const isDateDisabled = (date: Date) => {
    if (isBefore(date, minDate)) return true;
    if (maxDate && isAfter(date, maxDate)) return true;
    return false;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <label className="block text-sm font-medium text-gray-400 mb-3">
          <Calendar className="inline w-4 h-4 mr-2 text-orange-400" />
          {label}
        </label>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white transition-all duration-300 text-left ${
            isOpen ? 'ring-2 ring-orange-500 border-transparent' : ''
          }`}
        >
          {selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: ru }) : 'Выберите дату'}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 z-[9999] mt-2 bg-dark-900/95 backdrop-blur-xl border border-orange-500/30 rounded-xl shadow-2xl overflow-hidden"
            style={{
              top: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().bottom + 8 : 'auto',
              left: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().left : 'auto',
              width: dropdownRef.current ? dropdownRef.current.offsetWidth : 'auto'
            }}
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-4 border-b border-orange-500/20">
              <button
                type="button"
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                className="p-2 hover:bg-orange-500/20 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-orange-400" />
              </button>
              
              <h3 className="text-lg font-semibold text-white">
                {format(currentMonth, 'LLLL yyyy', { locale: ru })}
              </h3>
              
              <button
                type="button"
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                className="p-2 hover:bg-orange-500/20 rounded-lg transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 border-b border-orange-500/20">
              {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                <div key={day} className="p-3 text-center text-sm font-medium text-gray-400">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 p-2">
              {calendarDays.map((date, index) => {
                const isCurrentMonth = isSameMonth(date, currentMonth);
                const isSelected = selectedDate && isSameDay(date, selectedDate);
                const isDisabled = isDateDisabled(date);
                const isToday = isSameDay(date, new Date());

                return (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => !isDisabled && handleDateSelect(date)}
                    disabled={isDisabled}
                    whileHover={!isDisabled ? { scale: 1.1 } : {}}
                    whileTap={!isDisabled ? { scale: 0.95 } : {}}
                    className={`
                      p-2 text-sm rounded-lg transition-all duration-200 m-0.5
                      ${isCurrentMonth ? 'text-white' : 'text-gray-600'}
                      ${isSelected ? 'bg-orange-500 text-black font-bold' : ''}
                      ${isToday && !isSelected ? 'bg-orange-500/20 text-orange-400 font-semibold' : ''}
                      ${!isDisabled && !isSelected ? 'hover:bg-orange-500/20 hover:text-orange-400' : ''}
                      ${isDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {format(date, 'd')}
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="border-t border-orange-500/20 p-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleDateSelect(new Date())}
                  className="px-3 py-1.5 text-xs bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors"
                >
                  Сегодня
                </button>
                <button
                  type="button"
                  onClick={() => handleDateSelect(new Date(Date.now() + 24 * 60 * 60 * 1000))}
                  className="px-3 py-1.5 text-xs bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors"
                >
                  Завтра
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};