import React from 'react';
import { Shield, Clock, CreditCard, Headphones, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Полная страховка',
    description: 'Все автомобили застрахованы по КАСКО и ОСАГО',
  },
  {
    icon: Clock,
    title: 'Быстрое оформление',
    description: 'Оформление договора занимает не более 15 минут',
  },
  {
    icon: CreditCard,
    title: 'Удобная оплата',
    description: 'Оплата наличными, картой или безналичный расчет',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Круглосуточная поддержка по телефону и в чате',
  },
  {
    icon: MapPin,
    title: 'Удобные локации',
    description: 'Офисы в аэропортах и центре города',
  },
  {
    icon: Award,
    title: 'Гарантия качества',
    description: 'Только проверенные и исправные автомобили',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Почему выбирают </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">нас</span>
          </h2>
          <p className="text-lg text-gray-400">
            Мы делаем аренду автомобилей простой и удобной
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="glass-effect rounded-2xl p-8 border border-dark-800/50 hover:border-orange-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300 group-hover:scale-110 transform">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};