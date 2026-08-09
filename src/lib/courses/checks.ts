import type { CheckItem } from "@/components/understanding-checks";

export const FOUNDATION_CHECKS: Record<string, CheckItem[]> = {
  "what-numbers-are": [
    {
      id: "n1",
      prompt:
        "What does place value primarily buy you that tally marks alone do not?",
      options: [
        "Pretty symbols that look modern",
        "A compact way to encode magnitude using position, so the same digit means different amounts in different places",
        "The ability to avoid ever using zero",
        "A guarantee that every culture uses base 10",
      ],
      answerIndex: 1,
      explanation:
        "In a place-value system, a digit’s meaning depends on where it sits. That is why 203 can mean two hundreds and three ones with nothing in the tens place — something tallies struggle to express cleanly.",
    },
    {
      id: "n2",
      prompt:
        "Brahmagupta’s lasting contribution around zero was mainly that he…",
      options: [
        "Invented the circle symbol for the first time anywhere on Earth",
        "Proved that division by zero is always zero",
        "Wrote explicit arithmetic rules treating zero (and negatives) as numbers you can compute with",
        "Banned negative numbers from astronomy",
      ],
      answerIndex: 2,
      explanation:
        "Place-holder zeros existed in multiple traditions. Brahmagupta’s Brāhmasphuṭasiddhānta (628) stands out for stating rules for zero and signed numbers in calculation — even though some of those rules (notably division by zero) do not match modern mathematics.",
    },
  ],
  "operations-as-transformations": [
    {
      id: "o1",
      prompt: "Why is multiplication more than “a fancy name for repeated addition”?",
      options: [
        "Because multiplication never relates to addition at all",
        "Because it scales or combines quantities — repeated addition is one model that works for whole numbers, but the idea generalizes to scaling, areas, and rates",
        "Because addition is not a transformation",
        "Because calculators refuse to use addition",
      ],
      answerIndex: 1,
      explanation:
        "For whole numbers, $3 \\times 4$ can be three copies of four. The deeper idea is scaling and structure: the same operation later describes areas, rates, and linear maps — far beyond counting copies.",
    },
    {
      id: "o2",
      prompt:
        "If an operation is invertible, what does that buy you when solving problems?",
      options: [
        "You can always undo the step and recover the previous state",
        "The answer must be a whole number",
        "You never need parentheses",
        "Division becomes unnecessary forever",
      ],
      answerIndex: 0,
      explanation:
        "Addition and subtraction undo each other (on the integers). Multiplication and division undo each other when the multiplier is nonzero. Invertibility is how you reverse-engineer unknowns.",
    },
  ],
  "fractions-and-ratios": [
    {
      id: "f1",
      prompt: "What is the core idea of a ratio, stripped of notation?",
      options: [
        "A decorative slash between two numbers",
        "A comparison of two magnitudes of the same kind — how one relates to the other by relative size",
        "Always a number strictly between 0 and 1",
        "A synonym for subtraction",
      ],
      answerIndex: 1,
      explanation:
        "A ratio compares two quantities of the same kind. Euclid’s Book V develops when two such comparisons are the same — which is the ancestor of thinking carefully about proportions and, later, rates and probabilities.",
    },
    {
      id: "f2",
      prompt:
        "Why do fractions matter so much for probability and machine learning later?",
      options: [
        "Because neural nets only store fractions in memory",
        "Because probabilities, frequencies, and many losses are comparisons of parts to wholes — the same language as ratios",
        "Because integers are illegal in AI",
        "Because Euclid invented softmax",
      ],
      answerIndex: 1,
      explanation:
        "A probability is a normalized measure of relative weight. Confusion matrices, precision, recall, and class frequencies are all ratio language. Fractions are not a side topic — they are the dialect of relative quantity.",
    },
  ],
  "variables-and-unknowns": [
    {
      id: "v1",
      prompt: "What is a variable, at first principles?",
      options: [
        "A letter that always means 0",
        "A named slot for a quantity that can take different values (or that we have not fixed yet)",
        "A decoration used only in calculus",
        "A synonym for “answer key”",
      ],
      answerIndex: 1,
      explanation:
        "A variable is a name for a quantity whose value is not fixed in the statement. That naming power lets you talk about relationships before you know the numbers.",
    },
    {
      id: "v2",
      prompt:
        "How does al-Khwārizmī’s “restoration and balancing” connect to modern equation solving?",
      options: [
        "It has no connection; algebra was invented in Europe in 1900",
        "It is an early systematic method for rearranging equations — moving terms and simplifying until the unknown is isolated",
        "It only works for geometry constructions",
        "It replaces numbers with poetry",
      ],
      answerIndex: 1,
      explanation:
        "His Kitāb al-jabr wa-l-muqābala gives procedures for reducing problems to standard forms by restoring (al-jabr) and balancing (al-muqābala) — the conceptual ancestor of isolating an unknown.",
    },
  ],
};

export function getLessonChecks(courseId: string, slug: string): CheckItem[] {
  if (courseId !== "foundations") return [];
  return FOUNDATION_CHECKS[slug] ?? [];
}
