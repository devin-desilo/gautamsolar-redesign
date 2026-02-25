"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { Globe2, MapPin, Factory, BarChart3 } from "lucide-react";

const locations = [
    { country: "India", type: "Manufacturing & HQ", cities: "New Delhi, Haridwar, Bhiwani" },
    { country: "USA", type: "Export & Warehouse", cities: "Texas, California" },
    { country: "UAE", type: "Distribution Hub", cities: "Dubai" },
    { country: "Germany", type: "Regional Office", cities: "Munich" },
    { country: "Australia", type: "Distribution Network", cities: "Sydney, Melbourne" },
    { country: "South Africa", type: "Support Office", cities: "Cape Town" }
];

export default function GlobalPresence() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <PageHero
                    title="Global Presence"
                    subtitle="From our state-of-the-art factories in India to solar projects across 5 continents."
                    backgroundImage="https://gautamsolar.com/slider2.webp"
                />

                {/* Manufacturing Hubs */}
                <section className="section-padding bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1">
                                <h2 className="text-4xl font-extrabold text-charcoal mb-8">India's Manufacturing <span className="text-brand-red">Powerhouse</span></h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center shrink-0">
                                            <Factory className="text-brand-red" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">4 Manufacturing Units</h4>
                                            <p className="text-gray-500">Spread across Strategic locations in North India for efficient logistics and distribution.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center shrink-0">
                                            <BarChart3 className="text-brand-red" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">5 GWp Capacity</h4>
                                            <p className="text-gray-500">Scaling rapidly to meet the growing global demand for clean energy solutions.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center shrink-0">
                                            <Globe2 className="text-brand-red" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Exporting to 20+ Countries</h4>
                                            <p className="text-gray-500">Trusted by international installers and EPC providers globally.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div className="aspect-square bg-brand-red/5 rounded-full absolute -top-10 -right-10 w-full animate-pulse" />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="relative z-10 p-4"
                                >
                                    <img src="https://gautamsolar.com/static/media/PV.94c8800f6bfa58bea3e2.jpeg" alt="Global Operations" className="rounded-3xl shadow-2xl" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Locations Grid */}
                <section className="section-padding bg-charcoal text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold">Our International <span className="text-brand-red">Footprint</span></h2>
                            <p className="text-white/40 mt-4 max-w-2xl mx-auto">Strategically positioned to serve the global solar market with local support and distribution.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {locations.map((loc, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-8 border border-white/10 rounded-2xl hover:bg-brand-red/10 transition-colors group"
                                >
                                    <MapPin className="text-brand-red mb-6" size={32} />
                                    <h3 className="text-2xl font-bold mb-2">{loc.country}</h3>
                                    <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-4">{loc.type}</p>
                                    <p className="text-white/50 text-sm">{loc.cities}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision Banner */}
                <section className="py-32 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-brand-red" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    <div className="relative z-10 text-center px-6">
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 max-w-4xl leading-none">
                            Powering the <br /> <span className="opacity-40 italic">Global</span> Transition
                        </h2>
                        <button className="bg-white text-brand-red px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-charcoal hover:text-white transition-all shadow-2xl">
                            View Project Gallery
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
