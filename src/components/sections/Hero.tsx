"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-charcoal">
            {/* Background Video / Overlay */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-110 opacity-50"
                >
                    <source src="https://gautamsolar.com/2025_Factory_Video1.mp4" type="video/mp4" />
                </video>
                {/* Fallback Slider Image */}
                <img
                    src="https://gautamsolar.com/slider1.webp"
                    alt="Solar Manufacturing"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
            </motion.div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 mb-6 bg-brand-red text-white text-xs font-bold tracking-widest uppercase rounded">
                            India's Premier Manufacturer
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
                            Pioneering the Next Generation of <span className="text-brand-red">Solar Excellence</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
                            5 GWp Manufacturing Capacity | Top 10 Indian Module Manufacturer.
                            Engineering sustainable excellence with advanced TOPCon technology.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <Link
                            href="/products"
                            className="group flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20"
                        >
                            View Modules <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            Enquire Now <ChevronRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Parallax Elements / Decorative */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-[10%] hidden lg:block"
            >
                <div className="w-[300px] h-[300px] border border-white/10 rounded-full" />
            </motion.div>
        </section>
    );
}
