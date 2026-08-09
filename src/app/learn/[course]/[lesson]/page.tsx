import { notFound } from "next/navigation";
import { LessonView } from "@/components/lesson-view";
import { renderLessonMdx } from "@/components/mdx/lesson-mdx";
import {
  getAdjacentLessons,
  getCourseLessons,
  getLessonContent,
  getLessonMeta,
  getLessonSlugs,
} from "@/lib/courses/content";
import { getLessonChecks } from "@/lib/courses/checks";
import { COURSES } from "@/lib/courses/types";

type PageProps = {
  params: Promise<{ course: string; lesson: string }>;
};

export function generateStaticParams() {
  return COURSES.filter((c) => c.status === "available").flatMap((course) =>
    getLessonSlugs(course.id).map((lesson) => ({
      course: course.id,
      lesson,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { course, lesson } = await params;
  const data = getLessonContent(course, lesson);
  if (!data) return { title: "Lesson · Beautiful Math" };
  return {
    title: `${data.meta.title} · Beautiful Math`,
    description: data.meta.summary,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { course, lesson } = await params;
  const data = getLessonContent(course, lesson);
  if (!data) notFound();

  const body = await renderLessonMdx(data.content);
  const { prev, next } = getAdjacentLessons(course, lesson);
  const checks = getLessonChecks(course, lesson);
  const prerequisiteLessons = (data.meta.prerequisites ?? [])
    .map((slug) => {
      if (slug.includes("/")) {
        const [c, s] = slug.split("/");
        return getLessonMeta(c, s);
      }
      return getLessonMeta(course, slug);
    })
    .filter((l): l is NonNullable<typeof l> => l !== null);

  // Ensure course has lessons registered (for typing / future use)
  void getCourseLessons(course);

  return (
    <LessonView
      meta={data.meta}
      body={body}
      checks={checks}
      prev={prev}
      next={next}
      prerequisiteLessons={prerequisiteLessons}
    />
  );
}
