import React from 'react';
import { Building2, Store, Sprout, Lightbulb, Handshake } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Partnership = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Kemitraan & Kolaborasi</h1>
                    <p className="text-slate-600">Bergabung dalam ekosistem kebaikan Mulungs</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {[
                        { icon: Building2, title: "Pemerintah Daerah", desc: "Solusi pengurangan sampah kota dan pemberdayaan masyarakat." },
                        { icon: Store, title: "Business (B2B)", desc: "Pengelolaan sampah hotel, restoran, dan perkantoran yang terukur." },
                        { icon: Sprout, title: "Petani & Peternak", desc: "Akses pakan/pupuk murah dan kepastian pasar hasil panen." },
                        { icon: Lightbulb, title: "Startup & Komunitas", desc: "Inovasi teknologi dan gerakan sosial bersama." }
                    ].map((item, idx) => (
                        <Card key={idx} className="flex gap-4 p-6 hover:bg-primary-50 transition-colors cursor-pointer">
                            <div className="bg-white p-3 rounded-xl shadow-sm h-fit"><item.icon className="text-primary" size={24} /></div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-900 to-slate-900 z-0"></div>
                    <div className="relative z-10">
                        <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                            <Handshake size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Mari Berkolaborasi</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Kami membuka pintu selebar-lebarnya untuk institusi, perusahaan, dan komunitas yang memiliki visi sama.
                        </p>
                        <Button variant="primary" className="text-lg px-8 py-4">Ajukan Kemitraan</Button>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Partnership;
