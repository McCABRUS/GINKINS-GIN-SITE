# GINKINS Gin Site

Interactive brand website for GINKINS Gin, built around a premium visual experience with cinematic motion, responsive layouts, and a modern full-stack architecture.

The project combines a Next.js frontend with a Laravel/PHP backend and focuses on immersive storytelling, product presentation, and polished interaction design.

**Live site:** [https://ginkinsgin.com](https://ginkinsgin.com)

## Overview

The experience is designed as a brand-led web journey rather than a conventional content site.

```text
Brand
  ↓
Storytelling
  ↓
Product experience
  ↓
Interactive motion
  ↓
Responsive experience
```

The repository contains both the frontend application and the Laravel backend:

```text
app/
└── Next.js frontend

ginkins-backend/
└── Laravel / PHP backend
```

## Highlights

- Responsive premium brand experience
- Cinematic page transitions and motion
- Scroll-based storytelling
- Interactive visual sections
- Component-based Next.js frontend
- Laravel backend integration
- Responsive UI across viewport sizes
- Optimized asset delivery and presentation

## Technology

- Next.js
- React
- TypeScript
- Laravel
- PHP
- GSAP
- Tailwind CSS
- CSS
- Vercel

## Architecture

The application is split between a frontend experience layer and a backend service layer.

```text
Next.js / React
      ↓
UI + interactions
      ↓
API integration
      ↓
Laravel / PHP
      ↓
Backend services
```

The frontend is responsible for the visual experience, responsive behavior, component composition, and interaction design. Laravel provides the backend layer consumed by the frontend.

## Motion and interaction

Motion is a core part of the experience rather than an isolated visual effect.

GSAP is used for:

- cinematic transitions;
- scroll-driven animation;
- staged content reveals;
- interactive visual sequences;
- coordinated timeline-based motion.

The animation approach is designed to support the narrative of the brand while preserving responsive behavior.

## Development

Install dependencies and run the frontend:

```bash
npm install
npm run dev
```

The Next.js application is available at:

```text
http://localhost:3000
```

The Laravel backend lives in:

```text
ginkins-backend/
```

Follow the backend's own environment and dependency requirements when running it locally.

## Project structure

```text
app/
├── ...
└── Next.js application

ginkins-backend/
├── ...
└── Laravel application

public/
└── images and static assets
```

## Engineering focus

The project emphasizes:

- component-driven frontend development;
- responsive UI;
- animation systems;
- frontend/backend integration;
- visual storytelling;
- reusable implementation patterns;
- production-oriented deployment with Vercel.
