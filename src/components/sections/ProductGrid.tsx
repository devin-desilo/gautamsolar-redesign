"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const products = [
    {
        title: "N-Type TOPCon Modules",
        tag: "Next Gen Tech",
        specs: ["620Wp - 640Wp", "Efficiency up to 23.69%", "Bifacial Gain up to 30%", "PID Free & UV Resistant"],
        image: "https://gautamsolar.com/static/media/icard5.1f0307ec15733218c9a4.webp",
        href: "/products/topcon",
        color: "brand-red"
    },
    {
        title: "Mono PERC Modules",
        tag: "High Efficiency",
        specs: ["540Wp - 550Wp", "M10 Half-Cut Cells", "MBB Design", "NDC Production"],
        image: "https://gautamsolar.com/static/media/icard7.a89de2e8a2295027df26.webp",
        href: "/products/mono",
        color: "charcoal"
    },
    {
        title: "Utility Scale Modules",
        tag: "Industrial Strength",
        specs: ["Bifacial Glass-to-Glass", "Optimized LCOE", "Enhanced Durability", "550Wp+ Output"],
        image: "https://gautamsolar.com/static/media/icard5.1f0307ec15733218c9a4.webp",
        href: "/products/utility",
        color: "brand-red"
    }
];

export default function ProductGrid() {
    return (
        <section className="section-padding bg-light-grey">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-brand-red font-extrabold uppercase tracking-widest text-sm mb-4 block">
                            Our Products
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
                            Engineered for High Performance <br />
                            <span className="text-brand-red">& Solar Efficiency</span>
                        </h2>
                    </div>
                    <Link
                        href="/products"
                        className="group flex items-center gap-2 text-charcoal font-bold border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors"
                    >
                        All Products <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="bg-white rounded-2xl p-8 flex flex-col group hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            <div className="mb-8 overflow-hidden rounded-xl bg-gray-50 aspect-square flex items-center justify-center p-8">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">
                                    {product.tag}
                                </span>
                                <h3 className="text-2xl font-extrabold text-charcoal mb-4 group-hover:text-brand-red transition-colors">
                                    {product.title}
                                </h3>
                                <ul className="space-y-3 mb-8">
                                    {product.specs.map((spec, i) => (
                                        <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href={product.href}
                                className="w-full py-4 text-center font-bold text-sm bg-charcoal text-white rounded-lg hover:bg-brand-red transition-all duration-300"
                            >
                                View Details
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
