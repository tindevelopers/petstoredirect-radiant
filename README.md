# Admin Design System

A comprehensive design system built for admin panels and dashboard applications. This system provides consistent design tokens, reusable components, and templates to accelerate development while maintaining design consistency.

## 🎯 Features

- **Design Tokens**: Semantic color system, typography scale, spacing, shadows, and border radius
- **Component Library**: Reusable React components with TypeScript support
- **Tailwind Integration**: Custom Tailwind configuration with design tokens
- **Admin-Specific**: Purpose-built for admin panels and dashboards
- **Accessibility**: WCAG compliant components with proper focus management
- **Dark Mode**: Built-in dark mode support
- **TypeScript**: Full TypeScript support with proper type definitions

## 📦 Installation

```bash
npm install admin-design-system
# or
yarn add admin-design-system
# or
pnpm add admin-design-system
```

## 🚀 Quick Start

### 1. Import Styles

Import the CSS file in your main application file:

```tsx
// In your _app.tsx or main.tsx
import 'admin-design-system/styles/globals.css';
```

### 2. Configure Tailwind

Extend your Tailwind config with our design system:

```js
// tailwind.config.js
import { designSystemConfig } from 'admin-design-system/styles/tailwind.config';

export default {
  ...designSystemConfig,
  content: [
    ...designSystemConfig.content,
    './src/**/*.{js,ts,jsx,tsx}',
    // Add your app's content paths
  ],
};
```

### 3. Use Components

```tsx
import { Button, Card, Input } from 'admin-design-system/components';

function MyComponent() {
  return (
    <Card>
      <Card.Header title="Welcome" subtitle="Get started with our design system" />
      <Card.Content>
        <Input label="Email" placeholder="Enter your email" />
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </Card.Content>
    </Card>
  );
}
```

## 🎨 Design Tokens

Our design system is built on a foundation of design tokens that ensure consistency across all components and applications.

### Colors

```tsx
import { colors, semanticColors } from 'admin-design-system/tokens';

// Access color tokens
const primaryColor = colors.primary[500]; // #3b82f6
const successColor = semanticColors.success; // #22c55e
```

### Typography

```tsx
import { typography, textStyles } from 'admin-design-system/tokens';

// Font families
const sansFont = typography.fontFamily.sans;

// Text styles
const headingStyle = textStyles.heading.h1;
```

### Spacing

```tsx
import { spacing, semanticSpacing } from 'admin-design-system/tokens';

// Base spacing
const mediumSpacing = spacing[4]; // 1rem

// Semantic spacing
const componentPadding = semanticSpacing.component.md; // 1rem
```

## 🧩 Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'admin-design-system/components';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With states
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// With icons
<Button leftIcon={<Icon />}>With Icon</Button>
```

### Input

A comprehensive input component with labels, validation, and icons.

```tsx
import { Input } from 'admin-design-system/components';

// Basic usage
<Input placeholder="Enter text" />

// With label and helper text
<Input 
  label="Email Address"
  placeholder="john@example.com"
  helperText="We'll never share your email"
/>

// With validation
<Input 
  label="Password"
  type="password"
  variant="error"
  errorMessage="Password is required"
/>

// With icons
<Input 
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>
```

### Card

A flexible card component for organizing content.

```tsx
import { Card } from 'admin-design-system/components';

// Basic usage
<Card>
  <Card.Header title="Card Title" subtitle="Card description" />
  <Card.Content>
    <p>Card content goes here</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// With variants
<Card variant="elevated">Elevated card</Card>
<Card variant="outlined">Outlined card</Card>

// Interactive card
<Card hover onClick={() => console.log('clicked')}>
  Clickable card
</Card>
```

### Badge

A small status indicator component.

```tsx
import { Badge } from 'admin-design-system/components';

// Basic usage
<Badge>New</Badge>

// With variants
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>

// With dot indicator
<Badge variant="success" dot>Online</Badge>

// Removable badge
<Badge removable onRemove={() => console.log('removed')}>
  Removable
</Badge>
```

## 🏗️ Admin Layout Components

### Sidebar Layout

```tsx
import { AdminLayout, Sidebar, TopBar, Content } from 'admin-design-system/layout';

function AdminApp() {
  return (
    <AdminLayout>
      <Sidebar>
        {/* Navigation items */}
      </Sidebar>
      <div className="flex-1">
        <TopBar>
          {/* Top navigation */}
        </TopBar>
        <Content>
          {/* Main content */}
        </Content>
      </div>
    </AdminLayout>
  );
}
```

## 🎨 Customization

### Custom Colors

You can extend or override the color palette:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
    },
  },
};
```

### Custom Components

Create custom components using our design tokens:

```tsx
import { cn } from 'admin-design-system/utils';
import { colors } from 'admin-design-system/tokens';

function CustomComponent({ className, ...props }) {
  return (
    <div
      className={cn(
        'p-4 rounded-lg border',
        'bg-background-primary border-border-primary',
        'text-text-primary',
        className
      )}
      {...props}
    />
  );
}
```

## 🌙 Dark Mode

Dark mode is supported out of the box. Add the `dark` class to your root element:

```tsx
// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
```

## ♿ Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## 📱 Responsive Design

Components are responsive by default and work across all device sizes:

```tsx
// Responsive grid
<div className="grid-admin-cards">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</div>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.