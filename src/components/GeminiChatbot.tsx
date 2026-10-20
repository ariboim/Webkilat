import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ArrowRight,
  MessageCircle,
  RotateCcw,
  Minimize2,
  Maximize2,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { ADMIN_WA_NUMBER, ADMIN_WA_DISPLAY } from '../types/order';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  hasOrderAction?: boolean;
  hasWaAction?: boolean;
}

const QUICK_PROMPTS = [
  '💰 Apa saja fasilitas paket Rp 499rb?',
  '💡 Beri ide headline untuk bisnis saya',
  '⏱️ Kenapa pengerjaan bisa 1 hari?',
  '🎯 5 alasan UMKM butuh landing page',
  '📝 Bagaimana alur cara pemesanannya?',
];

export const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Halo! 👋 Saya **Asisten AI Webkilat** didukung oleh teknologi **Google Gemini 3.8 Flash**.\n\nSaya siap membantu Anda memahami strategi landing page, merumuskan ide headline penawaran bisnis Anda, atau menjelaskan promo kilat **Rp 499.000 all-in (1 hari selesai + Free Domain 1 Tahun)**.\n\nAda yang ingin Anda tanyakan seputar bisnis Anda?`,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      hasOrderAction: true,
      hasWaAction: true,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen, messages]);

  // Listen to custom global event to open chat from any button in navbar/hero
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-gemini-chat', handleOpenChat);
    return () => {
      window.removeEventListener('open-gemini-chat', handleOpenChat);
    };
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const content = (textToSend || inputValue).trim();
    if (!content || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: content,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      // Build conversation history for API
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          history: historyPayload,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const replyText = data.reply || 'Maaf, terjadi kendala saat merespon. Silakan hubungi admin WhatsApp kami di 0896-7368-6625.';

      const lowerReply = replyText.toLowerCase();
      const hasOrderAction = lowerReply.includes('order') || lowerReply.includes('pesan') || lowerReply.includes('formulir') || lowerReply.includes('499');
      const hasWaAction = lowerReply.includes('whatsapp') || lowerReply.includes('wa') || lowerReply.includes('admin') || lowerReply.includes('0896');

      const botMessage: Message = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        hasOrderAction,
        hasWaAction,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: Message = {
        id: `model-err-${Date.now()}`,
        role: 'model',
        text: `Maaf, saat ini koneksi ke layanan AI sedang mengalami kendala. Anda dapat langsung mengobrol dengan tim konsultan kami via WhatsApp di **${ADMIN_WA_DISPLAY}** atau mengisi formulir order di bawah.`,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        hasOrderAction: true,
        hasWaAction: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        text: `Percakapan telah direset. Ada hal lain seputar landing page atau paket kilat **Rp 499.000** yang ingin Anda diskusikan?`,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        hasOrderAction: true,
        hasWaAction: true,
      },
    ]);
  };

  const scrollToOrderForm = () => {
    setIsOpen(false);
    const element = document.getElementById('formulir-pemesanan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simple Markdown Formatter for chat bubbles
  const renderFormattedText = (text: string) => {
    // Process lines
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Bold rendering **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const parsedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-slate-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('* ');
      const isNumbered = /^\d+\.\s/.test(line.trim());

      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      if (isBullet || isNumbered) {
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 pl-1">
            <span className="text-indigo-600 font-bold shrink-0">•</span>
            <span>{parsedLine}</span>
          </div>
        );
      }

      return (
        <p key={idx} className="my-1 leading-relaxed">
          {parsedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-20 right-5 z-40 flex flex-col items-end gap-2">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 hover:from-indigo-700 hover:via-purple-700 hover:to-sky-700 text-white font-bold text-xs rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-white/20"
            title="Tanya Asisten AI Gemini 24 Jam"
            aria-label="Buka Chatbot Gemini AI"
          >
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border-2 border-white"></span>
            </span>

            <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow group-hover:scale-110 transition-transform" />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[12px] leading-tight flex items-center gap-1.5">
                Tanya Gemini AI
                <span className="bg-white/20 text-[10px] px-1.5 py-0.2 rounded font-medium text-white">24 Jam</span>
              </span>
              <span className="text-[10px] text-indigo-100 font-normal leading-tight hidden sm:inline">
                Konsultan Landing Page & Ide Bisnis
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col shadow-2xl bg-white border border-slate-200 overflow-hidden ${
            isExpanded
              ? 'inset-3 sm:inset-10 rounded-2xl'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[420px] h-[580px] max-h-[88vh] rounded-2xl'
          }`}
          role="dialog"
          aria-label="Gemini AI Chatbot Webkilat"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-600 text-white px-4 py-3.5 flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white leading-tight">Asisten AI Webkilat</h3>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">
                    Gemini 3.8 Flash
                  </span>
                </div>
                <p className="text-[11px] text-indigo-100 flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Online • Siap jawab pertanyaan landing page
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/80">
              <button
                onClick={resetChat}
                className="p-1.5 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                title="Reset Percakapan"
                aria-label="Reset chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:block p-1.5 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                title={isExpanded ? 'Perkecil' : 'Perbesar'}
                aria-label="Toggle ukuran chat"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                title="Tutup Chat"
                aria-label="Tutup chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Bar */}
          <div className="bg-sky-50 border-b border-sky-100 px-3.5 py-1.5 flex items-center justify-between text-[11px] text-sky-800 shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
              Promo Flash Sale Rp 499rb (1 hari jadi + domain gratis)
            </span>
            <button
              onClick={scrollToOrderForm}
              className="font-bold text-sky-700 hover:text-sky-900 underline cursor-pointer"
            >
              Order Kilat &rarr;
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/60 text-xs text-slate-800">
            {messages.map((message) => {
              const isBot = message.role === 'model';
              return (
                <div
                  key={message.id}
                  className={`flex items-start gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                      isBot
                        ? 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none'
                        : 'bg-indigo-600 text-white rounded-tr-none'
                    }`}
                  >
                    <div className={`${isBot ? 'text-slate-700' : 'text-white'}`}>
                      {isBot ? renderFormattedText(message.text) : <p className="leading-relaxed">{message.text}</p>}
                    </div>

                    {/* Action buttons inside bot messages */}
                    {isBot && (message.hasOrderAction || message.hasWaAction) && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {message.hasOrderAction && (
                          <button
                            onClick={scrollToOrderForm}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold rounded-lg text-[11px] transition-colors border border-sky-200 cursor-pointer"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                            Isi Form Pemesanan Rp 499rb
                          </button>
                        )}
                        {message.hasWaAction && (
                          <a
                            href={`https://wa.me/${ADMIN_WA_NUMBER}?text=Halo%20Admin%20Webkilat,%20saya%20tadi%20berdiskusi%20dengan%20Asisten%20AI%20dan%20ingin%20konsultasi%20langsung.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold rounded-lg text-[11px] transition-colors border border-emerald-200"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                            Chat WA Admin
                          </a>
                        )}
                      </div>
                    )}

                    <span
                      className={`block text-[9px] mt-1.5 text-right ${
                        isBot ? 'text-slate-400' : 'text-indigo-200'
                      }`}
                    >
                      {message.timestamp}
                    </span>
                  </div>

                  {!isBot && (
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading / Thinking Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 text-slate-600 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Gemini AI sedang merespon...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestion Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[10px] text-slate-400 shrink-0 font-medium">Saran:</span>
            {QUICK_PROMPTS.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200 text-[11px] text-slate-700 transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                placeholder="Ketik pertanyaan untuk Gemini AI..."
                className="w-full pl-3.5 pr-11 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-60 text-slate-800 placeholder-slate-400"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-1.5 p-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
                aria-label="Kirim pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5 px-1">
              <span>Didukung Google Gemini 3.8 Flash</span>
              <span>Hubungi WA: {ADMIN_WA_DISPLAY}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
