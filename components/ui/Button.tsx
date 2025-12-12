import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'red';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Updated: Rounded-full instead of sharp edges
  const baseStyles = "px-8 py-4 font-sans uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 relative overflow-hidden group rounded-full";
  
  const variants = {
    primary: "bg-white text-black hover:bg-brand-red hover:text-white border border-white hover:border-brand-red shadow-lg hover:shadow-brand-red/20",
    red: "bg-brand-red text-white hover:bg-white hover:text-brand-red border border-brand-red shadow-lg hover:shadow-brand-red/20",
    outline: "bg-transparent border border-white/30 text-white hover:border-white hover:bg-white hover:text-black",
    ghost: "text-stone-400 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};