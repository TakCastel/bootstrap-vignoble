import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const CartSidebar: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-stone-900 border-l border-stone-800 shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-stone-800 flex justify-between items-center">
              <h2 className="font-display text-xl text-white">Votre Cave</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-stone-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-20 text-stone-500">
                  <p className="mb-4">Votre panier est vide.</p>
                  <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                    Découvrir nos vins
                  </Button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-stone-800/30 p-4 rounded-lg border border-stone-800/50">
                    <div className="w-16 h-24 bg-gradient-to-b from-stone-700 to-stone-800 rounded flex items-center justify-center overflow-hidden relative">
                        {/* Minimal bottle representation */}
                        <div className="w-4 h-16 rounded-sm" style={{ backgroundColor: item.bottleColor === '#ffffff00' ? '#e2e8f0' : item.bottleColor }}></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif text-white">{item.name}</h3>
                        <span className="font-bold text-gold-500">{item.price * item.quantity}€</span>
                      </div>
                      <p className="text-xs text-stone-400 mb-3">{item.appellation} - {item.year}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3 bg-stone-950 rounded px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-stone-400 hover:text-white"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-stone-400 hover:text-white"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-stone-800 bg-stone-900">
              <div className="flex justify-between items-center mb-4">
                <span className="text-stone-400 uppercase tracking-wider text-xs">Total</span>
                <span className="text-2xl font-display text-white">{cartTotal}€</span>
              </div>
              <p className="text-xs text-stone-500 mb-6 text-center">Taxes et frais de port calculés à la commande</p>
              <Button fullWidth disabled={cart.length === 0}>
                Commander
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
