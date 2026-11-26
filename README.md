# Sungai Tanaki · AR Storybook

An augmented-reality storybook site built with **MindAR + A-Frame**.
Scan a printed book page with a phone camera → a 3D model appears on the page and the narration plays (English / Bahasa Melayu).

Live site: https://brandonyong0327.github.io/sungai-tanaki-AR/

---

## What is already done

| Item | Status |
| --- | --- |
| 12 page illustrations extracted from the book PDF (`assets/pages/page1..12.jpg`) | done |
| `assets/targets.mind` compiled from all **12 pages** | done (12 targets) |
| Narration audio EN + BM + **Kadazandusun** for all 12 pages (`assets/audio/en`, `bm`, `dsn`) | done |
| 3D model for page 8 (`assets/models/page8.glb`) | done |
| Pages 1–7, 9–12 3D models | **still needed** (drop `pageN.glb` in `assets/models/`) |

The landing page, AR scanner (`ar.html`) and 3D preview (`viewer.html`) all work on phone.

---

## Folder structure

```
.
├── index.html            landing page (language picker + 12 page grid)
├── ar.html               AR scanner (camera → target → 3D model + audio)
├── viewer.html           3D preview without the book (?page=N)
├── config.js             THE ONLY FILE YOU NORMALLY EDIT
└── assets
    ├── targets.mind      compiled AR targets, one per page, in page order
    ├── models            pageN.glb  (only page8.glb exists)
    ├── pages             pageN.jpg  (source images used to compile targets)
    └── audio
        ├── en            pageN.mp3   (English narration)
        ├── bm            pageN.mp3   (Bahasa Melayu narration)
        └── dsn           pageN.mp3   (Kadazandusun narration)
```

## Languages

Three languages, all controlled by `config.js`:

| code | label | UI language |
| --- | --- | --- |
| `en` | EN | English |
| `bm` | BM | Bahasa Melayu |
| `dsn` | KAD | Kadazandusun |

The whole interface switches language (landing page, AR hints, preview buttons),
not just the narration. Every UI string lives in `CONFIG.ui.en / .bm / .dsn` —
change any word there. The Kadazandusun wording is a best effort; have a native
speaker read it once.

## config.js — the two settings that matter

```js
targetMap: [1,2,3,4,5,6,7,8,9,10,11,12],  // pages that exist inside targets.mind
animClip: -1,                             // -1 = no animation, 0/1 = play a clip
```

`targetMap` must match the order the targets were compiled in (page1 → page12).
`pages` is generated from one template, so file names just have to follow `pageN`.

## Run it locally

```bash
cd this-folder
python -m http.server 8000
# open http://localhost:8000
```

Camera only works on `https://` or `localhost` — not on `http://192.168.x.x`.

## Deploy to GitHub Pages

1. upload the files to the repo (keep the `assets/...` structure)
2. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)` → Save
3. wait 1–2 minutes → `https://<user>.github.io/<repo>/`

---

## Adding a 3D model for another page

1. In Blender: **File → Export → glTF 2.0 (.glb/.gltf)**, Format **glTF Binary (.glb)**, tick *Include textures*.
2. Keep it under ~20 MB. Page 8 originally was 53 MB; resizing textures to 1024 px brought it to 11.6 MB with no visible loss.
3. Name it `pageN.glb` and put it in `assets/models/`.
4. Nothing else to change — `ar.html` and `viewer.html` pick it up from `config.js`.

Model orientation/scale used on the AR page: `position="0 0.1 0"`, `scale="0.21"`.
For the preview page the camera auto-frames any model, so size does not matter.

## Recompiling targets.mind

Only needed when you change the page images.

1. open https://hiukim.github.io/mind-ar-js-doc/tools/compile/
2. upload `page1.jpg … page12.jpg` **in that order** (order = `targetMap` order)
3. Start → download `targets.mind` → replace `assets/targets.mind`
4. keep `targetMap` in sync with how many pages you compiled

## Debugging on the phone

`ar.html?debug=1` shows a small overlay:

```
video 640×480      camera stream resolution
draw  390×844      how big the camera picture is drawn
view  390×844      viewport
found 8            page currently recognised ("-" = nothing yet)
```

If `found` stays `-` while pointing at the right page:

- light the page properly, no glare, whole illustration inside the frame
- keep the phone 25–40 cm away, straight on (no steep angle)
- a printed page detects far more reliably than a screen inside an editor window
- if it still fails, the page image in `assets/pages/` is not the same as what you are scanning — recompile from the real image
