export type MathematicianMeta = {
  name: string;
  years: string;
  vignette: string;
  image: string;
  imageCredit: string;
};

export type LessonFrontmatter = {
  title: string;
  slug: string;
  order: number;
  summary: string;
  mathematician: MathematicianMeta;
  realWorld: string;
  aiMlHook: string | null;
  prerequisites: string[];
  curiositySeeds: string[];
  estimatedMinutes: number;
};

export type LessonMeta = LessonFrontmatter & {
  course: string;
  path: string;
};

export type CourseMeta = {
  id: string;
  title: string;
  description: string;
  status: "available" | "coming";
  order: number;
};

export const COURSES: CourseMeta[] = [
  {
    id: "foundations",
    title: "Foundations",
    description:
      "Rebuild numbers, operations, ratios, and variables from first principles — the ground under everything that follows.",
    status: "available",
    order: 1,
  },
  {
    id: "algebra",
    title: "Algebra",
    description:
      "Equations, structure, and the language of unknown quantities — coming next.",
    status: "coming",
    order: 2,
  },
  {
    id: "calculus-intuition",
    title: "Calculus intuition",
    description:
      "Change, rates, and accumulation — the ideas behind learning curves and gradients.",
    status: "coming",
    order: 3,
  },
  {
    id: "linear-algebra",
    title: "Linear algebra",
    description:
      "Vectors, matrices, and spaces — the native tongue of modern machine learning.",
    status: "coming",
    order: 4,
  },
  {
    id: "probability",
    title: "Probability & information",
    description:
      "Uncertainty, likelihood, and information — how models reason under doubt.",
    status: "coming",
    order: 5,
  },
];

export function lessonKey(course: string, slug: string) {
  return `${course}/${slug}`;
}
