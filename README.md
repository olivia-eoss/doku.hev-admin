# HEV Dokumentationsplattform

Dieses Projekt ist eine benutzerfreundliche Dokumentationsplattform für interne Prozesse und Anleitungen. Ziel ist es, komplexe Abläufe strukturiert, verständlich und schnell zugänglich darzustellen.

Die Webseite wurde im Rahmen der IPA entwickelt und basiert auf Astro mit dem Starlight-Framework.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/         # Wiederverwendbare Komponenten
│   ├── content/
│   │   └── docs/           # Markdown/MDX Inhalte (Anleitungen)
│   ├── layouts/            # Layouts
│   ├── pages/              # Astro Seiten
│   ├── styles/             # Globales Styling, CSS-Variablen
│   ├── utils/              # Hilfsfunktionen
├── astro.config.mjs        # Astro Konfiguration
├── README.md               # Projektdokumentation
```

Inhalte werden über .md / .mdx Dateien in src/content/docs/ gepflegt und automatisch als Seiten generiert.

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Möchten Sie mehr lehrnen?

Schaue hier [Starlight’s docs](https://starlight.astro.build/), lies [the Astro documentation](https://docs.astro.build), oder gehe zu [Astro Discord server](https://astro.build/chat).
