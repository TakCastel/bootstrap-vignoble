import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 pt-20 pb-10 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-display text-white mb-6">Maison<span className="text-gold-500">.</span></h3>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              L'art de la viticulture transmis depuis cinq générations. 
              Une recherche perpétuelle de l'excellence, du respect du terroir 
              et de la passion du vin.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-serif mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-stone-400 hover:text-gold-500 transition-colors text-sm">Accueil</Link></li>
              <li><Link to="/" className="text-stone-400 hover:text-gold-500 transition-colors text-sm">Nos Vins</Link></li>
              <li><Link to="/profile" className="text-stone-400 hover:text-gold-500 transition-colors text-sm">Mon Compte</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Légal</h4>
            <ul className="space-y-4">
              <li><Link to="/legal" className="text-stone-400 hover:text-gold-500 transition-colors text-sm">Mentions Légales</Link></li>
              <li><Link to="/legal" className="text-stone-400 hover:text-gold-500 transition-colors text-sm">CGV</Link></li>
              <li><Link to="/legal" className="text-stone-400 hover:text-gold-500 transition-colors text-sm">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>&copy; {new Date().getFullYear()} Maison Vigneron. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0 italic">L'abus d'alcool est dangereux pour la santé, à consommer avec modération.</p>
        </div>
      </div>
    </footer>
  );
};
