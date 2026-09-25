# Henry Guo / working notebook

A single-page portfolio built with vanilla HTML, CSS, and JavaScript. No build step.

## Active files

```text
index.html
assets/
  css/portfolio.css
  js/portfolio.js
  documents/Henry-Guo-Resume.pdf
  images/favicon.png
  images/notebook-circuit.svg
  images/social-card.png
.github/workflows/static.yml
```

The older template assets remain in the repository but are not loaded by the page.

## Editing

- Edit text, links, project notes, and the monthly Now section in `index.html`.
- Update the date next to `UPDATE THIS MONTH` and the footer when refreshing content.
- Replace the explicitly labeled portrait and gallery placeholders with real images; add descriptive alt text.
- The circuit and game visuals are illustrations, not screenshots or measured results.
- Expandable project notes and writing outlines work without JavaScript.
- Replace `assets/documents/Henry-Guo-Resume.pdf` to update both download links.
- Keep the favicon at `assets/images/favicon.png`.
- Social image URLs currently target `https://brepi.github.io/brepi_city/`; change both image metadata URLs if the site moves to a custom domain or root repository.

The resume is the source for employment dates, titles, education, FPGA work, and the embedded game. The supplied brief is the source for the amplifier project and the 180k+ YouTube view count. The MACSA role uses January–July 2024 from the resume rather than 2024–2025 from the brief.

## Preview

Serve the repository with any static HTTP server, then open its local URL. For example, `python -m http.server 8000`.

## Deploy

1. Review the page locally and replace any pending media when available.
2. Commit the portfolio files and assets to this existing repository.
3. Push the commit to `main` on `brepi/brepi_city`.
4. In GitHub Pages settings, select GitHub Actions as the source.
5. The existing static workflow publishes the site; no build command is needed.
