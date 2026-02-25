import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import ProductGrid from "@/components/sections/ProductGrid";
import ManufacturingExcellence from "@/components/sections/ManufacturingExcellence";
import Certifications from "@/components/sections/Certifications";
import MediaRecognition from "@/components/sections/MediaRecognition";
import FAQ from "@/components/sections/FAQ";
import EnquirySection from "@/components/sections/EnquirySection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsBar />
        <AboutSection />
        <ProductGrid />
        <ManufacturingExcellence />
        <Certifications />
        <MediaRecognition />
        <FAQ />
        <EnquirySection />
      </main>
      <Footer />
    </div>
  );
}
