import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';
import { ADMIN_WA_NUMBER } from '../types/order';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGeminiChat = () => {
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('open-gemini-chat'));
  };

  return (
    <header className="sticky top-0 z-50 bg-sky-50/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single Brand Wordmark */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5"
            >
              <span className="text-sky-600 font-black">web</span>kilat
              <span className="w-2 h-2 rounded-full bg-sky-500 inline-block mb-1"></span>
            </a>
          </div>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <button
              onClick={() => scrollToSection('alasan-landing-page')}
              className="text-sky-700 font-semibold hover:text-sky-800 transition-colors whitespace-nowrap cursor-pointer py-1 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              5 Alasan
            </button>
            <button
              onClick={() => scrollToSection('keunggulan')}
              className="hover:text-sky-700 transition-colors whitespace-nowrap cursor-pointer py-1"
            >
              Keunggulan UMKM
            </button>
            <button
              onClick={() => scrollToSection('contoh-umkm')}
              className="hover:text-sky-700 transition-colors whitespace-nowrap cursor-pointer py-1"
            >
              Contoh Kustom
            </button>
            <button
              onClick={() => scrollToSection('paket-harga')}
              className="hover:text-sky-700 transition-colors whitespace-nowrap cursor-pointer py-1"
            >
              Paket Rp 499rb
            </button>
            <button
              onClick={() => scrollToSection('testimoni')}
              className="hover:text-sky-700 transition-colors whitespace-nowrap cursor-pointer py-1"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-sky-700 transition-colors whitespace-nowrap cursor-pointer py-1"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* Highlighted Direct Link: PRODUK INDODIGITAL LAINNYA */}
            <a
              href="https://indo-digital.myr.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-black text-amber-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-400 rounded-lg shadow-sm border border-amber-400/90 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap group ring-2 ring-amber-300/60"
              title="Kunjungi Produk Indo Digital Lainnya"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span>PRODUK INDODIGITAL LAINNYA</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={openGeminiChat}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors whitespace-nowrap cursor-pointer shadow-xs group"
              title="Tanya Asisten AI Gemini 24 Jam"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse group-hover:rotate-12 transition-transform" />
              <span>Tanya Gemini AI</span>
            </button>
            <button
              onClick={() => scrollToSection('formulir-order')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-all transform active:scale-98 whitespace-nowrap cursor-pointer"
            >
              <span>Order Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-sky-100/60 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-sky-50 border-b border-sky-150 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-800">
            {/* Highlighted Direct Link: PRODUK INDODIGITAL LAINNYA */}
            <a
              href="https://indo-digital.myr.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left px-3.5 py-3 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 text-amber-950 font-black flex items-center justify-between border-2 border-amber-400 shadow-md group"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span className="tracking-wide">PRODUK INDODIGITAL LAINNYA</span>
              </div>
              <ExternalLink className="w-4 h-4 text-amber-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={openGeminiChat}
              className="text-left px-3 py-2.5 rounded-lg bg-indigo-100/80 hover:bg-indigo-200/80 transition-colors text-indigo-900 font-bold flex items-center gap-2 border border-indigo-300/60 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
              <span>Tanya Asisten AI Gemini (24 Jam)</span>
            </button>
            <button
              onClick={() => scrollToSection('alasan-landing-page')}
              className="text-left px-3 py-2 rounded-md hover:bg-sky-100/80 transition-colors text-sky-700 font-semibold flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Video: 5 Alasan Punya Landing Page
            </button>
            <button
              onClick={() => scrollToSection('keunggulan')}
              className="text-left px-3 py-2 rounded-md hover:bg-sky-100/80 transition-colors"
            >
              Keunggulan UMKM
            </button>
            <button
              onClick={() => scrollToSection('contoh-umkm')}
              className="text-left px-3 py-2 rounded-md hover:bg-sky-100/80 transition-colors"
            >
              Contoh Landing Page Kustom
            </button>
            <button
              onClick={() => scrollToSection('paket-harga')}
              className="text-left px-3 py-2 rounded-md hover:bg-sky-100/80 transition-colors"
            >
              Paket Rp 499rb All-In
            </button>
            <button
              onClick={() => scrollToSection('testimoni')}
              className="text-left px-3 py-2 rounded-md hover:bg-sky-100/80 transition-colors"
            >
              Testimoni Klien
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left px-3 py-2 rounded-md hover:bg-sky-100/80 transition-colors"
            >
              FAQ (Tanya Jawab)
            </button>
          </div>

          <div className="pt-2 border-t border-sky-200/60 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('formulir-order')}
              className="w-full text-center px-4 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm"
            >
              Isi Formulir Order (Rp 499rb)
            </button>
            <a
              href={`https://wa.me/${ADMIN_WA_NUMBER}?text=Halo%20Admin%20Webkilat,%20saya%20mau%20tanya%20jasa%20landing%20page%201%20hari%20Rp%20499rb.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-sky-200 rounded-lg hover:bg-sky-50"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat WhatsApp Admin (089673686625)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
