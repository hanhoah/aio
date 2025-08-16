# AIO Consulting Developer Guide

## Build Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Deploying
- `bash deploy.sh`: Deploy Script (to Vercel)


## Testing
- `node test-contact-form.js`: Test contact form using Playwright
- Tests are found in `/test` directory
- `node test/test-contact-form.js`: Run specific test with proper environment

## Code Style
- TypeScript with strict type checking
- Next.js 14+ conventions
- File-based routing under `app/` directory
- React components use functional style with hooks
- Client components must use "use client" directive
- Import order: React, libraries, components

## Error Handling
- Catch and log errors with descriptive context
- API responses use NextResponse with appropriate status codes
- Form validation uses Zod schema validation
- Use structured try/catch blocks for async operations

## Naming Conventions
- PascalCase for components
- camelCase for variables, functions, and file names
- Descriptive, semantic names that reflect purpose

## File Structure
- Components in `/components` organized by type
- Page components in `/app` directory
- Utility functions in `/lib`
- SEO data in `/seo`