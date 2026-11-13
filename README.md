# teatimecrumbles.github.io

Public website for apps by **Mohammad Motiur Rahman** — https://teatimecrumbles.github.io/

This repository is only the website. The source code of the apps is **private**: it lives in the private repository
`teatimecrumbles/myapps`, not here.

## Layout

```
index.html                 app hub in Bangla (lists every app); the default page
en/index.html              the same app hub in English (the language button at the top switches between the two)
404.html                   "page not found"
.nojekyll                  serve files as-is (no Jekyll processing)
app/
  nakshipitha/             Nakshi Pitha: only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/nakshipitha/privacy.html   <- Play Console "Privacy policy" URL
  sporshochitro/           Sporsho Chitro (স্পর্শ চিত্র): only the privacy policy is public (the app itself is Android-only and private)
    privacy/index.html     https://teatimecrumbles.github.io/app/sporshochitro/privacy/   <- Play Console "Privacy policy" URL
  bangla-braille/          Bangla Braille (বাংলা ব্রেইল): only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/bangla-braille/privacy.html   <- Play Console "Privacy policy" URL
  baribanao/               Bari Banao (বাড়ি বানাও): only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/baribanao/privacy.html   <- Play Console "Privacy policy" URL
  biyerkhata/              Biyer Khata (বিয়ের খাতা): the privacy policy and the price file the app downloads (the app itself is private)
    privacy.html           https://teatimecrumbles.github.io/app/biyerkhata/privacy.html   <- Play Console "Privacy policy" URL
    prices.json            https://teatimecrumbles.github.io/app/biyerkhata/prices.json    <- read by the app; edit to update prices
  darzistudio/             Darzi Studio (placeholder)
assets/
  fonts/, nakshipitha-icon-192.png, sporshochitro-icon-192.png, bangla-braille-icon-192.png, baribanao-icon-192.png,
  biyerkhata-icon-192.png  fonts and icons used by the hub page (index.html)
  site.css                 the look of both hub pages (index.html and en/index.html), with its three themes
  theme.js                 remembers which theme a visitor picked (see "Themes" below)
  teatime-crumbles.svg     the site's own mark (header, footer, browser tab); teatime-crumbles-180.png and -512.png are
                           PNG copies of it for phones' home screens and for link previews
```

## Themes

The buttons at the top of both hub pages switch between three themes: **Parchment** (the default), **Linen** and **Imperial**.
Their colours are at the top of `assets/site.css`. The buttons work without any script; `assets/theme.js` only remembers the
choice, in the visitor's own browser (localStorage, nothing is sent anywhere), so it stays when they reload or switch language,
and on a first visit it picks Imperial for phones set to dark mode. The pages allow scripts only from this site
(`script-src 'self'` in their Content-Security-Policy).

## Adding another app (for example Darzi Studio)

1. Put its public pages in `app/<appname>/` — use the same lowercase name as its source repository and as the last part of its package name
   (`io.github.teatimecrumbles.<appname>`).
2. Write a **separate** `app/<appname>/privacy.html` that describes what *that* app really does with data. Do not copy the Nakshi Pitha policy
   unless the other app also collects nothing, has no ads, no analytics and no sign-in.
3. Add it to **both** hub pages, `index.html` (Bangla) and `en/index.html` (English), in three places each: a card (copy an
   `<article class="card">` block and change its category, texts and links), its icon in the row of icons at the top of the page
   (`class="showcase"`), and its privacy policy in the footer's list. In `en/index.html` every link starts with `../`.
4. Set its price on the card: `<span class="price">বিনামূল্যে</span>` / `<span class="price">Free</span>` for a free app, or
   `<span class="price paid">পেইড</span>` / `<span class="price paid">Paid</span>` for a paid one.
5. If any app shows ads (AdMob or others), add an `app-ads.txt` file at the root of this repository, so it is served at
   https://teatimecrumbles.github.io/app-ads.txt, and set the Play Console "Website" of that app to https://teatimecrumbles.github.io/.

## Nakshi Pitha and its privacy policy

Nakshi Pitha is an Android app. Its code, including the web app inside it, lives in the private repository `teatimecrumbles/myapps`.
Only the privacy policy is published here, because Google Play needs a public address for it.

The app contains a copy of `app/nakshipitha/privacy.html`, and the app's build **fails if the two differ**. So when the policy changes, edit it here
and copy the same file to `nakshipitha/app/src/main/assets/privacy.html` in `myapps`.

## Sporsho Chitro and its privacy policy

Sporsho Chitro is an Android app. Its code, store listing and graphics live in the private repository `teatimecrumbles/myapps`
(folder `sporshochitro`). Only the privacy policy is published here, at `app/sporshochitro/privacy/`, because Google Play needs a
public address for it. If the app ever starts handling data differently, update this page before releasing that version.

## Bangla Braille and its privacy policy

Bangla Braille is an Android app. Its code, including the web app inside it, lives in the private repository `teatimecrumbles/myapps`
(folder `bangla-braille`). Only the privacy policy is published here, because Google Play needs a public address for it.

The app contains a copy of `app/bangla-braille/privacy.html`, and the app's build **fails if the two differ**. So when the policy changes, edit it here
and copy the same file to `bangla-braille/app/src/main/assets/privacy.html` in `myapps`. The page is self-contained (no fonts, scripts or links
to other files in this folder), so the same file works on the website and inside the app.

## Bari Banao and its privacy policy

Bari Banao is an Android app. Its code, including the web app inside it, lives in the private repository `teatimecrumbles/myapps`
(folder `baribanao`). Only the privacy policy is published here, because Google Play needs a public address for it.

The app contains a copy of `app/baribanao/privacy.html`, and the app's build **fails if the two differ**. So when the policy changes, edit it here
and copy the same file to `baribanao/app/src/main/assets/web/privacy.html` in `myapps`. Like the Bangla Braille page, it is self-contained, so the
same file works on the website and inside the app.

## Biyer Khata: its privacy policy and its price file

Biyer Khata is an Android app (package `bd.biyerkhata.app`). Its code lives in the private repository `teatimecrumbles/myapps`
(folder `biyerkhata`). Two of its files are published here:

- `app/biyerkhata/privacy.html`: the privacy policy, because Google Play needs a public address for it. The app links to this page
  from its Privacy note (the address is `BK_PRIVACY_URL` in `biyerkhata/www/config.js` in `myapps`); it does not carry a copy. If the
  app ever starts handling data differently, update this page before releasing that version.
- `app/biyerkhata/prices.json`: the price file. Shortly after it opens, the app downloads this file and uses it when its `at` date is
  newer than the prices it already has. So to send newer prices (gold rates, any item's five price points, paid decorator listings)
  to everyone with the app, without a new release: edit this file and **raise `at`** (YYYY-MM-DD). Each new file replaces the
  previous one completely (an item it leaves out goes back to the price built into the app), so keep in it every change you still
  want. The file explains its fields in `_help`; the item ids are listed in `biyerkhata/README.md` in `myapps`. Check that it is
  still valid JSON before you commit (the app ignores a file it cannot read), and before the first paid decorator goes in, read
  "When you add a paid decorator" in `biyerkhata/PUBLISHING.md`.
