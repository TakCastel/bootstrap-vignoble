import React from 'react';
import { Package, MapPin, CreditCard, LogOut } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const UserProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-display text-white mb-2">Mon Compte</h1>
        <p className="text-stone-400 mb-12">Bienvenue, Jean Dupont</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="col-span-1 space-y-2">
            <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <button className="flex items-center space-x-3 text-gold-500 w-full text-left p-2 bg-stone-800/50 rounded mb-2">
                    <Package size={18} />
                    <span className="text-sm font-bold uppercase tracking-wide">Commandes</span>
                </button>
                 <button className="flex items-center space-x-3 text-stone-400 hover:text-white w-full text-left p-2 transition-colors">
                    <MapPin size={18} />
                    <span className="text-sm font-bold uppercase tracking-wide">Adresses</span>
                </button>
                 <button className="flex items-center space-x-3 text-stone-400 hover:text-white w-full text-left p-2 transition-colors">
                    <CreditCard size={18} />
                    <span className="text-sm font-bold uppercase tracking-wide">Paiement</span>
                </button>
            </div>
            <Button variant="outline" fullWidth className="mt-4 flex items-center justify-center gap-2">
                <LogOut size={14} /> Déconnexion
            </Button>
          </div>

          {/* Main Content Area */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-lg p-6">
                <h2 className="text-xl font-serif text-white mb-6 border-b border-stone-800 pb-4">Dernières Commandes</h2>
                
                <div className="space-y-4">
                    {[1, 2].map((order) => (
                        <div key={order} className="flex justify-between items-center p-4 bg-stone-800/30 rounded border border-stone-800 hover:border-stone-700 transition-colors">
                            <div>
                                <p className="text-white font-bold text-sm mb-1">Commande #MV-{2024000 + order}</p>
                                <p className="text-xs text-stone-500">24 Octobre 2024</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gold-500 font-display mb-1">{order === 1 ? '185.00' : '340.00'}€</p>
                                <span className="text-[10px] uppercase tracking-wider bg-green-900/30 text-green-400 px-2 py-1 rounded-full border border-green-900">Livrée</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
