<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Beautiful Math - agent rules

## Course content (mandatory)

Before adding or changing any lesson, vignette, diagram caption, check, AI/ML bridge, real-world example, or "Read more" link:

1. **Research first.** Use reputable sources (e.g. MacTutor, primary texts, peer-reviewed or well-known educational references, and [Algebrica](https://algebrica.org/) for technical exposition and diagrams). Do not invent history, anecdotes, or technical claims.
2. **Verify sources.** Cross-check facts (dates, attributions, mathematical statements). Prefer primary or standard secondary sources over blog regurgitation. If a story is disputed or apocryphal, say so or omit it.
3. **Record sources.** Keep notes under `content/courses/<course>/_sources/` for each lesson you ship.
4. **Honest AI/ML bridges.** Only include an AI/ML link when it is genuine. If forced, omit it.
5. **Inspiring mathematicians.** Vignettes should convey work ethic and passion, not a Wikipedia-style bio dump.

### Knowledge-base quality (mandatory)

This project is a personal knowledge base the owner will reread for years. Lessons must feel like lasting chapters, not skim cards:

1. **Depth over brevity.** Prefer clear, detailed exposition with worked intuition, common confusions, and cross-links to later ideas.
2. **Curiosity on purpose.** Include verified historical sparks, *The Joy of X* hooks where honest, and questions worth returning to.
3. **Re-read value.** Each lesson should still reward a second visit: a "For the rereader" or equivalent section with sharper nuance is encouraged.
4. **No filler.** Detail must teach; do not pad with repetition or generic encouragement.
5. **Story before symbols.** Open each lesson with a human problem and a historical spark (people needed X; someone organized/invented Y), then move into first principles. Do not begin with bare formulas. Keep history verified; if a tale is disputed, say so.

### Preferred technical / diagram reference

**[Algebrica](https://algebrica.org/)** (Antonio Lupetti) is a strong open knowledge base for definitions, worked structure, and editable SVG diagrams. Prefer linking specific Algebrica entries in `furtherReading` when a lesson topic has a matching page. Use it to cross-check formal statements and to inspire diagram clarity.

License note: Algebrica content and SVGs are CC BY-NC 4.0. Prefer linking out. If you adapt an Algebrica diagram into this repo, keep attribution clear and do not treat the copy as unrestricted commercial reuse.

## Typography (mandatory)

**Never use em dashes (`—`) anywhere in product content:** lessons (MDX), frontmatter strings, checks, UI copy for the course, README course descriptions, diagram captions, or source notes meant for learners. Prefer commas, periods, colons, parentheses, or a spaced hyphen (` - `) when a break is needed.

Date ranges may use a simple hyphen (`1887-1920`), not an em dash.

## Engagement structure (mandatory)

1. **TurningPoint.** Each lesson includes one active prediction/decision beat before or early in first principles (`<TurningPoint>`).
2. **Two-speed chapters.** Core path stays open; field notes, glossaries, and rereader extras live in `<DeepPath>` (collapsed by default).
3. **LaterBridge.** AI/ML body sections use `<LaterBridge>` so math keeps its own center; sidebar AI/ML is optional/collapsed.
4. **Time honesty.** Frontmatter uses `coreMinutes` and `estimatedMinutes` (deep study). Do not invent a single inflated hour for every chapter.
