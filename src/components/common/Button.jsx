import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 rounded-xl font-medium transition-all duration-300 transform active:scale-95";
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/30",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-primary-50",
        outline: "border-2 border-white text-white hover:bg-white/10",
        ghost: "text-primary hover:bg-primary-50",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
