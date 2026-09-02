# SCS5102 Quiz Hub

A Vercel-ready Next.js quiz site for SCS5102 Discrete Mathematics.

## This corrected version

- Fixes the Vercel `Can't resolve '@/components/Quiz'` error.
- Fixes the Vercel `Can't resolve '@/data/scs5102-topic1'` error.
- Uses Next.js 14.2.32 instead of the vulnerable 14.2.5 release.
- Keeps the quiz questions separate from the UI for easy future expansion.

## Deploy to Vercel

1. Extract this ZIP.
2. Upload/replace the project files in your GitHub repository.
3. In Vercel, open the project and redeploy.
4. Vercel will run `npm install` and `npm run build` automatically.

No Node.js installation is required on your computer just to deploy through GitHub + Vercel.

## Run locally (optional)

Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/page.js` — course index
- `app/course/scs5102/page.js` — SCS5102 topic index
- `app/course/scs5102/topic-1/page.js` — Topic 1 quiz
- `components/Quiz.js` — quiz engine
- `data/scs5102-topic1.js` — Topic 1 questions
