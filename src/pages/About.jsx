import React from 'react';
import { motion } from 'framer-motion';
import { Users, Truck, Factory, Sprout, Heart, Target } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';

const About = () => {
    return (
        <>
            {/* Hero / Intro */}
            <section className="bg-primary/5 py-20">
                <SectionWrapper>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tentang <span className="text-primary">Mulungs</span></h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Mulungs adalah <span className="font-semibold text-primary">Super App Bank Sampah</span> yang mengintegrasikan seluruh proses pengelolaan sampah secara terpadu berbasis <span className="font-semibold">Contract Farming Multi Sektoral</span>.
                        </p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Mission */}
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-primary-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full blur-3xl opacity-30 -mr-10 -mt-10"></div>
                        <h2 className="text-3xl font-bold mb-6 relative z-10">Misi Kami</h2>
                        <blockquote className="text-2xl font-light italic relative z-10">
                            "Memberikan gizi dan kesehatan setara untuk setiap rumah tangga."
                        </blockquote>
                        <p className="mt-6 text-primary-100 relative z-10">
                            Melalui pengelolaan sampah yang bertanggung jawab, kami menciptakan nilai ekonomi yang dikembalikan dalam bentuk pangan bergizi.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Menjawab Tantangan Nasional</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Ketahanan Pangan", desc: "Mendukung produksi pangan lokal melalui integrasi tani & ternak." },
                                { title: "Pengelolaan Sampah", desc: "Mengatasi volume sampah organik & anorganik yang terus meningkat." },
                                { title: "Ekonomi Sirkular", desc: "Mengubah limbah menjadi sumber daya bernilai ekonomi tinggi." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-primary-50 p-2 rounded-lg text-primary"><Target size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Ecosystem */}
            <section className="bg-slate-900 py-20 text-white">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Ekosistem Mulungs</h2>
                        <p className="text-slate-400">Menghubungkan seluruh pemangku kepentingan dalam satu lingkaran kebaikan</p>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { icon: Users, title: "Masyarakat", desc: "Sumber sampah & penerima manfaat" },
                            { icon: Truck, title: "Bank Sampah", desc: "Pengumpulan & pemilahan awal" },
                            { icon: Factory, title: "Pengolahan", desc: "Pusat daur ulang terpadu" },
                            { icon: Sprout, title: "Pertanian", desc: "Pemanfaatan pupuk & pakan" },
                            { icon: Heart, title: "Pangan & Gizi", desc: "Hasil kembali ke keluarga" },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors text-center">
                                <div className="mx-auto w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-xs text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </section>

            {/* Collaboration */}
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Kolaborasi Multi Sektor</h2>
                    <p className="text-slate-600">Sinergi untuk dampak yang lebih luas</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="flex flex-col md:flex-row items-center gap-6 p-8">
                        <div className="text-primary"><Factory size={48} /></div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Dunia Usaha</h3>
                            <p className="text-slate-600">Bekerjasama dengan Hotel, Kantor, Restoran, dan Sekolah sebagai mitra sumber sampah bertanggung jawab.</p>
                        </div>
                    </Card>
                    <Card className="flex flex-col md:flex-row items-center gap-6 p-8">
                        <div className="text-primary"><Target size={48} /></div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Pemerintah</h3>
                            <p className="text-slate-600">Mendukung program pemerintah daerah dalam pengurangan sampah ke TPA dan peningkatan gizi.</p>
                        </div>
                    </Card>
                </div>
            </SectionWrapper>
        </>
    );
};

export default About;
