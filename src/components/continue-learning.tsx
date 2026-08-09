"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  emptyProgress,
  readProgress,
  type ProgressState,
} from "@/lib/progress";

type Props = {
  fallbackHref: string;
};

export function ContinueLearning({ fallbackHref }: Props) {
  const [progress, setProgress] = useState<ProgressState | null>(null);

  useEffect(() => {
    setProgress(readProgress());
  }, []);

  if (!progress) {
    return (
      <Link
        href={fallbackHref}
        className={cn(
          buttonVariants({ size: "lg" }),
          "rounded-full px-5 no-underline hover:opacity-100",
        )}
      >
        Start Foundations
        <ArrowRight className="size-4" />
      </Link>
    );
  }

  const href = progress.lastLesson
    ? `/learn/${progress.lastLesson}`
    : fallbackHref;
  const label =
    progress.completed.length > 0 || progress.lastLesson
      ? "Continue learning"
      : "Start Foundations";

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ size: "lg" }),
        "rounded-full px-5 no-underline hover:opacity-100",
      )}
    >
      {label}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function useProgress(): ProgressState {
  const [progress, setProgress] = useState<ProgressState>(emptyProgress());

  useEffect(() => {
    setProgress(readProgress());
    const onStorage = () => setProgress(readProgress());
    window.addEventListener("storage", onStorage);
    window.addEventListener("beautifulmath-progress", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("beautifulmath-progress", onStorage);
    };
  }, []);

  return progress;
}

export function notifyProgressChanged() {
  window.dispatchEvent(new Event("beautifulmath-progress"));
}
