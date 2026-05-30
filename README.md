# MediSA Documentation Website

> Healthcare Should Begin With Understanding

## Files
- `index.html` — Full single-page site
- `style.css` — All styles (dark mode, responsive)
- `script.js` — Animations and interactions
- `vercel.json` — Vercel deploy config

## Deploy to Vercel (3 steps)

### Option 1: Vercel CLI
```bash
npm i -g vercel
cd medisa
vercel
```
Follow the prompts. Your site will be live instantly.

### Option 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project
3. Import your repo → Deploy
4. Done — live URL provided immediately

### Option 3: Drag & Drop
1. Go to https://vercel.com/new
2. Drag the entire `medisa/` folder
3. Deployed in seconds

## Adding Real Screenshots
Replace the placeholder cards in the Screenshots section by adding:
```html
<img src="your-screenshot.png" alt="..." style="width:100%;height:100%;object-fit:cover;" />
```
inside any `.sc-placeholder` div.

## Adding Real Links
Search for `href="#"` in `index.html` and replace with:
- Demo URL
- GitHub repository URL  
- YouTube video URL

## Team Members
Edit the `#team` section in `index.html` to add more team members by duplicating the `.team-card` block.

---
Built for BuildFest 2026 · Team Moricha
