"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

/** Optional depth for a return visit - keeps the core path short. */
export function DeepPath({
  title = "Deep path (return visit)",
  children,
  defaultOpen = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="my-8 border-y border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 py-4 text-left"
        aria-expanded={open}
      >
        <span>
          <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Two-speed chapter
          </span>
          <span className="mt-1 block text-sm font-medium text-foreground">
            {title}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="border-t border-border pb-6 pt-2">{children}</div>
      ) : (
        <p className="pb-4 text-sm text-muted-foreground">
          Field notes, extra examples, and glossary live here when you want more
          than the core path.
        </p>
      )}
    </div>
  );
}
