"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    return (
        <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden bg-charcoal">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent z-10" />
                {backgroundImage ? (
                    <img
                        src={backgroundImage}
                        alt={title}
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-brand-red/10" />
                )}
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 mb-4 bg-brand-red text-white text-xs font-bold tracking-widest uppercase rounded">
                        Gautam Solar
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-white/70 max-w-2xl font-medium">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
