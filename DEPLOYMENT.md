# Deployment Guide 🚀

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite and deploy

**Custom Domain**: Go to Project Settings → Domains to add your own domain

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `pnpm build`
6. Publish directory: `dist`

### Option 3: GitHub Pages
1. Install gh-pages: `pnpm add -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "pnpm build && gh-pages -d dist"
   ```
3. Run: `pnpm deploy`
4. Enable GitHub Pages in repository settings

## PWA Configuration

### iOS Installation Instructions
Share these with your special someone:

1. **Open in Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (square with arrow pointing up)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"** in the top right
5. The app icon will appear on your home screen
6. Tap the icon to open - it will run fullscreen like a native app!

### Testing PWA locally
```bash
# Build the app
pnpm build

# Serve the production build
pnpm preview
```

Then open on your iPhone and follow the installation steps above.

## Environment Variables
This app doesn't require any environment variables as all content is embedded in the code.

## Customization Before Deploy

### 1. Update Relationship Date
`/src/app/screens/Home.tsx` - Line 8:
```tsx
const startDate = new Date("2024-08-25"); // Your date here
```

### 2. Personalize Letters
`/src/app/screens/Letter.tsx` - Lines 8-80:
Edit the `letters` object with your own messages

### 3. Add Your Photos
`/src/app/screens/Memories.tsx` - Lines 7-48:
Replace the Unsplash URLs with your own photos

### 4. Update App Name
- `/public/manifest.json` - Change "name" and "short_name"
- `/index.html` - Change `<title>`

## Performance Optimization

The app is already optimized with:
- ✅ Code splitting via React Router
- ✅ Lazy loading of images
- ✅ Minimal bundle size
- ✅ Motion animations optimized for 60fps
- ✅ PWA caching strategies

## Security Notes

⚠️ **Important**: This is a client-side only app. All content is public in the JavaScript bundle.

**Do not include**:
- Sensitive personal information
- Private photos you don't want public
- API keys or secrets

**Recommendation**: Deploy to a private URL or password-protect via your hosting provider.

## Domain Suggestions

Romantic domain ideas:
- `mylove.app`
- `our-story.love`
- `forever-yours.app`
- `[yournames].love`

## Support

If you encounter issues:
1. Check browser console for errors
2. Ensure you're using the latest Safari on iOS
3. Clear browser cache and try again
4. Make sure all dependencies are installed: `pnpm install`

---

Good luck with your romantic gift! 💝
