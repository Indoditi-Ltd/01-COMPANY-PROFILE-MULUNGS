import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h1>
                    <p className="text-slate-600">Siap membantu anda mewujudkan lingkungan yang lebih baik</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Card className="p-6 flex items-start gap-4">
                            <div className="bg-primary-50 p-3 rounded-full text-primary"><MapPin /></div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">Kantor Pusat</h3>
                                <p className="text-slate-600">Jl. Mulungs Ecosystem No. 88, Jakarta Selatan, Indonesia</p>
                            </div>
                        </Card>
                        <Card className="p-6 flex items-center gap-4">
                            <div className="bg-primary-50 p-3 rounded-full text-primary"><Mail /></div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">Email</h3>
                                <p className="text-slate-600">hello@mulungs.id</p>
                            </div>
                        </Card>
                        <Card className="p-6 flex items-center gap-4">
                            <div className="bg-primary-50 p-3 rounded-full text-primary"><Phone /></div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">Telepon</h3>
                                <p className="text-slate-600">+62 812 3456 7890</p>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Kirim Pesan</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Nama anda" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="email@contoh.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
                                <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Tulis pesan anda disini..."></textarea>
                            </div>
                            <Button variant="primary" className="w-full flex justify-center items-center gap-2">
                                <Send size={18} /> Kirim Pesan
                            </Button>
                        </form>
                    </Card>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
