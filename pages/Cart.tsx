import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    
    return (
        <div className="min-h-screen bg-[#0f0f0f] pt-32 pb-20 px-6">
             <div className="container mx-auto max-w-5xl">
                <h1 className="text-4xl font-display text-white mb-8">Votre Cave</h1>
                
                {cart.length === 0 ? (
                    <div className="text-center py-20 bg-stone-900/50 rounded-lg border border-stone-800">
                        <ShoppingBag size={48} className="mx-auto text-stone-600 mb-6" />
                        <h2 className="text-2xl font-serif text-white mb-4">Votre panier est vide</h2>
                        <p className="text-stone-400 mb-8">Découvrez nos cuvées d'exception pour commencer votre collection.</p>
                        <Link to="/">
                            <Button>Découvrir nos vins</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row gap-6 bg-stone-900 p-6 rounded-lg border border-stone-800 items-center">
                                    <div className="w-full md:w-24 h-32 bg-gradient-to-b from-stone-800 to-stone-900 rounded flex items-center justify-center shrink-0">
                                         <div className="w-6 h-24 rounded-sm shadow-lg" style={{ backgroundColor: item.bottleColor === '#ffffff00' ? '#e2e8f0' : item.bottleColor }}></div>
                                    </div>
                                    
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="font-display text-xl text-white mb-1">{item.name}</h3>
                                        <p className="text-stone-400 text-sm mb-2">{item.appellation} - {item.year}</p>
                                        <p className="text-stone-500 text-xs">{item.price}€ / bouteille</p>
                                    </div>

                                    <div className="flex items-center space-x-4 bg-stone-950 rounded-lg px-3 py-2 border border-stone-800">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-stone-400 hover:text-white transition-colors">
                                            <Minus size={16} />
                                        </button>
                                        <span className="font-serif text-white w-6 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-stone-400 hover:text-white transition-colors">
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <div className="flex flex-col items-end min-w-[100px]">
                                        <span className="text-xl font-display text-gold-500 mb-2">{item.price * item.quantity}€</span>
                                        <button onClick={() => removeFromCart(item.id)} className="text-stone-600 hover:text-red-400 text-xs flex items-center gap-1 transition-colors">
                                            <Trash2 size={12} /> Supprimer
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-stone-900 p-8 rounded-lg border border-stone-800 sticky top-32">
                                <h3 className="font-serif text-xl text-white mb-6 border-b border-stone-800 pb-4">Résumé</h3>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-stone-400">
                                        <span>Sous-total</span>
                                        <span>{cartTotal}€</span>
                                    </div>
                                    <div className="flex justify-between text-stone-400">
                                        <span>Livraison</span>
                                        <span>Calculé à l'étape suivante</span>
                                    </div>
                                    <div className="flex justify-between text-white font-bold text-lg pt-4 border-t border-stone-800">
                                        <span>Total</span>
                                        <span className="text-gold-500">{cartTotal}€</span>
                                    </div>
                                </div>

                                <Button fullWidth className="flex items-center justify-center gap-2 group">
                                    Commander <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                                
                                <p className="text-[10px] text-stone-600 mt-4 text-center">
                                    Paiement sécurisé par Stripe. Vos données sont protégées.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
             </div>
        </div>
    )
}