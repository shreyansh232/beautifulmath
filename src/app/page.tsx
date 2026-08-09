import Link from "next/link";
import { ContinueLearning } from "@/components/continue-learning";
import { LessonRow } from "@/components/lesson-progress";
import {
  getAllCourses,
  getCourseLessons,
  getFirstLessonPath,
} from "@/lib/courses/content";

export default function PathPage() {
  const courses = getAllCourses();
  const startHref = getFirstLessonPath() ?? "/";

  return (
    <div className="mx-auto w-full max-w-[90rem] px-6 py-12 lg:px-10 lg:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Your knowledge base
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-tight">
          Beautiful Math
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          A personal library for rebuilding math from first principles and
          returning to it. Each chapter is detailed on purpose: core ideas,
          stories that spark curiosity, real-world ties, and - when the link is
          honest - bridges into AI and ML.
        </p>
        <div className="mt-8">
          <ContinueLearning fallbackHref={startHref} />
        </div>
      </div>

      <section className="mt-16 space-y-14">
        {courses.map((course) => {
          const lessons = getCourseLessons(course.id);

          return (
            <div key={course.id}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border pb-3">
                <h2 className="text-xl font-semibold tracking-tight">
                  {course.title}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {lessons.length} lessons
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>

              <div className="mt-6 divide-y divide-border border-t border-border">
                {lessons.map((lesson) => (
                  <LessonRow
                    key={lesson.slug}
                    courseId={lesson.course}
                    slug={lesson.slug}
                    title={lesson.title}
                    summary={lesson.summary}
                    order={lesson.order}
                    href={lesson.path}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <p className="mt-16 text-sm text-muted-foreground">
        Prefer to jump in?{" "}
        <Link href={startHref} className="underline underline-offset-2">
          Open the first Foundations lesson
        </Link>
        .
      </p>
    </div>
  );
}
