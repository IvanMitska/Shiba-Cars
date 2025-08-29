import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Search, Star, Shield, Clock, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { format, addDays } from 'date-fns';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(addDays(new Date(), 3), 'yyyy-MM-dd'));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/cars');
  };

  const stats = [
    { value: '500+', label: 'Премиум авто', icon: Award },
    { value: '50K+', label: 'Довольных клиентов', icon: Star },
    { value: '24/7', label: 'Поддержка', icon: Clock },
    { value: '4.9', label: 'Рейтинг', icon: Shield }
  ];

  return (
    <section className="relative min-h-[100vh] -mt-20 pt-20 flex items-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-[56.25vw] h-full transform -translate-x-1/2 -translate-y-1/2 lg:scale-110 scale-150"
          src="https://www.youtube.com/embed/h_pezlTDe0U?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playlist=h_pezlTDe0U&playsinline=1"
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 lg:from-black/80 lg:via-black/70 lg:to-black/90"></div>
      
      {/* Gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <span className="px-6 py-2.5 bg-orange-500/10 backdrop-blur-sm rounded-full text-sm font-semibold text-orange-400 border border-orange-500/30 tracking-wider">
              ПРЕМИУМ АВТОМОБИЛИ НА ПХУКЕТЕ
            </span>
          </motion.div>
          
          <h1 className="mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-6xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">SHIBA</span>
              <span className="text-white ml-4">CARS</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-2xl lg:text-3xl text-gray-300 mt-4 font-light tracking-wide"
            >
              Аренда премиальных автомобилей
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Эксклюзивная коллекция автомобилей для особых моментов
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto mt-12"
        >
          <form onSubmit={handleSearch} className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/10 shadow-2xl shadow-black/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-3">
                  <Calendar className="inline w-4 h-4 mr-2 text-orange-400" />
                  Дата начала
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white transition-all duration-300 placeholder-gray-500"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-3">
                  <Calendar className="inline w-4 h-4 mr-2 text-orange-400" />
                  Дата возврата
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white transition-all duration-300 placeholder-gray-500"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-3">
                  <MapPin className="inline w-4 h-4 mr-2 text-orange-400" />
                  Место получения
                </label>
                <select className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white transition-all duration-300">
                  <option>Аэропорт Пхукета</option>
                  <option>Патонг</option>
                  <option>Карон</option>
                  <option>Ката</option>
                  <option>Камала</option>
                  <option>Раваи</option>
                </select>
              </motion.div>

              <div className="flex items-end">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black py-3.5 rounded-xl font-semibold shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Найти авто
                </Button>
              </div>
            </div>
          </form>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center group hover-lift"
            >
              <div className="glass-effect-light rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-orange-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-orange-500/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-orange-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};