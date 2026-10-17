export interface UmkmShowcase {
  id: string;
  category: string;
  name: string;
  city: string;
  tagline: string;
  problem: string;
  solution: string;
  ctaType: string;
  results: {
    label: string;
    value: string;
    note: string;
  }[];
  palette: {
    primary: string;
    secondary: string;
    bg: string;
  };
  mockup: {
    headline: string;
    subheadline: string;
    offerBadge: string;
    ctaLabel: string;
    features: string[];
    guarantee: string;
    priceSnippet: string;
  };
}

export const UMKM_SHOWCASES: UmkmShowcase[] = [
  {
    id: 'fnb-sambal',
    category: 'Kuliner & F&B Kemasan',
    name: 'Sambal Cumi Juara Mak Nyoss',
    city: 'Sidoarjo, Jawa Timur',
    tagline: 'Sensasi Pedas Nagih dengan Cumi Segar Pilihan Tanpa Pengawet',
    problem: 'Sebelumnya jualan hanya lewat status WhatsApp dan DM Instagram. Pelanggan ragu beli karena tidak ada bukti legalitas P-IRT, ulasan tersebar berantakan, dan admin kewalahan membalas tanya harga satu per satu.',
    solution: 'Landing page kustom 1 halaman dengan video unboxing, foto produk menggugah selera, sertifikat halal & P-IRT, promo paket bundling, serta tombol pesan langsung terhubung ke WhatsApp customer service dengan pesan otomatis.',
    ctaType: 'Pesan Paket Bundling via WhatsApp',
    results: [
      { label: 'Kenaikan Order WA', value: '+165%', note: 'Dalam 30 hari pasca rilis' },
      { label: 'Waktu Closing', value: '3x Lebih Cepat', note: 'Customer datang sudah paham harga' },
      { label: 'Rating Kepuasan', value: '4.9 / 5.0', note: 'Lebih dari 400 ulasan terverifikasi' },
    ],
    palette: {
      primary: '#DC2626',
      secondary: '#FEF2F2',
      bg: '#FFF5F5',
    },
    mockup: {
      headline: 'Sambal Cumi Asli Nusantara: Gurih, Pedas Nampol, dan Halal!',
      subheadline: 'Dibuat dari 100% rempah segar pilihan petani lokal. Sudah terjual 15.000+ botol ke seluruh Indonesia.',
      offerBadge: 'Promo Hari Ini: Beli 2 Gratis 1 Botol Sambal Bawang + Ongkir Subsidi',
      ctaLabel: 'Ambil Promo Beli 2 Gratis 1 di WhatsApp',
      features: [
        'Sudah Bersertifikat P-IRT & Halal MUI',
        'Cumi Segar Melimpah Bukan Kaleng-Kaleng',
        'Tahan 6 Bulan Suhu Ruang (Teknologi Retort)',
        'Garansi Uang Kembali Jika Botol Rusak di Ekspedisi',
      ],
      guarantee: 'Garansi Kirim Ulang 100% Gratis Jika Rusak',
      priceSnippet: 'Mulai Rp 35.000 / botol',
    },
  },
  {
    id: 'fashion-hijab',
    category: 'Fashion & Busana Muslim',
    name: 'Zahira Modest Wear',
    city: 'Bandung, Jawa Barat',
    tagline: 'Gamis Syar’i Elegan Nyaman untuk Pengajian & Acara Spesial',
    problem: 'Katalog di Instagram sering tenggelam. Calon pembeli sering membandingkan harga di marketplace dan tergiur tiruan murah yang bahannya tipis panas. Perlu media presentasi visual eksklusif yang menonjolkan kualitas kain lokal premium.',
    solution: 'Landing page bertema clean luxury dengan foto detail serat kain, panduan size chart interaktif, testimoni ribuan bunda, dan tombol direct order CS WhatsApp untuk konsultasi ukuran.',
    ctaType: 'Konsultasi Ukuran & Order via CS',
    results: [
      { label: 'Konversi Iklan Meta', value: '4.8%', note: 'Sebelumnya hanya 1.2% via bio link' },
      { label: 'Keranjang Rata-rata', value: 'Rp 420.000', note: 'Customer cenderung beli 2 set' },
      { label: 'Efisiensi CS', value: 'Hemat 5 Jam/hari', note: 'Size chart jelas mengurangi tanya jawab' },
    ],
    palette: {
      primary: '#0D9488',
      secondary: '#F0FDFA',
      bg: '#F7FEFC',
    },
    mockup: {
      headline: 'Tampil Anggun Tanpa Gerah dengan Bahan Silk Premium Bandung',
      subheadline: 'Dirancang khusus dengan potongan proporsional, wudhu friendly, dan busui friendly untuk muslimah modern.',
      offerBadge: 'Koleksi Lebaran Terbatas: Diskon 30% + Free Khimar Voal Hari Ini',
      ctaLabel: 'Klaim Diskon & Chat CS Zahira',
      features: [
        'Kain Adem Lembut Anti-Kusut Seharian',
        'Jahitan Kerapihan Standar Butik Tailor',
        'Garansi Tukar Size 7 Hari Tanpa Ribet',
        'Bisa Pembayaran COD (Bayar di Tempat)',
      ],
      guarantee: '100% Garansi Tukar Size Gratis',
      priceSnippet: 'Promo Rp 189.000 (Normal Rp 270.000)',
    },
  },
  {
    id: 'services-ac',
    category: 'Jasa & Teknisi Panggilan',
    name: 'Sejuk Mandiri Teknik 24 Jam',
    city: 'Jakarta Selatan & Depok',
    tagline: 'Service AC, Cuci AC, dan Bongkar Pasang Bergaransi Resmi 30 Hari',
    problem: 'Sulit mendapatkan pelanggan baru karena calon klien takut teknisi tidak profesional, harga tidak transparan, atau AC malah rusak lagi seminggu kemudian. Brosur fisik sudah tidak efektif di era digital.',
    solution: 'Landing page responsif berorientasi kepercayaan darurat: daftar harga transparan tanpa biaya tersembunyi, foto teknisi berseragam rapi, garansi cuci ulang 30 hari, dan tombol darurat telepon/WA 1-klik.',
    ctaType: 'Panggil Teknisi Sekarang (Datang 30 Menit)',
    results: [
      { label: 'Booking Harian', value: '18-25 AC/hari', note: 'Konsisten dari Google Ads & SEO lokal' },
      { label: 'Kepercayaan Klien', value: '98%', note: 'Klien rumah tangga & perkantoran' },
      { label: 'Repeated Order', value: '+75%', note: 'Penyimpanan kontak via landing page' },
    ],
    palette: {
      primary: '#0284C7',
      secondary: '#F0F9FF',
      bg: '#F8FAFC',
    },
    mockup: {
      headline: 'AC Rumah Panas atau Bocor? Teknisi Datang dalam 30 Menit!',
      subheadline: 'Layanan service, cuci uap anti-bakteri, dan isi freon bergaransi resmi 30 hari. Teknisi tersertifikasi & jujur.',
      offerBadge: 'Paket Cuci AC Hemat: Cuma Rp 65.000 / unit (Gratis Cek Pipa & Freon)',
      ctaLabel: 'Hubungi Teknisi Standby via WhatsApp',
      features: [
        'Teknisi Bersertifikat & Berpengalaman 8+ Tahun',
        'Peralatan Lengkap Cuci Steam High Pressure',
        'Harga Transparan di Awal, Tanpa Nembak Ongkos',
        'Garansi Dingin 30 Hari atau Servis Ulang Gratis',
      ],
      guarantee: 'Garansi Servis Ulang 30 Hari',
      priceSnippet: 'Paket Cuci Bersih mulai Rp 65.000',
    },
  },
  {
    id: 'herbal-skincare',
    category: 'Kecantikan & Herbal Lokal',
    name: 'Dewi Ayu Herbal Skincare',
    city: 'Yogyakarta',
    tagline: 'Formulasi Minyak Kelapa Murni & Ekstrak Bengkoang Tradisional',
    problem: 'Banyak konsumen khawatir produk skincare abal-abal yang mengandung merkuri. Butuh platform yang mampu memajang nomor registrasi BPOM secara meyakinkan dan cerita asal usul bahan alami secara visual.',
    solution: 'Landing page edukatif yang menonjolkan sertifikasi BPOM, uji laboratorium dermatologi, kisah petani bahan baku lokal, review sebelum & sesudah riil, dan formulir konsultasi kulit gratis via WhatsApp.',
    ctaType: 'Konsultasi Kulit Gratis via WhatsApp',
    results: [
      { label: 'Kepercayaan BPOM', value: '100% Lolos Uji', note: 'Scan barcode langsung di halaman' },
      { label: 'Pertumbuhan Omzet', value: '2.4x Lipat', note: 'Dalam 3 bulan setelah punya website resmi' },
      { label: 'Jangkauan Wilayah', value: '34 Provinsi', note: 'Pengiriman via ekspedisi terintegrasi' },
    ],
    palette: {
      primary: '#16A34A',
      secondary: '#F0FDF4',
      bg: '#F7FEE7',
    },
    mockup: {
      headline: 'Wajah Cerah Alami Tanpa Ketergantungan Bahan Kimia Berbahaya',
      subheadline: 'Serum herbal tradisional yang telah membantu 20.000+ wanita Indonesia mengatasi flek hitam dan kulit kusam.',
      offerBadge: 'Konsultasi Tipe Kulit Gratis + Bonus Mini Toner untuk 50 Pembeli Pertama',
      ctaLabel: 'Konsultasi Kulit & Dapatkan Bonus di WA',
      features: [
        'Terdaftar Resmi BPOM RI No. NA1821010342',
        '100% Ekstrak Alami Halal & Aman Ibu Hamil/Menyusui',
        'Hasil Tampak Mulai Hari ke-14 Pemakaian Rutin',
        'Didampingi Tim Konsultan Kecantikan Berpengalaman',
      ],
      guarantee: 'Garansi BPOM Asli & Uang Kembali 100%',
      priceSnippet: 'Paket Perawatan Glowing Rp 149.000',
    },
  },
];
