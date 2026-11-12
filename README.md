# teatimecrumbles.github.io

Public website for apps by **Mohammad Motiur Rahman** — https://teatimecrumbles.github.io/

This repository is only the website. The Android source code of each app lives in its own repository
(for example `github.com/teatimecrumbles/nakshipitha`).

## Layout

```
index.html                 app hub (lists every app)
404.html                   "page not found"
.nojekyll                  serve files as-is (no Jekyll processing)
app/
  nakshipitha/             Nakshi Pitha web version (works offline once opened)
    index.html             https://teatimecrumbles.github.io/app/nakshipitha/
    privacy.html           https://teatimecrumbles.github.io/app/nakshipitha/privacy.html   <- Play Console "Privacy policy" URL
    licenses.html          open-source licences
  darzistudio/             Darzi Studio (placeholder)
```

## Adding another app (for example Darzi Studio)

1. Put its public pages in `app/<appname>/` — use the same lowercase name as its source repository and as the last part of its package name
   (`io.github.teatimecrumbles.<appname>`).
2. Write a **separate** `app/<appname>/privacy.html` that describes what *that* app really does with data. Do not copy the Nakshi Pitha policy
   unless the other app also collects nothing, has no ads, no analytics and no sign-in.
3. Add a card for it in `index.html` (copy the `<article class="card">` block).
4. If any app shows ads (AdMob or others), add an `app-ads.txt` file at the root of this repository, so it is served at
   https://teatimecrumbles.github.io/app-ads.txt, and set the Play Console "Website" of that app to https://teatimecrumbles.github.io/.

## Updating the Nakshi Pitha web version

The web version is a copy of `app/src/main/assets/www/` from the `nakshipitha` source repository. After changing the app,
copy that folder's contents over `app/nakshipitha/` here so the website and the Android app stay identical.

**Important when updating:** the web version works offline through a service worker that serves files from a cache.
Open `app/nakshipitha/sw.js` and change the version in the line `const CACHE="nakshi-pitha-1.0.0-..."`
(for example to `nakshi-pitha-1.0.1`) every time you change any file, otherwise returning visitors keep the old version.
