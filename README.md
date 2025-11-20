# TechwareLab UI Developer Test

A modern, animated landing page built with React, TypeScript, and GSAP animations.

## 🚀 Technologies Used

- **React 18** with TypeScript
- **Vite** - Fast build tool
- **SCSS** - Styling
- **GSAP** - Advanced animations
- **ScrollTrigger** - Scroll-based animations

## ✨ Features Implemented

### 1. Hero Section
- Smooth text entrance animation with fade-in and upward motion
- Staggered title animation
- Animated concentric circles appearing sequentially
- Mouse parallax effect on background circles
- Interactive button with hover effects

### 2. Scroll-Revealed Text Section
- Scroll-based text reveal effect
- Character-by-character color transition
- Reversible animation (fades out when scrolling back up)

### 3. Bento Grid Section
- CSS Grid layout (not Flexbox)
- Hover animations on cards
- Logo and container animations
- Smooth transitions

### 4. Infinite Marquee Section
- Continuous horizontal scrolling animation
- Seamless infinite loop
- Pause on hover, resume on mouse leave

### 5. Footer Section
- Social media icons with hover animations
- Responsive layout
- Consistent spacing across devices

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

Fully responsive across:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎨 Project Structure

```
src/
├── components/
│   ├── MainHero.tsx       # Hero section with parallax
│   ├── Info.tsx           # Scroll-revealed text
│   ├── Customers.tsx      # Bento grid layout
│   ├── Marquee.tsx        # Infinite logo scroll
│   └── Footer.tsx         # Footer with social links
├── assets/
│   ├── company_logos/     # Company logo images
│   └── sm_icons/          # Social media icons
└── App.tsx                # Main app component
```

## 🎯 Key Implementation Details

- **Animations**: GSAP for smooth, performant animations
- **Scroll Effects**: ScrollTrigger plugin for scroll-based reveals
- **Parallax**: Mouse-based parallax on hero circles
- **Grid Layout**: CSS Grid for bento section
- **Infinite Scroll**: GSAP for seamless marquee effect

## 📝 Notes

- All animations are optimized for performance
- No layout shifts or frame drops
- Clean, modular code structure
- Accessibility best practices followed
- TypeScript for type safety

---

Built with ❤️ for TechwareLab Interview
