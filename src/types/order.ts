export interface OrderFormData {
  namaSalesKonsultan: string;
  // 1. Data Klien
  namaLengkap: string;
  nomorWa: string;
  email: string;
  namaBisnis: string;
  alamatBisnis: string;
  mediaSosial: string;
  // 2. Informasi Produk / Layanan
  namaProduk: string;
  deskripsiProduk: string;
  targetAudiens: string;
  hargaPenawaran: string;
  // 3. Kebutuhan & Tujuan Landing Page
  tujuanLandingPage: string[];
  tujuanLainnya: string;
  ctaDiinginkan: string[];
  ctaLainnya: string;
}

export const ADMIN_WA_NUMBER = '6289673686625';
export const ADMIN_WA_DISPLAY = '0896-7368-6625';

export function formatOrderToWhatsApp(data: OrderFormData): string {
  const tujuanList = [...data.tujuanLandingPage];
  if (data.tujuanLainnya.trim()) {
    tujuanList.push(`Lainnya: ${data.tujuanLainnya.trim()}`);
  }

  const ctaList = [...data.ctaDiinginkan];
  if (data.ctaLainnya.trim()) {
    ctaList.push(`Lainnya: ${data.ctaLainnya.trim()}`);
  }

  const lines = [
    `*FORMULIR PEMESANAN JASA LANDING PAGE WEB KILAT*`,
    `Paket: FLASH SALE 6 JAM (Promo Terbatas Rp 1.500.000 -> Rp 300.000 - Free Domain 1 Thn)`,
    `Diskon: 80% (Hemat Rp 1.200.000)`,
    `Tanggal: ${new Date().toLocaleDateString('id-ID', { dateStyle: 'full' })}`,
    ``,
    data.namaSalesKonsultan ? `*Nama Sales Konsultan:* ${data.namaSalesKonsultan}` : `*Nama Sales Konsultan:* -`,
    ``,
    `*1. DATA KLIEN*`,
    `• *Nama Lengkap / PIC:* ${data.namaLengkap || '-'}`,
    `• *No. WhatsApp / Kontak:* ${data.nomorWa || '-'}`,
    `• *Email:* ${data.email || '-'}`,
    `• *Nama Bisnis / Brand:* ${data.namaBisnis || '-'}`,
    `• *Alamat Bisnis / Usaha:* ${data.alamatBisnis || '-'}`,
    `• *Web / Medsos Saat Ini:* ${data.mediaSosial || '-'}`,
    ``,
    `*2. INFORMASI PRODUK / LAYANAN*`,
    `• *Nama Produk / Layanan:* ${data.namaProduk || '-'}`,
    `• *Deskripsi Singkat:* ${data.deskripsiProduk || '-'}`,
    `• *Target Audiens:* ${data.targetAudiens || '-'}`,
    `• *Harga & Penawaran Khusus:* ${data.hargaPenawaran || '-'}`,
    ``,
    `*3. KEBUTUHAN & TUJUAN LANDING PAGE*`,
    `• *Tujuan Utama:*`,
    ...(tujuanList.length > 0 ? tujuanList.map(t => `   - ${t}`) : [`   - (Belum ditentukan)`]),
    `• *Call to Action (CTA) Diinginkan:*`,
    ...(ctaList.length > 0 ? ctaList.map(c => `   - ${c}`) : [`   - (Belum ditentukan)`]),
    ``,
    `*4. SYARAT & KETENTUAN:*`,
    `• Menyetujui S&K Harga Promo (Free 1x revisi, Free domain .my.id/.biz.id, tanpa email bisnis)`,
    ``,
    `Halo Admin Webkilat, saya sudah mengisi formulir order di atas dan menyetujui syarat & ketentuan promo. Mohon segera diproses untuk pengerjaan 1 hari kilat. Terima kasih!`
  ];

  return lines.join('\n');
}

export function generateWhatsAppUrl(data: OrderFormData): string {
  const message = formatOrderToWhatsApp(data);
  return `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
