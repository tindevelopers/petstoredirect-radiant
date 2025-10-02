# Contributing to Frontend Design System

First off, thank you for considering contributing to Frontend Design System! It's people like you that make this design system such a great tool.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- **Be respectful** and inclusive
- **Be collaborative** and constructive
- **Focus on what is best** for the community
- **Show empathy** towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/frontend-design-system.git
   cd frontend-design-system
   ```

3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/frontend-design-system.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected
- **Include screenshots or animated GIFs** if applicable
- **Include your environment details** (OS, Node version, npm version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternatives** you've considered

### Contributing Code

1. **Pick an issue** to work on or create a new one
2. **Comment on the issue** to let others know you're working on it
3. **Follow the development workflow** (see below)
4. **Submit a pull request** when ready

## 💻 Development Workflow

### Running the Development Environment

```bash
# Start Storybook for component development
npm run dev

# Run in watch mode
npm run dev -- --watch
```

### Building

```bash
# Build the library
npm run build

# Build Storybook
npm run build-storybook
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Linting and Formatting

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

### Type Checking

```bash
# Run TypeScript type checking
npm run type-check
```

## 🎨 Style Guidelines

### TypeScript Style Guide

- Use **TypeScript** for all new code
- Follow the existing code style
- Use **meaningful variable and function names**
- Add **JSDoc comments** for public APIs
- Prefer **functional components** with hooks
- Use **proper typing** - avoid `any` when possible

### Component Guidelines

```typescript
// ✅ Good
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
}) => {
  // Component implementation
}

// ❌ Bad
export const Button = (props: any) => {
  // Component implementation
}
```

### CSS/Tailwind Guidelines

- Use **Tailwind CSS classes** whenever possible
- Follow the **design tokens** defined in the system
- Ensure **dark mode support** for all components
- Test **responsive behavior** on different screen sizes

### File Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `Card.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `classNames.ts`)
- **Types**: PascalCase (e.g., `ButtonProps.ts`, `Theme.ts`)
- **Tests**: Same as source file with `.test.tsx` or `.spec.tsx`

## 📝 Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools

### Examples

```bash
feat(button): add loading state to Button component

Add a loading prop to the Button component that displays a spinner
and disables the button while loading.

Closes #123
```

```bash
fix(card): correct padding in dark mode

The Card component had incorrect padding in dark mode due to
missing dark: prefix on Tailwind classes.
```

## 🔄 Pull Request Process

1. **Update documentation** if you're changing functionality
2. **Add or update tests** for your changes
3. **Ensure all tests pass** (`npm test`)
4. **Ensure linting passes** (`npm run lint`)
5. **Update the CHANGELOG.md** if applicable
6. **Fill out the PR template** completely
7. **Request review** from maintainers

### PR Title Format

Use the same format as commit messages:

```
feat(component): add new feature
fix(button): resolve issue with...
docs(readme): update installation instructions
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
Describe the tests you ran and how to reproduce them

## Screenshots (if applicable)
Add screenshots to help explain your changes

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

## 🏷️ Issue and PR Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 🎯 Development Tips

### Working with Storybook

- Create stories for all new components
- Include all variants and states
- Add controls for interactive testing
- Document props and usage

### Testing Components

- Test user interactions
- Test accessibility
- Test responsive behavior
- Test dark mode
- Test edge cases

### Performance Considerations

- Avoid unnecessary re-renders
- Use `React.memo` when appropriate
- Optimize bundle size
- Lazy load heavy components

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Testing Library Documentation](https://testing-library.com/docs/)

## 💬 Questions?

Feel free to:
- Open an issue with the `question` label
- Start a discussion in GitHub Discussions
- Reach out to the maintainers

---

Thank you for contributing! 🎉
