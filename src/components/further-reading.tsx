import type { LessonMeta } from "@/lib/courses/types";

type Props = {
  sources: NonNullable<LessonMeta["furtherReading"]>;
};

export function FurtherReading({ sources }: Props) {
  if (!sources.length) return null;

  return (
    <section className="mt-12 max-w-3xl border-t border-border pt-10">
      <h2 className="text-xl font-semibold tracking-tight">Read more</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Go deeper when curiosity hits - videos, essays, and primary trails.
      </p>
      <ul className="mt-5 space-y-3">
        {sources.map((source) => (
          <li key={source.url} className="text-[15px] leading-relaxed">
            <span className="mr-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {source.kind}
            </span>
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              {source.title}
            </a>
            {source.note ? (
              <span className="mt-0.5 block text-sm text-muted-foreground">
                {source.note}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
