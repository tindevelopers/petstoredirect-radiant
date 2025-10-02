# Catalyst UI Kit Integration Guide

Complete guide for integrating and using Catalyst UI Kit components in your projects.

## Overview

Catalyst is a modern application UI kit built with Tailwind CSS and React, designed and built by the Tailwind CSS team. It provides a comprehensive set of accessible, beautifully designed components.

## Installation

### 1. Install Dependencies

```bash
npm install @headlessui/react motion clsx tailwindcss@latest
```

### 2. Import Styles

```tsx
import 'frontend-design-system/styles/globals.css'
```

### 3. Configure Tailwind CSS

Ensure your `tailwind.config.ts` includes the Catalyst components:

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

## Component Reference

### Alert

Display important messages and notifications.

**Import:**
```tsx
import { Alert } from 'frontend-design-system/vendors/catalyst/alert'
```

**Example:**
```tsx
<Alert>
  <AlertIcon />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
```

---

### Avatar

Display user profile images with fallback support.

**Import:**
```tsx
import { Avatar } from 'frontend-design-system/vendors/catalyst/avatar'
```

**Example:**
```tsx
<Avatar src="/user.jpg" alt="John Doe" />
<Avatar initials="JD" />
<Avatar>
  <UserIcon />
</Avatar>
```

**Props:**
- `src` - Image URL
- `alt` - Alt text
- `initials` - Fallback initials
- `square` - Square shape instead of circle

---

### Badge

Display status indicators and labels.

**Import:**
```tsx
import { Badge } from 'frontend-design-system/vendors/catalyst/badge'
```

**Example:**
```tsx
<Badge>New</Badge>
<Badge color="green">Active</Badge>
<Badge color="red">Urgent</Badge>
```

**Props:**
- `color` - Badge color variant
- `size` - Size (sm, md, lg)

---

### Button

Versatile button component with multiple variants.

**Import:**
```tsx
import { Button } from 'frontend-design-system/vendors/catalyst/button'
```

**Example:**
```tsx
<Button>Click me</Button>
<Button color="blue">Primary</Button>
<Button outline>Outline</Button>
<Button plain>Plain</Button>
<Button disabled>Disabled</Button>
```

**Props:**
- `color` - Button color
- `outline` - Outline variant
- `plain` - Plain variant
- `disabled` - Disabled state
- `href` - Link button

---

### Checkbox

Accessible checkbox inputs.

**Import:**
```tsx
import { Checkbox, CheckboxField, CheckboxGroup } from 'frontend-design-system/vendors/catalyst/checkbox'
```

**Example:**
```tsx
<CheckboxField>
  <Checkbox name="terms" />
  <Label>I agree to the terms and conditions</Label>
</CheckboxField>

<CheckboxGroup>
  <Label>Select options</Label>
  <CheckboxField>
    <Checkbox name="option1" />
    <Label>Option 1</Label>
  </CheckboxField>
  <CheckboxField>
    <Checkbox name="option2" />
    <Label>Option 2</Label>
  </CheckboxField>
</CheckboxGroup>
```

---

### Combobox

Searchable select dropdown with autocomplete.

**Import:**
```tsx
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from 'frontend-design-system/vendors/catalyst/combobox'
```

**Example:**
```tsx
const [selected, setSelected] = useState(null)
const [query, setQuery] = useState('')

<Combobox value={selected} onChange={setSelected}>
  <ComboboxInput
    onChange={(event) => setQuery(event.target.value)}
    displayValue={(item) => item?.name}
  />
  <ComboboxOptions>
    {filteredItems.map((item) => (
      <ComboboxOption key={item.id} value={item}>
        {item.name}
      </ComboboxOption>
    ))}
  </ComboboxOptions>
</Combobox>
```

---

### Dialog (Modal)

Modal dialogs and overlays.

**Import:**
```tsx
import { Dialog, DialogPanel, DialogTitle, DialogDescription, DialogActions } from 'frontend-design-system/vendors/catalyst/dialog'
```

**Example:**
```tsx
const [isOpen, setIsOpen] = useState(false)

<Dialog open={isOpen} onClose={setIsOpen}>
  <DialogPanel>
    <DialogTitle>Confirm Action</DialogTitle>
    <DialogDescription>
      Are you sure you want to proceed?
    </DialogDescription>
    <DialogActions>
      <Button plain onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleConfirm}>
        Confirm
      </Button>
    </DialogActions>
  </DialogPanel>
</Dialog>
```

**Features:**
- Focus trap
- Backdrop click to close
- ESC key to close
- Animated transitions
- Accessible

---

### Dropdown

Dropdown menus for actions and navigation.

**Import:**
```tsx
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, DropdownDivider } from 'frontend-design-system/vendors/catalyst/dropdown'
```

**Example:**
```tsx
<Dropdown>
  <DropdownButton>Options</DropdownButton>
  <DropdownMenu>
    <DropdownItem href="/edit">Edit</DropdownItem>
    <DropdownItem href="/duplicate">Duplicate</DropdownItem>
    <DropdownDivider />
    <DropdownItem href="/delete">Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

---

### Fieldset

Form field groups with labels and descriptions.

**Import:**
```tsx
import { Fieldset, Legend, Field, Label, Description, ErrorMessage } from 'frontend-design-system/vendors/catalyst/fieldset'
```

**Example:**
```tsx
<Fieldset>
  <Legend>Personal Information</Legend>
  
  <Field>
    <Label>Name</Label>
    <Description>Your full name</Description>
    <Input name="name" />
    <ErrorMessage>Name is required</ErrorMessage>
  </Field>
  
  <Field>
    <Label>Email</Label>
    <Input type="email" name="email" />
  </Field>
</Fieldset>
```

---

### Input

Text input fields with validation.

**Import:**
```tsx
import { Input } from 'frontend-design-system/vendors/catalyst/input'
```

**Example:**
```tsx
<Input name="email" type="email" placeholder="your@email.com" />
<Input name="search" type="search" />
<Input name="password" type="password" />
<Input invalid name="error" />
```

**Props:**
- `type` - Input type
- `invalid` - Error state
- `disabled` - Disabled state

---

### Listbox

Custom select lists with rich content.

**Import:**
```tsx
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, ListboxLabel } from 'frontend-design-system/vendors/catalyst/listbox'
```

**Example:**
```tsx
const [selected, setSelected] = useState(options[0])

<Listbox value={selected} onChange={setSelected}>
  <ListboxLabel>Select an option</ListboxLabel>
  <ListboxButton>{selected.name}</ListboxButton>
  <ListboxOptions>
    {options.map((option) => (
      <ListboxOption key={option.id} value={option}>
        <div className="flex items-center gap-2">
          <option.icon />
          <span>{option.name}</span>
        </div>
      </ListboxOption>
    ))}
  </ListboxOptions>
</Listbox>
```

---

### Navbar

Navigation bars for website headers.

**Import:**
```tsx
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer, NavbarDivider } from 'frontend-design-system/vendors/catalyst/navbar'
```

**Example:**
```tsx
<Navbar>
  <NavbarSection>
    <NavbarItem href="/">
      <Logo />
    </NavbarItem>
  </NavbarSection>
  
  <NavbarDivider />
  
  <NavbarSection>
    <NavbarItem href="/home">Home</NavbarItem>
    <NavbarItem href="/about">About</NavbarItem>
    <NavbarItem href="/services">Services</NavbarItem>
    <NavbarItem href="/contact">Contact</NavbarItem>
  </NavbarSection>
  
  <NavbarSpacer />
  
  <NavbarSection>
    <NavbarItem href="/login">Login</NavbarItem>
    <NavbarItem href="/signup">
      <Button>Sign Up</Button>
    </NavbarItem>
  </NavbarSection>
</Navbar>
```

---

### Pagination

Page navigation for lists and tables.

**Import:**
```tsx
import { Pagination, PaginationPrevious, PaginationNext, PaginationList, PaginationPage, PaginationGap } from 'frontend-design-system/vendors/catalyst/pagination'
```

**Example:**
```tsx
<Pagination>
  <PaginationPrevious href="?page=1" />
  <PaginationList>
    <PaginationPage href="?page=1">1</PaginationPage>
    <PaginationPage href="?page=2" current>2</PaginationPage>
    <PaginationPage href="?page=3">3</PaginationPage>
    <PaginationGap />
    <PaginationPage href="?page=10">10</PaginationPage>
  </PaginationList>
  <PaginationNext href="?page=3" />
</Pagination>
```

---

### Radio

Radio button groups.

**Import:**
```tsx
import { Radio, RadioField, RadioGroup } from 'frontend-design-system/vendors/catalyst/radio'
```

**Example:**
```tsx
<RadioGroup>
  <Label>Select a plan</Label>
  <RadioField>
    <Radio name="plan" value="basic" />
    <Label>Basic</Label>
    <Description>$10/month</Description>
  </RadioField>
  <RadioField>
    <Radio name="plan" value="pro" />
    <Label>Pro</Label>
    <Description>$20/month</Description>
  </RadioField>
</RadioGroup>
```

---

### Select

Select dropdowns for forms.

**Import:**
```tsx
import { Select } from 'frontend-design-system/vendors/catalyst/select'
```

**Example:**
```tsx
<Select name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</Select>
```

---

### Sidebar

Sidebar navigation with layouts.

**Import:**
```tsx
import { Sidebar, SidebarHeader, SidebarBody, SidebarFooter, SidebarItem, SidebarSection, SidebarLabel } from 'frontend-design-system/vendors/catalyst/sidebar'
```

**Example:**
```tsx
<Sidebar>
  <SidebarHeader>
    <Logo />
  </SidebarHeader>
  
  <SidebarBody>
    <SidebarSection>
      <SidebarItem href="/dashboard">
        <DashboardIcon />
        <SidebarLabel>Dashboard</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="/projects">
        <ProjectsIcon />
        <SidebarLabel>Projects</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
    
    <SidebarSection>
      <SidebarLabel>Settings</SidebarLabel>
      <SidebarItem href="/settings">
        <SettingsIcon />
        <SidebarLabel>General</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
  </SidebarBody>
  
  <SidebarFooter>
    <SidebarItem href="/profile">
      <Avatar src="/user.jpg" />
      <SidebarLabel>John Doe</SidebarLabel>
    </SidebarItem>
  </SidebarFooter>
</Sidebar>
```

---

### Switch

Toggle switches for boolean settings.

**Import:**
```tsx
import { Switch, SwitchField, SwitchGroup } from 'frontend-design-system/vendors/catalyst/switch'
```

**Example:**
```tsx
const [enabled, setEnabled] = useState(false)

<SwitchField>
  <Label>Enable notifications</Label>
  <Description>Receive email notifications</Description>
  <Switch checked={enabled} onChange={setEnabled} />
</SwitchField>
```

---

### Table

Data tables with sorting and selection.

**Import:**
```tsx
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from 'frontend-design-system/vendors/catalyst/table'
```

**Example:**
```tsx
<Table>
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

---

### Textarea

Multi-line text input fields.

**Import:**
```tsx
import { Textarea } from 'frontend-design-system/vendors/catalyst/textarea'
```

**Example:**
```tsx
<Textarea
  name="message"
  placeholder="Enter your message..."
  rows={4}
/>
```

---

## Complete Example: User Profile Form

```tsx
import { useState } from 'react'
import { Fieldset, Legend, Field, Label, Description } from 'frontend-design-system/vendors/catalyst/fieldset'
import { Input } from 'frontend-design-system/vendors/catalyst/input'
import { Textarea } from 'frontend-design-system/vendors/catalyst/textarea'
import { Select } from 'frontend-design-system/vendors/catalyst/select'
import { Switch, SwitchField } from 'frontend-design-system/vendors/catalyst/switch'
import { Button } from 'frontend-design-system/vendors/catalyst/button'
import { Avatar } from 'frontend-design-system/vendors/catalyst/avatar'

export default function UserProfileForm() {
  const [notifications, setNotifications] = useState(true)

  return (
    <form className="max-w-2xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Avatar src="/user.jpg" alt="Profile" />
        <Button plain>Change Photo</Button>
      </div>

      <Fieldset>
        <Legend>Personal Information</Legend>
        
        <Field>
          <Label>Full Name</Label>
          <Input name="name" defaultValue="John Doe" />
        </Field>
        
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" defaultValue="john@example.com" />
        </Field>
        
        <Field>
          <Label>Bio</Label>
          <Description>Tell us about yourself</Description>
          <Textarea name="bio" rows={4} />
        </Field>
        
        <Field>
          <Label>Country</Label>
          <Select name="country">
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </Select>
        </Field>
      </Fieldset>

      <Fieldset>
        <Legend>Preferences</Legend>
        
        <SwitchField>
          <Label>Email Notifications</Label>
          <Description>Receive email updates</Description>
          <Switch checked={notifications} onChange={setNotifications} />
        </SwitchField>
      </Fieldset>

      <div className="flex gap-4">
        <Button type="submit">Save Changes</Button>
        <Button plain>Cancel</Button>
      </div>
    </form>
  )
}
```

## Styling & Customization

### Using Tailwind Classes

All Catalyst components accept `className` prop for custom styling:

```tsx
<Button className="bg-gradient-to-r from-blue-500 to-purple-500">
  Gradient Button
</Button>
```

### Dark Mode

Catalyst components support dark mode out of the box:

```tsx
<div className="dark">
  <Button>Dark Mode Button</Button>
</div>
```

### Custom Colors

Use Tailwind color classes:

```tsx
<Badge className="bg-purple-500 text-white">Custom Color</Badge>
```

## Accessibility

All Catalyst components are built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant

## Best Practices

1. **Always provide labels** for form inputs
2. **Use semantic HTML** with proper heading hierarchy
3. **Test keyboard navigation** in your forms and menus
4. **Provide error messages** for form validation
5. **Use descriptions** to provide additional context
6. **Test with screen readers** for accessibility

## Resources

- [Catalyst Documentation](https://catalyst.tailwindui.com/docs)
- [Headless UI Documentation](https://headlessui.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Component Examples](./examples.tsx)

---

**Need help?** Check out the [GitHub Issues](https://github.com/your-username/frontend-design-system/issues) or join our [Discord community](https://discord.gg/your-invite).
