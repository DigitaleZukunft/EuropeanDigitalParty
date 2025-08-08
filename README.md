# EDP – Static Site (GitHub Pages)

Einfacher, **build-freier** Export der EDP‑Seite für GitHub Pages.

## Deploy auf GitHub Pages (ohne Build)

1. Neues Repository anlegen (z. B. `edp-site`).
2. Die Dateien aus diesem Ordner committen: `index.html`, `styles.css`, `script.js`, `404.html` (optional).
3. In den Repository‑Settings → **Pages** → **Branch**: `main` / `root` auswählen → **Save**.
4. Nach wenigen Minuten ist die Seite unter `https://<USER>.github.io/<REPO>/` erreichbar.

## Lokale Vorschau

Einfach `index.html` im Browser öffnen. Es ist **kein Build** notwendig.

## Inhalte

- **index.html** – komplette Seite mit Tailwind (CDN), sauber strukturiert
- **styles.css** – kleine Styles (Tabs)
- **script.js** – Tabs, Smooth‑Scroll, Jahr in der Fußzeile
- **404.html** – Fallback (optional)

## Hinweise

- Alle externen Links sind **Permalinks** (OECD, UN‑DESA, EUR‑Lex/eIDAS, EBSI, Rarimo etc.).
- Für ein vollwertiges React‑Setup mit shadcn/ui bitte später auf Vite/Next umstellen.
