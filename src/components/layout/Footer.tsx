import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Youtube, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  const navLinks = [
    { to: '/cars', label: 'Автомобили' },
    { to: '/about', label: 'О компании' },
    { to: '/terms', label: 'Условия аренды' },
    { to: '/contacts', label: 'Контакты' }
  ];

  const categories = [
    { to: '/cars?category=economy', label: 'Эконом' },
    { to: '/cars?category=comfort', label: 'Комфорт' },
    { to: '/cars?category=business', label: 'Бизнес' },
    { to: '/cars?category=premium', label: 'Премиум', special: true },
    { to: '/cars?category=suv', label: 'Внедорожники' },
    { to: '/cars?category=sport', label: 'Спорткары' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-dark-900 to-dark-950 text-gray-400 border-t border-dark-800/50">
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Logo className="mb-6" />
              <p className="text-sm mb-6 text-gray-500 max-w-sm">
                Премиальный сервис аренды автомобилей с эксклюзивной коллекцией и персональным подходом к каждому клиенту.
              </p>
              
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Подписка на новости</h4>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-600 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2.5 glass-effect-light rounded-xl hover:bg-white/10 hover:text-primary-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                Навигация
              </h3>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block hover:text-primary-400 hover:translate-x-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-6">Категории</h3>
              <nav className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.to}
                    to={category.to}
                    className="block hover:text-primary-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                  >
                    {category.special && <Sparkles className="w-3 h-3 text-accent-gold" />}
                    {category.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-white font-semibold mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group hover:text-primary-400 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                  <div>
                    <p className="font-medium text-white">+7 (495) 123-45-67</p>
                    <p className="text-xs text-gray-500">Круглосуточно</p>
                  </div>
                </div>
                
                <a href="mailto:info@shibacars.ru" className="flex items-start gap-3 group hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                  <span>info@shibacars.ru</span>
                </a>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                  <p>Москва, ул. Тверская, 15</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                  <p>Ежедневно: 09:00 - 21:00</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-dark-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} ShibaCars. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="hover:text-primary-400 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};