import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ADMIN_WA_NUMBER, ADMIN_WA_DISPLAY } from '../types/order';

export const FloatingWhatsApp: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {!minimized && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200 text-xs text-slate-800 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Butuh bantuan? Chat Admin di <strong>{ADMIN_WA_DISPLAY}</strong></span>
          <button
            onClick={() => setMinimized(true)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
            aria-label="Tutup notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={`https://wa.me/${ADMIN_WA_NUMBER}?text=Halo%20Admin%20Webkilat,%20saya%20mau%20konsultasi%20jasa%20landing%20page%201%20hari%20Rp%20300rb.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95 group"
        title="Chat WhatsApp Admin 089673686625"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">WhatsApp Admin (0896-7368-6625)</span>
        <span className="sm:hidden">Chat WA</span>
      </a>
    </div>
  );
};
