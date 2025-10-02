# Admin Panel Template

A complete, production-ready admin panel template built with the Frontend Design System. This template provides a solid foundation for building admin interfaces with user management, analytics, reports, and settings.

## 📋 What's Included

### Pages
- **Dashboard** - Overview with stats cards, charts, and recent activity
- **Users** - Complete user management (list, create, edit)
- **Analytics** - Traffic and conversion analytics with charts
- **Reports** - Report generation and management
- **Settings** - Profile, account, and preferences management

### Components
- **Sidebar** - Responsive navigation sidebar with mobile support
- **Header** - Top header with notifications and user menu
- **Breadcrumb** - Automatic breadcrumb navigation
- **Layout** - Main layout wrapper

### Configuration
- **navigation.ts** - Sidebar menu configuration
- **routes.ts** - Route definitions

## 🚀 Quick Start

### 1. Copy the Template

Copy the entire `admin-panel` folder to your project:

```bash
cp -r node_modules/frontend-design-system/templates/admin-panel ./src/
```

### 2. Install Dependencies

Make sure you have all required dependencies:

```bash
npm install frontend-design-system react react-dom next @headlessui/react @heroicons/react clsx
```

### 3. Use the Layout

Wrap your pages with the admin layout:

```tsx
import AdminLayout from './admin-panel/layout'

export default function Page() {
  return (
    <AdminLayout>
      {/* Your page content */}
    </AdminLayout>
  )
}
```

### 4. Import Pages

Use the pre-built pages in your application:

```tsx
import Dashboard from './admin-panel/pages/dashboard'
import UsersList from './admin-panel/pages/users/list'
import Analytics from './admin-panel/pages/analytics'
```

## 🎨 Customization

### Changing the Branding

Edit the sidebar title in `components/Sidebar.tsx`:

```tsx
<h1 className="text-xl font-bold text-gray-900">Your Brand</h1>
```

### Modifying Navigation

Edit `config/navigation.ts` to add, remove, or modify menu items:

```tsx
export const navigation: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
  },
  // Add your menu items here
]
```

### Customizing Colors

The template uses Tailwind CSS classes. Update colors by modifying the class names:

```tsx
// Change primary color from blue to purple
className="bg-blue-600" // Change to
className="bg-purple-600"
```

## 🗑️ Removing Components

### Remove User Management

1. Delete the `pages/users/` folder
2. Remove user routes from `config/routes.ts`:
   ```tsx
   // Delete these routes
   { path: '/users', ... },
   { path: '/users/create', ... },
   { path: '/users/:id/edit', ... },
   ```
3. Remove "Users" from `config/navigation.ts`:
   ```tsx
   // Delete this object
   {
     name: 'Users',
     href: '/users',
     icon: UsersIcon,
   },
   ```

### Remove Analytics

1. Delete `pages/analytics.tsx`
2. Remove analytics route from `config/routes.ts`
3. Remove "Analytics" from `config/navigation.ts`

### Remove Reports

1. Delete `pages/reports.tsx`
2. Remove reports route from `config/routes.ts`
3. Remove "Reports" from `config/navigation.ts`

### Remove Settings Pages

To remove specific settings pages:

1. Delete the page file (e.g., `pages/settings/preferences.tsx`)
2. Remove from `config/routes.ts`
3. Remove from the settings submenu in `config/navigation.ts`

## ➕ Adding New Pages

### 1. Create the Page Component

Create a new file in `pages/`:

```tsx
// pages/products.tsx
'use client'

import Breadcrumb from '../components/Breadcrumb'

export default function Products() {
  return (
    <div className="space-y-6">
      <Breadcrumb />
      <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
      {/* Your content */}
    </div>
  )
}
```

### 2. Add Route

Add to `config/routes.ts`:

```tsx
{
  path: '/products',
  component: 'pages/products',
  title: 'Products',
  requiresAuth: true,
}
```

### 3. Add Navigation Item

Add to `config/navigation.ts`:

```tsx
{
  name: 'Products',
  href: '/products',
  icon: ShoppingBagIcon,
}
```

## 📊 Working with Data

### Connecting to an API

Replace the sample data in each page with real API calls:

```tsx
// Before (sample data)
const users = [
  { id: 1, name: 'John Doe', ... },
]

// After (API call)
const [users, setUsers] = useState([])

useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(data => setUsers(data))
}, [])
```

### Using React Query

For better data management, use React Query:

```tsx
import { useQuery } from '@tanstack/react-query'

function UsersList() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json())
  })

  if (isLoading) return <div>Loading...</div>

  return (
    // Your component
  )
}
```

## 🔐 Authentication

### Adding Authentication

Wrap your admin panel with an authentication provider:

```tsx
import { useAuth } from './auth'

export default function AdminLayout({ children }) {
  const { user, isLoading } = useAuth()

  if (isLoading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" />

  return (
    // Layout content
  )
}
```

### Role-Based Access

Use the `requiresAuth` field in routes for role-based access:

```tsx
// config/routes.ts
{
  path: '/admin/users',
  component: 'pages/users/list',
  title: 'Users',
  requiresAuth: true,
  roles: ['admin'], // Add role requirements
}
```

## 🎯 Best Practices

1. **Keep Configuration Centralized** - Use `config/` files for navigation and routes
2. **Use TypeScript** - All components are TypeScript-ready
3. **Follow Component Structure** - Keep pages in `pages/`, components in `components/`
4. **Maintain Consistency** - Use the same patterns across all pages
5. **Test Responsiveness** - The template is mobile-responsive, test on different devices

## 📱 Mobile Support

The template includes:
- Responsive sidebar that collapses on mobile
- Mobile-friendly tables
- Touch-optimized buttons and inputs
- Hamburger menu for navigation

## 🎨 Styling

The template uses:
- **Tailwind CSS** for utility classes
- **TailAdmin Pro** components for complex UI
- **Catalyst UI Kit** components for forms and inputs
- **Heroicons** for icons

## 🐛 Troubleshooting

### Navigation not working
- Check that routes are defined in `config/routes.ts`
- Verify navigation items in `config/navigation.ts`
- Ensure href paths match route paths

### Components not rendering
- Verify all dependencies are installed
- Check import paths
- Ensure you're using the correct component names

### Styling issues
- Make sure Tailwind CSS is configured
- Import the design system CSS: `import 'frontend-design-system/styles/globals.css'`
- Check for conflicting CSS

## 📚 Related Documentation

- [Frontend Design System README](../../README.md)
- [Catalyst Integration Guide](../../docs/CATALYST_INTEGRATION.md)
- [TailAdmin Integration Guide](../../docs/TAILADMIN_INTEGRATION.md)
- [Vendor Components Guide](../../docs/VENDOR_COMPONENTS.md)

## 💡 Examples

### Custom Dashboard Widget

```tsx
<Card>
  <CardHeader>
    <h3 className="text-lg font-semibold">Custom Widget</h3>
  </CardHeader>
  <CardBody>
    <p>Your custom content here</p>
  </CardBody>
</Card>
```

### Custom Table Column

```tsx
<TableCell>
  <div className="flex items-center gap-2">
    <Avatar src={user.avatar} size="sm" />
    <span>{user.name}</span>
  </div>
</TableCell>
```

### Custom Form Field

```tsx
<FormInput
  label="Custom Field"
  name="customField"
  placeholder="Enter value"
  value={formData.customField}
  onChange={(e) => handleChange('customField', e.target.value)}
  required
/>
```

## 🤝 Support

Need help? Check out:
- [GitHub Issues](https://github.com/your-username/frontend-design-system/issues)
- [Documentation](../../docs/)
- [Discord Community](https://discord.gg/your-invite)

---

**Built with ❤️ using Frontend Design System**
