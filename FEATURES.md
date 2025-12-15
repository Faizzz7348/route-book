# Route Book - Features Overview

## 🎨 Theme

### Ocean Deep Blue Dark Theme
The application uses a carefully crafted dark theme inspired by the RasEngSN project:

- **Background**: Deep ocean blues (#0a1929, #132f4c)
- **Accents**: Bright cyan (#4fc3f7, #81d4fa)
- **Text**: Light blues for excellent readability (#e3f2fd, #90caf9)
- **Borders**: Subtle cyan with transparency (rgba(79, 195, 247, 0.2))

### Visual Design
- Smooth gradient backgrounds
- Subtle hover effects
- Professional shadows and borders
- Smooth transitions on all interactive elements
- Consistent spacing and typography

## 🧭 Sidebar Component

### Layout
```
┌─────────────────────────┐
│  🗺️  Route Book         │  ← Header with logo
│  🔍 Search...           │  ← Search input
├─────────────────────────┤
│  🏠  Introduction       │  ← Single items
│  🛣️  Route            ▼ │  ← Expandable sections
│    📍 KL 3             │
│    📍 KL 4             │
│  📅  Calendar         ▼ │
│    📅 Rooster          │
│    📅 Expired          │
├─────────────────────────┤
│  Settings              │
│  ⚙️  Settings          │
├─────────────────────────┤
│  U  User Name          │  ← Footer with user
│     user@example.com   │
└─────────────────────────┘
```

### Collapsed View (Icon Mode)
```
┌───┐
│ 🗺️ │
│ 🔍 │
├───┤
│ 🏠 │ → Introduction (tooltip)
│ 🛣️ │ → Route (tooltip)
│ 📅 │ → Calendar (tooltip)
├───┤
│ ⚙️ │
├───┤
│ U │
└───┘
```

### Features
1. **Collapsible**: Click the toggle button to expand/collapse
2. **Search**: Quick filter navigation items
3. **Nested Menus**: Route and Calendar have submenu items
4. **Smooth Animations**: All transitions are smooth and polished
5. **Tooltips**: Show item names when sidebar is collapsed
6. **Mobile Responsive**: Overlay mode on mobile devices
7. **Theme Integration**: Fully styled with ocean theme colors

## 📄 Pages

### 1. Home (Dashboard)
- Welcome message
- 3 feature cards (Routes, Calendar, Locations)
- Theme color showcase
- Overview of the application

### 2. Routes - KL 3
- Table with route data
- Columns: No, ID, Station, Schedule, Route
- Color-coded schedule badges (Daily = green, Weekly = amber)
- Hover effects on rows
- Ocean-themed table styling

### 3. Routes - KL 4
- Similar layout to KL 3
- Different station data
- Consistent styling and interactions

### 4. Calendar - Rooster
- Grid of upcoming events
- Event cards with icons
- Date and time information
- Color-coded by route type
- Hover effects with border highlight

### 5. Calendar - Expired
- List of past events
- Completed events (gray/muted)
- Cancelled events (red accent)
- Status badges
- Reduced opacity with hover to full

## 🎯 Interactive Elements

### Buttons
- Primary: Bright cyan background
- Ghost: Transparent with hover effect
- All buttons have smooth transitions

### Cards
- Subtle border and shadow
- Hover effect: Enhanced shadow and border color
- Consistent padding and spacing

### Tables
- Gradient header
- Hover effect on rows
- Alternating row colors (subtle)
- Responsive on mobile

### Forms
- Search input with icon
- Focus state: Border color changes to primary
- Ring effect on focus

## 🎨 Color Usage

### Primary (Cyan)
- Sidebar active states
- Links and interactive elements
- Accent elements
- Icons

### Background Layers
1. Base: Deep ocean (#0a1929)
2. Cards: Medium dark (#132f4c)
3. Hover: Medium (#1e4976)

### Text
- Primary: Very light blue (#e3f2fd)
- Secondary/Muted: Medium light blue (#90caf9)
- Accents: Bright cyan (#4fc3f7)

### Status Colors
- Success/Daily: Green (#66bb6a)
- Warning/Weekly: Amber (#ffa726)
- Error/Cancelled: Red (#ef5350)
- Completed: Gray (muted)

## 🔧 Customization Points

### Easy to Customize
1. **Colors**: Edit CSS variables in `app/globals.css`
2. **Menu Items**: Modify array in `components/app-sidebar.tsx`
3. **Pages**: Add new routes in `app/` directory
4. **Components**: All UI components in `components/ui/`

### Extending
- Add more routes
- Add authentication
- Connect to backend API
- Add more calendar features
- Implement real-time updates

## 📱 Responsive Behavior

### Desktop (> 768px)
- Full sidebar with text
- Collapsible to icon mode
- Wide table layouts
- Multi-column grids

### Tablet (768px - 1024px)
- Sidebar stays full width
- Tables scroll horizontally if needed
- 2-column grids

### Mobile (< 768px)
- Sidebar becomes overlay
- Opens from left with backdrop
- Stack columns vertically
- Optimized touch targets

## 🚀 Performance

- Server-side rendering with Next.js
- Optimized images and assets
- Code splitting by route
- Fast page transitions
- Minimal bundle size

## 🎭 Animations

- Sidebar expand/collapse: 300ms ease-in-out
- Hover effects: 200ms ease
- Page transitions: Smooth and instant
- Tooltip delays: Instant when collapsed
- Color transitions: 300ms ease

---

This design provides a professional, modern interface for route management while maintaining the beautiful ocean aesthetic from RasEngSN! 🌊
