# SCS5102 Quiz Hub

A Next.js quiz site for SCS5102 Discrete Mathematics.

## Run locally

Requirements:
- Node.js 18.17+ (Node 20 LTS recommended)
- npm

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project.
3. Import the repository into Vercel.
4. Vercel will detect Next.js automatically.
5. Deploy.

## Adding future courses/topics

- Course index: `app/page.js`
- SCS5102 page: `app/course/scs5102/page.js`
- Topic quiz data: `data/scs5102-topic1.js`
- Quiz component: `components/Quiz.js`

The quiz questions are kept separately from the UI, so adding questions is straightforward.
