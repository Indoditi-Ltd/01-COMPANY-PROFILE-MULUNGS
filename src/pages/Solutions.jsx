import React from 'react';
import { Home, Truck, Factory, UserCheck, ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';

const Solutions = () => {
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

                <div className="space-y-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute left-[50%] top-0 h-full w-1 bg-primary-200 -z-10 transform -translate-x-1/2"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 text-center md:text-left">
                                <div className={`${idx % 2 === 0 ? 'md:text-right' : ''}`}></div>
                                {/* Empty div for spacing on opposite side */}
                            </div>

                            {/* Icon Marker */}
                            <div className="bg-primary text-white p-4 rounded-full shadow-lg border-4 border-white z-10">
                                <step.icon size={32} />
                            </div>

                            <div className="flex-1">
                                <Card className={`p-6 border-l-4 ${idx % 2 === 0 ? 'md:text-right border-l-0 md:border-r-4' : ''} border-primary`}>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                                    <p className="font-medium text-primary mb-2">{step.desc}</p>
                                    <p className="text-slate-600 text-sm">{step.detail}</p>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Solutions;
