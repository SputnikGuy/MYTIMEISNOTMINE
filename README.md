# MY TIME IS NOT MINE

Static landing page for the KEEP Driven campaign.

## Structure

```text
.
├── index.html
├── style.css
├── script.js
└── content/
    └── site.json
```

## How to edit the content

Most page content is stored in:

```text
content/site.json
```

Edit that file to update:

- hero text
- navigation
- campaign visuals
- demand / manifesto cards
- KEEP Driven project section
- journey timeline
- position paper CTA
- take part section
- gallery placeholders
- partners and footer

The page loads `content/site.json` at runtime and renders the landing automatically.

## Local preview

Because the page fetches a JSON file, preview it through a local server instead of opening the file directly.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This project can be deployed as a static site on GitHub Pages, Vercel or Netlify.
