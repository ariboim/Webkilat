import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UMKM_SHOWCASES, UmkmShowcase } from '../data/umkmShowcase';
import { Sparkles, MessageCircle, Check, ArrowRight, ShieldCheck, MapPin, ExternalLink, Globe } from 'lucide-react';
import { ADMIN_WA_NUMBER } from '../types/order';

const INSPIRATION_SITES = [
  { domain: 'bucini.id', desc: 'Produk Kulit Asli & Kerajinan Nusantara', category: 'Craft & Leather' },
  { domain: 'ladanglima.com', desc: 'Tepung Singkong Sehat & Gluten Free', category: 'Healthy Food & F&B' },
  { domain: 'chocolatemonggo.com', desc: 'Cokelat Artisan Asli Khas Yogyakarta', category: 'Kuliner Premium' },
  { domain: 'bengokcraft.com', desc: 'Kreasi Anyaman Eceng Gondok Ramah Lingkungan', category: 'Eco Creative Craft' },
  { domain: 'gayolandcofee.com', desc: 'Kopi Arabika Premium Dataran Gayo', category: 'Specialty Coffee' },
  { domain: 'lapisbogor.co.id', desc: 'Oleh-Oleh Khas Lapis Talas Sangkuriang', category: 'Kuliner Ikonik' },
  { domain: 'seamwork.com', desc: 'Komunitas & Pola Desain Busana Mandiri', category: 'Fashion & Apparel' },
  { domain: 'barkismet.com', desc: 'Nutrisi & Perawatan Hewan Peliharaan', category: 'Pet Supplies' },
];

export const UmkmShowcaseSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(UMKM_SHOWCASES[0].id);

  const activeCase: UmkmShowcase =
    UMKM_SHOWCASES.find((item) => item.id === activeTabId) || UMKM_SHOWCASES[0];

  const scrollToOrder = () => {
    const el = document.getElementById('formulir-order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contoh-umkm" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs font-bold border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>100% Desain Kustom · Bukan Template Pasaran</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Contoh Studi Kasus Landing Page UMKM Indonesia
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Terinspirasi dari model bisnis UMKM riil di berbagai sektor. Kami menyusun struktur visual, teks penawaran, dan tombol order yang disesuaikan secara khusus untuk masing-masing bidang usaha.
          </p>
        </div>

        {/* Notice Banner: No Templates! */}
        <div className="mb-10 p-4 bg-gradient-to-r from-sky-50 via-blue-50/40 to-sky-50 border border-sky-200 rounded-2xl flex items-start gap-3 shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <div className="text-xs text-sky-950 leading-relaxed">
            <strong className="font-bold">Kenapa Kami Tidak Menawarkan Pilihan Template?</strong> Karena bisnis kuliner membutuhkan visual yang menggugah selera dan jaminan rasa, sedangkan bisnis jasa teknik membutuhkan transparansi harga dan garansi servis darurat. Template pasaran tidak dapat mewakili karakter unik bisnis Anda. Di <strong>webkilat</strong>, setiap landing page dibuat <em>100% tailor-made</em> (kustom) untuk Anda!
          </div>
        </div>

        {/* Animated Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {UMKM_SHOWCASES.map((item) => {
            const isActive = item.id === activeTabId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`relative px-5 py-2.5 text-xs font-bold rounded-2xl transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-sky-600 rounded-2xl -z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail & Mockup with Smooth Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left: Case Study Information */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1.5">
                    <span className="font-bold text-sky-700">{activeCase.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {activeCase.city}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {activeCase.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mt-1 italic">
                    "{activeCase.tagline}"
                  </p>
                </div>

                {/* Problem & Solution Accordion Cards */}
                <div className="space-y-4 text-xs">
                  <div className="p-4 bg-white rounded-2xl border border-rose-200 shadow-2xs">
                    <div className="font-bold text-rose-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span>Tantangan Awal UMKM:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{activeCase.problem}</p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-sky-200 shadow-2xs">
                    <div className="font-bold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span>Solusi Landing Page Kustom Webkilat:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{activeCase.solution}</p>
                  </div>
                </div>

                {/* Quantified Results */}
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Hasil Nyata yang Didapatkan Klien:
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {activeCase.results.map((res, idx) => (
                      <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center shadow-2xs">
                        <div className="text-base sm:text-xl font-black text-sky-600">{res.value}</div>
                        <div className="text-[11px] font-bold text-slate-800 mt-0.5">{res.label}</div>
                        <div className="text-[10px] text-slate-500 mt-1 leading-tight">{res.note}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA trigger */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={scrollToOrder}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                  >
                    <span>Pesan Desain Kustom Serupa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/${ADMIN_WA_NUMBER}?text=Halo%20Admin%20Webkilat,%20saya%20tertarik%20dengan%20contoh%20landing%20page%20${encodeURIComponent(activeCase.category)}%20(${encodeURIComponent(activeCase.name)}).%20Bisa%20buatkan%20untuk%20usaha%20saya?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-50 border border-sky-200"
                  >
                    <span>Tanya Model Ini di WA</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right: Live Interactive Mockup Simulator of the Custom Page */}
              <div className="lg:col-span-6">
                <div className="bg-slate-900 rounded-3xl p-3.5 shadow-2xl border border-slate-800">
                  {/* Browser bar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-slate-800 rounded-t-2xl mb-2 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      https://{activeCase.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.my.id
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold">Live Web</span>
                  </div>

                  {/* Inner Landing Page Container */}
                  <div
                    className="rounded-b-2xl p-5 text-slate-900 space-y-4 max-h-[460px] overflow-y-auto"
                    style={{ backgroundColor: activeCase.palette.bg }}
                  >
                    {/* Top Bar of the client landing page */}
                    <div className="flex items-center justify-between border-b border-black/5 pb-2">
                      <div className="font-extrabold text-sm" style={{ color: activeCase.palette.primary }}>
                        {activeCase.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {activeCase.city}
                      </div>
                    </div>

                    {/* Hero Box inside the client mockup */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 space-y-3">
                      <div
                        className="inline-block text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase"
                        style={{
                          backgroundColor: activeCase.palette.secondary,
                          color: activeCase.palette.primary,
                        }}
                      >
                        {activeCase.mockup.offerBadge}
                      </div>

                      <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                        {activeCase.mockup.headline}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {activeCase.mockup.subheadline}
                      </p>

                      <div className="text-xs font-bold text-slate-800">
                        {activeCase.mockup.priceSnippet}
                      </div>

                      {/* Features list */}
                      <div className="space-y-1.5 pt-1">
                        {activeCase.mockup.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* The WhatsApp CTA inside the client mockup */}
                      <div className="pt-2">
                        <div
                          className="w-full text-white text-center py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
                          style={{ backgroundColor: '#16A34A' }}
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>{activeCase.mockup.ctaLabel}</span>
                        </div>
                        <div className="text-[10px] text-center text-slate-500 mt-2">
                          {activeCase.mockup.guarantee}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Inspirasi Landing Page UMKM Sukses */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>Inspirasi Brand Lokal & Nasional</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Berikut adalah beberapa contoh landing page umkm yang sukses sebagai inspirasi anda :
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Brand-brand ini membuktikan bahwa website mandiri dengan penataan visual rapi dan copywriting terarah mampu mengubah bisnis lokal menjadi brand bernilai tinggi dan dipercaya ribuan pelanggan.
            </p>
          </div>

          {/* Grid of 8 inspiration links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSPIRATION_SITES.map((site, sIdx) => (
              <a
                key={sIdx}
                href={`https://${site.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-slate-50 hover:bg-sky-50/70 border border-slate-200 hover:border-sky-300 rounded-2xl transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-sm"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-white px-2 py-0.5 rounded-md border border-slate-200/80">
                      {site.category}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-colors" />
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors flex items-center gap-1.5 pt-1">
                    <span className="font-mono">{site.domain}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {site.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-sky-600 font-bold group-hover:underline">
                  <span>Lihat Website</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Call to action connecting to our Rp 300rb custom service */}
          <div className="mt-8 p-6 bg-gradient-to-r from-sky-50 via-blue-50/60 to-sky-50 rounded-2xl border border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Ingin Punya Landing Page Sebagus & Seefektif Brand-Brand di Atas?
              </h4>
              <p className="text-xs text-slate-600 max-w-xl">
                Tim Webkilat siap mendesain landing page kustom eksklusif untuk bisnis Anda hanya dalam 1 hari kerja seharga Rp 300.000 all-in sudah termasuk domain aktif 1 tahun!
              </p>
            </div>
            <button
              onClick={scrollToOrder}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-black text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer active:scale-98 whitespace-nowrap"
            >
              <span>Mulai Buat Website Saya Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
