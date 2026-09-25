# cat photos go here

drop your cat photos in this folder and reference them from `index.html`.

example structure:
```
assets/cats/
├── 01.jpg
├── 02.jpg
├── 03.jpg
└── ...
```

then in `index.html`, swap the cataas placeholder URLs:
```html
<!-- before -->
<img src="https://cataas.com/cat?width=400&height=400&t=3" alt="...">

<!-- after -->
<img src="assets/cats/01.jpg" alt="...">
```

keep them square (or close to it) — they render in a 1:1 grid.