import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <img src={logo} alt="Mulungs" className="h-12 mb-6" />
                        <p className="mb-6 leading-relaxed">
                            Super App Bank Sampah yang mengintegrasikan pengelolaan sampah terpadu berbasis Contract Farming Multi Sektoral.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/solutions" className="hover:text-primary transition-colors">Our Solution</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-primary" size={20} />
                                <span>Jl. Sepakat 2, Gg. Racana Untan, Bansir Laut, Pontianak Tenggara, Kota Pontianak</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-primary" size={20} />
                                <a href="mailto:support@mulungs.com" className="hover:text-primary">support@mulungs.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-primary" size={20} />
                                <a href="tel:+6285186821926" className="hover:text-primary">+62 851 8682 1926</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Stay Updated</h3>
                        <p className="mb-4 text-sm">Join our newsletter for the latest eco-updates.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary border border-slate-700"
                            />
                            <button className="bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-600 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Mulungs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
