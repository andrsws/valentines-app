# Customization Template 🎨

Use this as a checklist to personalize the app for your special someone!

---

## ✅ Step 1: Update the Relationship Date

**File**: `/src/app/screens/Home.tsx`
**Line**: 8

```tsx
// Change this to YOUR relationship start date
const startDate = new Date("2024-08-25");

// Examples:
// const startDate = new Date("2023-12-14");
// const startDate = new Date("2025-02-14");
```

---

## ✅ Step 2: Personalize the Love Letters

**File**: `/src/app/screens/Letter.tsx`
**Lines**: 8-80

Replace each letter's content with your own heartfelt words:

### Template for each letter:

```tsx
sad: {
  title: "When You're Sad",
  content: `My Dearest [Name],

[Your personal message here...]

Write from your heart. Share:
- Why they're special to you
- A memory that makes you smile
- Something you love about them
- Words of comfort and support

Love,
[Your Name] ❤️`,
},
```

**Tips**:
- Use their actual name or nickname
- Reference real memories you share
- Include inside jokes
- Be genuine and vulnerable
- Use `\n\n` for paragraph breaks

---

## ✅ Step 3: Add Your Real Photos

**File**: `/src/app/screens/Memories.tsx`
**Lines**: 7-48

### Option A: Use Your Own Hosted Images
```tsx
{
  id: 1,
  url: "https://your-image-host.com/photo1.jpg",
  caption: "Your actual memory caption",
},
```

### Option B: Keep Using Unsplash
Search for better matches to your relationship:
- Visit [unsplash.com](https://unsplash.com)
- Search for relevant terms
- Copy the photo URL
- Replace in the memories array

### Recommended Photo Types:
1. A sunset/romantic moment
2. Holding hands or close-up
3. Date night or dinner
4. Laughing together
5. Outdoor activity/adventure
6. Intimate/candid moment

---

## ✅ Step 4: Update App Name & Identity

### 4a. App Title
**File**: `/index.html`
**Line**: 5

```html
<title>My Love ❤️</title>
<!-- Change to something personal like: -->
<title>Emma & James ❤️</title>
<title>Forever Yours 💕</title>
```

### 4b. PWA Manifest
**File**: `/public/manifest.json`
**Lines**: 2-3

```json
{
  "name": "My Love ❤️",
  "short_name": "My Love",
  // Change to:
  "name": "Emma & James ❤️",
  "short_name": "E&J",
}
```

### 4c. Home Screen Header
**File**: `/src/app/screens/Home.tsx`
**Lines**: 40-43

```tsx
<h1 className="text-4xl mb-2" style={{ fontWeight: 600 }}>
  My Love ❤️
</h1>
<p className="text-muted-foreground">Our Journey Together</p>
```

Change to something like:
- "Sarah's Love" / "For My Darling"
- "James & Emma" / "Our Story"
- "Forever Us" / "You & Me"

---

## ✅ Step 5: Customize Info Cards

**File**: `/src/app/screens/Home.tsx`
**Lines**: 91-134

Update the three info cards with your details:

```tsx
// Card 1: Start Date
<p style={{ fontWeight: 600 }}>August 25, 2024</p>
// Change to your actual date (written out)

// Card 2: Status
<p style={{ fontWeight: 600 }}>Deeply in love</p>
// Change to anything romantic:
// "Forever yours"
// "Best friends & lovers"
// "Growing stronger every day"

// Card 3: Memories Count
<p style={{ fontWeight: 600 }}>6 special moments</p>
// Update the number if you change photo count
```

---

## ✅ Step 6: Add More Letter Types (Optional)

Want more than 4 letters? Here's how:

### 6a. Add to ReadWhen.tsx
```tsx
{
  type: "birthday",  // New type
  emoji: "🎂",
  title: "Read on your birthday",
  gradient: "from-[#FFE8EE] to-[#FFD4E0]",
  delay: 0.4,  // Increment delay
},
```

### 6b. Add to Letter.tsx
```tsx
birthday: {
  title: "Happy Birthday My Love",
  content: `[Your birthday message...]`,
},
```

**Ideas for more letters**:
- 🎂 Read on your birthday
- 🎄 Read on holidays
- 💪 Read when you need motivation
- 😊 Read when you need a smile
- 🌟 Read before something important

---

## ✅ Step 7: Update Page Descriptions

### ReadWhen Screen
**File**: `/src/app/screens/ReadWhen.tsx`
**Line**: 69

```tsx
<p className="text-muted-foreground">
  Words from my heart, whenever you need them
</p>
```

### Memories Screen
**File**: `/src/app/screens/Memories.tsx`
**Line**: 80

```tsx
<p className="text-muted-foreground">
  Every moment with you is precious
</p>
```

Change these to match your style!

---

## ✅ Step 8: Add More Photos (Optional)

Want more than 6 photos?

**File**: `/src/app/screens/Memories.tsx`

Just add more objects to the `memories` array:
```tsx
{
  id: 7,
  url: "YOUR_IMAGE_URL",
  caption: "Another beautiful memory",
},
```

The grid automatically adapts to any number of photos!

---

## 🎨 Advanced Customization

### Change Color Scheme

**File**: `/src/styles/theme.css`
**Lines**: 5-20

Current romantic pink theme:
```css
--background: #FFF5F7;    /* Soft pink background */
--primary: #FF6B9D;       /* Pink accent */
--secondary: #FFE8EE;     /* Lighter pink */
```

**Alternative color schemes**:

**Purple Passion**:
```css
--background: #F5F3FF;
--primary: #9333EA;
--secondary: #E9D5FF;
```

**Ocean Love**:
```css
--background: #F0F9FF;
--primary: #0EA5E9;
--secondary: #E0F2FE;
```

**Sunset Romance**:
```css
--background: #FFF7ED;
--primary: #F97316;
--secondary: #FFEDD5;
```

---

## ✅ Checklist Before Deploying

- [ ] Updated relationship date
- [ ] Personalized all 4 letters
- [ ] Added your photos (or kept nice stock photos)
- [ ] Changed app name/title
- [ ] Updated info cards with your details
- [ ] Customized page descriptions
- [ ] Tested on your phone
- [ ] Checked all links work
- [ ] Verified photos load correctly
- [ ] Read through all letters for typos

---

## 💡 Pro Tips

1. **Write letters on paper first** - It helps with authenticity
2. **Keep it personal** - Inside jokes, real memories, specific details
3. **Vary the tone** - Some letters comforting, some playful
4. **Test on mobile** - Make sure it looks good before sharing
5. **Use high-quality photos** - At least 1080px wide
6. **Proofread everything** - Twice!
7. **Add meaningful dates** - First date, first kiss, first "I love you"

---

## ⚠️ Important Notes

### Don't Change:
- File structure
- Component names (unless you know React)
- CSS class names
- The Layout or Navigation components

### Safe to Change:
- All text content
- Colors in theme.css
- Image URLs
- Dates and numbers
- Letter content
- Captions

---

## 🚀 After Customization

1. Test locally: `pnpm dev`
2. Check everything works
3. Build: `pnpm build`
4. Deploy (see DEPLOYMENT.md)
5. Test on your actual iPhone
6. Share the link with your special someone ❤️

---

**Good luck with your romantic gesture! 💝**

Remember: The most important customization is the love and effort you put into the words you write.
