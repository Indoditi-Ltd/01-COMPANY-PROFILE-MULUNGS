import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Users } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';

const Market = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Market Opportunity</h1>
                    <p className="text-slate-600">Potensi besar dalam pengelolaan sampah dan ketahanan pangan</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 border-t-4 border-primary">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-primary-100 p-3 rounded-full text-primary"><Users size={32} /></div>
                            <h2 className="text-2xl font-bold text-slate-800">User Rumah Tangga</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                                <span className="text-slate-600">Total KK</span>
                                <span className="text-2xl font-bold text-slate-900">170.213</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg border border-primary-100">
                                <span className="text-primary-800">Target Pelanggan</span>
                                <span className="text-2xl font-bold text-primary-600">17.000</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-8 border-t-4 border-blue-400">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-500"><TrendingUp size={32} /></div>
                            <h2 className="text-2xl font-bold text-slate-800">User Aplikasi</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                                <span className="text-slate-600">Total Penduduk</span>
                                <span className="text-2xl font-bold text-slate-900">680.000</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <span className="text-blue-800">User Potensial</span>
                                <span className="text-2xl font-bold text-blue-600">340.000</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* TAM SAM SOM Visualization Placeholder */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center">
                    <h3 className="text-xl font-bold mb-8">Market Size Strategy (TAM - SAM - SOM)</h3>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-full max-w-2xl h-16 bg-slate-200 rounded-full flex items-center justify-center relative">
                            <span className="z-10 font-bold text-slate-500">TAM (Total Available Market)</span>
                            <div className="absolute left-0 top-0 h-full bg-blue-300 rounded-full w-2/3 flex items-center justify-center">
                                <span className="z-10 font-bold text-blue-800">SAM</span>
                                <div className="absolute left-0 top-0 h-full bg-primary rounded-full w-1/3 flex items-center justify-center shadow-lg">
                                    <span className="z-10 font-bold text-white">SOM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Market;
