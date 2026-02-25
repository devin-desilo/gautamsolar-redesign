"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const stats = [
    { label: "Manufacturing Capacity", value: 5, suffix: "GWp" },
    { label: "Industry Experience", value: 27, suffix: "Years" },
    { label: "IPs & Patents", value: 100, suffix: "+" },
    { label: "Manufacturing Units", value: 4, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const spring = useSpring(0, { stiffness: 50, damping: 20 });
    const displayValue = useTransform(spring, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    useEffect(() => {
        return displayValue.onChange((v) => setCurrent(v));
    }, [displayValue]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-charcoal">
            {current}{suffix}
        </span>
    );
}

export default function StatsBar() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white py-12 border-b border-gray-100 shadow-sm relative z-30 -mt-16 mx-6 rounded-xl shadow-2xl shadow-charcoal/5"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Trust Badges */}
                <div className="flex justify-center flex-wrap gap-8 mb-12 grayscale opacity-60">
                    <img src="https://gautamsolar.com/Grade_A.webp" alt="Grade A" className="h-14 w-auto" />
                    <img src="https://gautamsolar.com/Global_Top_30.webp" alt="Global Top 30" className="h-14 w-auto" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
