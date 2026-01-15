import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, Download, Users, Lightbulb,
    Trash2, TrendingUp, RefreshCw, ShieldCheck,
    Wallet, Heart, ShoppingBag, Sprout, Home as HomeIcon,
    Gift, Check, X
} from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import SectionWrapper from '../components/common/SectionWrapper';
import heroImage from '../assets/hero-illustration.png';

const Home = () => {
    const products = [
        { title: "Ngulang", icon: RefreshCw, desc: "Produk isi ulang kebutuhan rumah tangga.", color: "text-blue-500", bg: "bg-blue-50" },
        { title: "Investasi", icon: TrendingUp, desc: "Pilihan Investasi Terbaik &  Berdampak.", color: "text-green-500", bg: "bg-green-50" },
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
                                Super App <span className="text-primary">Bank Mulungs</span> Solusi Sampah & Pangan.
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Ekosistem pengelolahan sampah lebih bertanggung jawab, untuk Kesehatan dan Kemandirian Ekonomi Keluarga yang lebih setara.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary" className="flex items-center gap-2" href="https://play.google.com/store/apps/details?id=com.indoditi.mulungs_user&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                                    <Download size={20} /> Download App
                                </Button>
                                <Button variant="secondary" className="flex items-center gap-2" href="https://chat.whatsapp.com/H7E2bRaCCUJDU3g7hhKs7P" target="_blank" rel="noopener noreferrer">
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
                                { step: "1", title: "Gerbage Station", icon: HomeIcon, desc: "Merchant Rumah Pilah Sementara ( M-RPS )" },
                                { step: "2", title: "Bank Sentra Utama", icon: Users, desc: "Pusat Pengolahan Sampah Terpadu" },
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
            <SectionWrapper className="pt-20 pb-32">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Transformasi</span>
                    <h2 className="text-3xl font-bold text-slate-900">Dampak Nyata Mulungs</h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-20">
                        {/* Before Card */}
                        <Card className="p-8 border-2 border-slate-200 border-t-red-400 relative bg-white/50 hover:bg-white transition-colors">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-100 p-4 rounded-full text-red-500 shadow-sm">
                                <Trash2 size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-center text-slate-800 mt-8 mb-6">Sebelum Mulungs</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-600 bg-red-50/50 p-3 rounded-lg"><X className="shrink-0 text-red-400" size={20} /> Sampah menumpuk & bau</li>
                                <li className="flex gap-3 text-slate-600 bg-red-50/50 p-3 rounded-lg"><X className="shrink-0 text-red-400" size={20} /> Biaya angkut mahal</li>
                                <li className="flex gap-3 text-slate-600 bg-red-50/50 p-3 rounded-lg"><X className="shrink-0 text-red-400" size={20} /> Tidak ada nilai ekonomi</li>
                                <li className="flex gap-3 text-slate-600 bg-red-50/50 p-3 rounded-lg"><X className="shrink-0 text-red-400" size={20} /> Resiko penyakit tinggi</li>
                            </ul>
                        </Card>

                        {/* After Card */}
                        <Card className="p-8 border-2 border-primary/20 border-t-primary relative shadow-xl shadow-primary/10">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary p-4 rounded-full text-white shadow-lg shadow-primary/30">
                                <Sprout size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-center text-slate-800 mt-8 mb-6">Sesudah Mulungs</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-700 bg-primary-50 p-3 rounded-lg"><Check className="shrink-0 text-primary" size={20} /> Lingkungan bersih & sehat</li>
                                <li className="flex gap-3 text-slate-700 bg-primary-50 p-3 rounded-lg"><Check className="shrink-0 text-primary" size={20} /> Sampah dijemput gratis</li>
                                <li className="flex gap-3 text-slate-700 bg-primary-50 p-3 rounded-lg"><Check className="shrink-0 text-primary" size={20} /> Jadi tabungan uang</li>
                                <li className="flex gap-3 text-slate-700 bg-primary-50 p-3 rounded-lg"><Check className="shrink-0 text-primary" size={20} /> Bonus pangan bergizi</li>
                            </ul>
                        </Card>
                    </div>

                    {/* Center Connector */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10">
                        <div className="bg-white p-2 rounded-full shadow-lg">
                            <div className="bg-gradient-to-r from-red-400 to-primary text-white p-3 rounded-full animate-pulse">
                                <ArrowRight size={24} />
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
                        <a href="https://play.google.com/store/apps/details?id=com.indoditi.mulungs_user&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">Download Sekarang</a>
                        <button className="bg-primary-600 text-white border border-primary-400 font-bold py-4 px-8 rounded-xl hover:bg-primary-700 transition-colors">Pelajari Lebih Lanjut</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
