# SCS Study Hub — BDA Lectures 2 & 3 Update

Latest deployable Next.js Study Hub.

## New Big Data Analytics content
- Lecture 2: Data Gathering & Preparation
  - Full uploaded lecture text preserved slide-by-slide
  - 36 application-focused questions
  - Concept filter
  - Shuffle
  - Immediate green/red correction and explanation
  - Final score
- Lecture 3: Data Analytics & Visualisation
  - Full uploaded lecture text preserved slide-by-slide
  - 32 application-focused questions
  - Concept filter
  - Shuffle
  - Immediate green/red correction and explanation
  - Final score

## Existing content preserved
- SCS5102 Discrete Mathematics, including Rosen-style Relations/Rules of Inference practice
- SCS5103 Pattern Recognition Week 1
- SIDS5101 Big Data Analytics Week 1
- Existing Study Hub styling and routes

## Deploy
Push the project contents to GitHub and import the repository into Vercel as a Next.js project.

## AI Study Tutor

The Study Hub now includes `/ai-tutor`, an interactive AI tutor backed by the OpenAI Responses API. It supports multi-turn tutoring using the previous response ID, course/topic context, one-question-at-a-time quizzing, explanations, reasoning checks, and quick study prompts.

### Vercel setup

1. Install dependencies with `npm install`.
2. In Vercel Project Settings → Environment Variables, add `OPENAI_API_KEY` with your OpenAI API key.
3. Optionally add `OPENAI_MODEL` (defaults to `gpt-5.2` in this build).
4. Redeploy.

Never put the API key in client-side code or commit it to GitHub.
