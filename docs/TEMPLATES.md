# Templates

Pre-built, production-ready templates for common use cases. Each template is fully functional and can be customized to fit your needs.

## 📦 Available Templates

### 1. Admin Panel
**Path:** `templates/admin-panel/`

A complete admin panel with user management, analytics, reports, and settings.

**Features:**
- Dashboard with stats and charts
- User management (list, create, edit)
- Analytics page
- Reports management
- Settings (profile, account, preferences)
- Responsive sidebar navigation
- Mobile-friendly

**Best For:**
- Internal admin tools
- Content management systems
- User management interfaces
- Basic dashboards

**Quick Start:**
```bash
cp -r node_modules/frontend-design-system/templates/admin-panel ./src/
```

[View Documentation](./admin-panel/README.md)

---

### 2. E-commerce Dashboard
**Path:** `templates/dashboard-ecommerce/`

Comprehensive e-commerce dashboard for managing online stores.

**Features:**
- Revenue and sales analytics
- Order management
- Product performance tracking
- Sales by category
- Sales channel distribution
- Top products list
- Recent orders table

**Best For:**
- Online stores
- Marketplace platforms
- Dropshipping businesses
- Subscription boxes
- Digital product sales

**Quick Start:**
```bash
cp -r node_modules/frontend-design-system/templates/dashboard-ecommerce ./src/
```

[View Documentation](./dashboard-ecommerce/README.md)

---

### 3. Analytics Dashboard
**Path:** `templates/dashboard-analytics/`

Advanced analytics dashboard for tracking website traffic and user behavior.

**Features:**
- Traffic overview
- Conversion tracking
- Traffic sources analysis
- Device breakdown
- Geographic data
- Top pages performance
- Real-time metrics

**Best For:**
- SaaS applications
- Content websites
- Marketing agencies
- Product analytics
- Mobile app analytics

**Quick Start:**
```bash
cp -r node_modules/frontend-design-system/templates/dashboard-analytics ./src/
```

[View Documentation](./dashboard-analytics/README.md)

---

### 4. CRM Dashboard
**Path:** `templates/dashboard-crm/`

Customer Relationship Management dashboard for sales teams.

**Features:**
- Sales pipeline visualization
- Lead and deal management
- Contact tracking
- Activity timeline
- Revenue forecasting
- Team performance metrics

**Best For:**
- B2B sales teams
- Account management
- Lead generation
- Sales forecasting
- Customer success teams

**Quick Start:**
```bash
cp -r node_modules/frontend-design-system/templates/dashboard-crm ./src/
```

[View Documentation](./dashboard-crm/README.md)

---

### 5. SaaS Dashboard
**Path:** `templates/dashboard-saas/`

Subscription business dashboard for SaaS metrics.

**Features:**
- MRR (Monthly Recurring Revenue) tracking
- Churn rate monitoring
- User growth metrics
- Subscription analytics
- Customer lifetime value
- Revenue forecasting

**Best For:**
- Subscription businesses
- SaaS applications
- Membership sites
- Recurring revenue models

**Quick Start:**
```bash
cp -r node_modules/frontend-design-system/templates/dashboard-saas ./src/
```

[View Documentation](./dashboard-saas/README.md)

---

### 6. Logistics Dashboard
**Path:** `templates/dashboard-logistics/`

Logistics and delivery management dashboard.

**Features:**
- Shipment tracking
- Delivery monitoring
- Fleet management
- Route optimization
- Real-time updates
- Performance metrics

**Best For:**
- Delivery services
- Fleet management
- Supply chain operations
- Warehouse management

**Quick Start:**
```bash
cp -r node_modules/frontend-design-system/templates/dashboard-logistics ./src/
```

[View Documentation](./dashboard-logistics/README.md)

---

## 🚀 How to Use Templates

### Method 1: Copy Entire Template

Copy the entire template folder to your project:

```bash
# Copy admin panel
cp -r node_modules/frontend-design-system/templates/admin-panel ./src/

# Copy e-commerce dashboard
cp -r node_modules/frontend-design-system/templates/dashboard-ecommerce ./src/
```

### Method 2: Copy Specific Pages

Copy only the pages you need:

```bash
# Copy just the dashboard page
cp node_modules/frontend-design-system/templates/admin-panel/pages/dashboard.tsx ./src/pages/
```

### Method 3: Import Directly

Import components directly in your code:

```tsx
import Dashboard from 'frontend-design-system/templates/admin-panel/pages/dashboard'

export default function MyDashboard() {
  return <Dashboard />
}
```

## 🎨 Customization

All templates are fully customizable:

### 1. Modify Colors

Change Tailwind CSS classes:

```tsx
// Change from blue to purple
className="bg-blue-600" // Change to
className="bg-purple-600"
```

### 2. Update Branding

Edit text and logos:

```tsx
<h1 className="text-xl font-bold">Your Brand Name</h1>
```

### 3. Add/Remove Features

Templates are modular - easily add or remove components:

```tsx
// Remove analytics section
// Simply delete or comment out the component
```

### 4. Connect Your Data

Replace sample data with API calls:

```tsx
const { data } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(res => res.json())
})
```

## 🗑️ Removing Components

Each template README includes detailed instructions for removing unwanted features. Generally:

1. Delete the component/page file
2. Remove from navigation configuration
3. Remove from routes configuration

Example:
```tsx
// Remove from config/navigation.ts
{
  name: 'Analytics', // Delete this object
  href: '/analytics',
  icon: ChartBarIcon,
}
```

## ➕ Adding New Features

### Add a New Page

1. Create the page component
2. Add to routes configuration
3. Add to navigation menu

```tsx
// 1. Create pages/products.tsx
export default function Products() {
  return <div>Products Page</div>
}

// 2. Add to config/routes.ts
{ path: '/products', component: 'pages/products', title: 'Products' }

// 3. Add to config/navigation.ts
{ name: 'Products', href: '/products', icon: ShoppingBagIcon }
```

## 🔧 Technical Details

### Built With

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **TailAdmin Pro** - Complex components
- **Catalyst UI Kit** - Form components
- **Heroicons** - Icons

### Dependencies

All templates require:

```json
{
  "frontend-design-system": "latest",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "next": "^14.0.0",
  "@headlessui/react": "^1.7.0",
  "@heroicons/react": "^2.0.0",
  "tailwindcss": "^4.0.0",
  "clsx": "^2.0.0"
}
```

### File Structure

Each template follows this structure:

```
template-name/
├── README.md              # Template documentation
├── layout.tsx             # Main layout (if applicable)
├── components/            # Template-specific components
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   └── ...
├── pages/                 # Page components
│   ├── dashboard.tsx
│   ├── users/
│   └── ...
└── config/                # Configuration files
    ├── navigation.ts
    └── routes.ts
```

## 📱 Mobile Support

All templates are fully responsive:

- Mobile-first design
- Touch-optimized interactions
- Collapsible navigation
- Responsive tables
- Adaptive charts

## 🎯 Choosing the Right Template

| Use Case | Recommended Template |
|----------|---------------------|
| Internal admin tools | Admin Panel |
| Online store management | E-commerce Dashboard |
| Website analytics | Analytics Dashboard |
| Sales and CRM | CRM Dashboard |
| Subscription business | SaaS Dashboard |
| Delivery/shipping | Logistics Dashboard |

## 💡 Best Practices

1. **Start with a template** - Don't build from scratch
2. **Customize gradually** - Make small changes first
3. **Keep it simple** - Remove features you don't need
4. **Test responsiveness** - Check on mobile devices
5. **Connect real data** - Replace sample data early
6. **Follow conventions** - Maintain the template structure

## 🤝 Contributing

Want to contribute a template?

1. Follow the existing template structure
2. Include comprehensive documentation
3. Add sample data
4. Ensure mobile responsiveness
5. Submit a pull request

## 📚 Additional Resources

- [Main README](../README.md)
- [Component Documentation](../docs/)
- [Catalyst Integration](../docs/CATALYST_INTEGRATION.md)
- [TailAdmin Integration](../docs/TAILADMIN_INTEGRATION.md)
- [Vendor Components](../docs/VENDOR_COMPONENTS.md)

## 🐛 Troubleshooting

### Template not working?

1. Check all dependencies are installed
2. Verify import paths
3. Ensure Tailwind CSS is configured
4. Check for TypeScript errors

### Need help?

- [GitHub Issues](https://github.com/your-username/frontend-design-system/issues)
- [Documentation](../docs/)
- [Discord Community](https://discord.gg/your-invite)

---

**Built with ❤️ using Frontend Design System**
