# E-commerce Dashboard Template

A comprehensive e-commerce dashboard template with sales analytics, order management, product tracking, and customer insights.

## 📊 Features

- **Revenue Analytics** - Track sales, revenue, and growth metrics
- **Order Management** - View and manage customer orders
- **Product Performance** - Monitor top-selling products
- **Sales Channels** - Analyze sales across different channels
- **Customer Insights** - Track customer behavior and trends
- **Inventory Tracking** - Monitor stock levels and alerts

## 📋 What's Included

### Pages
- `overview.tsx` - Main dashboard with key metrics and charts
- `products.tsx` - Product catalog and management (to be added)
- `orders.tsx` - Order list and details (to be added)
- `customers.tsx` - Customer management (to be added)
- `analytics.tsx` - Detailed analytics and reports (to be added)

### Components
- Revenue overview chart
- Sales by category chart
- Sales channel distribution
- Top products list
- Recent orders table
- Stats cards with trends

## 🚀 Quick Start

### 1. Copy the Template

```bash
cp -r node_modules/frontend-design-system/templates/dashboard-ecommerce ./src/
```

### 2. Import and Use

```tsx
import EcommerceDashboard from './dashboard-ecommerce/pages/overview'

export default function DashboardPage() {
  return <EcommerceDashboard />
}
```

### 3. Connect Your Data

Replace sample data with your API calls:

```tsx
const { data: orders } = useQuery({
  queryKey: ['orders'],
  queryFn: () => fetch('/api/orders').then(res => res.json())
})
```

## 🎨 Customization

### Modify Metrics

Edit the stats cards in `overview.tsx`:

```tsx
<CardDataStats 
  title="Your Metric" 
  total="$X,XXX" 
  rate="X.X%" 
  levelUp
>
  <YourIcon className="h-6 w-6" />
</CardDataStats>
```

### Add Custom Charts

Import additional chart components:

```tsx
import { ChartThree } from 'frontend-design-system/vendors/tailadmin/charts'

<ChartThree data={yourData} />
```

### Customize Order Status

Modify the status badge colors:

```tsx
<Badge variant={order.status === 'shipped' ? 'success' : 'warning'}>
  {order.status}
</Badge>
```

## 📊 Data Structure

### Order Object
```typescript
interface Order {
  id: string
  customer: string
  amount: number
  status: 'completed' | 'processing' | 'pending' | 'cancelled'
  date: string
}
```

### Product Object
```typescript
interface Product {
  name: string
  sales: number
  revenue: number
  stock?: number
  category?: string
}
```

## 🔧 Integration Examples

### Stripe Integration

```tsx
import { useStripe } from '@stripe/react-stripe-js'

const { data: revenue } = useQuery({
  queryKey: ['revenue'],
  queryFn: async () => {
    const response = await fetch('/api/stripe/revenue')
    return response.json()
  }
})
```

### Shopify Integration

```tsx
const { data: products } = useQuery({
  queryKey: ['products'],
  queryFn: async () => {
    const response = await fetch('/api/shopify/products')
    return response.json()
  }
})
```

## 📱 Mobile Responsive

The dashboard is fully responsive:
- Stacked layout on mobile
- Horizontal scrolling for tables
- Touch-optimized buttons
- Collapsible charts

## 🎯 Use Cases

Perfect for:
- Online stores
- Marketplace platforms
- Dropshipping businesses
- Subscription services
- Digital product sales

## 📚 Related Templates

- [Admin Panel](../admin-panel/) - Basic admin interface
- [Analytics Dashboard](../dashboard-analytics/) - Advanced analytics
- [CRM Dashboard](../dashboard-crm/) - Customer relationship management

## 💡 Tips

1. **Real-time Updates** - Use WebSockets for live order updates
2. **Export Data** - Add CSV/PDF export functionality
3. **Filters** - Implement date range and status filters
4. **Notifications** - Alert on low stock or new orders
5. **Multi-currency** - Support international sales

---

**Built with Frontend Design System**
