"use client";

import { useState } from "react";
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

export function UnderstandingChecks({ courseId, slug, checks }: Props) {
  const [selected, setSelected] = useState<Record<string, number | null>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const allCorrect =
    checks.length > 0 &&
    checks.every(
      (c) => revealed[c.id] && selected[c.id] === c.answerIndex,
    );

  function reveal(id: string) {
    setRevealed((r) => ({ ...r, [id]: true }));
  }

  function complete() {
    markLessonComplete(lessonKey(courseId, slug));
    notifyProgressChanged();
  }

  return (
    <section className="mt-12 space-y-10">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Check your understanding
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Short questions - no timer, no scoreboard. Just see if the idea stuck.
        </p>
      </div>

      {checks.map((check, index) => {
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {correct ? "Yes. " : "Not quite - "}
                  {check.explanation}
                </p>
              )}
            </div>
          </fieldset>
        );
      })}

      {allCorrect && (
        <Button onClick={complete}>Mark lesson complete</Button>
      )}
    </section>
  );
}
