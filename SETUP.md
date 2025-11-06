# Next.js + Supabase Setup Guide

This project has been migrated from Vite to **Next.js 14+** with **Supabase SSR** support.

## Prerequisites

- Node.js 18+ installed
- A Supabase account and project

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Where to find these values:**
1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Settings > API
4. Copy the "Project URL" and "anon/public" key

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Key Features

- ✅ **Server-Side Rendering (SSR)** with Next.js App Router
- ✅ **Supabase Authentication** with SSR support
- ✅ **Middleware** for session management
- ✅ **Optimized Images** with Next.js Image component
- ✅ **shadcn/ui Components** fully compatible
- ✅ **TailwindCSS** styling

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── providers/         # Client-side providers
├── components/            # React components
├── lib/                   # Utility functions
│   └── supabase/         # Supabase client utilities
├── middleware.ts          # Next.js middleware for auth
├── public/               # Static assets
└── next.config.mjs       # Next.js configuration
```

## Supabase Integration

### Client-Side Usage

```typescript
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();
```

### Server-Side Usage (Server Components)

```typescript
import { createClient } from "@/lib/supabase/server";

const supabase = await createClient();
```

## Notes

- All components using React hooks have been marked with `"use client"` directive
- Images are now optimized using Next.js `Image` component
- Environment variables use `NEXT_PUBLIC_` prefix for client-side access
- The middleware handles session refresh automatically

## Troubleshooting

If you encounter issues:

1. **Module not found errors**: Ensure all dependencies are installed with `npm install`
2. **Supabase connection errors**: Check your `.env.local` file has correct credentials
3. **Build errors**: Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## Migration from Vite

This project was migrated from Vite to Next.js. Key changes:

- `vite.config.ts` → `next.config.mjs`
- `import.meta.env` → `process.env`
- Image imports → Static paths in `/public`
- Client-side routing → Next.js App Router
- Added `"use client"` to interactive components
