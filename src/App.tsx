import React from 'react';
import { TopFlashSaleBar } from './components/TopFlashSaleBar';
import { Navbar } from './components/Navbar';
import { AnimatedMarqueeBanner } from './components/AnimatedMarqueeBanner';
import { HeroSection } from './components/HeroSection';
import { TrustBadgesSection } from './components/TrustBadgesSection';
import { VideoLandingPageSection } from './components/VideoLandingPageSection';
import { UmkmBenefitsSection } from './components/UmkmBenefitsSection';
import { UmkmShowcaseSection } from './components/UmkmShowcaseSection';
import { PricingSection } from './components/PricingSection';
import { OrderFlowSection } from './components/OrderFlowSection';
import { OrderFormSection } from './components/OrderFormSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GeminiChatbot } from './components/GeminiChatbot';
import { BackToTop } from './components/BackToTop';

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

        {/* Official Trust Badges & Guarantee Bar */}
        <TrustBadgesSection />

        {/* Video: 5 Alasan Kenapa Anda Harus Punya Landing Page */}
        <VideoLandingPageSection />

        {/* Benefits & Copywriting for UMKM */}
        <UmkmBenefitsSection />

        {/* Custom UMKM Showcase (No Templates) */}
        <UmkmShowcaseSection />

        {/* Pricing Section (Rp 499.000 all-in, 1 hari, free domain) */}
        <PricingSection />

        {/* 5-Step Professional Order Flow Diagram */}
        <OrderFlowSection />

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

      {/* Gemini AI Interactive 24/7 Chatbot */}
      <GeminiChatbot />

      {/* Floating Back to Top Button (appears after 400px scroll) */}
      <BackToTop />
    </div>
  );
}
