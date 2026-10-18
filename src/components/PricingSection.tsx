import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, AlertTriangle, Flame, Clock } from 'lucide-react';
import { CountdownDisplay } from './CountdownTimer';

export const PricingSection: React.FC = () => {
  const scrollToOrder = () => {
    const el = document.getElementById('formulir-order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="paket-harga" className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with hard-selling highlight */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black uppercase tracking-wider border border-rose-200">
            <Flame className="w-4 h-4 fill-rose-600 text-rose-600 animate-pulse" />
            <span>PENAWARAN TERBESAR BULAN INI · DISKON SPESIAL 80%</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
            Promo Terbatas Rp 1.500.000 Jadi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-sky-600 to-blue-700">
              Cuma Rp 300 Ribu!
            </span>
          </h2>
          <p className="text-base text-slate-700 font-medium leading-relaxed">
            Anda menghemat <strong className="text-rose-600 underline decoration-rose-300">Rp 1.200.000,-</strong> khusus pemesanan hari ini. Sudah terima beres: domain aktif 1 tahun, hosting super cepat, dan copywriting kustom siap closing dalam 24 jam!
          </p>
        </div>

        {/* Pricing Card Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border-3 border-rose-500 shadow-2xl overflow-hidden relative">
            {/* Top Animated Hard-Selling Badge */}
            <div className="bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 text-white text-center py-3 px-4 text-xs font-black tracking-wide uppercase flex flex-wrap items-center justify-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
              </span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>⚡ FLASH SALE KHUSUS HARI INI: SISA 3 DARI 10 KUOTA DOMAIN GRATIS!</span>
            </div>

            <div className="p-8 sm:p-10 lg:p-12 space-y-8">
              {/* Urgency Countdown Box inside Card */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-2xl text-white border border-slate-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left space-y-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-rose-400 text-xs font-black uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-rose-500 animate-spin" style={{ animationDuration: '6s' }} />
                    <span>WAKTU PROMO TERSISA HANYA:</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white">
                    Promo Berakhir Dalam 6 Jam Lagi!
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Setelah waktu habis, harga <strong className="text-white">otomatis kembali ke Rp 1.500.000</strong> tanpa pengecualian. Jangan lewatkan kesempatan langka ini!
                  </p>
                </div>

                <div className="shrink-0">
                  <CountdownDisplay variant="card" />
                </div>
              </div>

              {/* Price comparison strike through block */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
                <div>
                  <div className="inline-block px-3 py-1 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs font-black uppercase tracking-wider mb-2">
                    🔥 DISKON GILA-GILAAN 80%
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Paket Komplit Landing Page Webkilat
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 max-w-md font-medium">
                    Solusi instan untuk menaikkan reputasi bisnis & omzet harian tanpa harus bayar biaya mahal jutaan rupiah ke agensi.
                  </p>
                </div>

                <div className="text-left md:text-right shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Harga Normal Agensi:
                  </div>
                  {/* Promo Terbatas 1.5 Juta */}
                  <div className="text-base sm:text-lg font-bold text-rose-500 line-through decoration-rose-600 decoration-3">
                    Rp 1.500.000,-
                  </div>

                  {/* Harga Promo 300 Ribu */}
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm font-black text-slate-900">Rp</span>
                    <span className="text-4xl sm:text-5xl font-black text-sky-600 tracking-tight">
                      300.000
                    </span>
                    <span className="text-xs font-bold text-slate-500">/ all-in</span>
                  </div>

                  <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <span>✓ ANDA HEMAT RP 1.200.000 HARI INI</span>
                  </div>
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="py-2 grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">FREE Domain Resmi 1 Tahun</strong>
                    <div className="text-xs text-slate-500">Pilihan .my.id / .biz.id / promo .com atas nama brand Anda (Senilai Rp 250.000)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Cloud Hosting Cepat 1 Tahun</strong>
                    <div className="text-xs text-slate-500">Akses kilat, stabil 99.9%, dan sertifikat SSL/HTTPS gratis (Senilai Rp 350.000)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Desain Kustom (Bukan Template)</strong>
                    <div className="text-xs text-slate-500">Dibuat khusus sesuai psikologi pembeli & karakter produk Anda (Senilai Rp 500.000)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Selesai Kilat dalam 24 Jam</strong>
                    <div className="text-xs text-slate-500">Pengerjaan maraton 1 hari kerja, besok website Anda sudah tayang & siap share</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Penulisan Copywriting Menjual</strong>
                    <div className="text-xs text-slate-500">Kami susunkan kata-kata penawaran persuasif yang bikin pembeli kebelet transfer</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Sambung WhatsApp Otomatis</strong>
                    <div className="text-xs text-slate-500">Tombol Call to Action langsung mengarahkan draf pesanan ke WA admin Anda</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Tampilan Responsif Mobile & PC</strong>
                    <div className="text-xs text-slate-500">Sangat ringan dan nyaman dibuka di HP kentang maupun laptop beresolusi tinggi</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Garansi Revisi & Panduan Penggunaan</strong>
                    <div className="text-xs text-slate-500">Bebas revisi materi sampai Anda benar-benar puas dan siap beriklan</div>
                  </div>
                </div>
              </div>

              {/* Hard Selling Warning Box */}
              <div className="p-4 bg-amber-50 rounded-2xl border-2 border-amber-300 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950 leading-relaxed">
                  <strong className="font-extrabold text-amber-900 uppercase">JANGAN MENUNDA:</strong> Setiap hari ratusan pembeli mencari produk seperti yang Anda jual. Jangan biarkan mereka lari ke kompetitor hanya karena bisnis Anda belum punya website resmi! Promo Rp 300.000 ini akan ditutup otomatis ketika hitungan mundur selesai.
                </div>
              </div>

              {/* Bottom CTA block */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Garansi revisi & dukungan teknis langsung WhatsApp</span>
                </div>

                <button
                  onClick={scrollToOrder}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black text-white bg-gradient-to-r from-rose-600 via-rose-500 to-sky-600 hover:from-rose-700 hover:to-sky-700 rounded-2xl shadow-xl hover:shadow-rose-500/25 transition-all cursor-pointer whitespace-nowrap active:scale-98"
                >
                  <span>KLAIM PROMO RP 300RB SEKARANG (HEMAT 1.2 JT)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
