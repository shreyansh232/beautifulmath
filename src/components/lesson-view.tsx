import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { UnderstandingChecks, type CheckItem } from "@/components/understanding-checks";
import { FurtherReading } from "@/components/further-reading";
import { TrackLessonVisit } from "@/components/lesson-progress";
import type { LessonMeta } from "@/lib/courses/types";
import { courseTitle } from "@/lib/courses/types";
import type { ReactNode } from "react";

type Props = {
  meta: LessonMeta;
  body: ReactNode;
  checks: CheckItem[];
  prev: LessonMeta | null;
  next: LessonMeta | null;
  prerequisiteLessons?: LessonMeta[];
};

export function LessonView({
  meta,
  body,
  checks,
  prev,
  next,
  prerequisiteLessons = [],
}: Props) {
  return (
    <article className="mx-auto w-full max-w-[90rem] px-6 py-10 lg:px-10 lg:py-12">
      <TrackLessonVisit courseId={meta.course} slug={meta.slug} />

      <div className="mb-10 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground no-underline hover:text-foreground hover:opacity-100"
        >
          <ArrowLeft className="size-3.5" />
          Path
        </Link>
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {courseTitle(meta.course)} · Lesson {meta.order}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
          {meta.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {meta.summary}
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            ~{meta.estimatedMinutes} min
          </span>
          {meta.curiositySeeds.slice(0, 2).map((seed) => (
            <span key={seed} className="text-foreground/80">
              {seed}
            </span>
          ))}
        </p>
        {prerequisiteLessons.length > 0 ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <span className="text-foreground/80">Before this: </span>
            {prerequisiteLessons.map((lesson, i) => (
              <span key={lesson.path}>
                {i > 0 ? ", " : null}
                <Link
                  href={lesson.path}
                  className="underline underline-offset-2"
                >
                  {lesson.title}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)]">
        <div className="min-w-0 order-2 lg:order-1">
          <div className="lesson-prose max-w-3xl">{body}</div>

          {meta.furtherReading && meta.furtherReading.length > 0 ? (
            <FurtherReading sources={meta.furtherReading} />
          ) : null}

          <div className="max-w-3xl">
            <UnderstandingChecks
              courseId={meta.course}
              slug={meta.slug}
              checks={checks}
            />
          </div>

          <nav className="mt-14 flex max-w-3xl items-center justify-between gap-4 border-t border-border pt-8">
            {prev ? (
              <Link
                href={prev.path}
                className="flex flex-col items-start gap-1 text-foreground no-underline hover:opacity-100"
              >
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <ArrowLeft className="size-3" /> Previous
                </span>
                <span className="text-sm font-medium">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={next.path}
                className="flex flex-col items-end gap-1 text-foreground no-underline hover:opacity-100"
              >
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  Next <ArrowRight className="size-3" />
                </span>
                <span className="text-sm font-medium">{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>

        <aside className="order-1 border-t border-border pt-5 lg:sticky lg:top-20 lg:order-2 lg:self-start lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Lesson threads
          </p>
          <div className="mt-5 space-y-7">
            <Thread label="Real world" body={meta.realWorld} />
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Mathematician
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {meta.mathematician.name}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {meta.mathematician.years}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                {meta.mathematician.vignette}
              </p>
            </div>
            {meta.aiMlHook && (
              <Thread label="AI / ML bridge" body={meta.aiMlHook} />
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}

function Thread({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
