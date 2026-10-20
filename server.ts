import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYSTEM_INSTRUCTION = `Anda adalah "Asisten AI Webkilat" (didukung teknologi Google Gemini 3.8 Flash), konsultan resmi landing page dan konversi penjualan digital dari Webkilat.
Misi utama Anda adalah membantu pemilik UMKM, pedagang online, praktisi jasa, dan pebisnis di Indonesia untuk memahami manfaat landing page, merumuskan ide copywriting/headline, dan menjawab pertanyaan seputar layanan jasa pembuatan landing page Webkilat.

INFORMASI LENGKAP LAYANAN WEBKILAT:
1. LAYANAN UTAMA & HARGA PROMO:
   - Jasa pembuatan landing page kustom super cepat: Selesai hanya dalam 1 HARI KERJA (24 jam) setelah materi/brief diterima.
   - Harga Normal: Rp 1.800.000,-
   - Harga Promo Flash Sale Saat Ini: Hanya Rp 499.000,- all-in (Hemat Rp 1.301.000).
   - Tanpa biaya langganan bulanan/tersembunyi untuk paket promo ini.

2. FASILITAS YANG DIDAPATKAN KLIEN (ALL-IN):
   - GRATIS Domain 1 tahun (.my.id atau .biz.id).
   - Desain 100% kustom & responsif (sangat optimal dan cepat di smartphone/HP pembeli).
   - Copywriting persuasif & menjual yang disesuaikan dengan produk/jasa klien.
   - Form pemesanan interaktif (order form) yang langsung mengirim data pesanan rapi ke WhatsApp penjual.
   - Integrasi tombol Call-to-Action (CTA) WhatsApp direct chat.
   - Gratis 1x revisi minor setelah website selesai.
   - Integrasi link media sosial, katalog foto produk, dan peta lokasi bisnis.

3. 5 ALASAN KENAPA BISNIS WAJIB PUNYA LANDING PAGE (EDUKASI INNE LIE):
   1. Toko Buka 24 Jam Nonstop: Website bekerja menerima calon pelanggan sepanjang hari tanpa lelah dan tanpa perlu bayar gaji kasir tambahan.
   2. Jangkauan Pasar Tak Terbatas: Pembeli bisa datang dari berbagai kota/pulau di Indonesia bahkan mancanegara.
   3. Tingkatkan Kredibilitas & Kepercayaan: Bisnis yang punya website/landing page terlihat jauh lebih profesional dan terpercaya dibanding hanya akun media sosial.
   4. Kumpulkan Database Pelanggan (Leads): "The money is in the list" — kumpulkan nomor kontak & data pembeli untuk strategi follow up dan repeat order.
   5. Pelacakan & Analitik Akurat: Bisa dipasang Meta Pixel (FB/IG Ads), Google Analytics, atau TikTok Pixel untuk retargeting iklan yang efektif.

4. KONTAK & CARA ORDER:
   - Kontak WhatsApp Admin: 0896-7368-6625 (Nomor: 6289673686625).
   - Cara Order: Klien cukup mengisi Formulir Pemesanan Kilat yang ada di halaman website Webkilat, lalu tekan tombol "Kirim Pesanan ke WhatsApp".

PEDOMAN GAYA BICARA & RESPON:
- Gunakan Bahasa Indonesia yang ramah, santun, antusias, jelas, dan berorientasi solusi (solutif).
- Jika pengguna menanyakan ide untuk bisnis mereka (misal: "saya jual hijab / herbal / kuliner / laundry"), berikan contoh ide Headline menarik, sudut pandang penawaran, atau struktur section landing page yang tepat.
- Format teks dengan rapi menggunakan poin-poin singkat (bullet points) agar nyaman dibaca di smartphone.
- Selalu selipkan ajakan ramah di akhir jawaban untuk memanfaatkan promo Rp 499.000 atau mengisi form order di website atau mengontak WhatsApp Admin di 0896-7368-6625.
- Jangan mengarang harga di luar Rp 499.000 untuk promo ini.`;

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Chatbot Gemini Endpoint
  app.post('/api/chat', async (req: Request, res: Response) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Parameter pesan (message) diperlukan.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          reply: 'Halo! Terima kasih sudah menghubungi Webkilat. Asisten AI kami siap mendampingi Anda. Jika kunci API belum terkonfigurasi di server, jangan khawatir—Anda dapat langsung berkonsultasi secara gratis dengan tim kami via WhatsApp di 0896-7368-6625 atau mengisi formulir pemesanan promo Rp 499.000 di halaman depan!'
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Prepare conversation history
      const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-8)) {
          if (item && item.text && (item.role === 'user' || item.role === 'model')) {
            formattedContents.push({
              role: item.role,
              parts: [{ text: String(item.text) }],
            });
          }
        }
      }

      // Append current user message
      formattedContents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const generatePromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: formattedContents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const timeoutPromise = new Promise<{ text?: string }>((_, reject) => {
        setTimeout(() => reject(new Error('TIMEOUT')), 14000);
      });

      const response = await Promise.race([generatePromise, timeoutPromise]);
      const reply = response.text || 'Halo! Terima kasih atas pertanyaannya. Tim kami siap membantu pembuatan landing page 1 hari untuk bisnis Anda. Silakan hubungi WhatsApp 0896-7368-6625 atau isi form order di bawah.';

      return res.json({ reply });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error('Error generating response with Gemini:', errorMsg);

      return res.json({
        reply: `Halo! Terima kasih sudah bertanya seputar Webkilat. Tim kami siap membantu pembuatan landing page kustom 1 hari selesai dengan harga promo Flash Sale **Rp 499.000 all-in** (sudah termasuk domain gratis 1 tahun, desain mobile-friendly, copywriting, dan form order WhatsApp).\n\nAnda dapat langsung mengobrol dengan Admin kami di WhatsApp **0896-7368-6625** untuk respon kilat atau scroll ke formulir order di bawah!`,
        isFallback: true
      });
    }
  });

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'webkilat-backend',
      timestamp: new Date().toISOString(),
      model: 'gemini-3.8-flash'
    });
  });

  // Serve static files in production or Vite middleware in development
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Webkilat server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
