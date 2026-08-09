# Beautiful Math

A personal knowledge base for rebuilding math from first principles, and returning to it for years.

This is not a marketing site, not a flashcard deck, and not an AI tutor. It is a quiet library of chapters: human stories that open each idea, careful first principles, worked intuition, real-world ties, and - when the link is honest - bridges into AI and ML.

## Why this exists

Most people meet math as a pile of procedures. You can pass exams that way and still feel like a stranger to the subject.

Beautiful Math exists so you can rebuild the map slowly:

- start from what people needed before the symbols existed
- learn the idea until it feels inevitable
- keep chapters dense enough that a second visit still pays off

It was built as a personal library for long-term rereading. If that is useful to you too, you are welcome here.

## Who it is for

- **You, rebuilding.** Adults who want foundations again without being talked down to.
- **You, connecting.** People in engineering, data, or AI/ML who want the math under the tools, not only the tools.
- **You, curious.** Readers who like history, diagrams, and "why did anyone invent this?" as much as formulas.

It is **not** for grinding contest problems, chasing certificates, or chatting with a tutor bot. Progress lives in your browser. There are no accounts.

## How to use it

1. Open the home path and pick a track, or continue where you left off.
2. Read a chapter top to bottom. Each lesson opens with a human story, then first principles, then deeper sections (worked intuition, common confusions, history, real world, AI/ML when honest, notes for the rereader).
3. Use the understanding checks as a quiet self-test, not a grade.
4. Follow "further reading" when you want primary sources, videos, or a sharper technical companion (often [Algebrica](https://algebrica.org/) or MacTutor).
5. Come back later. The point is a library you can reopen, not a course you "finish" once.

Suggested order if you are starting cold:

**Foundations → Geometry → Algebra → Trigonometry → Calculus intuition → Linear algebra → Probability & information**

Skip ahead when a topic is already solid. The path is a spine, not a prison.

## What is inside

Seven tracks, **42 chapters**:

| Track | What you rebuild |
| --- | --- |
| **Foundations** | Numbers, operations, ratios, variables, decimals, powers, estimation |
| **Geometry** | Points, triangles, similarity, circles, transformations, area and solids |
| **Algebra** | Equations, systems, functions, graphs, inequalities, quadratics, exponentials, fitting |
| **Trigonometry** | Turns, triangle ratios, unit circle, inverse trig and triangle laws, waves |
| **Calculus intuition** | Rates, derivatives, integrals, limits and optimization, gradients |
| **Linear algebra** | Vectors, matrices, projections, bases, least squares, eigen-structure, SVD/PCA |
| **Probability & information** | Chance, random variables, Bayes, expectation, correlation and calibration, entropy |

Each chapter aims for depth over skim: story before symbols, verified history (or an honest "this tale is disputed"), and no filler.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the build
```

### Stack (short)

Next.js App Router, TypeScript, Tailwind, MDX lessons, KaTeX, local progress via `localStorage`.

## For contributors and agents

Lessons live in `content/courses/`. Research notes sit beside them in each course's `_sources/` folder.

Content rules (research first, story before symbols, no em dashes in product copy) are in [`AGENTS.md`](./AGENTS.md).

## License note

This repo is a personal knowledge base shared openly. Third-party links (MacTutor, Algebrica, videos, books) remain under their own terms. Prefer linking out to Algebrica rather than copying its diagrams; Algebrica content is CC BY-NC 4.0.
