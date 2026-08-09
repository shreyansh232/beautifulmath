"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Check } from "lucide-react";
import { notifyProgressChanged, useProgress } from "@/components/continue-learning";
import {
  isLessonComplete,
  setLastLesson,
} from "@/lib/progress";
import { lessonKey } from "@/lib/courses/types";
import { cn } from "@/lib/utils";

type LessonRowProps = {
  courseId: string;
  slug: string;
  title: string;
  summary: string;
  order: number;
  href: string;
};

export function LessonRow({
  courseId,
  slug,
  title,
  summary,
  order,
  href,
}: LessonRowProps) {
  const progress = useProgress();
  const key = lessonKey(courseId, slug);
  const done = isLessonComplete(key, progress);

  return (
    <Link
      href={href}
      className={cn(
        "group grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 py-4 text-foreground no-underline transition-colors",
        "hover:opacity-100 sm:grid-cols-[2rem_minmax(0,14rem)_minmax(0,1fr)]",
      )}
    >
      <span className="pt-0.5 text-sm tabular-nums text-muted-foreground">
        {done ? <Check className="size-4 text-success" /> : String(order).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold tracking-tight text-foreground group-hover:underline group-hover:underline-offset-2">
          {title}
        </h3>
        {done && (
          <p className="mt-0.5 text-xs text-muted-foreground">Completed</p>
        )}
      </div>
      <p className="col-span-2 mt-1 text-sm leading-relaxed text-muted-foreground sm:col-span-1 sm:mt-0 sm:pt-0.5">
        {summary}
      </p>
    </Link>
  );
}

export function TrackLessonVisit({
  courseId,
  slug,
}: {
  courseId: string;
  slug: string;
}) {
  useEffect(() => {
    setLastLesson(lessonKey(courseId, slug));
    notifyProgressChanged();
  }, [courseId, slug]);
  return null;
}
