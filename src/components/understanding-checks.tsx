"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { markLessonComplete } from "@/lib/progress";
import { notifyProgressChanged } from "@/components/continue-learning";
import { lessonKey } from "@/lib/courses/types";

export type CheckItem = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

type Props = {
  courseId: string;
  slug: string;
  checks: CheckItem[];
};

const CORE_COUNT = 5;

export function UnderstandingChecks({ courseId, slug, checks }: Props) {
  const core = useMemo(() => checks.slice(0, CORE_COUNT), [checks]);
  const deeper = useMemo(() => checks.slice(CORE_COUNT), [checks]);

  const [selected, setSelected] = useState<Record<string, number | null>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [showDeeper, setShowDeeper] = useState(false);
  const [done, setDone] = useState(false);

  const engagedCount = core.filter((c) => revealed[c.id]).length;
  const canComplete = engagedCount >= Math.min(3, core.length) || done;

  function reveal(id: string) {
    setRevealed((r) => ({ ...r, [id]: true }));
  }

  function retry(id: string) {
    setRevealed((r) => ({ ...r, [id]: false }));
    setSelected((s) => ({ ...s, [id]: null }));
  }

  function complete() {
    markLessonComplete(lessonKey(courseId, slug));
    notifyProgressChanged();
    setDone(true);
  }

  function renderCheck(check: CheckItem, index: number) {
    const picked = selected[check.id];
    const isOpen = revealed[check.id];
    const correct = picked === check.answerIndex;
    const groupName = `check-${check.id}`;

    return (
      <fieldset key={check.id} className="border-0 p-0">
        <legend className="text-[15px] font-medium leading-relaxed text-foreground">
          <span className="mr-2 text-muted-foreground">{index + 1}.</span>
          {check.prompt}
        </legend>

        <RadioGroup
          name={groupName}
          disabled={isOpen}
          value={picked == null ? undefined : String(picked)}
          onValueChange={(value) => {
            if (isOpen || value == null) return;
            setSelected((s) => ({ ...s, [check.id]: Number(value) }));
          }}
          className="mt-4 gap-0"
        >
          {check.options.map((option, i) => {
            const id = `${check.id}-${i}`;
            const isAnswer = i === check.answerIndex;
            const isPicked = picked === i;

            return (
              <div
                key={id}
                className="flex items-start gap-3 border-b border-border py-3 last:border-b-0"
              >
                <RadioGroupItem
                  id={id}
                  value={String(i)}
                  className="mt-0.5"
                />
                <Label
                  htmlFor={id}
                  className={cn(
                    "cursor-pointer text-sm font-normal leading-relaxed",
                    isOpen && isAnswer && "text-success",
                    isOpen && isPicked && !isAnswer && "text-destructive",
                    isOpen && !isPicked && !isAnswer && "opacity-50",
                    !isOpen && "text-foreground/90",
                  )}
                >
                  {option}
                </Label>
              </div>
            );
          })}
        </RadioGroup>

        <div className="mt-4">
          {!isOpen && (
            <Button
              size="sm"
              variant="secondary"
              disabled={picked == null}
              onClick={() => reveal(check.id)}
            >
              Check
            </Button>
          )}
          {isOpen && (
            <div className="mt-4 space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {correct ? "Yes. " : "Not quite - "}
                {check.explanation}
              </p>
              {!correct && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => retry(check.id)}
                >
                  Try again
                </Button>
              )}
            </div>
          )}
        </div>
      </fieldset>
    );
  }

  return (
    <section className="mt-12 space-y-10">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Check your understanding
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          A short learning loop - try a few, learn from misses, mark complete
          when you have engaged. No timer, no scoreboard.
        </p>
      </div>

      {checks.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Checks for this lesson are not wired yet.
        </p>
      ) : null}

      {core.map((check, index) => renderCheck(check, index))}

      {deeper.length > 0 ? (
        <div className="border-t border-border pt-6">
          {!showDeeper ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowDeeper(true)}
            >
              Show {deeper.length} more practice prompts
            </Button>
          ) : (
            <div className="space-y-10">
              <p className="text-sm text-muted-foreground">
                Extra prompts for a return visit.
              </p>
              {deeper.map((check, index) =>
                renderCheck(check, core.length + index),
              )}
            </div>
          )}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
        <Button onClick={complete} disabled={!canComplete || done}>
          {done ? "Marked complete" : "Mark lesson complete"}
        </Button>
        <Button
          variant="secondary"
          onClick={complete}
          disabled={done}
        >
          I&apos;ll return later
        </Button>
        {!canComplete && !done ? (
          <p className="text-sm text-muted-foreground">
            Try at least {Math.min(3, core.length)} core prompts, or choose
            I&apos;ll return later.
          </p>
        ) : null}
      </div>
    </section>
  );
}
