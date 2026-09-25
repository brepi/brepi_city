# brepi

my homepage. plain html/css/js, dark mode, no frameworks.

## what's here

- `index.html` — the whole site
- `styles.css` — dark mode aesthetic, hot pink accent
- `main.js` — scroll reveal, nav, dates. that's it.
- `assets/cats/` — drop your cat photos here if you want to swap out the placeholders

## cats

the site currently pulls random cat images from `cataas.com` as placeholders.
to replace them with your own cats:

1. drop your images in `assets/cats/` (e.g. `cat-1.jpg`, `cat-2.jpg`)
2. in `index.html`, replace the `src="https://cataas.com/cat?..."` with
   `src="assets/cats/cat-1.jpg"` (etc.)
3. update the `alt` text and figcaption to whatever you want

## deploy

this is a static site. github pages serves it from any branch.

local preview:
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

push to a new branch:
```bash
git init
git add .
git commit -m "v2: dark mode. cats. less corporate."
git branch -M main
git remote add origin https://github.com/brepi/brepi_city.git
git checkout -b v2-dark
git push -u origin v2-dark
```

then in github: settings → pages → source: `v2-dark` branch → save.
preview at `https://brepi.github.io/brepi_city/`.

## customize

- **accent color** — search `--accent: #ff2e93` in `styles.css`, swap it
- **fonts** — google fonts are loaded in `<head>` of `index.html`
- **sections** — add/remove as needed. each section is a `<section>` block.

built by me. cats: free.