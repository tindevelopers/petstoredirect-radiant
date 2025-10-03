# Frontend Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/frontend-design-system.svg)](https://badge.fury.io/js/frontend-design-system)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> **Note:** Replace the npm badge URL with your actual package name once published.

A comprehensive design system for building modern frontend websites. This system combines powerful design tokens, reusable React components, and integrates premium UI kits including **Catalyst UI Kit** (by Tailwind Labs) and **TailAdmin Pro** to accelerate your website development.

## 🎯 Features

- **🎨 Design Tokens**: Semantic color system, typography scale, spacing, shadows, and border radius optimized for modern websites
- **🧩 Component Library**: Extensive collection of reusable React components with TypeScript support
- **💎 Premium UI Kits**: Integrated Catalyst UI Kit and TailAdmin Pro components
- **📄 Ready-to-Use Templates**: Pre-built admin panels and dashboards for common use cases
- **🎭 Tailwind CSS v4**: Built with the latest Tailwind CSS for maximum flexibility
- **♿ Accessibility**: WCAG compliant components with proper focus management
- **🌙 Dark Mode**: Built-in dark mode support across all components
- **📱 Responsive**: Mobile-first design approach
- **⚡ Performance**: Optimized for fast loading and excellent Core Web Vitals
- **🔧 TypeScript**: Full TypeScript support with comprehensive type definitions

## 📦 Installation

```bash
npm install frontend-design-system
# or
yarn add frontend-design-system
# or
pnpm add frontend-design-system
```

### Install Peer Dependencies

```bash
npm install react react-dom tailwindcss @headlessui/react framer-motion clsx
```

## 🚀 Quick Start

### 1. Import Styles

Import the CSS file in your main application file (e.g., `_app.tsx` or `layout.tsx`):

```tsx
import 'frontend-design-system/styles/globals.css'
```

### 2. Configure Tailwind CSS

Extend your `tailwind.config.ts` with our design tokens:

```typescript
import { tailwindConfig } from 'frontend-design-system/styles/tailwind.config'

export default {
  ...tailwindConfig,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/frontend-design-system/**/*.{js,ts,jsx,tsx}',
  ],
}
```

### 3. Use Components

```tsx
import { Button, Card, Badge } from 'frontend-design-system/components'

export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <Card>
        <Card.Header>
          <h2>Welcome to Your Website</h2>
          <Badge variant="success">Live</Badge>
        </Card.Header>
        <Card.Content>
          <p>Build beautiful websites with our design system.</p>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
```

## 📄 Templates

Get started quickly with our pre-built templates:

### Admin Panel
Complete admin interface with user management, analytics, and settings.

```bash
cp -r node_modules/frontend-design-system/templates/admin-panel ./src/
```

### E-commerce Dashboard
Sales analytics, order management, and product tracking.

```bash
cp -r node_modules/frontend-design-system/templates/dashboard-ecommerce ./src/
```

### Analytics Dashboard
Website traffic, conversion tracking, and user behavior analytics.

```bash
cp -r node_modules/frontend-design-system/templates/dashboard-analytics ./src/
```

### CRM Dashboard
Sales pipeline, lead management, and customer tracking.

```bash
cp -r node_modules/frontend-design-system/templates/dashboard-crm ./src/
```

### SaaS Dashboard
MRR tracking, churn monitoring, and subscription metrics.

```bash
cp -r node_modules/frontend-design-system/templates/dashboard-saas ./src/
```

### Logistics Dashboard
Shipment tracking, delivery monitoring, and fleet management.

```bash
cp -r node_modules/frontend-design-system/templates/dashboard-logistics ./src/
```

**[View All Templates →](./docs/TEMPLATES.md)**

## 🎨 Available Components

### Core Components (Built-in)
- **Button** - Versatile button with 8 variants and 5 sizes
- **Input** - Form input with validation states
- **Card** - Flexible content container system
- **Badge** - Status indicators and tags

### Catalyst UI Kit Components
Premium components from Tailwind Labs:
- **Alert** - Notification and alert messages
- **Avatar** - User profile images
- **Checkbox** - Form checkboxes
- **Combobox** - Searchable select dropdown
- **Dialog** - Modal dialogs
- **Dropdown** - Dropdown menus
- **Fieldset** - Form field groups
- **Listbox** - Custom select lists
- **Navbar** - Navigation bars
- **Pagination** - Page navigation
- **Radio** - Radio button groups
- **Select** - Select dropdowns
- **Sidebar** - Sidebar navigation
- **Switch** - Toggle switches
- **Table** - Data tables
- **Textarea** - Multi-line text input

### TailAdmin Pro Components
Enterprise-grade components:
- **Charts** - Analytics and data visualization
- **Analytics Dashboard** - Pre-built analytics components
- **E-commerce** - Product cards, invoices, transactions
- **Forms** - Advanced form components
- **Tables** - Data tables with sorting and filtering
- **Modals** - Various modal types
- **Notifications** - Toast and alert notifications
- **Tooltips** - Contextual tooltips
- **Carousels** - Image and content carousels
- **Tabs** - Tabbed interfaces
- **And many more...**

## 🔌 Using Vendor Components

### Catalyst UI Kit

```tsx
import { Button } from 'frontend-design-system/vendors/catalyst/button'
import { Dialog } from 'frontend-design-system/vendors/catalyst/dialog'
import { Input } from 'frontend-design-system/vendors/catalyst/input'

export default function ContactForm() {
  return (
    <Dialog>
      <Dialog.Title>Contact Us</Dialog.Title>
      <Dialog.Body>
        <Input name="email" type="email" placeholder="Your email" />
      </Dialog.Body>
      <Dialog.Actions>
        <Button>Send Message</Button>
      </Dialog.Actions>
    </Dialog>
  )
}
```

### TailAdmin Pro Components

```tsx
import { ChartOne } from 'frontend-design-system/vendors/tailadmin/charts/ChartOne'
import { CardDataStats } from 'frontend-design-system/vendors/tailadmin/cards/CardDataStats'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <CardDataStats title="Total Views" total="3.456K" rate="0.43%" levelUp>
        <svg>...</svg>
      </CardDataStats>
      <ChartOne />
    </div>
  )
}
```

## 📚 Documentation

- **[Templates Guide](./docs/TEMPLATES.md)** - Pre-built templates for common use cases
- **[Component Documentation](./docs/COMPONENTS.md)** - Detailed component API reference
- **[Catalyst Integration Guide](./docs/CATALYST_INTEGRATION.md)** - Using Catalyst UI Kit components
- **[TailAdmin Integration Guide](./docs/TAILADMIN_INTEGRATION.md)** - Using TailAdmin Pro components
- **[Vendor Components](./docs/VENDOR_COMPONENTS.md)** - Complete vendor component reference
- **[Design Tokens](./docs/DESIGN_TOKENS.md)** - Color, typography, spacing reference
- **[Examples](./docs/examples.tsx)** - Code examples and patterns

## 🎨 Design Tokens

### Colors
```typescript
import { colors } from 'frontend-design-system/tokens'

// Semantic colors
colors.primary[500]    // Primary brand color
colors.secondary[500]  // Secondary brand color
colors.success[500]    // Success states
colors.warning[500]    // Warning states
colors.error[500]      // Error states
```

### Typography
```typescript
import { typography } from 'frontend-design-system/tokens'

typography.fontFamily.sans    // Inter font
typography.fontSize.display   // Display text sizes
typography.fontSize.heading   // Heading sizes
typography.fontSize.body      // Body text sizes
```

### Spacing
```typescript
import { spacing } from 'frontend-design-system/tokens'

spacing.component.padding     // Component padding
spacing.layout.section        // Section spacing
spacing.layout.container      // Container spacing
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run build

# Build the library
npm run build

# Run tests
npm test

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

## 📦 Project Structure

```
frontend-design-system/
├── components/          # Core React components
│   └── primitives/      # Base UI components
├── tokens/              # Design tokens
├── styles/              # CSS and Tailwind config
├── vendors/             # Third-party UI kits
│   ├── catalyst-ui-kit/ # Catalyst components
│   └── tailadmin-pro-ts/# TailAdmin components
├── templates/           # Pre-built templates
│   ├── admin-panel/     # Admin panel template
│   ├── dashboard-ecommerce/    # E-commerce dashboard
│   ├── dashboard-analytics/    # Analytics dashboard
│   ├── dashboard-crm/          # CRM dashboard
│   ├── dashboard-saas/         # SaaS dashboard
│   └── dashboard-logistics/    # Logistics dashboard
├── types/               # TypeScript definitions
├── utils/               # Utility functions
└── docs/                # Documentation
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

Please read our [Contributing Guide](./CONTRIBUTING.md) for more details on our code of conduct and development process.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/your-username/frontend-design-system.git
cd frontend-design-system

# Install dependencies
npm install

# Start development environment
npm run dev

# Run tests
npm test
```

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🙏 Acknowledgments

- **Catalyst UI Kit** - Premium components by [Tailwind Labs](https://tailwindcss.com)
- **TailAdmin Pro** - Enterprise dashboard components by [TailAdmin](https://tailadmin.com)
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Unstyled, accessible UI components
- **Framer Motion** - Animation library

## 🔗 Links

- [Documentation](https://your-docs-site.com) _(Coming soon)_
- [GitHub Repository](https://github.com/your-username/frontend-design-system)
- [npm Package](https://www.npmjs.com/package/frontend-design-system) _(Coming soon)_
- [Issue Tracker](https://github.com/your-username/frontend-design-system/issues)
- [Changelog](https://github.com/your-username/frontend-design-system/releases)

## 💬 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-username/frontend-design-system/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/your-username/frontend-design-system/discussions)
- 📖 **Documentation**: Check our [docs folder](./docs) for detailed guides
- ⭐ **Star the repo** if you find it useful!

## 🗺️ Roadmap

- [ ] Complete TypeScript type definitions
- [ ] Add comprehensive test coverage
- [ ] Publish to npm registry
- [ ] Create interactive documentation site
- [ ] Add more dashboard templates
- [ ] Implement theme customization tool
- [ ] Add accessibility testing suite

## 📊 Project Status

This project is currently in **active development**. We're working towards a stable v1.0 release.

- ✅ Core components implemented
- ✅ Design tokens defined
- ✅ Vendor integrations (Catalyst, TailAdmin)
- ✅ Template library started
- 🚧 TypeScript definitions (in progress)
- 🚧 Documentation site (planned)
- 🚧 npm publishing (planned)

---

Built with ❤️ for the modern web.
