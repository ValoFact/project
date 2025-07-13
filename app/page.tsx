'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandScroller from '@/components/BrandScroller';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <BrandScroller />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}