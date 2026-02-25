"use client";

import { motion } from "framer-motion";

const certificates = [
    { name: "ALMM Approved", image: "https://gautamsolar.com/certificate2.webp", desc: "Approved List of Models & Manufacturers by MNRE." },
    { name: "BIS Certified", image: "https://gautamsolar.com/static/media/img9.728c67516096cc084026.webp", desc: "Bureau of Indian Standards compliance for solar modules." },
    { name: "Global Standards", image: "https://gautamsolar.com/certificate.webp", desc: "Recognized safety and performance certifications globally." },
    { name: "Tier 1 Quality", image: "https://gautamsolar.com/Grade_A.webp", desc: "Maintaining the highest standards in solar manufacturing." },
];

export default function Certifications() {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-red font-extrabold uppercase tracking-widest text-sm mb-4 block">
                        Quality Assured
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6">
                        Global Compliance & Certifications
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our commitment to quality is backed by international certifications that ensure reliability,
                        safety, and maximum efficiency in every module we manufacture.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-light-grey rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-full h-32 flex items-center justify-center mb-6 p-4 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-charcoal mb-3">{cert.name}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                {cert.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
