const C='localdrop-v6',A=['./','./index.html','./manifest.json','./assets/vendor/qrcode.js','./assets/vendor/jsQR.js','./assets/icons/favicon.svg','./assets/icons/icon-180.png','./assets/icons/icon-192.png','./assets/icons/icon-512.png','./assets/icons/icon-maskable-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{const c=cs.find(x=>x.url.startsWith(self.registration.scope));return c?c.focus():self.clients.openWindow(self.registration.scope)}))});
