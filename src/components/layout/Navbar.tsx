"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Products",
        href: "/products",
        dropdown: [
            { name: "N-Type TOPCon", href: "/products/topcon" },
            { name: "Mono PERC", href: "/products/mono" },
            { name: "Utility Scale", href: "/products/utility" },
        ]
    },
    { name: "Global Presence", href: "/global" },
    { name: "Media", href: "/media" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 pointer-events-none">
            <div className="max-w-7xl mx-auto flex justify-center">
                <motion.nav
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={cn(
                        "pointer-events-auto flex items-center justify-between w-full h-20 px-8 rounded-full transition-all duration-500",
                        scrolled
                            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 w-full lg:w-[95%]"
                            : "bg-transparent w-full"
                    )}
                >
                    {/* Logo Section */}
                    <Link href="/" className="relative z-10 hidden sm:block">
                        <img
                            src="/logo.png"
                            alt="Gautam Solar"
                            className="h-10 md:h-12 w-auto transition-all duration-500"
                        />
                    </Link>
                    <Link href="/" className="relative z-10 sm:hidden">
                        <img src="/logo.png" alt="Gautam Solar" className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group p-2">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-1",
                                        scrolled ? "text-charcoal hover:bg-light-grey" : "text-white hover:bg-white/10"
                                    )}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={14} className="opacity-50" />}
                                </Link>

                                {link.dropdown && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 p-3 min-w-[200px]">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="block px-4 py-3 text-sm font-bold text-charcoal hover:bg-brand-red hover:text-white rounded-xl transition-all"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Action Section */}
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:info@gautamsolar.com"
                            className={cn(
                                "hidden xl:flex items-center gap-2 text-sm font-bold transition-colors",
                                scrolled ? "text-charcoal/60 hover:text-brand-red" : "text-white/60 hover:text-white"
                            )}
                        >
                            <Mail size={16} /> <span className="hidden xxl:inline">info@gautamsolar.com</span>
                        </a>

                        <Link
                            href="/enquiry"
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all shadow-lg",
                                scrolled
                                    ? "bg-brand-red text-white hover:bg-charcoal shadow-brand-red/20"
                                    : "bg-white text-brand-red hover:bg-brand-red hover:text-white"
                            )}
                        >
                            Enquire
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            className={cn("lg:hidden p-2 rounded-full transition-colors", scrolled ? "text-charcoal" : "text-white")}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 bg-charcoal z-[60] flex flex-col p-8 pointer-events-auto"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <img src="/logo.png" alt="Gautam Solar" className="h-10 w-auto brightness-0 invert" />
                            <button onClick={() => setIsOpen(false)} className="text-white p-2">
                                <X size={32} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-4">
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-black text-white hover:text-brand-red transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="flex flex-wrap gap-4">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="text-lg text-white/40 hover:text-white"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="mt-auto pt-10 border-t border-white/10">
                            <div className="flex gap-10 text-white/60 mb-8">
                                <a href="tel:+919311797248" className="flex flex-col">
                                    <span className="text-xs uppercase font-black text-brand-red">Call Us</span>
                                    <span className="font-bold">+91 93117 97248</span>
                                </a>
                                <a href="mailto:info@gautamsolar.com" className="flex flex-col">
                                    <span className="text-xs uppercase font-black text-brand-red">Email</span>
                                    <span className="font-bold">info@gautamsolar.com</span>
                                </a>
                            </div>
                            <Link
                                href="/enquiry"
                                className="w-full bg-brand-red text-white py-6 rounded-2xl text-center font-black uppercase tracking-[0.2em] shadow-2xl shadow-brand-red/40"
                                onClick={() => setIsOpen(false)}
                            >
                                Send Enquiry
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
