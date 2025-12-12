import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wine } from '../types';
import { Bottle } from './3d/Bottle';
import { Button } from './ui/Button';
import { useCart } from '../context/CartContext';
import { ArrowRight, Plus } from 'lucide-react';

interface WineSectionProps {
  wine: Wine;
  index: number;
}

export const WineSection: React.FC<WineSectionProps> = ({ wine, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isEven = index % 2 === 0;

  // Parallax for the bottle
  const bottleY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[110vh] py-24 flex items-center z-10" 
      style={{ zIndex: 10 + index }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* PRODUCT VISUAL AREA - Rounded Card */}
          <motion.div 
            style={{ scale: cardScale }}
            className={`w-full lg:w-5/12 h-[600px] lg:h-[800px] relative rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-black/50 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
              <div className={`absolute inset-0 transition-colors duration-700 ${isEven ? 'bg-stone-900' : 'bg-[#1a0505]'}`}></div>
              
              {/* Soft Gradient Orb */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] rounded-full opacity-20 blur-[80px] ${isEven ? 'bg-stone-700' : 'bg-brand-red'}`}></div>

              <div className="absolute top-8 left-8 flex flex-col gap-2">
                 <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 text-white border border-white/20 px-3 py-1 rounded-full w-fit">
                    N° 0{index + 1}
                 </span>
                 <span className="text-white/10 font-display font-black text-6xl md:text-8xl leading-none">
                     {wine.year}
                 </span>
              </div>

              {/* The Bottle */}
              <motion.div style={{ y: bottleY }} className="relative z-10 w-full h-full flex items-center justify-center p-8">
                   <Bottle wine={wine} scrollYProgress={scrollYProgress} />
              </motion.div>

              {/* Price Tag Bubble */}
              <div className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4">
                  <span className="text-3xl font-display font-bold text-white block">{wine.price}€</span>
              </div>
          </motion.div>

          {/* INFO / SPECS AREA */}
          <div className={`w-full lg:w-7/12 flex flex-col justify-center relative ${!isEven ? 'lg:order-1 lg:text-right items-end' : 'lg:order-2 items-start'}`}>
             
             <div className="relative z-10 max-w-2xl">
                 <div className={`flex items-center gap-4 mb-6 ${!isEven && 'flex-row-reverse'}`}>
                     <span className={`h-[1px] w-20 ${isEven ? 'bg-brand-red' : 'bg-brand-red'}`}></span>
                     <span className="text-sm uppercase tracking-[0.3em] font-bold text-stone-400">{wine.appellation}</span>
                 </div>

                 <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 uppercase leading-[0.85] tracking-tight">
                     {wine.name}
                 </h2>

                 <div className={`flex gap-6 mb-10 py-6 border-y border-white/5 ${!isEven ? 'justify-end' : ''}`}>
                     <div className={!isEven ? 'text-right' : 'text-left'}>
                         <span className="block text-[10px] uppercase text-stone-500 mb-2 tracking-widest">Cépages & Arômes</span>
                         <p className="text-lg font-serif italic text-white/90">{wine.aromas.join(" • ")}</p>
                     </div>
                     <div className={`w-[1px] bg-white/10`}></div>
                     <div className={!isEven ? 'text-right' : 'text-left'}>
                         <span className="block text-[10px] uppercase text-stone-500 mb-2 tracking-widest">Degré</span>
                         <p className="text-lg font-serif italic text-white/90">{wine.alcohol}% Vol.</p>
                     </div>
                 </div>

                 <p className={`text-stone-400 leading-relaxed text-lg mb-12 font-light max-w-lg ${!isEven ? 'ml-auto' : ''}`}>
                     {wine.description}
                 </p>

                 <div className={`flex flex-wrap gap-4 ${!isEven ? 'justify-end' : ''}`}>
                     <Button 
                        variant={isEven ? "red" : "primary"} 
                        onClick={() => addToCart(wine)}
                        className="min-w-[200px]"
                     >
                         Ajouter à la cave
                     </Button>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};