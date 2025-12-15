# Route Book - Sidebar Project

Route management system with shadcn/ui sidebar and Ocean Deep Blue theme inspired by [RasEngSN](https://github.com/Faizzz7348/rasengsn).

## 🌊 Features

### 🎨 Ocean Deep Blue Theme
- Beautiful gradient backgrounds inspired by RasEngSN
- Deep ocean color palette
- Smooth animations and transitions
- Professional dark mode design
- Custom sidebar styling

### 🧭 Sidebar Navigation
- Collapsible sidebar with icon mode
- Smooth transitions and animations
- Search functionality
- Nested menu items (Route, Calendar)
- Mobile responsive
- Tooltip support when collapsed

### 📱 Pages
- **Home**: Dashboard with overview cards
- **Routes**: KL 3 and KL 4 route management tables
- **Calendar**: Rooster and Expired events views

## 🚀 Getting Started

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Color Palette

Based on the RasEngSN Ocean Theme:

```css
--ocean-deep: #0a1929      /* Dark background */
--ocean-blue: #132f4c      /* Medium dark */
--ocean-medium: #1e4976    /* Medium */
--ocean-light: #2e5a8e     /* Light */
--ocean-accent: #4fc3f7    /* Bright cyan */
--ocean-bright: #81d4fa    /* Very bright */
--text-primary: #e3f2fd    /* Light text */
--text-secondary: #90caf9  /* Secondary text */
```

## 🗂️ Project Structure

```
route-book/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles with ocean theme
│   ├── routes/
│   │   ├── kl3/page.tsx       # KL 3 route page
│   │   └── kl4/page.tsx       # KL 4 route page
│   └── calendar/
│       ├── rooster/page.tsx   # Rooster calendar
│       └── expired/page.tsx   # Expired events
├── components/
│   ├── app-sidebar.tsx        # Main sidebar component
│   └── ui/                    # shadcn/ui components
│       ├── button.tsx
│       ├── separator.tsx
│       ├── sidebar.tsx
│       └── tooltip.tsx
├── lib/
│   └── utils.ts               # Utility functions
└── package.json
```

## 🛠️ Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Headless components
- **Lucide React** - Icons

## 🎯 Sidebar Features

### Navigation
- Home
- Route (with submenu)
  - KL 3
  - KL 4
- Calendar (with submenu)
  - Rooster
  - Expired
- Settings

### Functionality
- **Collapsible**: Toggle between full and icon mode
- **Search**: Quick search input in header
- **Tooltips**: Show labels when collapsed
- **Mobile Responsive**: Overlay mode on mobile
- **Smooth Animations**: Transitions on expand/collapse

## 📝 Customization

### Changing Colors
Edit the CSS variables in [app/globals.css](app/globals.css):

```css
:root {
  --sidebar-background: 213 48% 18%;
  --sidebar-primary: 198 100% 63%;
  /* ... other variables */
}
```

### Adding Menu Items
Edit [components/app-sidebar.tsx](components/app-sidebar.tsx):

```typescript
const menuItems = [
  {
    title: "New Section",
    icon: YourIcon,
    items: [
      { title: "Item 1", url: "/new/item1", icon: ItemIcon },
    ],
  },
];
```

## 🙏 Credits

- **Theme Inspiration**: [RasEngSN](https://github.com/Faizzz7348/rasengsn) by Faizzz7348
- **Sidebar Component**: [shadcn/ui](https://ui.shadcn.com/docs/components/sidebar)
- **Icons**: [Lucide React](https://lucide.dev)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ using Next.js and shadcn/ui, themed with 🌊 Ocean Deep Blue inspiration from RasEngSN.