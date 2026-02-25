import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    company: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Solar Modules", href: "/products" },
        { name: "Solar Power Plants", href: "/enquiry" },
        { name: "Contact Us", href: "/enquiry" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/policy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Cookies", href: "/cookies" },
        { name: "Sitemap", href: "/sitemap" },
    ],
    quick: [
        { name: "Blogs", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Media", href: "/media" },
        { name: "Global Presence", href: "/global" },
    ]
};

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            GAUTAM <span className="text-brand-red">SOLAR</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Among India's Top 10 Solar Module Manufacturers with 5 GWp manufacturing capacity.
                            Committed to manufacturing excellence and sustainable energy solutions globally.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-4">Company</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-4">Quick Links</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            {footerLinks.quick.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-4">Contact Info</h4>
                        <div className="space-y-4 text-white/60 text-sm">
                            <div className="flex gap-4">
                                <MapPin size={24} className="text-brand-red shrink-0" />
                                <p>D-120-121, Okhla Industrial Area, Phase-1, New Delhi-110020</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone size={18} className="text-brand-red" />
                                <p>+91 93117 97248</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={18} className="text-brand-red" />
                                <p>info@gautamsolar.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
                    <p>© {new Date().getFullYear()} Gautam Solar. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
