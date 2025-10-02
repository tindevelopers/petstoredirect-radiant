# Vendor Components Integration Guide

This guide provides a comprehensive overview of all available vendor components from **Catalyst UI Kit** and **TailAdmin Pro**, and how to integrate them into your projects.

## Table of Contents

- [Overview](#overview)
- [Catalyst UI Kit Components](#catalyst-ui-kit-components)
- [TailAdmin Pro Components](#tailadmin-pro-components)
- [Installation & Setup](#installation--setup)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Overview

The Frontend Design System includes two premium UI component libraries:

1. **Catalyst UI Kit** - Modern, accessible components built by Tailwind Labs
2. **TailAdmin Pro** - Enterprise-grade dashboard and application components

Both libraries are fully integrated and ready to use in your projects.

## Catalyst UI Kit Components

### Installation

Catalyst components require the following dependencies:

```bash
npm install @headlessui/react motion clsx tailwindcss@latest
```

### Available Components

#### Alert
Notification and alert messages with multiple variants.

**Import:**
```tsx
import { Alert } from 'frontend-design-system/vendors/catalyst/alert'
```

**Features:**
- Multiple severity levels (info, success, warning, error)
- Dismissible alerts
- Icon support
- Accessible

---

#### Avatar
User profile images with fallback support.

**Import:**
```tsx
import { Avatar } from 'frontend-design-system/vendors/catalyst/avatar'
```

**Features:**
- Image with fallback
- Initials display
- Multiple sizes
- Status indicators

---

#### Badge
Status indicators and labels.

**Import:**
```tsx
import { Badge } from 'frontend-design-system/vendors/catalyst/badge'
```

**Features:**
- Color variants
- Sizes
- Dot indicators
- Removable badges

---

#### Button
Versatile button component with multiple variants.

**Import:**
```tsx
import { Button } from 'frontend-design-system/vendors/catalyst/button'
```

**Features:**
- Multiple variants (solid, outline, plain)
- Sizes
- Loading states
- Icon support
- Fully accessible

---

#### Checkbox
Accessible checkbox inputs.

**Import:**
```tsx
import { Checkbox, CheckboxField, CheckboxGroup } from 'frontend-design-system/vendors/catalyst/checkbox'
```

**Features:**
- Indeterminate state
- Disabled state
- Form integration
- Accessible

---

#### Combobox
Searchable select dropdown with autocomplete.

**Import:**
```tsx
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from 'frontend-design-system/vendors/catalyst/combobox'
```

**Features:**
- Search/filter functionality
- Keyboard navigation
- Custom rendering
- Accessible

---

#### Description List
Key-value pair displays for structured data.

**Import:**
```tsx
import { DescriptionList, DescriptionTerm, DescriptionDetails } from 'frontend-design-system/vendors/catalyst/description-list'
```

**Features:**
- Horizontal and vertical layouts
- Responsive
- Semantic HTML

---

#### Dialog (Modal)
Modal dialogs and overlays.

**Import:**
```tsx
import { Dialog, DialogTitle, DialogDescription, DialogPanel, DialogBackdrop } from 'frontend-design-system/vendors/catalyst/dialog'
```

**Features:**
- Focus trap
- Backdrop click to close
- Keyboard shortcuts (ESC)
- Accessible
- Animated transitions

---

#### Divider
Visual separators for content sections.

**Import:**
```tsx
import { Divider } from 'frontend-design-system/vendors/catalyst/divider'
```

**Features:**
- Horizontal and vertical
- With text labels
- Customizable styling

---

#### Dropdown
Dropdown menus for actions and navigation.

**Import:**
```tsx
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from 'frontend-design-system/vendors/catalyst/dropdown'
```

**Features:**
- Keyboard navigation
- Icons and descriptions
- Dividers
- Accessible

---

#### Fieldset
Form field groups with labels and descriptions.

**Import:**
```tsx
import { Fieldset, Legend, Field, Label, Description } from 'frontend-design-system/vendors/catalyst/fieldset'
```

**Features:**
- Semantic form structure
- Error states
- Help text
- Accessible

---

#### Heading
Semantic heading components.

**Import:**
```tsx
import { Heading, Subheading } from 'frontend-design-system/vendors/catalyst/heading'
```

**Features:**
- Semantic levels (h1-h6)
- Consistent styling
- Responsive

---

#### Input
Text input fields with validation.

**Import:**
```tsx
import { Input } from 'frontend-design-system/vendors/catalyst/input'
```

**Features:**
- Multiple types (text, email, password, etc.)
- Validation states
- Icon support
- Accessible

---

#### Link
Styled link components.

**Import:**
```tsx
import { Link } from 'frontend-design-system/vendors/catalyst/link'
```

**Features:**
- Internal and external links
- Variants
- Icon support

---

#### Listbox
Custom select lists with rich content.

**Import:**
```tsx
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from 'frontend-design-system/vendors/catalyst/listbox'
```

**Features:**
- Custom rendering
- Keyboard navigation
- Multi-select
- Accessible

---

#### Navbar
Navigation bars for website headers.

**Import:**
```tsx
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from 'frontend-design-system/vendors/catalyst/navbar'
```

**Features:**
- Responsive
- Mobile menu
- Dropdown support
- Sticky positioning

---

#### Pagination
Page navigation for lists and tables.

**Import:**
```tsx
import { Pagination, PaginationPrevious, PaginationNext, PaginationList, PaginationPage, PaginationGap } from 'frontend-design-system/vendors/catalyst/pagination'
```

**Features:**
- Previous/Next buttons
- Page numbers
- Gap indicators
- Accessible

---

#### Radio
Radio button groups.

**Import:**
```tsx
import { Radio, RadioField, RadioGroup } from 'frontend-design-system/vendors/catalyst/radio'
```

**Features:**
- Single selection
- Disabled state
- Form integration
- Accessible

---

#### Select
Select dropdowns for forms.

**Import:**
```tsx
import { Select } from 'frontend-design-system/vendors/catalyst/select'
```

**Features:**
- Native select styling
- Validation states
- Accessible

---

#### Sidebar
Sidebar navigation with layouts.

**Import:**
```tsx
import { Sidebar, SidebarHeader, SidebarBody, SidebarFooter, SidebarItem, SidebarSection } from 'frontend-design-system/vendors/catalyst/sidebar'
```

**Features:**
- Collapsible
- Nested navigation
- Icons
- Mobile responsive

---

#### Switch
Toggle switches for boolean settings.

**Import:**
```tsx
import { Switch, SwitchField, SwitchGroup } from 'frontend-design-system/vendors/catalyst/switch'
```

**Features:**
- On/off states
- Disabled state
- Labels
- Accessible

---

#### Table
Data tables with sorting and selection.

**Import:**
```tsx
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from 'frontend-design-system/vendors/catalyst/table'
```

**Features:**
- Responsive
- Sortable columns
- Row selection
- Striped rows
- Accessible

---

#### Text
Typography components for body text.

**Import:**
```tsx
import { Text, TextLink, Strong, Code } from 'frontend-design-system/vendors/catalyst/text'
```

**Features:**
- Semantic HTML
- Consistent styling
- Responsive

---

#### Textarea
Multi-line text input fields.

**Import:**
```tsx
import { Textarea } from 'frontend-design-system/vendors/catalyst/textarea'
```

**Features:**
- Auto-resize
- Validation states
- Character count
- Accessible

---

## TailAdmin Pro Components

### Installation

TailAdmin components are built with Next.js and Tailwind CSS. No additional dependencies required beyond the base design system.

### Available Component Categories

#### UI Components

##### Alert
Various alert styles for notifications.

**Import:**
```tsx
import { AlertSuccess, AlertWarning, AlertError, AlertInfo } from 'frontend-design-system/vendors/tailadmin/ui/alert'
```

---

##### Avatar
User avatars with status indicators.

**Import:**
```tsx
import { Avatar, AvatarGroup } from 'frontend-design-system/vendors/tailadmin/ui/avatar'
```

---

##### Badge
Status badges and labels.

**Import:**
```tsx
import { Badge } from 'frontend-design-system/vendors/tailadmin/ui/badge'
```

---

##### Breadcrumb
Navigation breadcrumbs.

**Import:**
```tsx
import { Breadcrumb } from 'frontend-design-system/vendors/tailadmin/ui/breadcrumb'
```

---

##### Button
Multiple button variants and styles.

**Import:**
```tsx
import { Button, ButtonGroup } from 'frontend-design-system/vendors/tailadmin/ui/button'
```

---

##### Card
Content cards with various layouts.

**Import:**
```tsx
import { Card, CardHeader, CardBody, CardFooter } from 'frontend-design-system/vendors/tailadmin/ui/card'
```

---

##### Carousel
Image and content carousels.

**Import:**
```tsx
import { Carousel } from 'frontend-design-system/vendors/tailadmin/ui/carousel'
```

---

##### Dropdown
Dropdown menus and actions.

**Import:**
```tsx
import { Dropdown, DropdownItem } from 'frontend-design-system/vendors/tailadmin/ui/dropdown'
```

---

##### Modal
Modal dialogs for various purposes.

**Import:**
```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'frontend-design-system/vendors/tailadmin/ui/modal'
```

---

##### Notification
Toast notifications and alerts.

**Import:**
```tsx
import { Notification, showNotification } from 'frontend-design-system/vendors/tailadmin/ui/notification'
```

---

##### Pagination
Page navigation components.

**Import:**
```tsx
import { Pagination } from 'frontend-design-system/vendors/tailadmin/ui/pagination'
```

---

##### Popover
Contextual popovers.

**Import:**
```tsx
import { Popover } from 'frontend-design-system/vendors/tailadmin/ui/popover'
```

---

##### Table
Advanced data tables.

**Import:**
```tsx
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'frontend-design-system/vendors/tailadmin/ui/table'
```

---

##### Tabs
Tabbed interfaces.

**Import:**
```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'frontend-design-system/vendors/tailadmin/ui/tabs'
```

---

##### Tooltip
Contextual tooltips.

**Import:**
```tsx
import { Tooltip } from 'frontend-design-system/vendors/tailadmin/ui/tooltip'
```

---

#### Feature Components

##### Charts
Analytics and data visualization components.

**Import:**
```tsx
import { ChartOne, ChartTwo, ChartThree } from 'frontend-design-system/vendors/tailadmin/charts'
```

**Available Charts:**
- Line charts
- Bar charts
- Area charts
- Pie charts
- Donut charts

---

##### Analytics
Dashboard analytics components.

**Import:**
```tsx
import { AnalyticsCard, VisitorChart, RevenueChart } from 'frontend-design-system/vendors/tailadmin/analytics'
```

---

##### E-commerce
Product and transaction components.

**Import:**
```tsx
import { ProductCard, InvoiceTable, TransactionList } from 'frontend-design-system/vendors/tailadmin/ecommerce'
```

---

##### Forms
Advanced form components.

**Import:**
```tsx
import { FormInput, FormSelect, FormCheckbox, FormRadio } from 'frontend-design-system/vendors/tailadmin/form'
```

---

##### Calendar
Calendar and date picker components.

**Import:**
```tsx
import { Calendar, DatePicker } from 'frontend-design-system/vendors/tailadmin/calendar'
```

---

## Installation & Setup

### 1. Install the Design System

```bash
npm install frontend-design-system
```

### 2. Install Peer Dependencies

```bash
npm install react react-dom tailwindcss @headlessui/react framer-motion clsx motion
```

### 3. Import Styles

In your main app file:

```tsx
import 'frontend-design-system/styles/globals.css'
```

### 4. Configure Tailwind

In your `tailwind.config.ts`:

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

## Usage Examples

### Example 1: Contact Form with Catalyst Components

```tsx
import { Dialog, DialogPanel, DialogTitle } from 'frontend-design-system/vendors/catalyst/dialog'
import { Field, Label } from 'frontend-design-system/vendors/catalyst/fieldset'
import { Input } from 'frontend-design-system/vendors/catalyst/input'
import { Textarea } from 'frontend-design-system/vendors/catalyst/textarea'
import { Button } from 'frontend-design-system/vendors/catalyst/button'

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Contact Us</Button>
      
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogPanel>
          <DialogTitle>Get in Touch</DialogTitle>
          
          <form className="space-y-4">
            <Field>
              <Label>Name</Label>
              <Input name="name" placeholder="Your name" />
            </Field>
            
            <Field>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="your@email.com" />
            </Field>
            
            <Field>
              <Label>Message</Label>
              <Textarea name="message" placeholder="Your message..." />
            </Field>
            
            <Button type="submit">Send Message</Button>
          </form>
        </DialogPanel>
      </Dialog>
    </>
  )
}
```

### Example 2: Dashboard with TailAdmin Components

```tsx
import { Card } from 'frontend-design-system/vendors/tailadmin/ui/card'
import { ChartOne } from 'frontend-design-system/vendors/tailadmin/charts/ChartOne'
import { Table } from 'frontend-design-system/vendors/tailadmin/ui/table'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <Card.Header>
          <h3>Total Revenue</h3>
        </Card.Header>
        <Card.Body>
          <ChartOne />
        </Card.Body>
      </Card>
      
      <Card className="col-span-full">
        <Card.Header>
          <h3>Recent Transactions</h3>
        </Card.Header>
        <Card.Body>
          <Table>
            {/* Table content */}
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}
```

### Example 3: Navigation with Catalyst Navbar

```tsx
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from 'frontend-design-system/vendors/catalyst/navbar'
import { Avatar } from 'frontend-design-system/vendors/catalyst/avatar'
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from 'frontend-design-system/vendors/catalyst/dropdown'

export default function SiteHeader() {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/about">About</NavbarItem>
        <NavbarItem href="/services">Services</NavbarItem>
        <NavbarItem href="/contact">Contact</NavbarItem>
      </NavbarSection>
      
      <NavbarSpacer />
      
      <NavbarSection>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src="/user.jpg" />
          </DropdownButton>
          <DropdownMenu>
            <DropdownItem href="/profile">Profile</DropdownItem>
            <DropdownItem href="/settings">Settings</DropdownItem>
            <DropdownItem href="/logout">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  )
}
```

## Best Practices

### 1. Component Selection

- **Use Catalyst** for modern, accessible UI components with clean design
- **Use TailAdmin** for complex dashboard and data-heavy interfaces
- **Mix and match** components from both libraries as needed

### 2. Styling

- Leverage Tailwind CSS classes for customization
- Use design tokens from the design system for consistency
- Override styles using className prop when needed

### 3. Accessibility

- Both libraries provide accessible components out of the box
- Always provide proper labels and ARIA attributes
- Test with keyboard navigation and screen readers

### 4. Performance

- Import only the components you need
- Use code splitting for large applications
- Lazy load heavy components like charts

### 5. TypeScript

- Both libraries have full TypeScript support
- Use provided types for better development experience
- Extend types when creating custom components

### 6. Responsive Design

- All components are mobile-first responsive
- Test on multiple screen sizes
- Use responsive Tailwind classes for layout

---

## Additional Resources

- [Catalyst UI Kit Documentation](https://catalyst.tailwindui.com/docs)
- [TailAdmin Pro Documentation](https://tailadmin.com/docs)
- [Component Examples](./examples.tsx)
- [Design Tokens Reference](./DESIGN_TOKENS.md)

---

**Need help?** Check out the [GitHub Issues](https://github.com/your-username/frontend-design-system/issues) or join our [Discord community](https://discord.gg/your-invite).
