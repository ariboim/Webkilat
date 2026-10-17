import React from 'react';
import { CountdownDisplay } from './CountdownTimer';
import { Flame, ArrowRight, Zap, AlertTriangle } from 'lucide-react';

export const TopFlashSaleBar: React.FC = () => {
  const scrollToOrder = () => {
    const el = document.getElementById('formulir-order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 text-white py-2.5 px-4 shadow-md border-b-2 border-amber-300 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-xs">
        {/* Left: Hard-selling headline */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start text-center md:text-left">
          <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-bounce shadow-xs">
            <Flame className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            FLASH SALE DISKON 80%
          </span>
          <span className="font-extrabold tracking-tight">
            HARGA CORET:{' '}
            <span className="line-through text-white/75 decoration-yellow-300 decoration-2 text-sm">
              Rp 1.500.000
            </span>{' '}
            ➔{' '}
            <span className="text-yellow-300 text-sm font-black underline underline-offset-2">
              CUMA RP 300.000!
            </span>
          </span>
          <span className="hidden lg:inline bg-black/25 px-2 py-0.5 rounded text-[11px] font-semibold text-rose-100">
            (HEMAT RP 1.200.000 + FREE DOMAIN 1 TAHUN)
          </span>
        </div>

        {/* Right: Countdown & Action */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-black/35 px-2.5 py-1 rounded-lg border border-white/20">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">
              Berakhir:
            </span>
            <CountdownDisplay variant="compact" />
          </div>

          <button
            onClick={scrollToOrder}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-black bg-yellow-400 hover:bg-yellow-300 text-slate-950 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>AMBIL DISKON 80%</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
