import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const { setIsCartOpen, cart } = useCart(); 
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nos Crus', path: '/' },
    { name: 'Le Domaine', path: '/domaine' },
    { name: 'Compte', path: '/profile' },
  ];

  return (
    <>
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <motion.div 
        className={`pointer-events-auto flex items-center justify-between px-8 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'w-[90%] md:w-[700px] h-16 bg-stone-950/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50' 
            : 'w-full max-w-7xl h-24 bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span className={`font-display font-bold tracking-widest transition-all ${isScrolled ? 'text-lg text-white' : 'text-2xl text-white'}`}>
            MAISON<span className="text-brand-red">.</span>
          </span>
          {!isScrolled && <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 opacity-80 group-hover:text-brand-red transition-colors">Vallée du Rhône</span>}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-xs uppercase tracking-[0.2em] font-bold text-stone-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="text-white hover:text-brand-red transition-colors relative p-2"
          >
            <ShoppingBag size={18} />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-red text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-black">
                {cartItemCount}
              </span>
            )}
          </button>
           <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>
    </motion.header>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
        {isMobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
        >
            {navLinks.map((link) => (
            <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-display text-white hover:text-brand-red transition-colors"
            >
                {link.name}
            </Link>
            ))}
        </motion.div>
        )}
    </AnimatePresence>
    </>
  );
};