import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WINES } from '../constants';
import { WineSection } from '../components/WineSection';
import { ArrowDown, Star, Wind } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* HERO SECTION - Softer, Floating, Rhône focused */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
          
          {/* Background Atmosphere */}
          <div className="absolute inset-0 bg-[#050505]">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
          </div>

          <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <motion.div 
                 style={{ opacity: heroOpacity }}
                 className="space-y-8"
              >
                  <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm">
                      <Wind size={14} className="text-stone-400" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">Porté par le Mistral</span>
                  </div>
                  
                  <h1 className="text-7xl md:text-9xl font-display font-medium text-white leading-[0.9] tracking-tight">
                      L'Âme du <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400 font-serif italic">Rhône.</span>
                  </h1>

                  <p className="text-stone-400 text-lg md:text-xl max-w-lg font-light leading-relaxed">
                      De la Côte-Rôtie à Châteauneuf-du-Pape. Une collection de crus d'exception, élevés dans le respect des traditions séculaires de la vallée.
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-4">
                      <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                          Explorer les millésimes
                      </button>
                      <div className="flex items-center gap-2">
                           <div className="flex -space-x-2">
                               {[1,2,3].map(i => (
                                   <div key={i} className="w-8 h-8 rounded-full bg-stone-800 border border-stone-900 flex items-center justify-center text-[8px] text-white">
                                       <Star size={10} className="fill-brand-red text-brand-red" />
                                   </div>
                               ))}
                           </div>
                           <span className="text-xs text-stone-500 font-medium pl-2">Approuvé par les sommeliers</span>
                      </div>
                  </div>
              </motion.div>

              {/* Right Visual - Organic Mask */}
              <motion.div 
                 style={{ y: titleY }}
                 className="relative h-[600px] md:h-[800px] w-full flex items-center justify-center lg:justify-end"
              >
                   {/* Main Image with rounded mask */}
                   <div className="absolute inset-0 rounded-[3rem] overflow-hidden rotate-2 opacity-80 border border-white/5">
                        <img 
                            src="https://images.unsplash.com/photo-1596752309831-255d676834b7?q=80&w=2670&auto=format&fit=crop" 
                            className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-1000 scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                   </div>

                   {/* Floating Bottle */}
                   <div className="relative z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-700">
                        <img 
                            src="https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-red-wine-bottle-isolated-on-white-background-png-image_9934372.png" 
                            className="h-[500px] md:h-[700px] object-contain drop-shadow-2xl"
                        />
                   </div>
              </motion.div>

          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
          >
              <ArrowDown size={24} />
          </motion.div>
      </section>

      {/* Wine Showcase */}
      <div className="relative z-20">
        {WINES.map((wine, index) => (
          <WineSection key={wine.id} wine={wine} index={index} />
        ))}
      </div>
      
      {/* Footer CTA - Modernized */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-display font-medium text-white mb-6 tracking-tight">
                Le Club <span className="font-serif italic text-brand-red">Privilège</span>
            </h2>
            <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                Rejoignez le cercle des amateurs de grands vins du Rhône. Accès prioritaire aux allocations de Côte-Rôtie et Châteauneuf-du-Pape.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <input 
                    type="email" 
                    placeholder="VOTRE EMAIL" 
                    className="w-full md:w-96 bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none text-white focus:border-brand-red transition-colors text-center md:text-left"
                />
                <Button variant="red">S'inscrire</Button>
            </div>
        </div>
      </section>
    </div>
  );
};