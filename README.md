# teatimecrumbles.github.io

Public website for apps by **Mohammad Motiur Rahman** — https://teatimecrumbles.github.io/

This repository is only the website. The source code of the apps is **private**: it lives in the private repository
`teatimecrumbles/myapps`, not here.

## Layout

```
index.html                 app hub (lists every app)
404.html                   "page not found"
.nojekyll                  serve files as-is (no Jekyll processing)
app/
  nakshipitha/             Nakshi Pitha: only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/nakshipitha/privacy.html   <- Play Console "Privacy policy" URL
  sporshochitro/           Sporsho Chitro (স্পর্শ চিত্র): only the privacy policy is public (the app itself is Android-only and private)
    privacy/index.html     https://teatimecrumbles.github.io/app/sporshochitro/privacy/   <- Play Console "Privacy policy" URL
  bangla-braille/          Bangla Braille (বাংলা ব্রেইল): only the privacy policy is public (the app itself is Android-only and private)
    privacy.html           https://teatimecrumbles.github.io/app/bangla-braille/privacy.html   <- Play Console "Privacy policy" URL
  darzistudio/             Darzi Studio (placeholder)
assets/
  fonts/, nakshipitha-icon-192.png, sporshochitro-icon-192.png, bangla-braille-icon-192.png   fonts and icons used by the hub page (index.html)
```

## Adding another app (for example Darzi Studio)

1. Put its public pages in `app/<appname>/` — use the same lowercase name as its source repository and as the last part of its package name
   (`io.github.teatimecrumbles.<appname>`).
2. Write a **separate** `app/<appname>/privacy.html` that describes what *that* app really does with data. Do not copy the Nakshi Pitha policy
   unless the other app also collects nothing, has no ads, no analytics and no sign-in.
3. Add a card for it in `index.html` (copy the `<article class="card">` block).
4. If any app shows ads (AdMob or others), add an `app-ads.txt` file at the root of this repository, so it is served at
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
