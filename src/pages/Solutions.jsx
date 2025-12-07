import React, { useRef } from 'react';
import { Home, Truck, Factory, UserCheck } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';

const Solutions = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [
        {
            title: "Sumber Sampah",
            icon: Home,
            desc: "Sampah dipilah dari Rumah, Kantor, Hotel, Sekolah, dan Restoran.",
            detail: "Kami menyediakan edukasi pemilahan sampah organik dan anorganik sejak dari sumber."
        },
        {
            title: "Penjemputan / Setor",
            icon: Truck,
            desc: "Mitra menyetor ke Bank Pembantu atau request penjemputan.",
            detail: "Armada logistik kami siap menjemput sampah terpilah secara terjadwal."
        },
        {
            title: "Pengolahan Terpadu",
            icon: Factory,
            desc: "Sampah diolah di Bank Utama dan Kawasan Pengolahan.",
            detail: "Organik menjadi pakan/pupuk untuk contract farming. Anorganik didaur ulang."
        },
        {
            title: "Manfaat Kembali",
            icon: UserCheck,
            desc: "Hasil panen & nilai ekonomi kembali ke nasabah.",
            detail: "Pangan bergizi dari petani binaan didistribusikan kembali ke rumah tangga."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Cara Kerja Mulungs</h1>
                    <p className="text-slate-600">Sistem terintegrasi dari hulu ke hilir</p>
                </div>

                <div ref={containerRef} className="space-y-16 relative">
                    {/* Connecting Line Container (Desktop) */}
                    <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 z-0"></div>

                    {/* Animated Line (Desktop) */}
                    <motion.div
                        className="hidden md:block absolute left-[50%] top-0 w-1 bg-primary origin-top -translate-x-1/2 z-0"
                        style={{ height: '100%', scaleY }}
                    />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 text-center md:text-left">
                                <div className={`${idx % 2 === 0 ? 'md:text-right' : ''}`}></div>
                            </div>

                            {/* Icon Marker */}
                            <div className="relative z-10">
                                <div className="bg-primary text-white p-4 rounded-full shadow-lg border-4 border-white transition-transform hover:scale-110 duration-300">
                                    <step.icon size={32} />
                                </div>
                            </div>

                            <div className="flex-1 w-full">
                                <Card className={`p-6 border-l-4 ${idx % 2 === 0 ? 'md:text-right border-l-0 md:border-r-4' : ''} border-primary hover:shadow-2xl transition-shadow`}>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                                    <p className="font-medium text-primary mb-2">{step.desc}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.detail}</p>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Solutions;
