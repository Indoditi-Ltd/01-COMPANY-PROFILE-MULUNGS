import React from 'react';
import { Check, X } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const Pricing = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Pilih Paket Langganan</h1>
                    <p className="text-slate-600">Sesuaikan dengan kebutuhan pengelolaan sampah rumah tangga anda</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Gold Plan */}
                    <Card className="p-8 border-2 border-slate-200 relative">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">GOLD Plan</h2>
                        <p className="text-slate-500 mb-6">Untuk Rumah Tangga Pemula</p>
                        <div className="text-4xl font-bold text-slate-900 mb-8">Gratis <span className="text-sm font-normal text-slate-500">/ bulan</span></div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-slate-700"><Check className="text-green-500 shrink-0" /> Setoran Sampah Anorganik Saja</li>
                            <li className="flex gap-3 text-slate-700"><Check className="text-green-500 shrink-0" /> Penjualan Siap Jual</li>
                            <li className="flex gap-3 text-slate-700"><Check className="text-green-500 shrink-0" /> Request Penjemputan</li>
                            <li className="flex gap-3 text-slate-700"><Check className="text-green-500 shrink-0" /> Layanan PPOB</li>
                            <li className="flex gap-3 text-slate-400"><X className="text-red-300 shrink-0" /> Investasi Contract Farming</li>
                            <li className="flex gap-3 text-slate-400"><X className="text-red-300 shrink-0" /> Asuransi BarengJaga</li>
                        </ul>
                        <Button variant="outline" className="w-full text-slate-600 border-slate-300 hover:bg-slate-50">Pilih Paket Gold</Button>
                    </Card>

                    {/* Platinum Plan */}
                    <Card className="p-8 border-2 border-primary relative transform md:-translate-y-4 shadow-2xl shadow-primary/20">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
                        <h2 className="text-2xl font-bold text-primary mb-2">PLATINUM Plan</h2>
                        <p className="text-slate-500 mb-6">Paket Lengkap Premium</p>
                        <div className="text-4xl font-bold text-slate-900 mb-8">Rp 25k <span className="text-sm font-normal text-slate-500">/ bulan</span></div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-slate-700"><Check className="text-primary shrink-0" /> <strong>Setoran Organik & Anorganik</strong></li>
                            <li className="flex gap-3 text-slate-700"><Check className="text-primary shrink-0" /> Request Penjemputan Prioritas</li>
                            <li className="flex gap-3 text-slate-700"><Check className="text-primary shrink-0" /> Layanan PPOB Lengkap</li>
                            <li className="flex gap-3 text-slate-700"><Check className="text-primary shrink-0" /> <strong>Investasi Contract Farming</strong></li>
                            <li className="flex gap-3 text-slate-700"><Check className="text-primary shrink-0" /> <strong>Asuransi BarengJaga</strong></li>
                            <li className="flex gap-3 text-slate-700"><Check className="text-primary shrink-0" /> Akses Produk Inovasi</li>
                        </ul>
                        <Button variant="primary" className="w-full">Pilih Paket Platinum</Button>
                    </Card>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Pricing;
