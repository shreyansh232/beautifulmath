import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  COURSES,
  type CourseMeta,
  type LessonFrontmatter,
  type LessonMeta,
} from "@/lib/courses/types";

const CONTENT_ROOT = path.join(process.cwd(), "content/courses");

function lessonDir(courseId: string) {
  return path.join(CONTENT_ROOT, courseId);
}

export function getCourse(courseId: string): CourseMeta | undefined {
  return COURSES.find((c) => c.id === courseId);
}

export function getAvailableCourses(): CourseMeta[] {
  return COURSES.filter((c) => c.status === "available").sort(
    (a, b) => a.order - b.order,
  );
}

export function getAllCourses(): CourseMeta[] {
  return [...COURSES].sort((a, b) => a.order - b.order);
}

export function getLessonSlugs(courseId: string): string[] {
  const dir = lessonDir(courseId);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getLessonMeta(
  courseId: string,
  slug: string,
): LessonMeta | null {
  const filePath = path.join(lessonDir(courseId), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  const fm = data as LessonFrontmatter;
  return {
    ...fm,
    slug,
    course: courseId,
    path: `/learn/${courseId}/${slug}`,
  };
}

export function getCourseLessons(courseId: string): LessonMeta[] {
  return getLessonSlugs(courseId)
    .map((slug) => getLessonMeta(courseId, slug))
    .filter((l): l is LessonMeta => l !== null)
    .sort((a, b) => a.order - b.order);
}

export function getLessonContent(courseId: string, slug: string) {
  const filePath = path.join(lessonDir(courseId), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as LessonFrontmatter;
  return {
    meta: {
      ...fm,
      slug,
      course: courseId,
      path: `/learn/${courseId}/${slug}`,
    } satisfies LessonMeta,
    content,
  };
}

export function getAdjacentLessons(courseId: string, slug: string) {
  const lessons = getCourseLessons(courseId);
  const index = lessons.findIndex((l) => l.slug === slug);
  return {
    prev: index > 0 ? lessons[index - 1] : null,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : null,
  };
}

export function getFirstLessonPath(): string | null {
  const foundations = getCourseLessons("foundations");
  if (foundations.length === 0) return null;
  return foundations[0].path;
}
