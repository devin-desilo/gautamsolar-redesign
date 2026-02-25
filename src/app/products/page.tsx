"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Info } from "lucide-react";

const productCategories = [
    {
        title: "N-Type TOPCon Modules",
        tag: "Next Gen Technology",
        description: "Our flagship range featuring Tunnel Oxide Passivated Contact technology for maximum efficiency and minimum degradation.",
        features: ["Efficiency up to 23.69%", "Bifacial Gain up to 30%", "Better Low-light Performance", "30-Year Performance Warranty"],
        image: "https://gautamsolar.com/static/media/icard5.1f0307ec15733218c9a4.webp",
        link: "/products/topcon",
        color: "brand-red"
    },
    {
        title: "Mono PERC Modules",
        tag: "High Performance",
        description: "Highly reliable and efficient Monocrystalline Passivated Emitter and Rear Cell modules for residential and commercial use.",
        features: ["M10 Half-cut Cell Tech", "MBB Design", "All-weather Reliability", "Cost-effective Solar Solution"],
        image: "https://gautamsolar.com/static/media/icard7.a89de2e8a2295027df26.webp",
        link: "/products/mono",
        color: "charcoal"
    },
    {
        title: "Utility Scale Bifacial",
        tag: "Industrial Scale",
        description: "Double-sided power generation designed for large scale solar farms to maximize yield and lower LCOE.",
        features: ["Glass-to-Glass / Transparent Backsheet", "Optimized LCOE", "Enhanced Durability", "550Wp+ Output"],
        image: "https://gautamsolar.com/static/media/icard5.1f0307ec15733218c9a4.webp",
        link: "/products/utility",
        color: "brand-red"
    }
];

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <PageHero
                    title="Solar Solutions"
                    subtitle="Engineered for performance. Built for decades. Explore our range of high-efficiency solar modules."
                    backgroundImage="https://gautamsolar.com/slider1.webp"
                />

                <section className="section-padding bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="space-y-24">
                            {productCategories.map((cat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                                >
                                    <div className="flex-1">
                                        <span className="text-brand-red font-extrabold uppercase tracking-widest text-sm mb-4 block">
                                            {cat.tag}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6">
                                            {cat.title}
                                        </h2>
                                        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                                            {cat.description}
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                            {cat.features.map((feat, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-charcoal font-bold text-sm uppercase">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex gap-4">
                                            <Link
                                                href={cat.link}
                                                className="bg-brand-red text-white px-8 py-4 rounded-md font-bold hover:bg-charcoal transition-all flex items-center gap-2"
                                            >
                                                View Specifications <ArrowRight size={18} />
                                            </Link>
                                            <Link
                                                href="/enquiry"
                                                className="border border-charcoal/10 text-charcoal px-8 py-4 rounded-md font-bold hover:bg-light-grey transition-all flex items-center gap-2"
                                            >
                                                Enquire <Info size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex-1 relative">
                                        <div className="absolute inset-0 bg-brand-red/5 rounded-[40px] -rotate-3" />
                                        <img
                                            src={cat.image}
                                            alt={cat.title}
                                            className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global Standards Banner */}
                <section className="bg-charcoal py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Committed to <span className="text-brand-red">Global Quality</span> Standards</h2>
                        <p className="text-white/60 max-w-2xl mx-auto mb-12">
                            Our modules undergo 100+ quality checks in our internal R&D lab and are certified by top international agencies.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <img src="https://gautamsolar.com/certificate.webp" alt="Standard" className="h-16 w-auto" />
                            <img src="https://gautamsolar.com/certificate2.webp" alt="Standard" className="h-16 w-auto" />
                            <img src="https://gautamsolar.com/Grade_A.webp" alt="Standard" className="h-16 w-auto" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
