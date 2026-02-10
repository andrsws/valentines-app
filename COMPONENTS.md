# Component Architecture 📐

## App Structure

```
src/
├── app/
│   ├── App.tsx                    # Root component with splash screen
│   ├── routes.ts                  # React Router configuration
│   ├── components/
│   │   ├── Layout.tsx             # Main layout wrapper
│   │   ├── BottomNavigation.tsx   # iOS-style tab bar
│   │   ├── SplashScreen.tsx       # Loading animation
│   │   └── figma/
│   │       └── ImageWithFallback.tsx  # Protected component
│   └── screens/
│       ├── Home.tsx               # Relationship counter screen
│       ├── ReadWhen.tsx           # Letter selection screen
│       ├── Letter.tsx             # Letter viewer screen
│       ├── Memories.tsx           # Photo grid screen
│       └── NotFound.tsx           # 404 page
└── styles/
    ├── fonts.css                  # Google Fonts imports
    ├── index.css                  # Global styles + iOS overrides
    ├── tailwind.css               # Tailwind imports
    └── theme.css                  # Color palette & tokens
```

## Component Details

### 🎯 Core Components

#### **App.tsx**
- Manages splash screen state
- Renders SplashScreen or RouterProvider
- Entry point for the application

#### **Layout.tsx**
- Wraps all screen content
- Provides safe area spacing (59px top, 34px bottom)
- Handles page transition animations
- Contains BottomNavigation

#### **BottomNavigation.tsx**
- Fixed bottom tab bar
- 3 navigation items: Home, Read When, Memories
- Glass morphism effect (backdrop blur)
- Active state visual feedback

#### **SplashScreen.tsx**
- 2-second animated intro
- Heart emoji with scale animation
- Fade out transition
- Displays app name "My Love"

---

### 📱 Screen Components

#### **Home.tsx**
**Purpose**: Display relationship counter and info cards

**Features**:
- Live counter updating every minute
- Calculates days and hours from August 25, 2024
- Gradient background animation
- Three info cards:
  - Start date
  - Relationship status
  - Total memories count

**Animations**:
- Staggered entrance (header → counter → cards)
- Scale and fade in effects

---

#### **ReadWhen.tsx**
**Purpose**: Letter selection menu

**Features**:
- 4 letter card buttons
- Each with unique emoji and gradient
- Navigates to Letter screen with type parameter

**Letters**:
1. When you're sad 😢
2. When you miss me 💭
3. When you feel alone 🤗
4. When you can't sleep 🌙

**Animations**:
- Staggered card entrance from left
- Active press feedback (scale down)

---

#### **Letter.tsx**
**Purpose**: Display full-screen handwritten letters

**Features**:
- Paper texture background
- Handwritten fonts (Caveat 20px)
- Back button navigation
- 4 unique letter contents

**Styling**:
- Paper texture using CSS gradients
- Warm lighting effect
- Inset shadow for depth
- Dancing Script for title

**Content**: Each letter type has personalized, heartfelt content

---

#### **Memories.tsx**
**Purpose**: Photo gallery with modal viewer

**Features**:
- 2-column grid layout
- 6 romantic photos from Unsplash
- Click to expand full-screen
- Modal with close button

**Photos**:
1. Romantic sunset
2. Beach holding hands
3. Dinner date
4. Laughing together
5. Picnic in park
6. Stargazing

**Animations**:
- Staggered grid entrance
- Modal fade in/out
- Image scale on open

---

#### **NotFound.tsx**
**Purpose**: Handle invalid routes gracefully

**Features**:
- Romantic 404 message ("Lost in Love")
- Broken heart emoji 💔
- Back to home button
- Matches app aesthetic

---

## 🎨 Design Tokens

### Colors (from theme.css)
```css
--background: #FFF5F7    /* Blush white */
--primary: #FF6B9D       /* Romantic pink */
--secondary: #FFE8EE     /* Soft pink */
--accent: #FFD4E0        /* Light rose */
--foreground: #4A4A4A    /* Soft charcoal */
```

### Typography
- **Body**: System default (SF Pro on iOS)
- **Handwritten**: Caveat (500), Dancing Script (700)
- **Sizes**: 10px - 48px range

### Spacing
- **Cards**: 14px - 18px border radius
- **Safe Area Top**: 59px (Dynamic Island)
- **Safe Area Bottom**: 34px (Home Indicator)
- **Navigation Height**: 20px + 34px padding

### Shadows
```css
/* Card shadow */
box-shadow: 0 4px 20px rgba(255, 107, 157, 0.12);

/* Hover/Active */
box-shadow: 0 8px 30px rgba(255, 107, 157, 0.12);
```

---

## 🔄 Data Flow

### Relationship Counter
```
Home.tsx
  ↓
useState(calculateTimeElapsed())
  ↓
useEffect → setInterval (60s)
  ↓
Updates days & hours display
```

### Letter Navigation
```
ReadWhen.tsx
  ↓
onClick → navigate(`/letter/${type}`)
  ↓
Letter.tsx
  ↓
useParams → type
  ↓
Display letters[type] content
```

### Photo Modal
```
Memories.tsx
  ↓
useState(selectedImage)
  ↓
onClick → setSelectedImage(index)
  ↓
AnimatePresence → Modal
  ↓
onClick → setSelectedImage(null)
```

---

## 🎭 Animation Patterns

### Page Transitions (Layout.tsx)
```tsx
initial={{ opacity: 0, x: 10 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -10 }}
duration: 0.2s
```

### Staggered Entrance
```tsx
delay: index * 0.1
// Creates cascading effect
```

### Button Press
```tsx
active:scale-[0.98]
// iOS-style tactile feedback
```

---

## 🔧 Customization Points

### Easy Changes:
1. **Relationship Date**: `Home.tsx` line 8
2. **Letter Content**: `Letter.tsx` lines 8-80
3. **Photo URLs**: `Memories.tsx` lines 7-48
4. **Colors**: `theme.css` lines 5-20
5. **App Name**: `manifest.json` + `index.html`

### Advanced Changes:
1. Add new letter types in `ReadWhen.tsx` and `Letter.tsx`
2. Modify animation timings in each screen
3. Adjust safe area spacing in `Layout.tsx`
4. Add more memory photos (maintain 2-column grid)

---

## 📦 Dependencies

### Required:
- **react-router**: Navigation
- **motion**: Animations
- **lucide-react**: Icons

### Fonts (CDN):
- **Caveat**: Handwritten letter body
- **Dancing Script**: Letter titles

### No backend required - 100% client-side
