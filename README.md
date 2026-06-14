# Sandeep Katariya — Interactive Portfolio

A premium, state-of-the-art interactive portfolio website built for **Sandeep Katariya**, highlighting his journey from mechanical engineer to multi-industry operator and venture builder.

Live Production URL: [https://portolio-orpin-seven.vercel.app](https://portolio-orpin-seven.vercel.app)

---

## ✨ Features

- **Interactive Color Bend Shader**: A beautiful, fluid Three.js WebGL background that reacts dynamically to cursor movements and flows continuously over time.
- **GSAP-powered Typography & Animations**: Premium staggered text reveals, parallax boundaries, and custom cursor spring animations.
- **Interactive Sector Selector**: A fluid, bouncy card-deck interface using GSAP and spring mechanics to display active sectors and operational statistics.
- **Magic Bento Grid**: A dynamic spotlight bento layout containing highlighted ventures, complete with particle engines and hover magnetisms.
- **Fully Responsive**: Tailored for high performance across desktop and mobile devices.

---

## 🛠️ Technology Stack

* **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vite.dev/)
* **WebGL & Shader Engine**: [Three.js](https://threejs.org/) (Custom GLSL shader material)
* **Animation Library**: [GSAP (GreenSock)](https://greensock.com/gsap/) (ScrollTrigger, Custom Ease)
* **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
* **Deployment**: [Vercel](https://vercel.com/) (configured via `vercel.json`)

---

## 🚀 Running Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

1. **Clone the repository and install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to view the application.

3. **Build the production bundle**:
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

4. **Lint & Typecheck**:
   ```bash
   npm run lint
   ```

---

## 📦 Project Structure

```
├── src/
│   ├── components/       # UI Components (ColorBends, SceneCanvas, GooeyNav, MagicBento, etc.)
│   ├── data/             # Portfolio static data and configurations
│   ├── utils/            # Custom React hooks and helper utilities
│   ├── App.tsx           # Main application shell
│   ├── main.tsx          # React entrypoint
│   └── index.css         # Styling and custom layout configurations
├── vercel.json           # Vercel SPA routing and framework overrides
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🌐 Deployment

The application is deployed on Vercel and configured to rewrite client-side routing to `index.html`. To redeploy manually:

```bash
# Preview deployment
npx vercel

# Production deployment
npx vercel --prod
```
