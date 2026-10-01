This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Copy `.env.example` to `.env.local` and set your TMDB API Read Access Token:

```bash
cp .env.example .env.local
```

Keep `.env.local` private. The token is used only by server-side code and must not use the `NEXT_PUBLIC_` prefix.

## Deploy on Vercel

Import this repository in [Vercel](https://vercel.com/new). Vercel detects Next.js automatically and uses `npm run build`; no additional Vercel configuration file is needed.

Before deploying, add `TMDB_API_READ_ACCESS_TOKEN` in **Project Settings > Environment Variables** for each environment you use (Production, Preview, and Development), then redeploy. The same variable name is used locally in `.env.local`.
