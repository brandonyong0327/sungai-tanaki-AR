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
    { code: "en",  label: "EN",  name: "English",       native: "English",       desc: "Narration in English." },
    { code: "bm",  label: "BM",  name: "Bahasa Melayu", native: "Bahasa Melayu", desc: "Narration in Malay." },
    { code: "dsn", label: "DSN", name: "Kadazandusun",  native: "Kadazandusun",  desc: "Narration in Kadazandusun." },
  ],

  // -----------------------------------------------------------
  //  targets.mind 里有哪些页（按编译顺序 page1→page12）
  // -----------------------------------------------------------
  targetMap: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

  // 模型自带的动画片段编号（每页 GLB 只导出一条合并动画 = 0；-1 表示不播放）
  animClip: 0,

  // 12 页内容（模型 / 语音 / 缩略图）
  pages: Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    return {
      page:  n,
      title: "Page " + n,
      thumb: `assets/pages/page${n}.jpg?v=2`,
      modelThumb: `assets/pages/model${n}.png?v=3`,
      model: `assets/models/page${n}.glb?v=${({4:5,5:5,8:5,9:5,10:7})[n] || 4}`,
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
    coverTag: "2 Languages · 12 Pages",
    sub: "Point your phone at the book and watch each page come alive in 3D.",
    start: "Start scanning",
    view: "No book? View in 3D",
    statPages: "story pages",
    statLive: "AR pages live",
    statLangs: "narration languages",
    pickLang: "Pick a language",
    pickLangSub: "Choose the narration language. Your choice is remembered for scanning.",
    listenTitle: "Listen in your language.",
    listenSub: "Tap play to hear a sample. Every sample uses page 1.",
    hearSample: "Hear a sample",
    howTitle: "How it works",
    s1t: "Allow camera",
    s1b: "Tap “Start scanning” and allow camera access. Everything runs in your browser.",
    s2t: "Point at a page",
    s2b: "Lay the book flat under bright light and hold the phone 25–40 cm away.",
    s3t: "Watch it come alive",
    s3b: "A 3D scene appears on the page and the story is read aloud.",
    gridTitle: "Every page, a small world",
    gridSub: "Tap any scene to explore it in 3D, even without the book.",
    aboutNav: "Story",
    aboutKicker: "About the story",
    aboutHeadline: "His sacrifice brings the river back to life.",
    aboutP1: "In the quiet Dusun village by the Crocker Range in Tambunan, a long drought dries the river, the wells and the rice fields. The villagers turn on Ina, a bobolian healer, and blame her strange ways for the misfortune.",
    aboutP2: "When the river spirit demands one life to bring the water back, Tanaki — Ina’s kind, hardworking son — offers himself willingly. The river flows again, and it is named Sungai Tanaki, a lasting memorial to a mother’s love and a son’s sacrifice.",
    aboutChars: [
      { name: "Tanaki", role: "A good, hardworking son who gives his life to save the village." },
      { name: "Ina",    role: "A bobolian healer and Tanaki’s devoted mother." },
    ],
    navPages: "Page",
    navLangs: "Language",
    navHelp: "How it works",
    navFaq: "FAQ",
    faqTitle: "Frequently asked questions",
    faqItems: [
      { q: "Do I need to install an app?", a: "No. Everything runs in your browser — just open the link and allow the camera." },
      { q: "Which browsers are supported?", a: "Chrome on Android and Safari on iPhone. Open the site over HTTPS; the camera will not work on plain http." },
      { q: "Why don’t I see a 3D model?", a: "Some page models are still being added. If a page is recognised but no model appears, check back later." },
      { q: "What about camera permission?", a: "Tap “Start scanning” and allow access. Camera images stay on your device and are never uploaded." },
    ],
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
    bootCamera: "Starting camera…",
    bootTarget: "Loading page targets…",
    replay: "Replay",
    play: "Play",
    pause: "Pause",
    reset: "Reset",
    errView3d: "View in 3D",
    tips: [
      "Allow camera access when prompted",
      "Use bright light and lay the book flat",
      "Keep the whole page in view",
    ],
  },
  bm: {
    badge: "Buku Cerita Realiti Terimbuh",
    coverTag: "2 Bahasa · 12 Halaman",
    sub: "Halakan telefon anda pada buku dan lihat setiap halaman hidup dalam 3D.",
    start: "Mula mengimbas",
    view: "Tiada buku? Lihat dalam 3D",
    statPages: "halaman cerita",
    statLive: "halaman AR aktif",
    statLangs: "bahasa naratif",
    pickLang: "Pilih bahasa",
    pickLangSub: "Pilih bahasa naratif. Pilihan anda akan diingati semasa mengimbas.",
    listenTitle: "Dengar dalam bahasa anda.",
    listenSub: "Ketik main untuk dengar contoh. Semua contoh guna halaman 1.",
    hearSample: "Dengar contoh",
    howTitle: "Cara ia berfungsi",
    s1t: "Benarkan kamera",
    s1b: "Tekan “Mula mengimbas” dan benarkan akses kamera. Semuanya berjalan dalam pelayar anda.",
    s2t: "Halakan pada halaman",
    s2b: "Letakkan buku rata di bawah cahaya terang dan pegang telefon 25–40 cm dari buku.",
    s3t: "Lihat ia hidup",
    s3b: "Babak 3D muncul di atas halaman dan cerita dibacakan.",
    gridTitle: "Setiap halaman, dunia kecil",
    gridSub: "Tekan mana-mana babak untuk meneroka dalam 3D, walaupun tanpa buku.",
    aboutNav: "Cerita",
    aboutKicker: "Tentang cerita",
    aboutHeadline: "Pengorbanannya menghidupkan semula sungai.",
    aboutP1: "Di kampung Dusun yang tenang di lereng Banjaran Crocker, Tambunan, kemarau panjang mengeringkan sungai, perigi dan sawah. Penduduk menuding jari kepada Ina, seorang bobolian, dan menyalahkan ilmu peliknya atas bala itu.",
    aboutP2: "Apabila roh sungai menuntut satu nyawa untuk mengembalikan air, Tanaki — anak Ina yang baik dan rajin — rela mengorbankan dirinya. Sungai mengalir semula dan dinamakan Sungai Tanaki, sebagai peringatan abadi kasih seorang ibu dan pengorbanan seorang anak.",
    aboutChars: [
      { name: "Tanaki", role: "Anak yang baik dan rajin, berkorban untuk menyelamatkan kampung." },
      { name: "Ina",    role: "Seorang bobolian dan ibu Tanaki yang penyayang." },
    ],
    navPages: "Halaman",
    navLangs: "Bahasa",
    navHelp: "Cara guna",
    navFaq: "FAQ",
    faqTitle: "Soalan lazim",
    faqItems: [
      { q: "Perlu pasang aplikasi?", a: "Tidak. Semuanya berjalan dalam pelayar anda — buka pautan dan benarkan kamera." },
      { q: "Pelayar mana yang disokong?", a: "Chrome (Android) dan Safari (iPhone). Buka laman melalui HTTPS; kamera tidak berfungsi atas http biasa." },
      { q: "Kenapa model 3D tidak muncul?", a: "Sesetengah model halaman masih disediakan. Jika halaman dikesan tapi tiada model, cuba lagi nanti." },
      { q: "Bagaimana dengan kebenaran kamera?", a: "Tekan “Mula mengimbas” dan benarkan akses. Imej kamera kekal di peranti anda dan tidak dimuat naik." },
    ],
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
    bootCamera: "Memulakan kamera…",
    bootTarget: "Memuatkan sasaran halaman…",
    replay: "Main semula",
    play: "Main",
    pause: "Jeda",
    reset: "Set semula",
    errView3d: "Lihat dalam 3D",
    tips: [
      "Benarkan akses kamera apabila diminta",
      "Gunakan cahaya terang dan letak buku rata",
      "Pastikan seluruh halaman kelihatan",
    ],
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
    listenTitle: "Tuduko id boros nu.",
    listenSub: "Pikit play om tuduko conto. Ngai' o conto id kayatan 1.",
    hearSample: "Tuduko conto",
    howTitle: "Poingkuro o momoguna",
    s1t: "Izin no kamera",
    s1b: "Pikit “Momulai Minsimbau” om izin no kamera. Ngai' o pointoton id browser nu.",
    s2t: "Tuduko id kayatan",
    s2b: "Pataho o tupus id haro totuvong om pidongo o kamera 25–40 cm.",
    s3t: "Intong o mouhab",
    s3b: "Mokouhab o gambal 3D id kayatan om orong o sorita.",
    gridTitle: "Sanjompi kayatan, iso' o donia",
    gridSub: "Pikit kayatan do mongintong id 3D, mulau aiso o tupus.",
    aboutNav: "Sorita",
    aboutKicker: "Tentang sorita",
    aboutHeadline: "Pangombalan nu mokouhab tongod o sungai.",
    aboutP1: "Id kampung Dusun omboi id liling Banjaran Crocker, Tambunan, o kakapou poghosoi o sungai, sumorok om sawah. Tulun nopantang Ina, bobolian, om nopomokod do ngaladan o dohino.",
    aboutP2: "Okoroh roh sungai minampo iso' nyawa do mobalik o logou, Tanaki — anak Ina popogoson om gosop — omohod pangombal. Sungai momoulid om ndaarai Sungai Tanaki, do pangorisan omboi tokou om pangombalan anak.",
    aboutChars: [
      { name: "Tanaki", role: "Anak popogoson om gosop, omohod nyawa nu mongosolok kampung." },
      { name: "Ina",    role: "Bobolian om emak Tanaki ombotis." },
    ],
    navPages: "Kayatan",
    navLangs: "Boros",
    navHelp: "Poingkuro",
    navFaq: "FAQ",
    faqTitle: "Pasoalan oginum",
    faqItems: [
      { q: "Aiso momogonok app?", a: "Aiso. Ngai' omoi id browser nu — buka link om izin no kamera." },
      { q: "Oko browser momogun?", a: "Chrome (Android) om Safari (iPhone). Gunou HTTPS; kamera aiso momogun id http." },
      { q: "Takon o model 3D?", a: "Apas model kayatan nokotu momuaj. Okoroh kayatan nokito mulau aiso model, tingkod maai nokotu." },
      { q: "Izin no kamera?", a: "Pikit “Momulai Minsimbau” om izin. O gambar kamera id gadget nu, aiso omo-upload." },
    ],
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
    bootCamera: "Momulai kamera…",
    bootTarget: "Momuaj sasaran kayatan…",
    replay: "Main tongod",
    play: "Main",
    pause: "Pinda",
    reset: "Pokos semula",
    errView3d: "Intong id 3D",
    tips: [
      "Izin no kamera paukah diminta",
      "Pogoyo totuvong om pataho tupus rata",
      "Pastikan kayatan kumbaga kito",
    ],
  },
};













