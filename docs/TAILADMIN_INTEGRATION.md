# TailAdmin Pro Integration Guide

Complete guide for integrating and using TailAdmin Pro components in your projects.

## Overview

TailAdmin Pro is a comprehensive admin dashboard template built with Tailwind CSS and Next.js. It provides enterprise-grade components for building complex web applications, dashboards, and data-heavy interfaces.

## Installation

### 1. Install the Design System

```bash
npm install frontend-design-system
```

### 2. Install Peer Dependencies

```bash
npm install react react-dom next tailwindcss
```

### 3. Import Styles

```tsx
import 'frontend-design-system/styles/globals.css'
```

### 4. Configure Tailwind CSS

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

## Component Categories

TailAdmin Pro components are organized into several categories:

- **UI Components** - Base UI elements
- **Charts** - Data visualization
- **Analytics** - Dashboard analytics
- **E-commerce** - Product and transaction components
- **Forms** - Advanced form components
- **Tables** - Data tables
- **Common** - Shared utility components

## UI Components

### Alert

Display important messages and notifications.

**Import:**
```tsx
import { AlertSuccess, AlertWarning, AlertError, AlertInfo } from 'frontend-design-system/vendors/tailadmin/ui/alert'
```

**Example:**
```tsx
<AlertSuccess title="Success!" message="Your changes have been saved." />
<AlertWarning title="Warning" message="Please review your information." />
<AlertError title="Error" message="Something went wrong." />
<AlertInfo title="Info" message="New features available." />
```

---

### Avatar

User avatars with status indicators.

**Import:**
```tsx
import { Avatar, AvatarGroup } from 'frontend-design-system/vendors/tailadmin/ui/avatar'
```

**Example:**
```tsx
<Avatar src="/user.jpg" alt="John Doe" size="md" />
<Avatar src="/user.jpg" status="online" />
<Avatar src="/user.jpg" status="offline" />

<AvatarGroup max={3}>
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
  <Avatar src="/user4.jpg" />
</AvatarGroup>
```

---

### Badge

Status badges and labels.

**Import:**
```tsx
import { Badge } from 'frontend-design-system/vendors/tailadmin/ui/badge'
```

**Example:**
```tsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Inactive</Badge>
<Badge variant="info">New</Badge>
```

---

### Breadcrumb

Navigation breadcrumbs.

**Import:**
```tsx
import { Breadcrumb } from 'frontend-design-system/vendors/tailadmin/ui/breadcrumb'
```

**Example:**
```tsx
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Details', href: '/products/123' },
  ]}
/>
```

---

### Button

Multiple button variants and styles.

**Import:**
```tsx
import { Button, ButtonGroup } from 'frontend-design-system/vendors/tailadmin/ui/button'
```

**Example:**
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button loading>Loading...</Button>

<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>
```

---

### Card

Content cards with various layouts.

**Import:**
```tsx
import { Card, CardHeader, CardBody, CardFooter } from 'frontend-design-system/vendors/tailadmin/ui/card'
```

**Example:**
```tsx
<Card>
  <CardHeader>
    <h3 className="text-lg font-semibold">Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here...</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Carousel

Image and content carousels.

**Import:**
```tsx
import { Carousel, CarouselItem } from 'frontend-design-system/vendors/tailadmin/ui/carousel'
```

**Example:**
```tsx
<Carousel autoplay interval={3000}>
  <CarouselItem>
    <img src="/slide1.jpg" alt="Slide 1" />
  </CarouselItem>
  <CarouselItem>
    <img src="/slide2.jpg" alt="Slide 2" />
  </CarouselItem>
  <CarouselItem>
    <img src="/slide3.jpg" alt="Slide 3" />
  </CarouselItem>
</Carousel>
```

---

### Dropdown

Dropdown menus and actions.

**Import:**
```tsx
import { Dropdown, DropdownItem, DropdownDivider } from 'frontend-design-system/vendors/tailadmin/ui/dropdown'
```

**Example:**
```tsx
<Dropdown trigger={<Button>Options</Button>}>
  <DropdownItem onClick={handleEdit}>Edit</DropdownItem>
  <DropdownItem onClick={handleDuplicate}>Duplicate</DropdownItem>
  <DropdownDivider />
  <DropdownItem onClick={handleDelete} danger>Delete</DropdownItem>
</Dropdown>
```

---

### Modal

Modal dialogs for various purposes.

**Import:**
```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'frontend-design-system/vendors/tailadmin/ui/modal'
```

**Example:**
```tsx
const [isOpen, setIsOpen] = useState(false)

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <ModalHeader>
    <h3>Confirm Action</h3>
  </ModalHeader>
  <ModalBody>
    <p>Are you sure you want to proceed?</p>
  </ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirm
    </Button>
  </ModalFooter>
</Modal>
```

---

### Notification

Toast notifications and alerts.

**Import:**
```tsx
import { Notification, showNotification } from 'frontend-design-system/vendors/tailadmin/ui/notification'
```

**Example:**
```tsx
// Show notification programmatically
showNotification({
  type: 'success',
  title: 'Success!',
  message: 'Your changes have been saved.',
  duration: 3000,
})

showNotification({
  type: 'error',
  title: 'Error',
  message: 'Something went wrong.',
})
```

---

### Pagination

Page navigation components.

**Import:**
```tsx
import { Pagination } from 'frontend-design-system/vendors/tailadmin/ui/pagination'
```

**Example:**
```tsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

---

### Popover

Contextual popovers.

**Import:**
```tsx
import { Popover, PopoverTrigger, PopoverContent } from 'frontend-design-system/vendors/tailadmin/ui/popover'
```

**Example:**
```tsx
<Popover>
  <PopoverTrigger>
    <Button>Show Info</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Additional information here...</p>
  </PopoverContent>
</Popover>
```

---

### Table

Advanced data tables.

**Import:**
```tsx
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'frontend-design-system/vendors/tailadmin/ui/table'
```

**Example:**
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Role</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          <Badge variant="success">{user.role}</Badge>
        </TableCell>
        <TableCell>
          <Dropdown>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Delete</DropdownItem>
          </Dropdown>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

---

### Tabs

Tabbed interfaces.

**Import:**
```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'frontend-design-system/vendors/tailadmin/ui/tabs'
```

**Example:**
```tsx
<Tabs defaultIndex={0}>
  <TabList>
    <Tab>Overview</Tab>
    <Tab>Details</Tab>
    <Tab>Settings</Tab>
  </TabList>
  
  <TabPanels>
    <TabPanel>
      <p>Overview content...</p>
    </TabPanel>
    <TabPanel>
      <p>Details content...</p>
    </TabPanel>
    <TabPanel>
      <p>Settings content...</p>
    </TabPanel>
  </TabPanels>
</Tabs>
```

---

### Tooltip

Contextual tooltips.

**Import:**
```tsx
import { Tooltip } from 'frontend-design-system/vendors/tailadmin/ui/tooltip'
```

**Example:**
```tsx
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip content="Delete item" position="top">
  <Button variant="danger">Delete</Button>
</Tooltip>
```

---

## Charts

Data visualization components for analytics and dashboards.

**Import:**
```tsx
import { ChartOne, ChartTwo, ChartThree, ChartFour } from 'frontend-design-system/vendors/tailadmin/charts'
```

**Example:**
```tsx
// Line Chart
<ChartOne
  data={[
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 150 },
    { month: 'Mar', value: 200 },
  ]}
/>

// Bar Chart
<ChartTwo
  data={[
    { category: 'A', value: 50 },
    { category: 'B', value: 75 },
    { category: 'C', value: 100 },
  ]}
/>

// Area Chart
<ChartThree
  data={revenueData}
  title="Revenue Over Time"
/>

// Donut Chart
<ChartFour
  data={[
    { label: 'Desktop', value: 60 },
    { label: 'Mobile', value: 30 },
    { label: 'Tablet', value: 10 },
  ]}
/>
```

---

## Analytics Components

Pre-built analytics dashboard components.

**Import:**
```tsx
import { CardDataStats, VisitorChart, RevenueChart } from 'frontend-design-system/vendors/tailadmin/analytics'
```

**Example:**
```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
  <CardDataStats
    title="Total Views"
    total="3.456K"
    rate="0.43%"
    levelUp
  >
    <EyeIcon />
  </CardDataStats>
  
  <CardDataStats
    title="Total Users"
    total="1.234K"
    rate="2.59%"
    levelUp
  >
    <UsersIcon />
  </CardDataStats>
  
  <CardDataStats
    title="Total Revenue"
    total="$45.2K"
    rate="4.35%"
    levelUp
  >
    <DollarIcon />
  </CardDataStats>
  
  <CardDataStats
    title="Total Orders"
    total="2.450"
    rate="0.95%"
    levelDown
  >
    <CartIcon />
  </CardDataStats>
</div>

<div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
  <VisitorChart />
  <RevenueChart />
</div>
```

---

## E-commerce Components

Components for e-commerce applications.

**Import:**
```tsx
import { ProductCard, InvoiceTable, TransactionList } from 'frontend-design-system/vendors/tailadmin/ecommerce'
```

**Example:**
```tsx
// Product Card
<ProductCard
  image="/product.jpg"
  title="Product Name"
  price="$99.99"
  rating={4.5}
  onAddToCart={handleAddToCart}
/>

// Invoice Table
<InvoiceTable
  invoices={invoices}
  onView={handleViewInvoice}
  onDownload={handleDownloadInvoice}
/>

// Transaction List
<TransactionList
  transactions={transactions}
  onViewDetails={handleViewTransaction}
/>
```

---

## Form Components

Advanced form components with validation.

**Import:**
```tsx
import { FormInput, FormSelect, FormCheckbox, FormRadio, FormTextarea } from 'frontend-design-system/vendors/tailadmin/form'
```

**Example:**
```tsx
<form className="space-y-4">
  <FormInput
    label="Full Name"
    name="name"
    placeholder="Enter your name"
    required
  />
  
  <FormInput
    label="Email"
    name="email"
    type="email"
    placeholder="your@email.com"
    error="Invalid email address"
  />
  
  <FormSelect
    label="Country"
    name="country"
    options={[
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
    ]}
  />
  
  <FormCheckbox
    label="I agree to the terms and conditions"
    name="terms"
  />
  
  <FormTextarea
    label="Message"
    name="message"
    rows={4}
    placeholder="Enter your message..."
  />
  
  <Button type="submit">Submit</Button>
</form>
```

---

## Complete Example: Dashboard

```tsx
import { Card, CardHeader, CardBody } from 'frontend-design-system/vendors/tailadmin/ui/card'
import { CardDataStats } from 'frontend-design-system/vendors/tailadmin/analytics'
import { ChartOne, ChartTwo } from 'frontend-design-system/vendors/tailadmin/charts'
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'frontend-design-system/vendors/tailadmin/ui/table'
import { Badge } from 'frontend-design-system/vendors/tailadmin/ui/badge'
import { Dropdown, DropdownItem } from 'frontend-design-system/vendors/tailadmin/ui/dropdown'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardDataStats
          title="Total Revenue"
          total="$45.2K"
          rate="4.35%"
          levelUp
        >
          <DollarIcon />
        </CardDataStats>
        
        <CardDataStats
          title="Total Orders"
          total="2.450"
          rate="2.59%"
          levelUp
        >
          <CartIcon />
        </CardDataStats>
        
        <CardDataStats
          title="Total Customers"
          total="1.234"
          rate="0.95%"
          levelUp
        >
          <UsersIcon />
        </CardDataStats>
        
        <CardDataStats
          title="Total Products"
          total="567"
          rate="0.43%"
          levelDown
        >
          <BoxIcon />
        </CardDataStats>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Revenue Overview</h3>
          </CardHeader>
          <CardBody>
            <ChartOne data={revenueData} />
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Sales by Category</h3>
          </CardHeader>
          <CardBody>
            <ChartTwo data={salesData} />
          </CardBody>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Recent Orders</h3>
        </CardHeader>
        <CardBody>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>#{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>${order.amount}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'completed' ? 'success' : 'warning'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Dropdown>
                      <DropdownItem>View</DropdownItem>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem danger>Delete</DropdownItem>
                    </Dropdown>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}
```

## Styling & Customization

### Using Tailwind Classes

All TailAdmin components accept `className` prop:

```tsx
<Card className="shadow-lg border-2 border-blue-500">
  <CardBody className="p-8">
    Custom styled card
  </CardBody>
</Card>
```

### Dark Mode

TailAdmin components support dark mode:

```tsx
<div className="dark">
  <Card>
    <CardBody>Dark mode content</CardBody>
  </Card>
</div>
```

## Best Practices

1. **Use appropriate components** for your use case
2. **Combine with Catalyst** for complete UI coverage
3. **Leverage charts** for data visualization
4. **Use cards** to organize content
5. **Implement proper error handling** in forms
6. **Test responsive layouts** on different screen sizes
7. **Optimize chart data** for performance

## Resources

- [TailAdmin Documentation](https://tailadmin.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Component Examples](./examples.tsx)

---

**Need help?** Check out the [GitHub Issues](https://github.com/your-username/frontend-design-system/issues) or join our [Discord community](https://discord.gg/your-invite).
