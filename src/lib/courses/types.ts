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
      "Rebuild numbers, operations, ratios, variables, decimals, powers, and estimation from first principles - the ground under everything that follows.",
    status: "available",
    order: 1,
  },
  {
    id: "geometry",
    title: "Geometry",
    description:
      "Points, shapes, transformations, area, and solid measure - how numbers become pictures you can measure, compare, and prove.",
    status: "available",
    order: 2,
  },
  {
    id: "algebra",
    title: "Algebra",
    description:
      "Equations, systems, functions, graphs, inequalities, quadratics, exponentials, and fitting - naming relationships before every number is known.",
    status: "available",
    order: 3,
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    description:
      "Angles, triangle ratios, the unit circle, inverse trig and triangle laws, then waves - from turns to oscillation and similarity previews.",
    status: "available",
    order: 4,
  },
  {
    id: "calculus-intuition",
    title: "Calculus intuition",
    description:
      "Rates, derivatives, accumulation, limits and optimization, then gradients - the change toolkit behind learning curves.",
    status: "available",
    order: 5,
  },
  {
    id: "linear-algebra",
    title: "Linear algebra",
    description:
      "Vectors, matrices, projections, bases, elimination and least squares, eigen-structure, then SVD and PCA - the native tongue of modern machine learning.",
    status: "available",
    order: 6,
  },
  {
    id: "probability",
    title: "Probability & information",
    description:
      "Chance, random variables, conditioning, expectation, correlation and calibration, then information - how models reason under doubt.",
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
