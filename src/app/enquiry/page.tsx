"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";

export default function EnquiryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <PageHero
                    title="Contact Us"
                    subtitle="Get in touch with our solar experts for your project requirements or manufacturing enquiries."
                    backgroundImage="https://gautamsolar.com/slider1.webp"
                />

                <section className="section-padding bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-16">
                            {/* Contact Info */}
                            <div className="lg:col-span-1 space-y-10">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-charcoal mb-6">Corporate <span className="text-brand-red">Office</span></h2>
                                    <p className="text-gray-500 mb-8 leading-relaxed">
                                        Have a specific question or looking for a partnership? Our team is here to assist you.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-light-grey rounded-2xl flex items-center justify-center shrink-0">
                                            <MapPin className="text-brand-red" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Address</h4>
                                            <p className="text-gray-500 text-sm">D-120-121, Okhla Industrial Area, Phase-1, New Delhi-110020</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-light-grey rounded-2xl flex items-center justify-center shrink-0">
                                            <Phone className="text-brand-red" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Phone</h4>
                                            <p className="text-gray-500 text-sm">+91 93117 97248</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-light-grey rounded-2xl flex items-center justify-center shrink-0">
                                            <Mail className="text-brand-red" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Email</h4>
                                            <p className="text-gray-500 text-sm">info@gautamsolar.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-light-grey rounded-2xl flex items-center justify-center shrink-0">
                                            <Clock className="text-brand-red" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Office Hours</h4>
                                            <p className="text-gray-500 text-sm">Mon - Sat: 9:30 AM - 6:30 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="pt-10 border-t border-gray-100">
                                    <h5 className="text-xs font-black uppercase tracking-widest text-charcoal/40 mb-6">Follow Our Progress</h5>
                                    <div className="flex gap-4">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all cursor-pointer">
                                                <Globe size={18} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Enquiry Form */}
                            <div className="lg:col-span-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-charcoal rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-bold text-white mb-2">Send an <span className="text-brand-red">Enquiry</span></h3>
                                        <p className="text-white/40 mb-12">Fill out the form below and our regional manager will contact you shortly.</p>

                                        <form className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                                                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                                                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all" />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                                                    <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Subject</label>
                                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white/60 focus:outline-none focus:border-brand-red transition-all appearance-none">
                                                        <option>Solar Modules Enquiry</option>
                                                        <option>Distributorship Enquiry</option>
                                                        <option>Industrial Partnerships</option>
                                                        <option>Career Opportunities</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Message</label>
                                                <textarea placeholder="Tell us about your requirements..." rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all resize-none"></textarea>
                                            </div>
                                            <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-brand-red/40 hover:bg-white hover:text-brand-red transition-all flex items-center justify-center gap-3">
                                                <Send size={20} /> Submit Enquiry
                                            </button>
                                        </form>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Placeholder */}
                <section className="h-[500px] w-full bg-light-grey grayscale relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-12 bg-white rounded-3xl shadow-2xl border border-gray-100 border-b-4 border-b-brand-red">
                            <MapPin className="text-brand-red mx-auto mb-4" size={48} />
                            <h4 className="text-xl font-bold text-charcoal">Interactive Map</h4>
                            <p className="text-gray-400 text-sm mt-2">D-120-121, Okhla Industrial Area, Phase-1, New Delhi</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
