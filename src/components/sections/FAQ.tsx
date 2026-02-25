"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What is TOPCon technology and its benefits?",
        a: "N-Type TOPCon (Tunnel Oxide Passivated Contact) is the next generation of solar cell technology. It offers higher efficiency (up to 23.69%), better performance in low light, and lower degradation compared to traditional P-type modules."
    },
    {
        q: "Is Gautam Solar ALMM approved?",
        a: "Yes, Gautam Solar modules are listed in the Approved List of Models and Manufacturers (ALMM) by the Ministry of New and Renewable Energy (MNRE), Government of India."
    },
    {
        q: "What is the manufacturing capacity of Gautam Solar?",
        a: "Gautam Solar currently operates with a 5 GWp solar module manufacturing capacity, making it one of India's largest and most technologically advanced facilities."
    },
    {
        q: "Do you provide modules for utility-scale projects?",
        a: "Absolutely. We specialize in high-output bifacial modules (620Wp+ ) designed specifically for large-scale utility projects and commercial installations."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-red font-extrabold uppercase tracking-widest text-sm mb-4 block">
                        Questions?
                    </span>
                    <h2 className="text-4xl font-extrabold text-charcoal">Frequently Asked Questions</h2>
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
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="space-y-4"
                >
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-light-grey transition-colors"
                            >
                                <span className="text-lg font-bold text-charcoal">{faq.q}</span>
                                <ChevronDown
                                    size={20}
                                    className={`text-brand-red transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="bg-white overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-500 leading-relaxed font-medium border-t border-gray-50">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
