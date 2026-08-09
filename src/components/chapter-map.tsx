"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Heading = { id: string; text: string };

type Props = {
  /** CSS selector for the prose root that contains h2 headings */
  rootSelector?: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function ChapterMap({ rootSelector = ".lesson-prose" }: Props) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll("h2"));
    const mapped: Heading[] = nodes.map((node, index) => {
      const text = node.textContent?.trim() || `Section ${index + 1}`;
      if (!node.id) node.id = slugify(text) || `section-${index + 1}`;
      return { id: node.id, text };
    });
    setHeadings(mapped);

    if (mapped.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [rootSelector]);

  const items = useMemo(() => headings.slice(0, 12), [headings]);

  if (items.length < 3) return null;

  return (
    <nav aria-label="Chapter map" className="mt-6">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        Chapter map
      </p>
      <ol className="mt-3 space-y-1.5">
        {items.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block text-sm leading-snug no-underline hover:text-foreground hover:opacity-100",
                active === h.id
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
