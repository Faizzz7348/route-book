# Route Book Project Structure

```
route-book/
│
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page (dashboard)
│   ├── globals.css              # Global styles with ocean theme CSS variables
│   │
│   ├── routes/                  # Routes section
│   │   ├── kl3/
│   │   │   └── page.tsx        # KL 3 route page with table
│   │   └── kl4/
│   │       └── page.tsx        # KL 4 route page with table
│   │
│   └── calendar/                # Calendar section
│       ├── rooster/
│       │   └── page.tsx        # Rooster (upcoming events)
│       └── expired/
│           └── page.tsx        # Expired events
│
├── components/                   # React components
│   ├── app-sidebar.tsx          # Main sidebar component with navigation
│   │                            # - Menu structure
│   │                            # - Search functionality
│   │                            # - User footer
│   │                            # - SidebarLayout wrapper
│   │
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx           # Button component with variants
│       ├── separator.tsx        # Horizontal/vertical separator
│       ├── sidebar.tsx          # Core sidebar primitive components
│       └── tooltip.tsx          # Tooltip component
│
├── lib/                         # Utility libraries
│   └── utils.ts                 # cn() helper for className merging
│
├── public/                      # Static assets (auto-created)
│
├── node_modules/                # Dependencies (auto-created)
│
├── .next/                       # Next.js build output (auto-created)
│
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Dependency lock file (auto-created)
│
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration with theme
├── postcss.config.mjs           # PostCSS configuration
├── components.json              # shadcn/ui configuration
│
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
│
├── README.md                    # Main documentation
├── INSTALL.md                   # Installation instructions
├── FEATURES.md                  # Features overview
├── PROJECT_STRUCTURE.md         # This file
└── install.sh                   # Installation script
```

## File Descriptions

### Configuration Files

#### `package.json`
Main project manifest with:
- Dependencies (React, Next.js, Radix UI, etc.)
- Scripts (dev, build, start, lint)
- Project metadata

#### `tsconfig.json`
TypeScript configuration:
- Path aliases (@/*)
- Compiler options
- Include/exclude patterns

#### `tailwind.config.ts`
Tailwind CSS configuration:
- Ocean theme colors
- CSS variables for theming
- Sidebar-specific colors
- Animation keyframes

#### `next.config.ts`
Next.js configuration:
- Build settings
- Environment variables (if any)

#### `components.json`
shadcn/ui configuration:
- Style preference (new-york)
- Component paths
- Import aliases

### Core Application Files

#### `app/layout.tsx`
Root layout that wraps all pages:
- HTML structure
- Metadata
- Global styles import

#### `app/globals.css`
Global styles with:
- Tailwind directives
- CSS variables for ocean theme
- Base styles
- Custom utility classes

#### `app/page.tsx`
Home/dashboard page:
- Welcome section
- Feature cards
- Theme showcase

### Component Files

#### `components/app-sidebar.tsx`
Main application sidebar:
- Navigation menu structure
- Search input
- Collapsible groups
- User footer
- SidebarLayout wrapper component

#### `components/ui/sidebar.tsx`
Core sidebar primitive components:
- SidebarProvider (context)
- Sidebar (container)
- SidebarHeader, Content, Footer
- SidebarMenu, MenuItem, MenuButton
- SidebarTrigger (toggle button)
- Collapsible functionality

#### `components/ui/button.tsx`
Reusable button component:
- Multiple variants (default, ghost, outline, etc.)
- Size variations
- asChild prop for polymorphism

#### `components/ui/separator.tsx`
Simple separator component:
- Horizontal/vertical orientation
- Styled divider line

#### `components/ui/tooltip.tsx`
Tooltip component:
- TooltipProvider (context)
- Tooltip, TooltipTrigger, TooltipContent
- Used in collapsed sidebar

### Page Files

#### Route Pages
- `app/routes/kl3/page.tsx`: KL 3 route management with table
- `app/routes/kl4/page.tsx`: KL 4 route management with table

#### Calendar Pages
- `app/calendar/rooster/page.tsx`: Upcoming scheduled events
- `app/calendar/expired/page.tsx`: Past and cancelled events

### Utility Files

#### `lib/utils.ts`
Utility functions:
- `cn()`: Merges Tailwind classes with clsx and tailwind-merge

### Documentation Files

#### `README.md`
Main documentation:
- Project overview
- Features
- Getting started
- Credits

#### `INSTALL.md`
Installation guide:
- Step-by-step instructions
- Dependencies list
- Troubleshooting
- Build commands

#### `FEATURES.md`
Detailed features:
- Theme explanation
- Sidebar layout
- Page descriptions
- Color usage
- Responsive behavior

## Color Theme Structure

### CSS Variables (in `app/globals.css`)
```css
:root {
  /* Base Colors */
  --background: 210 60% 10%;           /* Ocean deep */
  --foreground: 210 100% 95%;          /* Light text */
  
  /* Component Colors */
  --card: 213 48% 18%;                 /* Card background */
  --primary: 198 100% 63%;             /* Cyan accent */
  
  /* Sidebar Specific */
  --sidebar-background: 213 48% 18%;
  --sidebar-foreground: 206 96% 76%;
  --sidebar-primary: 198 100% 63%;
  --sidebar-accent: 211 45% 28%;
  --sidebar-border: 198 100% 63% / 0.2;
}
```

### Tailwind Config (in `tailwind.config.ts`)
Maps CSS variables to Tailwind classes:
- `bg-sidebar` → `var(--sidebar-background)`
- `text-primary` → `var(--primary)`
- `border-border` → `var(--border)`

## Component Hierarchy

```
SidebarProvider
└── SidebarLayout
    ├── Sidebar
    │   ├── SidebarHeader
    │   │   ├── Logo
    │   │   └── Search Input
    │   ├── SidebarContent
    │   │   ├── SidebarGroup
    │   │   │   └── SidebarMenu
    │   │   │       └── SidebarMenuItem
    │   │   │           ├── SidebarMenuButton
    │   │   │           └── SidebarMenuSub
    │   │   │               └── SidebarMenuSubButton
    │   │   └── SidebarSeparator
    │   └── SidebarFooter
    │       └── User Info
    └── Main Content
        ├── Header
        │   ├── SidebarTrigger
        │   └── Page Title
        └── Page Content
```

## Data Flow

1. **Navigation**: User clicks menu item
2. **Routing**: Next.js handles navigation
3. **Layout**: SidebarLayout wraps content
4. **Context**: SidebarProvider manages state
5. **Rendering**: Page renders with sidebar

## State Management

- **Sidebar State**: Managed by SidebarProvider context
  - `open`: Boolean for expanded/collapsed
  - `openMobile`: Boolean for mobile overlay
  - `isMobile`: Boolean for responsive behavior
  
- **Menu State**: Local state in app-sidebar
  - `openGroups`: Record of expanded menu groups

## Styling Approach

1. **Tailwind CSS**: Utility-first styling
2. **CSS Variables**: Theme customization
3. **CVA**: Class variance authority for component variants
4. **cn()**: Merge and override classes safely

## Build Output

When you run `npm run build`:
```
.next/
├── cache/              # Build cache
├── server/            # Server-side code
├── static/            # Static assets
└── types/             # Generated types
```

## Development Workflow

1. Edit files in `app/` or `components/`
2. Hot reload shows changes instantly
3. TypeScript checks for errors
4. Tailwind JIT compiles styles
5. Next.js optimizes bundle

---

This structure provides a clean, maintainable codebase following Next.js 15 App Router conventions! 🚀
