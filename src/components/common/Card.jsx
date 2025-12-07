import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" } : {}}
            className={`bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
