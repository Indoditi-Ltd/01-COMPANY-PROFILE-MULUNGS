import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, Download, Users, Lightbulb,
    Trash2, TrendingUp, RefreshCw, ShieldCheck,
    Wallet, Heart, ShoppingBag, Sprout, Home as HomeIcon,
    Gift
} from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import SectionWrapper from '../components/common/SectionWrapper';
import heroImage from '../assets/hero-illustration.png';

const Home = () => {
    const products = [
        { title: "Ngulang", icon: RefreshCw, desc: "Produk isi ulang kebutuhan rumah tangga.", color: "text-blue-500", bg: "bg-blue-50" },
        { title: "Investasi", icon: TrendingUp, desc: "Investasi jangka panjang bersama petani.", color: "text-green-500", bg: "bg-green-50" },
        { title: "Asuransi BarengJaga", icon: ShieldCheck, desc: "Asuransi keluarga yang bisa diwariskan.", color: "text-indigo-500", bg: "bg-indigo-50" },
        { title: "Layanan Digital", icon: Wallet, desc: "PPOB, kebutuhan pribadi, dan uang tunai.", color: "text-purple-500", bg: "bg-purple-50" },
        { title: "Galang Bareng", icon: Heart, desc: "Donasi & aksi sosial cepat tanggap.", color: "text-pink-500", bg: "bg-pink-50" },
        { title: "Anti Laper", icon: ShoppingBag, desc: "Produk recovery food untuk pemulihan.", color: "text-orange-500", bg: "bg-orange-50" },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-50 to-white pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                                Super App <span className="text-primary">Bank Sampah</span> Solusi Ketahanan Pangan.
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Mewujudkan gizi dan kesehatan setara untuk setiap rumah tangga dengan pengelolaan sampah terpadu.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary" className="flex items-center gap-2">
                                    <Download size={20} /> Download App
                                </Button>
                                <Button variant="secondary" className="flex items-center gap-2">
                                    <Users size={20} /> Gabung Mitra
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img src={heroImage} alt="Mulungs Ecosystem" className="w-full h-auto drop-shadow-2xl rounded-3xl" />
                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-600"><Sprout size={24} /></div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">Lingkungan Bersih</p>
                                        <p className="text-xs text-slate-500">Mulai dari rumah anda</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Mengapa Mulungs Hadir?</h2>
                    <p className="text-slate-600">
                        Aktivitas pengolahan sampah meningkat, namun belum memiliki ekosistem yang baik untuk menyelesaikan kebutuhan dasar rumah tangga.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Masalah Sampah", icon: Trash2, desc: "Volume sampah rumah tangga terus meningkat tanpa solusi terpadu." },
                        { title: "Kebutuhan Pangan", icon: HomeIcon, desc: "Belum adanya integrasi pengelolaan sampah untuk mendukung ketahanan pangan." },
                        { title: "Ekosistem Belum Siap", icon: Lightbulb, desc: "Kurangnya sinergi antara rumah tangga, petani, dan pengelolaan sampah." },
                    ].map((item, idx) => (
                        <Card key={idx} className="text-center p-8 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Solution Section (Flow) */}
            <section className="bg-slate-900 py-20 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Solusi Ekosistem Mulungs</h2>
                        <p className="text-slate-400">Integrasi multi sektor dari hulu ke hilir</p>
                    </div>

                    <div className="relative">
                        {/* Connection Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-primary to-slate-800 -translate-y-1/2 opacity-30"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "1", title: "Bank Pembantu", icon: HomeIcon, desc: "Pengumpulan awal dari rumah tangga" },
                                { step: "2", title: "Bank Utama", icon: Users, desc: "Sentra pengelolaan tingkat wilayah" },
                                { step: "3", title: "Kawasan Pengolahan", icon: RefreshCw, desc: "Integrasi Contract Farming Multi Sektoral" },
                                { step: "4", title: "Manfaat Kembali", icon: Gift, desc: "Nilai ekonomi & Pangan untuk keluarga" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center relative group hover:bg-slate-750 transition-all">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Innovation */}
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">6 Produk Unggulan</h2>
                    <p className="text-slate-600">Inovasi untuk kesejahteraan mitra dan lingkungan</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, idx) => (
                        <Card key={idx} className="hover:border-primary/30 group">
                            <div className={`w-12 h-12 ${product.bg} ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <product.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-800">{product.title}</h3>
                            <p className="text-slate-600">{product.desc}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Before / After */}
            <SectionWrapper className="bg-primary-50/50 rounded-3xl my-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Transformasi</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Sebelum vs Sesudah Mulungs</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-400">
                                <h4 className="font-bold text-slate-800 mb-2">Sebelum</h4>
                                <p className="text-slate-600 text-sm">Sampah menumpuk, TPA penuh, tidak ada nilai ekonomi, biaya kesehatan tinggi.</p>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <div className="bg-primary/10 p-2 rounded-full text-primary rotate-90 md:rotate-0"><ArrowRight /></div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
                                <h4 className="font-bold text-slate-800 mb-2">Sesudah</h4>
                                <p className="text-slate-600 text-sm">Lingkungan bersih, nilai ekonomi sampah kembali berupa pangan bergizi, masyarakat sehat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {/* Visual representation could go here, for now using a clean graphic placeholder */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-2xl shadow-lg opacity-60 scale-95 translate-y-4">
                                <div className="h-32 bg-slate-200 rounded-xl mb-4"></div>
                                <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-xl border-2 border-primary z-10">
                                <div className="h-32 bg-primary-100 rounded-xl mb-4 flex items-center justify-center text-primary">
                                    <Sprout size={48} />
                                </div>
                                <div className="h-4 w-3/4 bg-primary-100 rounded"></div>
                                <div className="h-4 w-1/2 bg-primary-100 rounded mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Call to Action */}
            <section className="bg-primary py-20">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Menjadi Bagian dari Perubahan?</h2>
                    <p className="text-lg text-primary-50 mb-8">
                        Bergabunglah dengan ribuan rumah tangga lainnya untuk lingkungan yang lebih bersih dan masa depan yang lebih sehat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">Download Sekarang</button>
                        <button className="bg-primary-600 text-white border border-primary-400 font-bold py-4 px-8 rounded-xl hover:bg-primary-700 transition-colors">Pelajari Lebih Lanjut</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
