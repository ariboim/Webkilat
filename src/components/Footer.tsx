import React from 'react';
import { ADMIN_WA_DISPLAY, ADMIN_WA_NUMBER } from '../types/order';
import { MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Value Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5 text-xl font-extrabold text-white tracking-tight">
              <span className="text-sky-400">web</span>kilat
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Jasa pembuatan landing page kustom 1 hari selesai untuk UMKM dan bisnis online Indonesia seharga Rp 499.000 all-in, gratis domain 1 tahun, dan langsung terhubung ke WhatsApp siap closing.
            </p>
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>100% Desain Kustom · Bebas Template Pasaran</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('keunggulan')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Keunggulan untuk UMKM
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contoh-umkm')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contoh Kasus Kustom
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('paket-harga')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Paket Rp 499rb All-In
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('testimoni')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Testimoni Pelaku Usaha
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ & Tanya Jawab
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Admin */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak Admin & Konsultasi
            </div>
            <p className="text-slate-400 leading-relaxed">
              Ada pertanyaan seputar pemesanan landing page kilat untuk usaha Anda? Hubungi admin resmi kami:
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/${ADMIN_WA_NUMBER}?text=Halo%20Admin%20Webkilat,%20saya%20mau%20konsultasi%20pembuatan%20landing%20page.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Admin: {ADMIN_WA_DISPLAY}</span>
              </a>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Jam Operasional: Setiap Hari (08.00 - 22.00 WIB)
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-slate-400">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center justify-center sm:justify-start flex-wrap gap-2.5 text-xs text-slate-300">
              <span className="text-slate-400 font-medium tracking-tight">powered by</span>
              <img
                src="/logo.svg"
                alt="Indo Digital"
                className="h-7 w-auto object-contain inline-block drop-shadow-[0_0_12px_rgba(56,189,248,0.35)] select-none"
                loading="eager"
              />
              <span className="text-slate-400 font-medium tracking-tight">copyright @2026</span>
            </div>
            <div className="text-slate-500 text-[11px]">
              Jl pangkalan 6 raya no 16 RT 003 RW 004 Ciketing udik, Bekasi Jawa Barat 17153
            </div>
            <div className="text-slate-500 text-[10px]">
              © {new Date().getFullYear()} webkilat. Jasa Pembuatan Landing Page 1 Hari Rp 499rb Free Domain.
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 text-slate-400">
            <span>Didedikasikan untuk memajukan UMKM Indonesia</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
