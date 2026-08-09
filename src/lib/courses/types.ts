export type MathematicianMeta = {
  name: string;
  years: string;
  vignette: string;
};

export type FurtherReadingItem = {
  title: string;
  url: string;
  kind: "video" | "article" | "book" | "reference";
  note?: string;
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
  furtherReading?: FurtherReadingItem[];
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
      "Rebuild numbers, operations, ratios, and variables from first principles - the ground under everything that follows.",
    status: "available",
    order: 1,
  },
  {
    id: "geometry",
    title: "Geometry",
    description:
      "Points, shapes, and space - how numbers become pictures you can measure, compare, and prove.",
    status: "available",
    order: 2,
  },
  {
    id: "algebra",
    title: "Algebra",
    description:
      "Equations, functions, and graphs - the language for naming relationships before you know every number.",
    status: "available",
    order: 3,
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    description:
      "Angles, circles, and waves - the bridge from triangles to oscillation, rotation, and similarity scores.",
    status: "available",
    order: 4,
  },
  {
    id: "calculus-intuition",
    title: "Calculus intuition",
    description:
      "Change, rates, and accumulation - the ideas behind learning curves and gradients.",
    status: "available",
    order: 5,
  },
  {
    id: "linear-algebra",
    title: "Linear algebra",
    description:
      "Vectors, matrices, and spaces - the native tongue of modern machine learning.",
    status: "available",
    order: 6,
  },
  {
    id: "probability",
    title: "Probability & information",
    description:
      "Uncertainty, likelihood, and information - how models reason under doubt.",
    status: "available",
    order: 7,
  },
];

export function courseTitle(courseId: string): string {
  return COURSES.find((c) => c.id === courseId)?.title ?? courseId;
}

export function lessonKey(course: string, slug: string) {
  return `${course}/${slug}`;
}
