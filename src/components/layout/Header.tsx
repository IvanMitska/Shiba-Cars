import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Heart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { useFavoritesStore } from '../../store/useFavoritesStore';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const favorites = useFavoritesStore(state => state.favorites);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/cars', label: 'Автомобили' },
    { to: '/about', label: 'О компании' },
    { to: '/terms', label: 'Условия' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <header 
      className={cn(
        "glass-effect sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "py-2 shadow-xl shadow-black/10" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo animated={!isScrolled} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative px-4 py-2 text-sm font-semibold transition-colors duration-200',
                    isActive 
                      ? 'text-orange-500' 
                      : 'text-gray-100 hover:text-white'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-orange-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link 
              to="/favorites" 
              className="relative p-2.5 glass-effect-light rounded-xl hover:bg-white/10 transition-colors duration-200 group"
            >
              <Heart className="w-5 h-5 text-gray-100 group-hover:text-orange-500 transition-colors" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            
            <Link 
              to="/profile" 
              className="p-2.5 glass-effect-light rounded-xl hover:bg-white/10 transition-colors duration-200 group"
            >
              <User className="w-5 h-5 text-gray-100 group-hover:text-orange-500 transition-colors" />
            </Link>

            <div className="flex items-center gap-2 px-4 py-2 glass-effect-light rounded-xl">
              <Phone className="w-4 h-4 text-orange-500" />
              <span className="font-semibold text-white text-sm">+7 (495) 123-45-67</span>
            </div>
            
            <Button 
              onClick={() => navigate('/cars')}
              className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2.5 rounded-xl font-bold transition-colors duration-200"
            >
              Каталог авто
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 glass-effect-light rounded-xl hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        </div>
        
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 px-4 glass-effect rounded-2xl mx-4 my-2 max-h-[calc(100vh-120px)] overflow-y-auto">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'block px-4 py-3 text-base font-medium hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-200',
                          isActive 
                            ? 'bg-orange-500/20 text-orange-500 font-bold' 
                            : 'text-gray-100'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                
                <div className="mt-6 space-y-3">
                  <Link 
                    to="/favorites" 
                    className="flex items-center gap-3 text-gray-100 font-medium hover:text-orange-500 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Избранное ({favorites.length})</span>
                  </Link>
                  
                  <div className="flex items-center gap-3 text-gray-100 font-medium py-2">
                    <Phone className="w-4 h-4 text-orange-500" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-xl font-semibold transition-colors duration-200" 
                    onClick={() => {
                      navigate('/cars');
                      setIsMenuOpen(false);
                    }}
                  >
                    Каталог авто
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </header>
  );
};