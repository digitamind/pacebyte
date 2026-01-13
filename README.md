# Pacebyte Frontend

A modern, interactive React website for Pacebyte IT consultancy, built with Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Modern Stack**: React 18 + TypeScript + Vite
- 🎨 **Slick Animations**: Framer Motion for smooth, performant animations
- 📱 **Mobile-First**: Fully responsive design with excellent mobile support
- 🎯 **Clean UI**: Minimalist design with clean, intuitive interfaces
- ⚡ **Performance**: Optimized for fast loading and smooth 60fps animations
- ♿ **Accessible**: Built with accessibility in mind

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **React Intersection Observer** - Scroll animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
pacebyte-frontend/
├── public/          # Static assets
├── src/
│   ├── components/ # Reusable components
│   ├── pages/      # Page components
│   ├── hooks/      # Custom React hooks
│   ├── utils/      # Utility functions
│   ├── styles/     # Global styles
│   ├── App.tsx     # Main app component
│   └── main.tsx    # Entry point
└── ...
```

## Pages

- **Home** (`/`) - Landing page with hero, stats, value propositions, and featured services
- **About** (`/about`) - Company story, timeline, values, and why choose Pacebyte
- **Services** (`/services`) - Complete service portfolio with 11 services
- **Contact** (`/contact`) - Contact form and company information

## Services

1. Enterprise Application Development
2. Payment Integration & Fintech Solutions
3. Cloud Infrastructure & DevOps
4. Machine Learning & AI Automation
5. Solution Architecture & Technical Consulting
6. API Development & Integration
7. Security & Compliance
8. Data Analytics & Business Intelligence
9. UI/UX Design Services
10. Quality Assurance & Testing
11. Digital Transformation Consulting

## Custom Hooks

- `useMobile` - Detect mobile devices
- `useIntersectionObserver` - Viewport detection for scroll animations
- `useParallax` - Parallax scrolling effects (desktop only)
- `useSmoothScroll` - Smooth scrolling functionality
- `useScrollAnimation` - Scroll-triggered animations

## Components

- **Navigation** - Sticky navigation with mobile menu
- **Footer** - Footer with links and social media
- **Hero** - Animated hero section
- **ServiceCard** - Interactive service cards
- **AnimatedCounter** - Number counting animations
- **ScrollReveal** - Scroll-triggered reveal animations
- **InteractiveButton** - Animated button component
- **LoadingSpinner** - Loading state component
- **MobileMenu** - Mobile navigation menu
- **ResponsiveImage** - Optimized image component

## Animation Guidelines

- All animations target 60fps
- Standard animations: 200-400ms
- Longer animations: 500-800ms
- Respects `prefers-reduced-motion` for accessibility
- Reduced animations on mobile for performance

## Mobile Responsiveness

- Mobile-first design approach
- Breakpoints:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
  - Large Desktop: 1440px+
- Touch-friendly interactions (minimum 44x44px targets)
- Responsive typography and spacing

## Performance

- Image lazy loading
- Optimized animations (GPU-accelerated)
- Efficient bundle size (Vite handles optimization)
- Code splitting not needed for small site (can be added if site grows)

## Development

### Linting

```bash
npm run lint
# or
yarn lint
```

## License

MIT

## Author

Pacebyte - Technology Solutions at the Speed of Innovation
