import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
    const baseStyle = "px-6 py-3 rounded-xl font-medium transition-all duration-300 transform active:scale-95 inline-flex justify-center items-center cursor-pointer";
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/30",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-primary-50",
        outline: "border-2 border-white text-white hover:bg-white/10",
        ghost: "text-primary hover:bg-primary-50",
        neutral: "bg-white text-slate-600 border-2 border-slate-300 hover:bg-slate-50",
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
