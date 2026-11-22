// ============================================================
//  config.js  —  Sungai Tanaki · AR 故事书
//  只要改这个文件：书名 / 语言 / 哪一页能扫 / 各语言界面文字
// ============================================================

const CONFIG = {
  bookTitle: "Sungai Tanaki",
  subtitle:   "An Augmented Reality Storybook",
  subtitleBM: "Buku Cerita Realiti Terimbuh",
  subtitleDSN:"Tupus Sorita AR",

  // -----------------------------------------------------------
  //  语言（code = assets/audio 下的文件夹名）
  // -----------------------------------------------------------
  languages: [
    { code: "en",  label: "EN",  name: "English",       native: "English" },
    { code: "bm",  label: "BM",  name: "Bahasa Melayu", native: "Bahasa Melayu" },
    { code: "dsn", label: "KAD", name: "Kadazandusun",  native: "Kadazandusun" },
  ],

  // -----------------------------------------------------------
  //  targets.mind 里有哪些页（按编译顺序 page1→page12）
  // -----------------------------------------------------------
  targetMap: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

  // 模型自带的动画片段编号（page8.glb 里：0 = running，1 = walking_man）
  animClip: -1,

  // 12 页内容（模型 / 语音 / 缩略图）
  pages: Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    return {
      page:  n,
      title: "Page " + n,
      thumb: `assets/pages/page${n}.jpg`,
      model: `assets/models/page${n}.glb`,
      audio: {
        en:  `assets/audio/en/page${n}.mp3`,
        bm:  `assets/audio/bm/page${n}.mp3`,
        dsn: `assets/audio/dsn/page${n}.mp3`,
      },
    };
  }),
};

// ============================================================
//  界面文字（三语）。想改哪个字，直接在这里改。
//  Kadazandusun 部分建议请母语者过一遍。
// ============================================================
CONFIG.ui = {
  en: {
    badge: "Augmented Reality Storybook",
    coverTag: "3 Languages · 12 Pages",
    sub: "Point your phone at the book and watch each page come alive in 3D.",
    start: "Start scanning",
    view: "No book? View in 3D",
    statPages: "story pages",
    statLive: "AR pages live",
    statLangs: "narration languages",
    pickLang: "Pick a language",
    pickLangSub: "Choose the narration language. Your choice is remembered for scanning.",
    howTitle: "How it works",
    s1t: "Allow camera",
    s1b: "Tap “Start scanning” and allow camera access. Everything runs in your browser.",
    s2t: "Point at a page",
    s2b: "Lay the book flat under bright light and hold the phone 25–40 cm away.",
    s3t: "Watch it come alive",
    s3b: "A 3D scene appears on the page and the story is read aloud.",
    gridTitle: "Every page, a small world",
    gridSub: "Tap any scene to explore it in 3D, even without the book.",
    footer: "Works on Chrome (Android) and Safari (iPhone). Camera images are processed on your device only.",
    home: "Home",
    tipIdle: "Point your camera at a book page",
    tipLoading: "Loading the 3D model…",
    tipReady: "Page {n} recognised",
    tipMissing: "Page {n}: 3D model not added yet",
    errTitle: "Camera could not start",
    errBody: "Allow camera permission, and open the site with <b>https://</b>.",
    pageWord: "Page",
    viewerHint: "drag to orbit · pinch to zoom",
    prev: "‹ Prev",
    next: "Next ›",
    loading: "Loading 3D model…",
    loadingSlow: "This model is large, it may take a while on mobile data.",
    loadFail: "Could not load the 3D model",
    retry: "retry",
  },
  bm: {
    badge: "Buku Cerita Realiti Terimbuh",
    coverTag: "3 Bahasa · 12 Halaman",
    sub: "Halakan telefon anda pada buku dan lihat setiap halaman hidup dalam 3D.",
    start: "Mula mengimbas",
    view: "Tiada buku? Lihat dalam 3D",
    statPages: "halaman cerita",
    statLive: "halaman AR aktif",
    statLangs: "bahasa naratif",
    pickLang: "Pilih bahasa",
    pickLangSub: "Pilih bahasa naratif. Pilihan anda akan diingati semasa mengimbas.",
    howTitle: "Cara ia berfungsi",
    s1t: "Benarkan kamera",
    s1b: "Tekan “Mula mengimbas” dan benarkan akses kamera. Semuanya berjalan dalam pelayar anda.",
    s2t: "Halakan pada halaman",
    s2b: "Letakkan buku rata di bawah cahaya terang dan pegang telefon 25–40 cm dari buku.",
    s3t: "Lihat ia hidup",
    s3b: "Babak 3D muncul di atas halaman dan cerita dibacakan.",
    gridTitle: "Setiap halaman, dunia kecil",
    gridSub: "Tekan mana-mana babak untuk meneroka dalam 3D, walaupun tanpa buku.",
    footer: "Berfungsi di Chrome (Android) dan Safari (iPhone). Imej kamera diproses pada peranti anda sahaja.",
    home: "Utama",
    tipIdle: "Halakan kamera pada halaman buku",
    tipLoading: "Sedang memuatkan model 3D…",
    tipReady: "Halaman {n} dikesan",
    tipMissing: "Halaman {n}: model 3D belum dimasukkan",
    errTitle: "Kamera tidak dapat dimulakan",
    errBody: "Benarkan kebenaran kamera, dan buka laman dengan <b>https://</b>.",
    pageWord: "Halaman",
    viewerHint: "tarik untuk putar · cubit untuk zum",
    prev: "‹ Sebelum",
    next: "Seterusnya ›",
    loading: "Sedang memuatkan model 3D…",
    loadingSlow: "Model ini besar, mungkin ambil masa pada data mudah alih.",
    loadFail: "Model 3D gagal dimuatkan",
    retry: "cuba lagi",
  },
  dsn: {
    badge: "Tupus Sorita AR",
    coverTag: "3 Boros · 12 Kayatan",
    sub: "Tuduk kamera nu id tupus om intong sanjompi kayatan mokouhab id 3D.",
    start: "Momulai Minsimbau",
    view: "Aiso tupus? Intong id 3D",
    statPages: "kayatan sorita",
    statLive: "kayatan AR mouhab",
    statLangs: "boros susuyan",
    pickLang: "Pilio o boros",
    pickLangSub: "Pilio o boros susuyan. Otokis o pinilio nu id minsimbau.",
    howTitle: "Poingkuro o momoguna",
    s1t: "Izin no kamera",
    s1b: "Pikit “Momulai Minsimbau” om izin no kamera. Ngai' o pointoton id browser nu.",
    s2t: "Tuduko id kayatan",
    s2b: "Pataho o tupus id haro totuvong om pidongo o kamera 25–40 cm.",
    s3t: "Intong o mouhab",
    s3b: "Mokouhab o gambal 3D id kayatan om orong o sorita.",
    gridTitle: "Sanjompi kayatan, iso' o donia",
    gridSub: "Pikit kayatan do mongintong id 3D, mulau aiso o tupus.",
    footer: "Momogun id Chrome (Android) om Safari (iPhone). O gambar kamera id gadget nu.",
    home: "Walai",
    tipIdle: "Tuduko kamera nu id kayatan tupus",
    tipLoading: "Momuaj o model 3D…",
    tipReady: "Kayatan {n} nokito",
    tipMissing: "Kayatan {n}: aiso o model 3D",
    errTitle: "Aiso kaasam kamera",
    errBody: "Izin no kamera, om buka laman do <b>https://</b>.",
    pageWord: "Kayatan",
    viewerHint: "gogol do mongilak · pinit do momolimpis",
    prev: "‹ Nakatalib",
    next: "Sumuhut ›",
    loading: "Momuaj o model 3D…",
    loadingSlow: "Aan o model dino, nohton kopio id data.",
    loadFail: "Aiso kaasam o model 3D",
    retry: "tingkod maai",
  },
};
