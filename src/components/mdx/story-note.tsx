import type { ReactNode } from "react";

/** Pull-quote story block for attributed anecdotes (e.g. Strogatz, The Joy of X). */
export function StoryNote({
  title = "From The Joy of X",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 border-l-2 border-ember/70 pl-4">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <div className="mt-2 space-y-3 text-[15px] leading-7 text-foreground/90 [&>div]:mt-0">
        {children}
      </div>
    </aside>
  );
}
