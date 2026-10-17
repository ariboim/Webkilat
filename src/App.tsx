import React from 'react';
import { TopFlashSaleBar } from './components/TopFlashSaleBar';
import { Navbar } from './components/Navbar';
import { AnimatedMarqueeBanner } from './components/AnimatedMarqueeBanner';
import { HeroSection } from './components/HeroSection';
import { UmkmBenefitsSection } from './components/UmkmBenefitsSection';
import { UmkmShowcaseSection } from './components/UmkmShowcaseSection';
import { PricingSection } from './components/PricingSection';
import { OrderFormSection } from './components/OrderFormSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* Top Flash Sale Countdown Urgency Bar */}
      <TopFlashSaleBar />

      {/* Light blue navbar */}
      <Navbar />

      {/* Animated Vibrant Marquee Banner */}
      <AnimatedMarqueeBanner />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Benefits & Copywriting for UMKM */}
        <UmkmBenefitsSection />

        {/* Custom UMKM Showcase (No Templates) */}
        <UmkmShowcaseSection />

        {/* Pricing Section (Rp 300.000 all-in, 1 hari, free domain) */}
        <PricingSection />

        {/* The Exact Order Form with WA 089673686625 */}
        <OrderFormSection />

        {/* Testimonials from UMKM Owners */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
