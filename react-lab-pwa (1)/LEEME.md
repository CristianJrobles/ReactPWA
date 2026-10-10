# Laboratorio de React (PWA)

Archivos: index.html, manifest.webmanifest, sw.js, vendor/ (React local), icons/.

## Publicar (necesita HTTPS; las PWA no se instalan desde file://)
- Netlify Drop: entra a app.netlify.com/drop y arrastra esta carpeta.
- GitHub Pages: sube la carpeta a un repo y activa Pages.
- Vercel / Cloudflare Pages: sube la carpeta como sitio estático.

## Instalar en Android
1. Abre la URL en Chrome.
2. Pulsa "Instalar" (botón en la app) o menú ⋮ > "Instalar aplicación".
3. Aparece en el cajón de apps con su ícono y abre a pantalla completa.

## Probar en local
python3 -m http.server 8000  ->  http://localhost:8000
(localhost cuenta como contexto seguro para el service worker)
