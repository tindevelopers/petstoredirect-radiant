import {
  HomeIcon,
  UsersIcon,
  SettingsIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

export interface NavigationItem {
  name: string
  href: string
  icon: any
  badge?: string
  children?: NavigationItem[]
}

export const navigation: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Users',
    href: '/users',
    icon: UsersIcon,
    badge: '12',
    children: [
      { name: 'All Users', href: '/users', icon: UsersIcon },
      { name: 'Add User', href: '/users/create', icon: UsersIcon },
    ],
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: ChartBarIcon,
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: DocumentTextIcon,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
    children: [
      { name: 'Profile', href: '/settings/profile', icon: SettingsIcon },
      { name: 'Account', href: '/settings/account', icon: SettingsIcon },
      { name: 'Preferences', href: '/settings/preferences', icon: SettingsIcon },
    ],
  },
]

// To remove a menu item, simply delete or comment out the corresponding object
// Example: To remove Analytics, delete the Analytics object from the array
