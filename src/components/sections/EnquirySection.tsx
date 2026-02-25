"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function EnquirySection() {
    return (
        <section className="section-padding bg-brand-red relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                            Ready to <br />
                            <span className="text-charcoal/40">Switch to Solar?</span>
                        </h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
                            Join the green energy revolution. Contact our experts today for a customized solar solution for your project.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                <p className="text-xs uppercase tracking-[0.2em] font-black text-charcoal/60 mb-1">Direct Line</p>
                                <p className="text-2xl font-bold text-white">+91 93117 97248</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                <p className="text-xs uppercase tracking-[0.2em] font-black text-charcoal/60 mb-1">Email Support</p>
                                <p className="text-2xl font-bold text-white">sales@gautamsolar.com</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
                    >
                        <h3 className="text-3xl font-bold text-charcoal mb-8">Send an Enquiry</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Full Name</label>
                                    <input type="text" className="w-full bg-light-grey border-none rounded-lg px-4 py-4 text-charcoal focus:ring-2 focus:ring-brand-red transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Phone Number</label>
                                    <input type="tel" className="w-full bg-light-grey border-none rounded-lg px-4 py-4 text-charcoal focus:ring-2 focus:ring-brand-red transition-all" placeholder="+91 00000 00000" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Work Email</label>
                                <input type="email" className="w-full bg-light-grey border-none rounded-lg px-4 py-4 text-charcoal focus:ring-2 focus:ring-brand-red transition-all" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Project Details</label>
                                <textarea rows={4} className="w-full bg-light-grey border-none rounded-lg px-4 py-4 text-charcoal focus:ring-2 focus:ring-brand-red transition-all" placeholder="Tell us about your requirement..." />
                            </div>
                            <button className="w-full bg-brand-red text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20 group">
                                Submit Enquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
