import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-black to-orange-600/5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="block sm:inline text-white">Готовы арендовать </span>
            <span className="block sm:inline bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">автомобиль?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Выберите идеальный автомобиль для ваших потребностей прямо сейчас
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/cars">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Выбрать автомобиль
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a href="tel:+74951234567">
              <Button 
                size="lg" 
                className="glass-effect-light border border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Позвонить нам
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: 'От 2500₽', label: 'в день' },
              { value: '15 минут', label: 'на оформление' },
              { value: '0₽', label: 'скрытых платежей' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-light rounded-2xl p-4 sm:p-6 border border-dark-800/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold mb-2 text-orange-500">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};