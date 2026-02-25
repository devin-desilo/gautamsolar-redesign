"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ManufacturingExcellence() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="relative min-h-[600px] flex items-center bg-charcoal overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-charcoal/40 z-10" />
                <motion.img
                    style={{ y, scale: 1.2 }}
                    src="https://gautamsolar.com/slider2.webp"
                    alt="Factory Floor"
                    className="w-full h-full object-cover grayscale opacity-30"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="text-brand-red font-extrabold uppercase tracking-widest text-sm mb-4 block">
                            Manufacturing Prowess
                        </span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                            State-of-the-art <br />
                            <span className="text-brand-red">Fully Automated</span> Lines
                        </h2>
                        <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
                            Our facilities in Haridwar and Bhiwani leverage the latest European technology to produce world-class solar modules.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <h4 className="text-3xl font-extrabold text-white mb-2">4+</h4>
                                <p className="text-xs font-black uppercase tracking-widest text-brand-red">Factories</p>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden sm:block" />
                            <div>
                                <h4 className="text-3xl font-extrabold text-white mb-2">5 GWp</h4>
                                <p className="text-xs font-black uppercase tracking-widest text-brand-red">Capacity</p>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden sm:block" />
                            <div>
                                <h4 className="text-3xl font-extrabold text-white mb-2">100+</h4>
                                <p className="text-xs font-black uppercase tracking-widest text-brand-red">Engineers</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side interactive card/image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Advanced Testing Lab</h3>
                        <ul className="space-y-6">
                            {[
                                { title: "Electroluminescence (EL) Testing", desc: "Detecting micro-cracks at sub-pixel resolution." },
                                { title: "Mechanical Load Testing", desc: "Verifying durability against extreme wind & snow." },
                                { title: "PID Resistance Testing", desc: "Ensuring long-term performance stability." }
                            ].map((item, i) => (
                                <li key={i} className="group">
                                    <h5 className="text-brand-red font-extrabold text-sm mb-1 uppercase tracking-wider">{item.title}</h5>
                                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
