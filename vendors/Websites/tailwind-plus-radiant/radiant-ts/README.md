# Radiant

Radiant is a modern SaaS website template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org), optimized with [Turborepo](https://turbo.build) for CI/CD workflows and deployment to Vercel.

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## CI/CD Pipeline

This project uses Turborepo for optimized CI/CD workflows with GitHub Actions:

```bash
# Run full CI pipeline
npm run ci

# Development with Turborepo
npm run turbo:dev

# GitHub Actions trigger
npm run github-actions
```

### GitHub Actions Workflow
- **Trigger**: Push to `main` or `saas-admin` branches
- **Pipeline**: Lint → Type Check → Test → Build
- **Optimization**: Turborepo parallel execution and caching
- **Purpose**: Template validation and quality assurance

## Available Pages

- **Home** (`/`) - Main landing page
- **Company** (`/company`) - About page  
- **Login** (`/login`) - Authentication page
- **Pricing** (`/pricing`) - Pricing plans

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Sanity](https://www.sanity.io) - the Sanity website
