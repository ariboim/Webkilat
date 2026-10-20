import React, { useState, useEffect } from 'react';
import {
  OrderFormData,
  ADMIN_WA_NUMBER,
  ADMIN_WA_DISPLAY,
  generateWhatsAppUrl,
  formatOrderToWhatsApp,
} from '../types/order';
import {
  Send,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
  Info,
  ShieldCheck,
  AlertCircle,
  RotateCcw,
  FileText,
  Lock,
  Award,
  Zap,
  CheckCircle2,
} from 'lucide-react';

const INITIAL_FORM: OrderFormData = {
  namaSalesKonsultan: '',
  namaLengkap: '',
  nomorWa: '',
  email: '',
  namaBisnis: '',
  alamatBisnis: '',
  mediaSosial: '',
  namaProduk: '',
  deskripsiProduk: '',
  targetAudiens: '',
  hargaPenawaran: '',
  tujuanLandingPage: ['Penjualan langsung produk fisik / digital'],
  tujuanLainnya: '',
  ctaDiinginkan: ['Tombol langsung ke WhatsApp (chat pemesanan)'],
  ctaLainnya: '',
};

const SAMPLE_DEMO_DATA: OrderFormData = {
  namaSalesKonsultan: 'Rian (Konsultan Webkilat)',
  namaLengkap: 'Budi Santoso',
  nomorWa: '081234567890',
  email: 'budi.santoso@gmail.com',
  namaBisnis: 'Dapur Nusantara Frozen Food',
  alamatBisnis: 'Jl. Rungkut Asri Timur No. 45, Surabaya, Jawa Timur',
  mediaSosial: '@dapurnusantara.id (Instagram) / TikTok: @dapurnusantara',
  namaProduk: 'Paket Frozen Sambal Cumi & Rendang Daging Sapi Kemasan Vakum',
  deskripsiProduk: 'Makanan beku siap saji dengan rempah asli tanpa bahan pengawet. Tahan 6 bulan beku, higienis, sertifikat P-IRT & Halal MUI.',
  targetAudiens: 'Ibu rumah tangga muda & pekerja kantoran usia 24-45 tahun yang sibuk namun ingin masakan lezat cepat saji.',
  hargaPenawaran: 'Harga normal Rp 65.000 / pack. Promo Hari Ini: Beli 3 Cuma Rp 150.000 + Subsidi Ongkir Rp 10.000 se-Pulau Jawa.',
  tujuanLandingPage: [
    'Penjualan langsung produk fisik / digital',
    'Pengumpulan kontak / lead (Nama, Email, WhatsApp)',
  ],
  tujuanLainnya: '',
  ctaDiinginkan: [
    'Tombol langsung ke WhatsApp (chat pemesanan)',
  ],
  ctaLainnya: '',
};

export const OrderFormSection: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>(() => {
    try {
      const saved = localStorage.getItem('webkilat_saved_form');
      return saved ? JSON.parse(saved) : INITIAL_FORM;
    } catch {
      return INITIAL_FORM;
    }
  });

  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem('webkilat_saved_form', JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCheckboxToggle = (
    field: 'tujuanLandingPage' | 'ctaDiinginkan',
    item: string
  ) => {
    setFormData((prev) => {
      const currentList = prev[field];
      const exists = currentList.includes(item);
      const updated = exists
        ? currentList.filter((x) => x !== item)
        : [...currentList, item];
      return { ...prev, [field]: updated };
    });
  };

  const fillSampleData = () => {
    setFormData(SAMPLE_DEMO_DATA);
    setErrors({});
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmittedSuccess(false);
    setAgreedTerms(true);
    try {
      localStorage.removeItem('webkilat_saved_form');
    } catch {
      // ignore
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = 'Nama Lengkap / PIC wajib diisi';
    }
    if (!formData.nomorWa.trim()) {
      newErrors.nomorWa = 'Nomor WhatsApp aktif wajib diisi';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    }
    if (!formData.namaBisnis.trim()) {
      newErrors.namaBisnis = 'Nama Bisnis / Brand wajib diisi';
    }
    if (!formData.alamatBisnis.trim()) {
      newErrors.alamatBisnis = 'Alamat usaha wajib diisi';
    }
    if (!formData.namaProduk.trim()) {
      newErrors.namaProduk = 'Nama Produk / Layanan wajib diisi';
    }
    if (!formData.deskripsiProduk.trim()) {
      newErrors.deskripsiProduk = 'Deskripsi produk wajib diisi';
    }
    if (!agreedTerms) {
      newErrors.agreedTerms = 'Anda wajib menyetujui syarat dan ketentuan promo';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setSubmittedSuccess(true);
    const waUrl = generateWhatsAppUrl(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyText = () => {
    const text = formatOrderToWhatsApp(formData);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="formulir-order" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header matching user brief */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pengerjaan Kilat 24 Jam · Rp 499.000 All-In</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Formulir Pemesanan Jasa Pembuatan Landing Page
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Mohon lengkapi formulir di bawah ini agar kami dapat memahami kebutuhan proyek dan menyusun landing page yang tepat sasaran.
          </p>

          {/* Quick Helper Tools */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={fillSampleData}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contoh Isi Otomatis (Demo)</span>
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Formulir</span>
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Sales Consultant (optional) */}
            <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama sales konsultan : <span className="text-slate-400 font-normal">( optional )</span>
              </label>
              <input
                type="text"
                name="namaSalesKonsultan"
                value={formData.namaSalesKonsultan}
                onChange={handleInputChange}
                placeholder="Contoh: Rian / Dikosongkan jika langsung order web"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* 1. Data Klien */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                <span className="w-7 h-7 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-slate-900">1. Data Klien</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Nama Lengkap / PIC <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleInputChange}
                    placeholder="Contoh: Budi Santoso"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900 ${
                      errors.namaLengkap ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.namaLengkap && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.namaLengkap}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Nomor WhatsApp / Kontak Aktif <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nomorWa"
                    value={formData.nomorWa}
                    onChange={handleInputChange}
                    placeholder="Contoh: 081234567890"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900 ${
                      errors.nomorWa ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.nomorWa && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.nomorWa}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nama@email.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900 ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Nama Bisnis / Brand / Perusahaan <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaBisnis"
                    value={formData.namaBisnis}
                    onChange={handleInputChange}
                    placeholder="Contoh: Sambal Juara Bu Lina"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900 ${
                      errors.namaBisnis ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.namaBisnis && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.namaBisnis}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Alamat bisnis / usaha <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    name="alamatBisnis"
                    value={formData.alamatBisnis}
                    onChange={handleInputChange}
                    placeholder="Contoh: Jl. Diponegoro No. 12, Kel. Menteng, Jakarta Pusat (atau kota operasional Anda)"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900 ${
                      errors.alamatBisnis ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.alamatBisnis && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.alamatBisnis}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Website / Akun Media Sosial Saat Ini <span className="text-slate-400 font-normal">(jika ada)</span>
                  </label>
                  <input
                    type="text"
                    name="mediaSosial"
                    value={formData.mediaSosial}
                    onChange={handleInputChange}
                    placeholder="Contoh: @sambaljuara (Instagram / TikTok) atau link Shopee / Tokopedia"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* 2. Informasi Produk / Layanan */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                <span className="w-7 h-7 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-lg font-bold text-slate-900">2. Informasi Produk / Layanan</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Nama Produk / Layanan yang Dipromosikan <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaProduk"
                    value={formData.namaProduk}
                    onChange={handleInputChange}
                    placeholder="Contoh: Paket Sambal Cumi Kemasan Botol 200gr"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900 ${
                      errors.namaProduk ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.namaProduk && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.namaProduk}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Deskripsi Singkat Produk/Layanan: <span className="text-slate-500 font-normal">(Jelaskan apa yang Anda tawarkan, manfaat utama, dan keunggulannya)</span> <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    name="deskripsiProduk"
                    value={formData.deskripsiProduk}
                    onChange={handleInputChange}
                    placeholder="Contoh: Sambal olahan cumi segar dengan bumbu rempah pilihan khas Jawa Timur, tanpa bahan pengawet, tahan 6 bulan di suhu ruang. Keunggulannya cumi melimpah, rasa gurih pedas nampol, dan sudah tersertifikasi Halal & P-IRT."
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900 ${
                      errors.deskripsiProduk ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.deskripsiProduk && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.deskripsiProduk}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Target Audiens: <span className="text-slate-500 font-normal">(Contoh: usia, profesi, masalah atau kebutuhan utama yang ingin diselesaikan)</span>
                  </label>
                  <textarea
                    rows={2}
                    name="targetAudiens"
                    value={formData.targetAudiens}
                    onChange={handleInputChange}
                    placeholder="Contoh: Pria & Wanita usia 20-45 tahun, pecinta makanan pedas, anak kos/pekerja kantoran yang ingin makan enak praktis tanpa ribet masak."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Harga & Penawaran Khusus: <span className="text-slate-500 font-normal">(Harga normal, harga promo, bonus/diskon jika ada)</span>
                  </label>
                  <input
                    type="text"
                    name="hargaPenawaran"
                    value={formData.hargaPenawaran}
                    onChange={handleInputChange}
                    placeholder="Contoh: Normal Rp 45.000 / botol. Promo: Beli 3 botol hanya Rp 100.000 + gratis 1 sachet sambal bawang!"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* 3. Kebutuhan & Tujuan Landing Page */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                <span className="w-7 h-7 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-slate-900">3. Kebutuhan & Tujuan Landing Page</h3>
              </div>

              {/* A: Tujuan Utama */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-800">
                  Tujuan Utama Landing Page (Pilih salah satu/lebih):
                </label>
                <div className="space-y-2.5">
                  {[
                    'Penjualan langsung produk fisik / digital',
                    'Pengumpulan kontak / lead (Nama, Email, WhatsApp)',
                    'Pendaftaran webinar / event / kursus',
                    'Portofolio / Company profile satu halaman',
                  ].map((option) => {
                    const isChecked = formData.tujuanLandingPage.includes(option);
                    return (
                      <label
                        key={option}
                        className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-sky-50/70 border-sky-300 text-slate-900'
                            : 'bg-slate-50/40 border-slate-200 text-slate-700 hover:bg-slate-100/60'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxToggle('tujuanLandingPage', option)}
                          className="mt-0.5 h-4 w-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 cursor-pointer"
                        />
                        <span className="text-xs font-medium">{option}</span>
                      </label>
                    );
                  })}

                  {/* Tujuan Lainnya */}
                  <div className="pt-1">
                    <label className="block text-xs text-slate-600 mb-1">
                      Lainnya: [........................]
                    </label>
                    <input
                      type="text"
                      name="tujuanLainnya"
                      value={formData.tujuanLainnya}
                      onChange={handleInputChange}
                      placeholder="Tuliskan tujuan spesifik lainnya jika ada..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* B: Call to Action (CTA) yang Diinginkan */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-800">
                  Call to Action (CTA) yang Diinginkan:
                </label>
                <div className="space-y-2.5">
                  {[
                    'Tombol langsung ke WhatsApp (chat pemesanan)',
                    'Formulir checkout / order otomatis',
                    'Registrasi email / formulir pendaftaran',
                  ].map((ctaOption) => {
                    const isChecked = formData.ctaDiinginkan.includes(ctaOption);
                    return (
                      <label
                        key={ctaOption}
                        className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-sky-50/70 border-sky-300 text-slate-900'
                            : 'bg-slate-50/40 border-slate-200 text-slate-700 hover:bg-slate-100/60'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxToggle('ctaDiinginkan', ctaOption)}
                          className="mt-0.5 h-4 w-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 cursor-pointer"
                        />
                        <span className="text-xs font-medium">{ctaOption}</span>
                      </label>
                    );
                  })}

                  {/* CTA Lainnya */}
                  <div className="pt-1">
                    <label className="block text-xs text-slate-600 mb-1">
                      Pembayaran gateway / link checkout eksternal lainnya [........................]
                    </label>
                    <input
                      type="text"
                      name="ctaLainnya"
                      value={formData.ctaLainnya}
                      onChange={handleInputChange}
                      placeholder="Contoh: Link Shopee / Mayar / Midtrans / Tokopedia..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all outline-hidden text-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Syarat & Ketentuan Harga Promo */}
            <div className="p-5 sm:p-6 bg-amber-50/90 rounded-2xl border-2 border-amber-300 space-y-3.5 shadow-xs">
              <div className="flex items-center gap-2 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wider">
                <FileText className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Syarat & Ketentuan Harga Promo (Rp 499.000)</span>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">•</span>
                  <span><strong>Free revisi 1 kali</strong>, untuk revisi kedua dan seterusnya akan dikenakan biaya Rp 50.000 per revisi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">•</span>
                  <span><strong>Tidak mendapatkan email bisnis</strong> resmi (nama_bisnis@domain).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">•</span>
                  <span><strong>Free domain</strong> hanya berlaku untuk domain <strong>.my.id</strong> dan <strong>.biz.id</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">•</span>
                  <span>Untuk domain seperti <strong>.com</strong>, <strong>.net</strong>, <strong>.id</strong>, dan lainnya akan dikenakan biaya pembelian domain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">•</span>
                  <span><strong>Garansi uang kembali tidak berlaku</strong> untuk proses pengerjaan yang melebihi 1 hari dikarenakan error server atau maintenance pihak ketiga.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-amber-200/80">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded text-sky-600 focus:ring-sky-500 border-amber-300 cursor-pointer"
                  />
                  <span className="text-xs font-bold text-amber-950">
                    Semua pemesanan dianggap telah membaca dan menyetujui syarat dan ketentuan ini.
                  </span>
                </label>
                {errors.agreedTerms && (
                  <p className="text-[11px] text-rose-600 mt-1 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.agreedTerms}
                  </p>
                )}
              </div>
            </div>

            {/* Admin Target WA Notice */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 flex items-center justify-between gap-3 text-xs text-emerald-950">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Formulir ini akan otomatis terhubung ke WhatsApp Admin di nomor{' '}
                  <strong className="font-bold text-emerald-800">{ADMIN_WA_DISPLAY}</strong> untuk verifikasi kilat.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="text-xs font-bold text-emerald-700 hover:underline shrink-0 cursor-pointer"
              >
                {showPreview ? 'Tutup Pratinjau' : 'Lihat Format Pesan'}
              </button>
            </div>

            {/* Message Preview Drawer if toggled */}
            {showPreview && (
              <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span>Pratinjau Draf Pesan WhatsApp:</span>
                  <button
                    type="button"
                    onClick={handleCopyText}
                    className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Tersalin!' : 'Salin Teks'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto text-[11px] text-slate-200">
                  {formatOrderToWhatsApp(formData)}
                </pre>
              </div>
            )}

            {/* Main Submit Button: Order Sekarang */}
            <div className="space-y-4 pt-2">
              <button
                type="submit"
                className="relative group w-full py-4 px-6 text-base font-extrabold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-700 hover:to-green-700 active:scale-99 rounded-2xl shadow-xl hover:shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <Send className="relative w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                <span className="relative tracking-wide">ORDER SEKARANG VIA WHATSAPP (0896-7368-6625)</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>Data Anda aman & langsung diproses tim desainer webkilat</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-800 font-semibold cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Berhasil Tersalin ke Clipboard' : 'Salin Rincian Pesanan'}</span>
                </button>
              </div>

              {/* Order Form Trust & Security Badges Box */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Jaminan Keamanan & Garansi Transaksi</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-200">
                    100% Terverifikasi
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-xl border border-slate-200/70">
                    <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Garansi 100% Puas</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-xl border border-slate-200/70">
                    <Zap className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>24 Jam Siap Pakai</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-xl border border-slate-200/70">
                    <Lock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>SSL 256-Bit Encrypted</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-xl border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Bebas Template Pasaran</span>
                  </div>
                </div>

                {/* Accepted Payment Channels */}
                <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-500">
                  <span className="font-semibold text-slate-600">Metode Pembayaran Resmi:</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-blue-800 font-bold">BCA</span>
                    <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-amber-700 font-bold">MANDIRI</span>
                    <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-blue-900 font-bold">BRI</span>
                    <span className="px-2 py-0.5 bg-rose-50 border border-rose-200 rounded text-rose-700 font-black">QRIS</span>
                    <span className="px-2 py-0.5 bg-sky-50 border border-sky-200 rounded text-sky-700 font-bold">GoPay/OVO</span>
                  </div>
                </div>
              </div>

              {submittedSuccess && (
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl text-center text-xs text-sky-900 font-medium">
                  WhatsApp sedang dibuka! Jika jendela WhatsApp tidak terbuka otomatis karena diblokir browser, silakan{' '}
                  <a
                    href={generateWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-sky-700"
                  >
                    klik tautan langsung ini
                  </a>{' '}
                  atau salin rincian pesanan di atas lalu kirimkan manual ke <strong>0896-7368-6625</strong>.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
