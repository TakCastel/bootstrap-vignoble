import React from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';
import { Wine } from '../../types';

interface BottleProps {
  wine: Wine;
  scrollYProgress: MotionValue<number>;
}

export const Bottle: React.FC<BottleProps> = ({ wine, scrollYProgress }) => {
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100
  });

  // More subtle parallax, less rotation for a "Technical Product Shot" feel
  const y = useTransform(smoothProgress, [0, 1], [-30, 30]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const rotate = useTransform(smoothProgress, [0, 1], [-5, 5]);

  const getBottleImage = (type: string) => {
    switch (type) {
      case 'white': return 'https://png.pngtree.com/png-vector/20231222/ourmid/pngtree-white-wine-bottle-isolated-on-white-background-png-image_11382408.png';
      case 'rose': return 'https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-rose-wine-bottle-isolated-png-image_11565257.png';
      case 'champagne': return 'https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-champagne-bottle-isolated-on-white-background-png-image_9998858.png';
      default: return 'https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-red-wine-bottle-isolated-on-white-background-png-image_9934372.png';
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
       {/* Stylized Shadow Element placed behind */}
       <motion.div 
         style={{ scale }}
         className="absolute bottom-0 w-[60%] h-4 bg-black/50 blur-lg rounded-[100%]"
       />

       <motion.div
         style={{ y, rotate, scale }}
         className="relative z-10 w-[180px] md:w-[240px]"
       >
         <img 
            src={getBottleImage(wine.type)} 
            alt={wine.name}
            className="w-full h-auto object-contain drop-shadow-2xl"
            style={{ 
                filter: "drop-shadow(10px 10px 20px rgba(0,0,0,0.6)) contrast(1.1) saturate(1.1)" 
            }}
         />
       </motion.div>
    </div>
  );
};