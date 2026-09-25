# brepi

Static homepage. Plain HTML, CSS, and a small scroll-reveal script. No build step.

## Files in use

```text
index.html
assets/
  css/portfolio.css
  js/portfolio.js
  images/
    favicon.png
    social-card.png
    cat-gug.webp
    cat-jug.webp
    cat-lug.webp
    cat-melm.webp
    cat-apple.webp
    cat-stack.webp
.github/workflows/static.yml
```

The older template assets and resume remain in the repository but are not loaded by the page.

## Editing

- Copy, channel links, and the three ECE project entries are in `index.html`.
- The six cat images come from the existing repository. Captions use the original filenames, not claims about ownership or names.
- `CAT IMG` comments mark image slots. Change the image source and alt text together.
- The YouTube player uses the privacy-enhanced `youtube-nocookie.com` domain. Its direct watch link remains available if the embed is blocked.
- The SoundCloud track uses the official oEmbed track ID, `2377754633`, for `soundcloud.com/brepi/indispensible`. Playback is not automatic. A direct track link sits beneath the player.
- Twitch and TikTok link out. The page makes no claim about whether a stream is live.
- Keep the existing favicon at `assets/images/favicon.png`.
- Update both social-image metadata URLs if moving away from `https://brepi.github.io/brepi_city/`.
- Keep new copy short and lowercase. Add details when there is something to show; omit empty sections.

## Preview

Run a static server from the repository, for example `python -m http.server 8765`.

## Deploy

1. Check the local page on phone and desktop widths.
2. Stage only the intended HTML, styles, scripts, and assets.
3. Commit the change on `main`.
4. Push `main` to `origin`.
5. Check the existing GitHub Pages workflow and the live site.
