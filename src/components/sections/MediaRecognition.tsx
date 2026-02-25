"use client";

import { motion } from "framer-motion";

const pressReleases = [
    {
        title: "Gautam Solar among Global Top 30 Solar Manufacturers",
        source: "Industry News",
        date: "Feb 2025",
        image: "https://gautamsolar.com/static/media/icard7.a89de2e8a2295027df26.webp"
    },
    {
        title: "Revolutionizing Solar with High Efficiency TOPCon Modules",
        source: "Energy Review",
        date: "Jan 2025",
        image: "https://gautamsolar.com/static/media/img7.6f12f614294d87ec67da.webp"
    },
    {
        title: "Domestic Manufacturing Growth and Solar Adoption",
        source: "PV Magazine",
        date: "Dec 2024",
        image: "https://gautamsolar.com/static/media/PV.94c8800f6bfa58bea3e2.jpeg"
    },
    {
        title: "Gautam Solar expanding capacity to meet rising demand",
        source: "Saur Energy",
        date: "Nov 2024",
        image: "https://gautamsolar.com/static/media/SaurEn.94af6273cb5f67f61bf0.jpeg"
    }
];

export default function MediaRecognition() {
    return (
        <section className="section-padding bg-light-grey overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-brand-red font-extrabold uppercase tracking-widest text-sm mb-4 block">
                            In The News
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
                            Media & Industry Recognition
                        </h2>
                    </div>
                </div>

                <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
                    {pressReleases.map((news, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 snap-start group"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-black text-brand-red uppercase tracking-widest">{news.source}</span>
                                    <span className="text-xs text-gray-400 font-bold">{news.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-4 line-clamp-2 leading-tight group-hover:text-brand-red transition-colors">
                                    {news.title}
                                </h3>
                                <button className="text-sm font-bold text-charcoal border-b-2 border-charcoal/10 hover:border-brand-red transition-all">
                                    Read Article
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
