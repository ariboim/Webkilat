import React from 'react';
import {
  ShieldCheck,
  Lock,
  Zap,
  Clock,
  Award,
  Headphones,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  CreditCard,
  Building2,
  Check,
} from 'lucide-react';

export const TrustBadgesSection: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {/* Badge 1: 100% Garansi Kepuasan */}
          <div className="group p-4 bg-white rounded-2xl border border-sky-100 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20 mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-[10px] uppercase font-black tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full mb-1">
              Garansi Resmi
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
              100% Kepuasan
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
              Free revisi 1x hingga tampilan sesuai karakter bisnis Anda.
            </p>
          </div>

          {/* Badge 2: Pengerjaan Kilat 24 Jam */}
          <div className="group p-4 bg-white rounded-2xl border border-sky-100 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shadow-md shadow-rose-500/20 mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 stroke-[2.2] fill-white/20" />
            </div>
            <div className="text-[10px] uppercase font-black tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full mb-1">
              Super Fast
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
              1 Hari Jadi (24 Jam)
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
              Pengerjaan maraton, besok website langsung aktif & siap closing.
            </p>
          </div>

          {/* Badge 3: SSL 256-Bit & Domain Resmi */}
          <div className="group p-4 bg-white rounded-2xl border border-sky-100 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 mb-3 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-[10px] uppercase font-black tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mb-1">
              Keamanan Tinggi
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
              SSL 256-Bit Encrypted
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
              HTTPS aman gembok hijau, server uptime 99.9% stabil & cepat.
            </p>
          </div>

          {/* Badge 4: 100% Desain Kustom */}
          <div className="group p-4 bg-white rounded-2xl border border-sky-100 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20 mb-3 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-[10px] uppercase font-black tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full mb-1">
              Original Design
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
              100% Kustom Unik
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
              Bukan template murahan, disesuaikan dengan psikologi pembeli Anda.
            </p>
          </div>

          {/* Badge 5: Pembayaran Terverifikasi */}
          <div className="group p-4 bg-white rounded-2xl border border-sky-100 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 mb-3 group-hover:scale-110 transition-transform">
              <CreditCard className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-[10px] uppercase font-black tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full mb-1">
              Aman & Resmi
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
              Pembayaran Terverifikasi
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
              Mendukung transfer BCA, Mandiri, BRI, QRIS, & e-Wallet resmi.
            </p>
          </div>

          {/* Badge 6: Support WhatsApp 24/7 */}
          <div className="group p-4 bg-white rounded-2xl border border-sky-100 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-teal-500/20 mb-3 group-hover:scale-110 transition-transform">
              <Headphones className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-[10px] uppercase font-black tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full mb-1">
              Bantuan Cepat
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
              Support WA Responsif
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
              Dukungan teknis & konsultasi via WA 0896-7368-6625 setiap hari.
            </p>
          </div>
        </div>

        {/* Secondary Trust & Security Seal Banner */}
        <div className="mt-6 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black text-slate-900 uppercase tracking-wide">
                  Keamanan & Kepercayaan Pembelian Terjamin
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                  Verified UMKM Partner
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Semua proyek diproses langsung oleh tim Webkilat dengan jaminan kerahasiaan data dan perlindungan konsumen.
              </p>
            </div>
          </div>

          {/* Payment & Security Logos / Chips */}
          <div className="flex items-center flex-wrap gap-2 justify-center lg:justify-end shrink-0">
            {/* BCA */}
            <div className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-extrabold text-blue-800 tracking-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              BCA
            </div>
            {/* Mandiri */}
            <div className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-extrabold text-amber-700 tracking-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              MANDIRI
            </div>
            {/* BRI */}
            <div className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-extrabold text-blue-900 tracking-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
              BRI
            </div>
            {/* QRIS */}
            <div className="px-2.5 py-1 bg-rose-50 border border-rose-200 rounded-lg text-[11px] font-black text-rose-700 tracking-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
              QRIS
            </div>
            {/* e-Wallet */}
            <div className="px-2.5 py-1 bg-sky-50 border border-sky-200 rounded-lg text-[11px] font-bold text-sky-800 tracking-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              GoPay / OVO / Dana
            </div>
            {/* SSL Badge */}
            <div className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] font-bold text-emerald-800 tracking-tight flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-600" />
              256-Bit SSL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
