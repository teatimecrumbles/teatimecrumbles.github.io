/* Nakshi Pitha Maker — service worker for the web (PWA) version only.
   Not registered inside the Android app or when opened from a file. Caches every local file so the app works offline. */
'use strict';
const CACHE="nakshi-pitha-1.0.0-29853f1fbb";
const FILES=[
"./",
"./css/app.css",
"./fonts/files/galada-bengali-400-normal.woff2",
"./fonts/files/galada-latin-400-normal.woff2",
"./fonts/files/gloock-latin-400-normal.woff2",
"./fonts/files/hind-siliguri-bengali-400-normal.woff2",
"./fonts/files/hind-siliguri-bengali-500-normal.woff2",
"./fonts/files/hind-siliguri-bengali-600-normal.woff2",
"./fonts/files/hind-siliguri-latin-400-normal.woff2",
"./fonts/files/hind-siliguri-latin-500-normal.woff2",
"./fonts/files/hind-siliguri-latin-600-normal.woff2",
"./fonts/fonts.css",
"./fonts/licenses/galada-OFL.txt",
"./fonts/licenses/gloock-OFL.txt",
"./fonts/licenses/hind-siliguri-OFL.txt",
"./icons/icon-192.png",
"./icons/icon-512.png",
"./icons/icon-maskable-192.png",
"./icons/icon-maskable-512.png",
"./index.html",
"./js/app.js",
"./js/motifs.js",
"./manifest.webmanifest",
"./vendor/d3-array.min.js",
"./vendor/d3-contour.min.js",
"./vendor/jspdf.umd.min.js",
"./vendor/jszip.min.js",
"./vendor/licenses/d3-array-LICENSE.txt",
"./vendor/licenses/d3-contour-LICENSE.txt",
"./vendor/licenses/jspdf-LICENSE.txt",
"./vendor/licenses/jszip-LICENSE.md",
"./vendor/licenses/three-LICENSE.txt",
"./vendor/three.min.js"
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('nakshi-pitha-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const u=new URL(req.url);if(u.origin!==self.location.origin)return;
 e.respondWith(caches.match(req,{ignoreSearch:true}).then(hit=>hit||fetch(req).then(res=>{if(res&&res.ok&&res.type==='basic'){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp))}return res}).catch(()=>req.mode==='navigate'?caches.match('./index.html'):Response.error())))});
