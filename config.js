// ============================================================
//  config.js  —  Sungai Tanaki · AR 故事书
//  只需要改这个文件：书名 / 语言 / 哪一页能扫
// ============================================================

const CONFIG = {
  bookTitle:   "Sungai Tanaki",
  subtitle:    "An Augmented Reality Storybook",
  subtitleBM:  "Buku Cerita Realiti Terimbuh",

  // 语言（code = audio 文件夹名）
  languages: [
    { code: "en", label: "EN", name: "English" },
    { code: "bm", label: "BM", name: "Bahasa Melayu" },
  ],

  // -----------------------------------------------------------
  //  targets.mind 里有哪些页（按编译时上传的顺序 page1→page12）
  //  12 页已全部编译：[1..12]
  // -----------------------------------------------------------
  targetMap: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

  // 模型自带的动画片段编号（page8.glb 里：0 = running，1 = walking_man）
  animClip: -1,

  // 12 页内容（模型 / 语音 / 缩略图）
  // 目前只有 page8.glb，其他页暂时没有模型 → 页面会提示「模型还没放」
  pages: Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    return {
      page:  n,
      title: "Page " + n,
      thumb: `assets/pages/page${n}.jpg`,
      model: `assets/models/page${n}.glb`,
      audio: {
        en: `assets/audio/en/page${n}.mp3`,
        bm: `assets/audio/bm/page${n}.mp3`,
      },
    };
  }),
};
