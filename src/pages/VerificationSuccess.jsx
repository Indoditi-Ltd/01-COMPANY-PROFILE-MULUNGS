import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const VerificationSuccess = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-b from-primary-50/50 to-transparent">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-md w-full bg-white/80 backdrop-blur-2xl p-10 rounded-3xl shadow-xl shadow-primary/5 border border-white/60"
            >
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2
                    }}
                    className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-green-50/50"
                >
                    <CheckCircle className="w-12 h-12 text-green-500" strokeWidth={3} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold text-gray-900 mb-3"
                >
                    Verifikasi Berhasil!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 mb-10 text-lg leading-relaxed"
                >
                    Akun Anda telah berhasil diaktifkan. Selamat datang di komunitas kami!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/">
                        <Button className="w-full flex items-center justify-center gap-2 group">
                            Lanjut ke Beranda
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default VerificationSuccess;
