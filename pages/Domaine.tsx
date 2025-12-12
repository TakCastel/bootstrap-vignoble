import React from 'react';
import { motion } from 'framer-motion';

export const Domaine: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header Image */}
      <div className="h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
            src="https://images.unsplash.com/photo-1534234828563-025972322a3a?q=80&w=2669&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Vallée du Rhône"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="text-6xl md:text-8xl font-display text-white mb-4">Le Terroir</h1>
                <p className="text-xl font-serif italic text-brand-red">Entre Mistral et Soleil</p>
            </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl">
        
        {/* Section 1: Septentrional vs Meridional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-6">
                <span className="text-brand-red uppercase tracking-widest text-xs font-bold border border-brand-red/30 px-3 py-1 rounded-full">Géographie</span>
                <h2 className="text-4xl md:text-5xl font-display">Deux visages, une passion</h2>
                <p className="text-stone-300 leading-relaxed text-lg font-light">
                    Notre domaine s'étend sur les deux rives du Rhône. Au Nord (Septentrional), nos Syrah s'accrochent aux coteaux granitiques vertigineux de Côte-Rôtie et Hermitage. C'est le royaume de la minéralité et de l'élégance pure.
                </p>
                <p className="text-stone-300 leading-relaxed text-lg font-light">
                    Au Sud (Méridional), autour de Châteauneuf-du-Pape, le Grenache roi s'épanouit sur les célèbres galets roulés qui emmagasinent la chaleur du jour pour la restituer la nuit, offrant des vins solaires et généreux.
                </p>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1597816834789-322197609277?q=80&w=2670&auto=format&fit=crop" 
                    className="w-full h-full object-cover"
                    alt="Vignes en terrasse"
                />
            </div>
        </div>

        {/* Section 2: Mistral & Galets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
             <div className="order-2 md:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2670&auto=format&fit=crop" 
                    className="w-full h-full object-cover"
                    alt="Galets Roulés"
                />
            </div>
            <div className="order-1 md:order-2 space-y-6">
                <span className="text-brand-red uppercase tracking-widest text-xs font-bold border border-brand-red/30 px-3 py-1 rounded-full">Climat</span>
                <h2 className="text-4xl md:text-5xl font-display">Forgé par le vent</h2>
                <p className="text-stone-300 leading-relaxed text-lg font-light">
                    Le Mistral est notre meilleur allié. Ce vent puissant et sec assainit le vignoble naturellement après la pluie, nous permettant de cultiver nos terres en agriculture biologique avec un minimum d'intervention.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-stone-900/50 p-6 rounded-2xl text-center border border-white/5">
                        <span className="block text-3xl font-display text-white mb-1">13</span>
                        <span className="text-[10px] uppercase text-stone-400 tracking-widest">Cépages Autorisés</span>
                    </div>
                    <div className="bg-stone-900/50 p-6 rounded-2xl text-center border border-white/5">
                        <span className="block text-3xl font-display text-white mb-1">100%</span>
                        <span className="text-[10px] uppercase text-stone-400 tracking-widest">Vendange Manuelle</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 3: Quote */}
        <div className="text-center max-w-4xl mx-auto py-20 bg-stone-900 rounded-[3rem] border border-white/5 px-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none"></div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6 relative z-10">"Ici, la vigne ne pousse pas, elle résiste. C'est de cette lutte que naît l'arôme."</h2>
            <p className="text-brand-red uppercase tracking-widest text-xs font-bold">L'Adage du Vigneron</p>
        </div>

      </div>
    </div>
  );
};