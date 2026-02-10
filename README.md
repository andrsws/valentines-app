# My Love ❤️

A romantic iOS-style Progressive Web App (PWA) designed as a Valentine's Day gift. This intimate app contains relationship memories, handwritten love letters, and a live relationship counter.

## ✨ Features

### 📱 iOS-Native Experience
- Optimized for iPhone 15 Pro (390×844px)
- Respects safe areas (Dynamic Island + Home Indicator)
- Apple-level polish with smooth animations
- SF-style typography and design language
- One-handed navigation optimized

### 🏠 Home Screen
- **Live Relationship Counter** - Displays days and hours together since August 25, 2024
- Beautiful gradient background with warm pink tones
- Card-based info layout with iOS styling
- Animated entry effects

### 💌 Read When... Screen
- Four personalized letter categories:
  - Read when you're sad 😢
  - Read when you miss me 💭
  - Read when you feel alone 🤗
  - Read when you can't sleep 🌙
- Envelope/letter visual metaphor
- Smooth card interactions

### ✍️ Letter Screen
- Full-screen handwritten letters
- Paper-texture background for authenticity
- Handwritten fonts (Caveat & Dancing Script)
- Warm, intimate lighting effects
- Heartfelt, personalized content for each scenario

### 📸 Memories Screen
- Photo grid with 6 romantic moments
- Tap-to-expand full-screen view
- Smooth modal transitions
- Minimal captions for each memory

### 🧭 Navigation
- Fixed bottom navigation bar
- Glass morphism effect (backdrop blur)
- Active state indicators
- Three main sections: Home, Read When, Memories

## 🎨 Design System

### Color Palette
- **Primary**: `#FF6B9D` (Romantic pink)
- **Background**: `#FFF5F7` (Blush white)
- **Secondary**: `#FFE8EE` (Soft pink)
- **Accent**: `#FFD4E0` (Light rose)
- **Foreground**: `#4A4A4A` (Soft charcoal)

### Typography
- **Body**: System default (SF Pro on iOS)
- **Handwritten**: Caveat, Dancing Script
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing & Borders
- **Border Radius**: 14px - 18px (iOS-style rounded)
- **Shadows**: Soft drop shadows with pink tones
- **Safe Areas**: 59px top, 34px bottom

## 🛠️ Technical Stack

- **Framework**: React 18.3.1
- **Routing**: React Router 7.13.0 (Data mode)
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React
- **Build Tool**: Vite 6.3.5

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 📱 PWA Installation

### iOS (iPhone)
1. Open the app in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top right corner
5. The app will now appear on your home screen like a native app

### Features when installed as PWA:
- Runs in fullscreen (no browser UI)
- App icon on home screen
- Splash screen on launch
- Feels like a native iOS app

## 🎯 Key Components

- **Layout**: Main app structure with safe areas and navigation
- **BottomNavigation**: iOS-style tab bar
- **Home**: Relationship counter and info cards
- **ReadWhen**: Letter selection screen
- **Letter**: Full-screen handwritten letter viewer
- **Memories**: Photo grid with modal viewer

## 💝 Customization

### Update Relationship Start Date
Edit `/src/app/screens/Home.tsx`:
```tsx
const startDate = new Date("2024-08-25"); // Change to your date
```

### Add/Edit Letters
Edit `/src/app/screens/Letter.tsx` and modify the `letters` object with your own content.

### Change Photos
Update the image URLs in `/src/app/screens/Memories.tsx` with your own photos.

## 🎨 Design Principles

1. **Emotional**: Warm colors, soft gradients, intimate typography
2. **Minimal**: Clean layouts, generous whitespace, focused content
3. **Familiar**: iOS design patterns, native interactions, predictable navigation
4. **Polished**: Smooth animations, thoughtful details, professional execution

## 📐 Responsive Design

The app is specifically optimized for iPhone 15 Pro but will work on any mobile device. The max-width is constrained to 390px and centered on larger screens.

## 🔒 Privacy

This is a client-side only app. All content is embedded in the code. No data is sent to external servers or stored in databases.

---

Made with ❤️ for someone special
