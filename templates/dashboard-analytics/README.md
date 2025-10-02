# Analytics Dashboard Template

A comprehensive analytics dashboard for tracking website traffic, user behavior, conversions, and engagement metrics.

## 📊 Features

- **Traffic Analytics** - Monitor visitors, page views, and sessions
- **Conversion Tracking** - Track goals and conversion rates
- **Traffic Sources** - Analyze where visitors come from
- **Device Analytics** - Desktop, mobile, and tablet breakdown
- **Geographic Data** - Visitor locations and countries
- **Page Performance** - Top pages and engagement metrics
- **Real-time Data** - Live visitor tracking (optional)

## 📋 What's Included

### Pages
- `overview.tsx` - Main analytics dashboard with key metrics
- `traffic.tsx` - Detailed traffic analysis (to be added)
- `conversions.tsx` - Conversion funnel and goals (to be added)
- `audience.tsx` - Audience demographics and behavior (to be added)
- `reports.tsx` - Custom reports and exports (to be added)

### Components
- Traffic overview chart
- Conversion tracking chart
- Traffic sources pie chart
- Device breakdown with progress bars
- Top pages table
- Geographic distribution
- Key metrics cards

## 🚀 Quick Start

### 1. Copy the Template

```bash
cp -r node_modules/frontend-design-system/templates/dashboard-analytics ./src/
```

### 2. Import and Use

```tsx
import AnalyticsDashboard from './dashboard-analytics/pages/overview'

export default function AnalyticsPage() {
  return <AnalyticsDashboard />
}
```

### 3. Connect Analytics Service

Integrate with your analytics provider:

```tsx
// Google Analytics
import { useAnalytics } from './hooks/useGoogleAnalytics'

const { visitors, pageViews } = useAnalytics()

// Custom Analytics
const { data } = useQuery({
  queryKey: ['analytics'],
  queryFn: () => fetch('/api/analytics').then(res => res.json())
})
```

## 🎨 Customization

### Add Custom Metrics

```tsx
<CardDataStats 
  title="Custom Metric" 
  total="X,XXX" 
  rate="X.X%" 
  levelUp
>
  <CustomIcon className="h-6 w-6" />
</CardDataStats>
```

### Modify Date Ranges

```tsx
const [dateRange, setDateRange] = useState('7d')

<Button onClick={() => setDateRange('30d')}>
  Last 30 Days
</Button>
```

### Custom Charts

```tsx
import { ChartTwo } from 'frontend-design-system/vendors/tailadmin/charts'

<ChartTwo data={customData} />
```

## 📊 Data Structure

### Traffic Data
```typescript
interface TrafficData {
  month: string
  visitors: number
  pageViews: number
  bounceRate: number
}
```

### Conversion Data
```typescript
interface ConversionData {
  date: string
  conversions: number
  rate: number
}
```

### Page Data
```typescript
interface PageData {
  page: string
  views: number
  avgTime: string
  bounceRate: string
}
```

## 🔧 Integration Examples

### Google Analytics 4

```tsx
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'

const AnalyticsDashboard = () => {
  const { data, isLoading } = useGoogleAnalytics({
    startDate: '7daysAgo',
    endDate: 'today',
    metrics: ['activeUsers', 'screenPageViews']
  })

  return (
    // Dashboard content
  )
}
```

### Plausible Analytics

```tsx
const { data } = useQuery({
  queryKey: ['plausible'],
  queryFn: async () => {
    const response = await fetch('https://plausible.io/api/v1/stats/aggregate', {
      headers: {
        'Authorization': `Bearer ${process.env.PLAUSIBLE_API_KEY}`
      }
    })
    return response.json()
  }
})
```

### Mixpanel

```tsx
import mixpanel from 'mixpanel-browser'

useEffect(() => {
  mixpanel.track('Dashboard Viewed')
}, [])
```

## 📱 Mobile Responsive

- Stacked metrics on mobile
- Horizontal scrolling for tables
- Touch-optimized charts
- Collapsible sections

## 🎯 Use Cases

Perfect for:
- SaaS applications
- Content websites
- E-commerce stores
- Marketing agencies
- Product analytics
- Mobile apps

## 💡 Advanced Features

### Real-time Analytics

```tsx
import { useRealtime } from './hooks/useRealtime'

const { activeUsers } = useRealtime()

<CardDataStats title="Active Users" total={activeUsers} />
```

### Custom Events

```tsx
const trackEvent = (eventName: string, properties: object) => {
  // Track custom events
  analytics.track(eventName, properties)
}
```

### A/B Testing

```tsx
const { variant } = useABTest('homepage-redesign')

<div className={variant === 'A' ? 'old-design' : 'new-design'}>
  {/* Content */}
</div>
```

## 📚 Related Templates

- [E-commerce Dashboard](../dashboard-ecommerce/) - Sales and orders
- [CRM Dashboard](../dashboard-crm/) - Customer management
- [SaaS Dashboard](../dashboard-saas/) - Subscription metrics

## 🔒 Privacy & Compliance

- GDPR compliant
- Cookie consent integration
- Data anonymization
- Export user data
- Right to be forgotten

## 💡 Tips

1. **Set Goals** - Define conversion goals and track them
2. **Segment Data** - Analyze different user segments
3. **Custom Reports** - Create reports for stakeholders
4. **Alerts** - Set up alerts for anomalies
5. **Export Data** - Regular data exports for analysis

---

**Built with Frontend Design System**
