import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Globe,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Monitor,
  CheckCircle2,
  TrendingUp,
  Zap,
  Flame,
} from 'lucide-react';
import { ADMIN_WA_NUMBER } from '../types/order';
import { CountdownDisplay } from './CountdownTimer';

const LIVE_NOTIFICATIONS = [
  {
    icon: '🛒',
    title: 'Order Baru Masuk via WA',
    desc: 'Sambal Cumi Mak Nyoss · 3 Botol Bundling (Rp 105.000)',
    time: 'Baru saja',
  },
  {
    icon: '🌐',
    title: 'Domain Resmi Telah Aktif',
    desc: 'zahiramodest.my.id · Pengerjaan selesai 1 hari kilat',
    time: '2 menit lalu',
  },
  {
    icon: '📞',
    title: 'Booking Servis Diterima',
    desc: 'Sejuk Mandiri Teknik · Cuci 4 Unit AC Perkantoran',
    time: '5 menit lalu',
  },
  {
    icon: '✨',
    title: 'Konsultasi Kulit Lolos BPOM',
    desc: 'Dewi Ayu Herbal Care · Paket Glowing Rp 149.000',
    time: '7 menit lalu',
  },
];

export const HeroSection: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('desktop');
  const [currentNotifIndex, setCurrentNotifIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotifIndex((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToOrder = () => {
    const el = document.getElementById('formulir-order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentNotif = LIVE_NOTIFICATIONS[currentNotifIndex];

  return (
    <section className="relative pt-8 pb-20 overflow-hidden bg-white">
      {/* Dynamic ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-sky-200/50 via-sky-100/30 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-[450px] h-[450px] bg-sky-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hard Selling Flash Sale Urgency Box in Hero */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white shadow-lg border border-amber-300 text-xs font-black">
            <span className="flex items-center gap-1 bg-yellow-400 text-slate-950 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider animate-pulse">
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              FLASH SALE 6 JAM
            </span>
            <span className="tracking-wide">
              HARGA TERBATAS:{' '}
              <span className="line-through text-white/70 decoration-yellow-300 decoration-2 text-sm">
                Rp 1.500.000
              </span>{' '}
              ➔{' '}
              <span className="text-yellow-300 text-base font-black">
                CUMA RP 300.000
              </span>{' '}
              (HEMAT RP 1.200.000!)
            </span>
            <div className="hidden sm:flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded-lg border border-white/20">
              <span className="text-[10px] text-amber-300 uppercase font-bold">Sisa Waktu:</span>
              <CountdownDisplay variant="compact" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Copywriting */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-black text-rose-600 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
              <span>KLAIM SEBELUM HARGA NAIK KEMBALI RP 1.500.000</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>1 HARI JADI</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>FREE DOMAIN 1 TAHUN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-black text-slate-900 tracking-tight leading-[1.1] text-balance">
              Landing Page Bisnis 1 Hari Jadi,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-sky-600 to-blue-700">
                Harga Terbatas Rp 1.5 Juta Jadi Rp 300 Ribu!
              </span>
            </h1>

            {/* Hard Selling Callout */}
            <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-2xs space-y-1.5">
              <div className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span>JANGAN BIARKAN CALON PEMBELI LARI KE KOMPETITOR!</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                Pebisnis sukses punya website sendiri untuk meyakinkan pembeli tanpa ragu. Khusus <strong className="text-rose-600">6 jam hari ini</strong>, dapatkan landing page kustom profesional + domain aktif 1 tahun <strong className="text-slate-900">cuma Rp 300.000</strong> (Diskon 80% dari harga normal Rp 1.500.000). Besok harga normal kembali!
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToOrder}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-black text-white bg-gradient-to-r from-rose-600 via-rose-500 to-sky-600 hover:from-rose-700 hover:to-sky-700 rounded-2xl shadow-xl hover:shadow-rose-500/25 transition-all cursor-pointer whitespace-nowrap active:scale-98 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <span className="relative">KLAIM PROMO RP 300RB SEKARANG</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${ADMIN_WA_NUMBER}?text=Halo%20Admin%20Webkilat,%20saya%20mau%20klaim%20harga%20terbatas%20promo%201.5%20juta%20jadi%20300%20ribu%20sebelum%20countdown%20habis!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-slate-700 bg-sky-50/90 hover:bg-sky-100/90 border border-sky-200/90 rounded-2xl transition-all whitespace-nowrap shadow-xs hover:shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Klaim via WA (089673686625)</span>
              </a>
            </div>

            {/* Proof checklist with modern pill badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-600 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold text-slate-800">Rp 300rb All-In</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold text-slate-800">Free Domain 1 Thn</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold text-slate-800">Bukan Template</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold text-slate-800">Garansi Revisi</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Device Simulator Anchor with Animated Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center relative"
          >
            {/* Live Floating Animated Notification Banner */}
            <div className="w-full mb-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNotifIndex}
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-200 shadow-md flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className="text-base shrink-0">{currentNotif.icon}</span>
                    <div className="truncate">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{currentNotif.title}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">{currentNotif.desc}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-sky-600 font-semibold shrink-0 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                    {currentNotif.time}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Viewport switch controls */}
            <div className="flex items-center gap-1 p-1 bg-sky-50 border border-sky-200/70 rounded-xl mb-3 self-end shadow-2xs">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  deviceMode === 'desktop'
                    ? 'bg-white text-sky-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Tampilan Komputer</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  deviceMode === 'mobile'
                    ? 'bg-white text-sky-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Tampilan HP</span>
              </button>
            </div>

            {/* Device Container */}
            {deviceMode === 'desktop' ? (
              <div className="w-full bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-800 transition-all duration-300 relative group">
                {/* Floating Micro Badge */}
                <div className="absolute -top-3 -right-3 z-20 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5 animate-float">
                  <TrendingUp className="w-3 h-3" />
                  <span>Konversi Naik 3.4x</span>
                </div>

                {/* Browser top chrome */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-800 rounded-t-2xl mb-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="px-4 py-0.5 bg-slate-900/90 rounded text-[11px] font-mono text-slate-300 flex items-center gap-1.5 border border-slate-700/50">
                    <Globe className="w-3 h-3 text-sky-400" />
                    <span>https://usahaanda.my.id</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">SSL Aktif</span>
                </div>

                {/* Simulated Custom Landing Page Canvas */}
                <div className="bg-white rounded-b-2xl p-5 text-slate-900 space-y-4 max-h-[380px] overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-extrabold text-sm text-sky-700 tracking-tight">KREASI BISNIS NUSANTARA</span>
                    <span className="text-[11px] text-slate-500 font-medium">Buka 24 Jam · WhatsApp Fast Response</span>
                  </div>

                  <div className="bg-gradient-to-r from-sky-50 via-blue-50/50 to-sky-50 p-4 rounded-xl border border-sky-100/90 shadow-2xs">
                    <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-sky-600" />
                      <span>Kustom Desain Sesuai Brand Anda</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Tingkatkan Omzet Penjualan dengan Landing Page yang Bikin Pembeli Langsung Percaya
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Jelaskan keunggulan produk Anda dengan visual bersih, testimoni asli, dan tombol order otomatis ke WhatsApp.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat Pesan Sekarang (WA)</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">Garansi 100% Produk Original</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Bahan Alami</div>
                      <div className="text-[10px] text-slate-500">100% Higienis</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Pengiriman Kilat</div>
                      <div className="text-[10px] text-slate-500">Bisa Bayar COD</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Ribuan Testimoni</div>
                      <div className="text-[10px] text-slate-500">Bintang 4.9/5.0</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[280px] bg-slate-900 rounded-[38px] p-3 shadow-2xl border-4 border-slate-800 transition-all duration-300 relative">
                {/* Floating badge for mobile */}
                <div className="absolute -top-3 -right-2 z-20 bg-sky-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 animate-float">
                  ⚡ 1 Hari Jadi
                </div>

                {/* Phone speaker notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-950"></div>
                </div>

                <div className="bg-white rounded-[26px] p-4 text-slate-900 space-y-3 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="font-extrabold text-xs text-sky-700">BISNIS ANDA</span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-medium">Online</span>
                  </div>

                  <div className="bg-sky-50/90 p-3 rounded-xl border border-sky-100">
                    <div className="text-[9px] font-bold text-sky-800 uppercase">Promo Spesial Hari Ini</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">Produk Pilihan Terbaik untuk Keluarga</div>
                    <div className="text-[10px] text-slate-600 mt-1">Diskon 30% + Subsidi Ongkir Se-Indonesia</div>
                  </div>

                  <div className="bg-emerald-600 text-white text-center py-2.5 px-2 rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pesan Langsung di WhatsApp</span>
                  </div>

                  <div className="text-[9px] text-center text-slate-400">
                    *Domain aktif 1 tahun & bebas konsultasi
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* 4 Feature Value Pillars below hero with interactive hover */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 shadow-xs hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-2xs">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">1 Hari Jadi (24 Jam)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tak perlu menunggu berminggu-minggu. Begitu data dikirim, tim kami langsung mengerjakannya maraton sampai tayang.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 shadow-xs hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-2xs">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Free Domain 1 Tahun</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sudah termasuk nama domain bisnis resmi (.my.id / .biz.id / promo .com) aktif setahun penuh atas nama usaha Anda.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 shadow-xs hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-2xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">100% Desain Kustom</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bukan template pasaran murahan. Layout, pilihan warna, dan copywriting kami susun khusus sesuai karakter bisnis Anda.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 shadow-xs hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Cuma Rp 300 Ribu All-In</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Harga hemat yang sangat ramah kantong UMKM. Tanpa biaya bulanan siluman, langsung siap untuk promosi medsos dan iklan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
