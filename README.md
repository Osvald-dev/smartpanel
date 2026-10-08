# Smart Panel · smartpanelconstructora.com

Sitio web de Smart Panel, constructora de viviendas en seco (Wood Frame).

Stack: React 18 + Vite + React Router + Bootstrap.

## Requisitos

- Node.js 18 o superior y npm.

## Comandos

```bash
npm ci          # instala las dependencias exactas de package-lock.json
npm run dev     # servidor de desarrollo con recarga en caliente (http://localhost:5173)
npm run build   # genera el sitio de producción en dist/
npm run preview # sirve localmente el contenido de dist/ para revisarlo
```

## Estructura

- `src/pages/`: páginas (home, modelos, contacto, precio, preguntas).
- `src/components/`: header, footer, slider, textos y cards de modelos.
- `src/utils/whatsapp.js`: armado de los links de WhatsApp.
- `public/`: archivos que se copian tal cual al build (favicon, fichas técnicas en PDF).

## Deploy

El deploy es **manual** en Hostinger:

1. Correr `npm ci` y `npm run build`.
2. Subir el **contenido** de `dist/` (no la carpeta en sí) a `public_html` en Hostinger.

`dist/` no se versiona en git: se genera con cada build.
