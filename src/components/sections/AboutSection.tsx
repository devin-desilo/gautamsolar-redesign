"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-red rounded-tl-xl z-10" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-charcoal/20 rounded-br-xl mt-4" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://gautamsolar.com/slider2.webp"
                                alt="Solar Manufacturing Facility"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-charcoal/80 p-6 backdrop-blur-sm">
                                <p className="text-white text-lg font-bold">27+ Years of Industry Leadership</p>
                                <p className="text-white/60 text-sm">Manufacturing Excellence since 1997</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <span className="text-brand-red font-extrabold uppercase tracking-widest text-sm mb-4 block">
                            Global Manufacturing Powerhouse
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-8 leading-tight">
                            A Legacy of <span className="text-brand-red">Innovation</span> & Quality
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
                            <p>
                                Gautam Solar is among <strong>India's Top 10 Solar Module Manufacturers</strong>.
                                With over two decades of experience, we have scaled our capacity to 5 GWp,
                                integrating vertically to ensure the highest standards of quality and efficiency.
                            </p>
                            <p>
                                From advanced N-Type TOPCon modules to high-efficiency Mono PERC panels,
                                our R&D center is constantly pushing the boundaries of what's possible in solar energy.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {[
                                "ALMM Approved Modules",
                                "Tier 1 Manufacturing Facility",
                                "BIS & UL Certified Products",
                                "Patented Solar Technologies",
                                "Global R&D Center",
                                "Fully Automated Production"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                                    <span className="font-bold text-charcoal text-sm uppercase tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-charcoal text-white px-8 py-4 rounded-md font-bold hover:bg-charcoal/90 transition-all">
                            Learn Our Story
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
