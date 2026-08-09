import type { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

/** One active prediction / decision / micro-investigation per chapter. */
export function TurningPoint({
  title = "Before you read on",
  children,
}: Props) {
  return (
    <aside className="my-8 border-y border-border py-5">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        Turning point
      </p>
      <p className="mt-2 text-sm font-medium text-foreground">{title}</p>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-foreground/90 [&_em]:italic">
        {children}
      </div>
    </aside>
  );
}
