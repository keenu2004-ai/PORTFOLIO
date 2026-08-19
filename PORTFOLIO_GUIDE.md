# 🚀 Vaibhav's High-Impact Creative Portfolio

This is a premium, professional portfolio website built with **React**, **TypeScript**, and **Advanced CSS**. It is designed for high visual impact, featuring cinematic animations, bold typography, and a modern "Creative Tech" aesthetic.

---

## 🛠️ Tech Stack & Tools
- **Framework**: React 18 (Modular Component Architecture)
- **Language**: TypeScript (Type-safe development)
- **Build Tool**: Vite (Ultra-fast performance & bundling)
- **Animations**: Intersection Observer API (Scroll-triggered reveals)
- **Styling**: Modern CSS3 (Grid, Flexbox, Custom Variables)
- **Texture**: SVG Grain/Noise overlay for a premium finish

---

## 📁 Project Structure
The project is organized for easy maintenance:
- `src/components/`: Contains all the individual sections of your website.
- `src/index.css`: Global theme settings (Colors, Typography, Noise effects).
- `src/App.tsx`: The "Brain" of the site where sections are assembled and animations are initialized.
- `dist/`: The **Production Folder**. This contains the final website files for uploading to the internet.

---

## ✏️ How to Make Changes

### 1. Changing Your Info (Bio, Introduction)
Open **`src/components/About.tsx`**.
- Look for the text inside `<p>` tags to update your resume introduction or personal story.

### 2. Updating Your Projects
Open **`src/components/Projects.tsx`**.
- Find the `projects` array at the top. You can add new projects or change the description, tech tags, and colors of existing ones by editing the objects in this list.

### 3. Adding New Skills
Open **`src/components/Skills.tsx`**.
- Update the `skillCategories` list to add or remove tools from your stack.

### 4. Changing Theme Colors
Open **`src/index.css`**.
- At the top, under `:root`, you can change `--accent-color` (currently electric blue) or `--bg-color` to completely transform the look of the site.

---

## 🚀 How to Run & Build

### Development Mode (To see changes live)
```bash
npm run dev
```

### Production Build (To prepare for upload)
```bash
npm run build
```
This will update the `dist/` folder with your latest changes.

---

## 🌐 Deploying to the Internet
To make your portfolio live, simply upload the **entire contents of the `dist/` folder** to any hosting provider (GitHub Pages, Netlify, Vercel, or Hostinger).

---

© 2026 Vaibhav / Designed for Excellence.
