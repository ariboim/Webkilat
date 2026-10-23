import React, { useState, useEffect } from 'react';
import { TopFlashSaleBar } from './components/TopFlashSaleBar';
import { Navbar, PageTab } from './components/Navbar';
import { AnimatedMarqueeBanner } from './components/AnimatedMarqueeBanner';
import { HeroSection } from './components/HeroSection';
import { TrustBadgesSection } from './components/TrustBadgesSection';
import { VideoLandingPageSection } from './components/VideoLandingPageSection';
import { UmkmBenefitsSection } from './components/UmkmBenefitsSection';
import { UmkmShowcaseSection } from './components/UmkmShowcaseSection';
import { PricingSection } from './components/PricingSection';
import { OrderFlowSection } from './components/OrderFlowSection';
import { OrderFormSection } from './components/OrderFormSection';
import { OrderPageSection } from './components/OrderPageSection';
import { ContactPageSection } from './components/ContactPageSection';
import { ArticlesPageSection } from './components/ArticlesPageSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GeminiChatbot } from './components/GeminiChatbot';
import { BackToTop } from './components/BackToTop';
import { Sparkles, ArrowRight, MessageCircle, FileEdit, PhoneCall, ShieldCheck } from 'lucide-react';
import { ADMIN_WA_NUMBER, ADMIN_WA_DISPLAY } from './types/order';

export default function App() {
  const getTabFromHash = (): PageTab => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('artikel') || hash.includes('article') || hash.includes('blog')) return 'artikel';
    if (hash.includes('order') || hash.includes('pesan')) return 'order';
    if (hash.includes('kontak') || hash.includes('contact') || hash.includes('hubungi')) return 'kontak';
    return 'home';
  };

  const [activeTab, setActiveTab] = useState<PageTab>(getTabFromHash);

  // Sync with browser hash (back/forward button & direct URL access)
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Listen to custom navigation events from buttons across components
  useEffect(() => {
    const handleCustomNavigate = (e: CustomEvent<PageTab>) => {
      if (e.detail) {
        handleTabChange(e.detail);
      }
    };
    window.addEventListener('navigate-tab' as any, handleCustomNavigate);
    return () => window.removeEventListener('navigate-tab' as any, handleCustomNavigate);
  }, []);

  const handleTabChange = (tab: PageTab) => {
    setActiveTab(tab);
    window.location.hash = '#/' + tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* Top Flash Sale Countdown Urgency Bar */}
      <TopFlashSaleBar />

      {/* Light blue navbar with 3 Navigation Tabs: Home, Form Order, Kontak Kami */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Animated Vibrant Marquee Banner */}
      <AnimatedMarqueeBanner />


      <main className="flex-1">
        {/* ================= PAGE 1: HOME (BERANDA) ================= */}
        {activeTab === 'home' && (
          <div className="space-y-0 animate-fade-in">
            {/* Hero Section */}
            <HeroSection />

            {/* Official Trust Badges & Guarantee Bar */}
            <TrustBadgesSection />

            {/* Video: 5 Alasan Kenapa Anda Harus Punya Landing Page */}
            <VideoLandingPageSection />

            {/* Benefits & Copywriting for UMKM */}
            <UmkmBenefitsSection />

            {/* Custom UMKM Showcase (8 Industri Interaktif) */}
            <UmkmShowcaseSection />

            {/* Pricing Section (Rp 499.000 all-in, 1 hari, free domain) */}
            <PricingSection />

            {/* 5-Step Order Flow Diagram */}
            <OrderFlowSection />

            {/* Formulir Pemesanan Lengkap dengan Box Cek Ketersediaan Domain Terintegrasi */}
            <OrderFormSection />

            {/* Testimonials from UMKM Owners */}
            <TestimonialsSection />

            {/* FAQ Accordion */}
            <FaqSection />

            {/* Home Bottom Action Navigation Banner */}
            <section className="py-16 bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 text-white border-t border-slate-800">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-black uppercase tracking-wider border border-sky-400/30">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Website 3 Halaman Indo Digital</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-balance">
                  Siap Naik Kelas & Buka Pintu Penjualan 24 Jam Nonstop?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                  Jangan tunda lagi. Pilih halaman yang ingin Anda tuju: lengkapi formulir pesanan atau konsultasi gratis dengan Admin WhatsApp kami.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => handleTabChange('order')}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white font-black text-sm rounded-2xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                  >
                    <FileEdit className="w-4 h-4" />
                    <span>Buka Halaman Form Order (Rp 499rb)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleTabChange('kontak')}
                    className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-2xl border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Halaman Kontak Kami</span>
                  </button>

                  <a
                    href={`https://wa.me/${ADMIN_WA_NUMBER}?text=Halo%20Admin%20Indo%20Digital,%20saya%20tertarik%20dengan%20jasa%20landing%20page%20Rp%20499rb.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat WhatsApp Admin</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= PAGE 2: FORM ORDER (PEMESANAN) ================= */}
        {activeTab === 'order' && (
          <div className="animate-fade-in">
            <OrderPageSection
              onNavigateToHome={() => handleTabChange('home')}
              onNavigateToContact={() => handleTabChange('kontak')}
            />
          </div>
        )}

        {/* ================= PAGE 3: ARTIKEL (KISAH SUKSES UMKM) ================= */}
        {activeTab === 'artikel' && (
          <div className="animate-fade-in">
            <ArticlesPageSection
              onNavigateToOrder={() => handleTabChange('order')}
            />
          </div>
        )}

        {/* ================= PAGE 4: KONTAK KAMI (HUBUNGI KAMI) ================= */}
        {activeTab === 'kontak' && (
          <div className="animate-fade-in">
            <ContactPageSection
              onNavigateToOrder={() => handleTabChange('order')}
            />
          </div>
        )}
      </main>

      {/* Footer with 3 navtabs support */}
      <Footer onTabChange={handleTabChange} />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Gemini AI Interactive 24/7 Chatbot */}
      <GeminiChatbot />

      {/* Floating Back to Top Button (appears after 400px scroll) */}
      <BackToTop />
    </div>
  );
}
