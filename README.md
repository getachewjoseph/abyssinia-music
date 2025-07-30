# Abyssinia Music

A music application built with Next.js and TypeScript.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout component
│   ├── page.tsx      # Home page component
│   └── globals.css   # Global styles
```

## Migration from Webpack

This project was migrated from a webpack-based React application to Next.js. The main changes include:

- Replaced webpack configuration with Next.js
- Converted from client-side rendering to server-side rendering
- Added App Router structure
- Integrated Tailwind CSS for styling
- Updated TypeScript configuration for Next.js