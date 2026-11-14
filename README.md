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
  darzistudio/             Darzi Studio (দর্জি স্টুডিও): only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/darzistudio/privacy.html   <- Play Console "Privacy policy" URL
    index.html             an earlier placeholder page ("Hello"); nothing links to it
  kajerbhasha/             Kajer Bhasha (কাজের ভাষা): only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/kajerbhasha/privacy.html   <- Play Console "Privacy policy" URL
  islamicpatternstudio/    Islamic Pattern Studio (Pattern Studio on the phone): only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/islamicpatternstudio/privacy.html   <- Play Console "Privacy policy" URL
  worlddressglobe/         World Dress Globe: only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/worlddressglobe/privacy.html   <- Play Console "Privacy policy" URL
  pdffit/                  PDF Fit: only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/pdffit/privacy.html   <- Play Console "Privacy policy" URL
  makeyourownsaree/        Make Your Own Saree (a paid app): only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/makeyourownsaree/privacy.html   <- Play Console "Privacy policy" URL
  inkling/                 Inkling (a paid children's app; এসো লিখি is its Bangla edition): only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/inkling/privacy.html   <- Play Console "Privacy policy" URL
  gardenbook/              Garden Book: only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/gardenbook/privacy.html   <- Play Console "Privacy policy" URL
assets/
  fonts/, nakshipitha-icon-192.png, sporshochitro-icon-192.png, bangla-braille-icon-192.png, baribanao-icon-192.png,
  biyerkhata-icon-192.png, darzistudio-icon-192.png, islamicpatternstudio-icon-192.png, worlddressglobe-icon-192.png,
  kajerbhasha-icon-192.png, pdffit-icon-192.png, makeyourownsaree-icon-192.png, inkling-icon-192.png, gardenbook-icon-192.png
                           fonts and icons used by the hub pages (index.html, en/index.html)
  site.css                 the look of both hub pages (index.html and en/index.html), with its three themes
  theme.js                 remembers which theme a visitor picked (see "Themes" below)
  teatime-crumbles.svg     the site's own mark (header, footer, browser tab); teatime-crumbles-180.png and -512.png are
                           PNG copies of it for phones' home screens and for link previews
```

## Themes

The theme button in the top bar of both hub pages (the palette icon) opens a small menu with three themes: **Parchment**
(the default: book-page paper, leather-brown buttons, thin gold rules), **Linen** (lighter, white cards) and **Imperial**
(deep purple with gold). Their colours are at the top of `assets/site.css`. The menu is a plain `<details>` element with radio
buttons, so it opens and the themes switch without any script; `assets/theme.js` only remembers the choice in the visitor's
own browser (localStorage, nothing is sent anywhere), closes the menu after a pick, and on a first visit picks Imperial for
phones set to dark mode. The pages allow scripts only from this site (`script-src 'self'` in their Content-Security-Policy).

Fonts (all in `assets/fonts/`, under the SIL Open Font License; the licences are next to them): Tiro Bangla for the headline
and titles, Hind Siliguri for the text.

## Adding another app (for example Darzi Studio)

1. Put its public pages in `app/<appname>/` — use the same lowercase name as its source repository and as the last part of its package name
   (`io.github.teatimecrumbles.<appname>`).
2. Write a **separate** `app/<appname>/privacy.html` that describes what *that* app really does with data. Do not copy the Nakshi Pitha policy
   unless the other app also collects nothing, has no ads, no analytics and no sign-in.
3. Add it to **both** hub pages, `index.html` (Bangla) and `en/index.html` (English), in two places each: a card (copy an
   `<article class="card">` block and change its category, texts and links), its icon in the row of icons at the top of the page
   (`class="showcase"`). The card's privacy-policy button is the page's only link to the policy. In `en/index.html` every
   link starts with `../`.
4. Set its price on the card: `<span class="price">বিনামূল্যে</span>` / `<span class="price">Free</span>` for a free app,
   `<span class="price paid">পেইড</span>` / `<span class="price paid">Paid</span>` for a paid one, or
   `<span class="price paid">বিনামূল্যে · প্রো অ্যাপের ভেতরে</span>` / `<span class="price paid">Free · Pro in-app</span>` for a free
   app with an in-app purchase (like Darzi Studio).
   The row of icons holds rows of three (thirteen icons: four full rows and one centred below); for the next app, see
   the comment next to `.showcase` in `assets/site.css`.
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

## Darzi Studio and its privacy policy

Darzi Studio is an Android app (package `io.github.teatimecrumbles.darzistudio`): free to download, with one optional in-app
purchase, Darzi Pro, sold through Google Play. Its code lives in the private repository `teatimecrumbles/myapps` (folder
`darzistudio`). Only the privacy policy is published here, at `app/darzistudio/privacy.html`, because Google Play needs a public
address for it. The app links to this page from its Pro screen and its Style panel (the address is `PRIVACY_URL` in
`darzistudio/app/src/main/assets/www/index.html` in `myapps`); it does not carry a copy. The app's release build checks that this
page is online. Like the Bangla Braille page, it is self-contained (no scripts, fonts or other files), in English, Bangla, Hindi
and Urdu. If the app ever starts handling data differently, update this page before releasing that version.

## Islamic Pattern Studio and its privacy policy

Islamic Pattern Studio is an Android app (package `io.github.teatimecrumbles.islamicpatternstudio`; on the phone it is called
Pattern Studio): Islamic geometric colouring, free to download, with one optional in-app purchase, Pattern Studio Pro, sold
through Google Play. Its code lives in the private repository `teatimecrumbles/myapps` (folder `islamicpatternstudio`). Only the
privacy policy is published here, at `app/islamicpatternstudio/privacy.html`, because Google Play needs a public address for
it. The app links to this page from its Pro sheet and its About sheet (the address is `PRIVACY_URL` in
`islamicpatternstudio/app/src/main/assets/www/index.html` in `myapps`); it does not carry a copy. Every build checks that this
page is online, and a release build fails if it is not. Like the Bangla Braille page, it is self-contained (no scripts, fonts
or other files), in English and Bangla. If the app ever starts handling data differently, update this page before releasing
that version.

## World Dress Globe and its privacy policy

World Dress Globe is an Android app (package `io.github.teatimecrumbles.worlddressglobe`): a coloring atlas of traditional
dress for 195 countries, free to download, with one optional in-app purchase, the full atlas, sold through Google Play. The app
itself is in English. Its code lives in the private repository `teatimecrumbles/myapps` (folder `worlddressglobe`). Only the
privacy policy is published here, at `app/worlddressglobe/privacy.html`, because Google Play needs a public address for it. The
app links to this page from its About screen (the address is `PRIVACY_URL` in `worlddressglobe/build-www.js` in `myapps`); it
does not carry a copy. Every build of the app checks that this page is online and names the app and the contact address, and a
release build fails if it does not. Like the Bangla Braille page, it is self-contained (no scripts, fonts or other files), in
English and Bangla. If the app ever starts handling data differently, update this page before releasing that version.

## Kajer Bhasha and its privacy policy

Kajer Bhasha (কাজের ভাষা) is a free Android app (package `io.github.teatimecrumbles.kajerbhasha`): job phrases in English, Gulf
Arabic and Malay for workers from Bangladesh, Nepal and Pakistan going to the Gulf or Malaysia. Its code lives in the private
repository `teatimecrumbles/myapps` (folder `kajerbhasha`). Only the privacy policy is published here, at
`app/kajerbhasha/privacy.html`, because Google Play needs a public address for it. The app links to it from More and About (the
address is `privacyUrl` in `kajerbhasha/site.config.js` in `myapps`); it does not carry a copy, and the app's build checks that the
page is online. It is self-contained, in English, Bangla, Nepali and Urdu. If the app ever starts handling data differently,
update this page before releasing that version.

## PDF Fit and its privacy policy

PDF Fit is a paid Android app (package `io.github.teatimecrumbles.pdffit`, one price on Google Play, nothing sold inside the
app): it joins certificates, passport pages and scans into one PDF under the size limit a portal sets. The app is in English.
Its code lives in the private repository `teatimecrumbles/myapps` (folder `pdffit`). Only the privacy policy is published here,
at `app/pdffit/privacy.html`, because Google Play needs a public address for it.

The app contains a copy of `app/pdffit/privacy.html`, and the app's build **fails if the two differ**. So when the policy
changes, edit it here and copy the same file to `pdffit/app/src/main/assets/privacy.html` in `myapps`. Like the Bangla Braille
page, it is self-contained (no fonts, scripts or links to other files), so the same file works on the website and inside the app.

## Make Your Own Saree and its privacy policy

Make Your Own Saree is a **paid** Android app (package `io.github.teatimecrumbles.makeyourownsaree`, one price on Google Play,
nothing sold inside the app): pick one of 213 handloom sarees from South Asia, then colour it or make it again by weaving,
embroidery, block printing, ikat or tie-dye. The app itself is in English and works offline. Its code lives in the private
repository `teatimecrumbles/myapps` (folder `makeyourownsaree`). Only the privacy policy is published here, at
`app/makeyourownsaree/privacy.html`, because Google Play needs a public address for it.

The app contains a copy of `app/makeyourownsaree/privacy.html`, and the app's build **fails if the two differ**. So when the policy
changes, edit it here and copy the same file to `makeyourownsaree/app/src/main/assets/web/android/privacy.html` in `myapps`. Like the
Bangla Braille page, it is self-contained (no scripts, fonts or other files), in English and Bangla. Because the app is sold, the
policy also says what Google shares with the developer about each sale and what that is used for; keep that part true if the way
orders are handled changes.

## Inkling and its privacy policy

Inkling is a **paid** Android app for children (package `io.github.teatimecrumbles.inkling`). Its code, including the web app inside it,
lives in the private repository `teatimecrumbles/myapps` (folder `inkling`). Only the privacy policy is published here, because
Google Play needs a public address for it.

The app contains a copy of `app/inkling/privacy.html`, and the app's build **fails if the two differ**. So when the policy changes, edit it
here and copy the same file to `inkling/app/src/main/assets/web/privacy.html` in `myapps`. The page is self-contained and, because the
app is for children, has no clickable links that leave the page (the e-mail address is plain text).

## Garden Book and its privacy policy

Garden Book is an Android app (package `io.github.teatimecrumbles.gardenbook`): an illustrated plant book with calendars set
to the reader's town, free to download, with one optional in-app purchase, the full book, sold through Google Play. Its code
lives in the private repository `teatimecrumbles/myapps` (folder `gardenbook`). Only the privacy policy is published here, at
`app/gardenbook/privacy.html`, because Google Play needs a public address for it.

The app contains a copy of `app/gardenbook/privacy.html` (opened from its Your garden sheet), and the app's build **fails if
the two differ**. So when the policy changes, edit it here and copy the same file to
`gardenbook/app/src/main/assets/web/privacy.html` in `myapps`. Like the Bangla Braille page, it is self-contained, so the
same file works on the website and inside the app.
