"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Our Mission",
        desc: "To empower the world with clean, reliable, and affordable solar energy through continuous innovation and manufacturing excellence."
    },
    {
        icon: Rocket,
        title: "Our Vision",
        desc: "To be a global leader in the renewable energy sector, setting benchmarks for quality, sustainability, and customer centricity."
    },
    {
        icon: Users,
        title: "Our Philosophy",
        desc: "Customer success is our success. We believe in building long-term partnerships based on trust, quality, and mutual growth."
    },
    {
        icon: Award,
        title: "Quality Standard",
        desc: "Rigorous testing and international certifications are at the core of our manufacturing process to ensure decades of performance."
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <PageHero
                    title="About Gautam Solar"
                    subtitle="Pioneering the solar revolution in India for over 27 years with 5 GWp manufacturing capacity."
                    backgroundImage="https://gautamsolar.com/slider2.webp"
                />

                {/* Story Section */}
                <section className="section-padding bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl font-extrabold text-charcoal mb-8">27+ Years of <span className="text-brand-red">Solar Excellence</span></h2>
                                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                    <p>
                                        Established in 1997, Gautam Solar has evolved into one of India's premier solar module manufacturers. We are a family-owned organization with a strong emphasis on R&D and quality control.
                                    </p>
                                    <p>
                                        With 4 state-of-the-art manufacturing facilities and a dedicated team of experts, we have established a global presence, exporting our high-efficiency modules to over 20 countries.
                                    </p>
                                    <p>
                                        Our commitment to vertical integration and technological advancement allows us to deliver some of the most efficient solar modules in the market, including the latest TOPCon and Mono PERC technologies.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
                            >
                                <img
                                    src="https://gautamsolar.com/slider1.webp"
                                    alt="Factory View"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-padding bg-light-grey">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold text-charcoal">Core Values & <span className="text-brand-red">Mission</span></h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
                                >
                                    <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                                        <item.icon className="text-brand-red group-hover:text-white transition-colors" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-charcoal mb-4">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team / Leadership Mention */}
                <section className="section-padding bg-white">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-extrabold text-charcoal mb-8">Guided by <span className="text-brand-red">Visionary Leadership</span></h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12">
                            Our team consists of industry veterans and young innovators dedicated to making India a global hub for solar manufacturing.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* This could be expanded with real profiles if provided */}
                            <div className="bg-charcoal p-12 rounded-3xl text-white text-left">
                                <blockquote className="text-2xl font-light italic mb-8">
                                    "Our goal is not just to manufacture modules, but to build a sustainable future for generations to come."
                                </blockquote>
                                <p className="font-bold text-brand-red uppercase tracking-wider">Managing Director</p>
                                <p className="text-white/60">Gautam Solar Private Limited</p>
                            </div>
                            <div className="bg-brand-red p-12 rounded-3xl text-white text-left shadow-2xl shadow-brand-red/20">
                                <blockquote className="text-2xl font-light italic mb-8">
                                    "Continuous R&D is the heartbeat of our organization, ensuring we always stay ahead of the technology curve."
                                </blockquote>
                                <p className="font-bold text-white uppercase tracking-wider">Director</p>
                                <p className="text-white/80">Gautam Solar Private Limited</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
