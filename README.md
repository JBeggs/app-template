# Professional Business Template

A modern, responsive website template built with Astro and Tailwind CSS.

## Features

- 🎨 Modern, professional design with clean aesthetics
- 🌓 Dark mode toggle with persistent theme storage
- 📱 Fully responsive mobile-first design
- 🖼️ Fullscreen image gallery with keyboard navigation
- ⚡ Lightning-fast performance with Astro
- 🎯 SEO-friendly structure
- 🎭 Smooth transitions and animations
- ♿ Accessible components

## Pages

- **Home** - Hero section, features, image gallery, product breakdown, and CTA
- **About** - Company story, mission & vision, team gallery, and core values
- **Products** - Detailed product showcase with features and benefits
- **Contact** - Contact form, business information, and map placeholder

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit `tailwind.config.mjs` to customize the color scheme:

```js
colors: {
  light: {
    bg: '#f8f9fa',
    card: '#ffffff',
    text: '#000000',
    muted: '#6c757d',
  },
  dark: {
    bg: '#1a1a1a',
    card: '#2d2d2d',
    text: '#ffffff',
    muted: '#a0a0a0',
  },
}
```

### Content

- Update company name in `src/components/Header.astro` and `src/components/Footer.astro`
- Replace placeholder images with your own
- Modify Lorem ipsum text with your actual content
- Update contact information in `src/components/Footer.astro` and `src/pages/contact.astro`

### Images

Replace Unsplash placeholder URLs with your own images. Current placeholders are in:
- `src/pages/index.astro` - Hero, products, gallery
- `src/pages/about.astro` - Team photos
- `src/pages/products.astro` - Product images
- `src/components/ImageGallery.astro` - Gallery images

## Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is free to use for personal and commercial projects.

