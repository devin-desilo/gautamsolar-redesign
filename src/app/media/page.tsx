"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Play, Image as ImageIcon } from "lucide-react";

const newsItems = [
    {
        date: "Feb 15, 2024",
        title: "Gautam Solar to set up 2 GW Solar Cell Plant",
        desc: "The solar module manufacturer announces major expansion into cell manufacturing to achieve full vertical integration.",
        image: "https://gautamsolar.com/static/media/icard7.a89de2e8a2295027df26.webp",
        category: "Press Release"
    },
    {
        date: "Jan 10, 2024",
        title: "Gautam Solar Modules showcased at Intersolar Europe",
        desc: "Our latest N-Type TOPCon bifacial modules received significant interest from European distributors at the event.",
        image: "https://gautamsolar.com/static/media/PV.94c8800f6bfa58bea3e2.jpeg",
        category: "Events"
    },
    {
        date: "Dec 05, 2023",
        title: "Top 10 Indian Solar Manufacturers - Market Report",
        desc: "Gautam Solar consistently ranks among the top performers in terms of quality and manufacturing excellence.",
        image: "https://gautamsolar.com/static/media/SaurEn.94af6273cb5f67f61bf0.jpeg",
        category: "News"
    }
];

export default function MediaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <PageHero
                    title="Media & Press"
                    subtitle="Stay updated with the latest news, press releases, and corporate announcements from Gautam Solar."
                    backgroundImage="https://gautamsolar.com/static/media/img7.6f12f614294d87ec67da.webp"
                />

                {/* Featured News */}
                <section className="section-padding bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-4xl font-extrabold text-charcoal">Latest <span className="text-brand-red">News</span></h2>
                                <p className="text-gray-500 mt-2">Latest industry insights and corporate updates.</p>
                            </div>
                            <div className="hidden md:flex gap-4">
                                <button className="px-6 py-2 rounded-full border border-gray-200 text-sm font-bold hover:bg-brand-red hover:text-white transition-all">All News</button>
                                <button className="px-6 py-2 rounded-full border border-gray-200 text-sm font-bold hover:bg-brand-red hover:text-white transition-all">Press Releases</button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {newsItems.map((item, i) => (
                                <motion.article
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-lg">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-brand-red text-sm font-bold mb-3">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="text-xl font-extrabold text-charcoal mb-4 group-hover:text-brand-red transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {item.desc}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-charcoal font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Read Full Article <ExternalLink size={14} />
                                    </span>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Media Gallery CTA */}
                <section className="bg-light-grey py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-charcoal rounded-[40px] p-12 md:p-20 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                                <ImageIcon size={400} className="text-white" />
                            </div>
                            <div className="relative z-10 max-w-2xl">
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Corporate <span className="text-brand-red">Gallery</span></h2>
                                <p className="text-white/60 text-lg mb-10">Download high-resolution project images, factory tour videos, and corporate assets.</p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="flex items-center gap-3 bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all">
                                        <ImageIcon size={20} /> Photo Library
                                    </button>
                                    <button className="flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-brand-red transition-all">
                                        <Play size={20} /> Video Tours
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
