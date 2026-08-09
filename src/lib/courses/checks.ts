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
        "In a place-value system, a digit's meaning depends on where it sits. That is why 203 can mean two hundreds and three ones with nothing in the tens place - something tallies struggle to express cleanly.",
    },
    {
      id: "n2",
      prompt:
        "Brahmagupta's lasting contribution around zero was mainly that he…",
      options: [
        "Invented the circle symbol for the first time anywhere on Earth",
        "Proved that division by zero is always zero",
        "Wrote explicit arithmetic rules treating zero (and negatives) as numbers you can compute with",
        "Banned negative numbers from astronomy",
      ],
      answerIndex: 2,
      explanation:
        "Place-holder zeros existed in multiple traditions. Brahmagupta's Brāhmasphuṭasiddhānta (628) stands out for stating rules for zero and signed numbers in calculation - even though some of those rules (notably division by zero) do not match modern mathematics.",
    },
  ],
  "operations-as-transformations": [
    {
      id: "o1",
      prompt: "Why is multiplication more than \"a fancy name for repeated addition\"?",
      options: [
        "Because multiplication never relates to addition at all",
        "Because it scales or combines quantities - repeated addition is one model that works for whole numbers, but the idea generalizes to scaling, areas, and rates",
        "Because addition is not a transformation",
        "Because calculators refuse to use addition",
      ],
      answerIndex: 1,
      explanation:
        "For whole numbers, $3 \\times 4$ can be three copies of four. The deeper idea is scaling and structure: the same operation later describes areas, rates, and linear maps - far beyond counting copies.",
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
        "A comparison of two magnitudes of the same kind - how one relates to the other by relative size",
        "Always a number strictly between 0 and 1",
        "A synonym for subtraction",
      ],
      answerIndex: 1,
      explanation:
        "A ratio compares two quantities of the same kind. Euclid's Book V develops when two such comparisons are the same - which is the ancestor of thinking carefully about proportions and, later, rates and probabilities.",
    },
    {
      id: "f2",
      prompt:
        "Why do fractions matter so much for probability and machine learning later?",
      options: [
        "Because neural nets only store fractions in memory",
        "Because probabilities, frequencies, and many losses are comparisons of parts to wholes - the same language as ratios",
        "Because integers are illegal in AI",
        "Because Euclid invented softmax",
      ],
      answerIndex: 1,
      explanation:
        "A probability is a normalized measure of relative weight. Confusion matrices, precision, recall, and class frequencies are all ratio language.",
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
        "A synonym for \"answer key\"",
      ],
      answerIndex: 1,
      explanation:
        "A variable is a name for a quantity whose value is not fixed in the statement. That naming power lets you talk about relationships before you know the numbers.",
    },
    {
      id: "v2",
      prompt:
        "How does al-Khwārizmī's \"restoration and balancing\" connect to modern equation solving?",
      options: [
        "It has no connection; algebra was invented in Europe in 1900",
        "It is an early systematic method for rearranging equations - moving terms and simplifying until the unknown is isolated",
        "It only works for geometry constructions",
        "It replaces numbers with poetry",
      ],
      answerIndex: 1,
      explanation:
        "His Kitāb al-jabr wa-l-muqābala gives procedures for reducing problems to standard forms by restoring (al-jabr) and balancing (al-muqābala) - the conceptual ancestor of isolating an unknown.",
    },
  ],
};

export const ALGEBRA_CHECKS: Record<string, CheckItem[]> = {
  "equations-as-relationships": [
    {
      id: "a1",
      prompt: "What is an equation claiming, at first principles?",
      options: [
        "That a variable must be zero",
        "That two expressions name the same amount",
        "That geometry is more important than algebra",
        "That every problem has infinitely many answers",
      ],
      answerIndex: 1,
      explanation:
        "Equality is a truth claim about quantities. Solving finds values that make the claim true.",
    },
    {
      id: "a2",
      prompt: "Why may we add the same number to both sides?",
      options: [
        "Because textbooks say so without reason",
        "Because addition by a constant is invertible and preserves equality",
        "Because it only works for positive numbers",
        "Because it changes the solution on purpose",
      ],
      answerIndex: 1,
      explanation:
        "If two amounts are equal, transforming both by the same invertible map keeps them equal.",
    },
  ],
  "systems-more-than-one-unknown": [
    {
      id: "s1",
      prompt: "Two distinct parallel lines as a linear system mean…",
      options: [
        "Infinitely many solutions",
        "Exactly one solution",
        "No solution (inconsistent)",
        "The system is quadratic",
      ],
      answerIndex: 2,
      explanation:
        "Parallel distinct lines never meet, so no common (x, y) satisfies both equations.",
    },
    {
      id: "s2",
      prompt: "Why does regression often have more equations than unknowns?",
      options: [
        "Because we want an exact unique intersection of all lines",
        "Because many data points overdetermine the parameters, so we minimize total error instead of satisfying every equation exactly",
        "Because matrices cannot be rectangular",
        "Because Gauss forbade overdetermined systems",
      ],
      answerIndex: 1,
      explanation:
        "Least squares finds the best compromise when you cannot hit every data equation exactly.",
    },
  ],
  "functions-as-machines": [
    {
      id: "fn1",
      prompt: "What must be true for f to be a function?",
      options: [
        "Every output appears exactly once",
        "Each allowed input gets exactly one output",
        "The graph must be a straight line",
        "f must be invertible",
      ],
      answerIndex: 1,
      explanation:
        "Unique output per input is the definition. Many inputs may share an output.",
    },
    {
      id: "fn2",
      prompt: "Composition (f ∘ g)(x) means…",
      options: [
        "f(x) times g(x)",
        "Apply g first, then f to the result",
        "Apply f first, then g always",
        "Add f and g",
      ],
      answerIndex: 1,
      explanation:
        "Feed x into g, then feed that result into f. Order usually matters.",
    },
  ],
  "graphs-seeing-relationships": [
    {
      id: "g1",
      prompt: "The graph of y = f(x) is…",
      options: [
        "Only the y-intercept",
        "The set of points (x, f(x)) in the plane",
        "Always a circle",
        "The derivative of f",
      ],
      answerIndex: 1,
      explanation:
        "Each input-output pair becomes a point. That is the graph.",
    },
    {
      id: "g2",
      prompt: "Descartes's analytic geometry mainly contributed…",
      options: [
        "Banning pictures from mathematics",
        "A systematic bridge between algebra and geometry via coordinates",
        "Inventing dice probability",
        "Proving all functions are linear",
      ],
      answerIndex: 1,
      explanation:
        "La Géométrie linked equations and curves so algebra and geometry translate.",
    },
  ],
};

export const CALCULUS_CHECKS: Record<string, CheckItem[]> = {
  "rates-of-change": [
    {
      id: "r1",
      prompt: "Average rate of change of f from a to b is…",
      options: [
        "f(a) + f(b)",
        "(f(b) - f(a)) / (b - a)",
        "f'(a) only",
        "The area under f",
      ],
      answerIndex: 1,
      explanation:
        "That is rise over run on the secant between the two points.",
    },
    {
      id: "r2",
      prompt: "Instantaneous rate is best described as…",
      options: [
        "A random guess",
        "The limiting slope of secants as the interval shrinks (when the limit exists)",
        "Always equal to f(a)",
        "Impossible to think about",
      ],
      answerIndex: 1,
      explanation:
        "Zoom in until the curve looks linear; that slope is the instantaneous rate.",
    },
  ],
  "the-derivative": [
    {
      id: "d1",
      prompt: "f'(a) represents…",
      options: [
        "The area under f up to a",
        "The slope of f at a",
        "f(a) squared",
        "A second copy of f",
      ],
      answerIndex: 1,
      explanation:
        "The derivative at a point is the instantaneous slope there.",
    },
    {
      id: "d2",
      prompt: "The chain rule matters for neural nets because…",
      options: [
        "Networks never compose functions",
        "Sensitivities multiply through composed layers",
        "It bans nonlinearities",
        "It replaces all matrices with scalars",
      ],
      answerIndex: 1,
      explanation:
        "Backprop is organized chain rule through the composed map from weights to loss.",
    },
  ],
  "accumulation-and-integrals": [
    {
      id: "i1",
      prompt: "A definite integral of a rate over time most naturally recovers…",
      options: [
        "Only the maximum rate",
        "Net accumulated change",
        "The derivative of the rate",
        "A probability that is always 1",
      ],
      answerIndex: 1,
      explanation:
        "Integrating a rate accumulates net change (signed area under the rate curve).",
    },
    {
      id: "i2",
      prompt: "Archimedes's exhaustion idea is closest to…",
      options: [
        "Ignoring approximation",
        "Trapping a quantity between controllable approximations that squeeze toward it",
        "Using only algebra with no geometry",
        "Rejecting limits forever",
      ],
      answerIndex: 1,
      explanation:
        "He refined approximations until only one value could fit - an ancestor of limit thinking.",
    },
  ],
  "gradients-and-learning": [
    {
      id: "gr1",
      prompt: "The gradient of a smooth function points (roughly) toward…",
      options: [
        "Steepest decrease",
        "Steepest increase",
        "A random direction",
        "Always the origin",
      ],
      answerIndex: 1,
      explanation:
        "∇f points to steepest ascent; descent follows -∇f.",
    },
    {
      id: "gr2",
      prompt: "In w ← w - η ∇L, the minus sign is there to…",
      options: [
        "Increase loss on purpose",
        "Move opposite the gradient to reduce loss",
        "Cancel the learning rate",
        "Turn vectors into scalars",
      ],
      answerIndex: 1,
      explanation:
        "Gradient ascent would increase L; training wants decrease, so step against ∇L.",
    },
  ],
};

export const LINALG_CHECKS: Record<string, CheckItem[]> = {
  vectors: [
    {
      id: "vec1",
      prompt: "Which best captures what a vector is in this course?",
      options: [
        "Only a positive whole number",
        "Magnitude with direction, also representable as an ordered list of components",
        "A matrix with equal rows and columns only",
        "A probability that sums to 1",
      ],
      answerIndex: 1,
      explanation:
        "Arrows and coordinate lists are two views of the same idea.",
    },
    {
      id: "vec2",
      prompt: "Scaling a vector by -2…",
      options: [
        "Deletes it",
        "Reverses direction and doubles length",
        "Always makes it longer without flipping",
        "Turns it into a matrix",
      ],
      answerIndex: 1,
      explanation:
        "Negative scalars reverse direction; absolute value scales length.",
    },
  ],
  "matrices-as-linear-maps": [
    {
      id: "m1",
      prompt: "A linear map must…",
      options: [
        "Send zero to something nonzero",
        "Respect addition and scaling: T(au+bv) = aT(u)+bT(v)",
        "Be a parabola",
        "Ignore the origin",
      ],
      answerIndex: 1,
      explanation:
        "Linearity means additivity and homogeneity.",
    },
    {
      id: "m2",
      prompt: "The columns of A tell you…",
      options: [
        "Nothing geometric",
        "Where the standard basis vectors go under the map",
        "Only the determinant",
        "The learning rate",
      ],
      answerIndex: 1,
      explanation:
        "A e_i is the i-th column. That is the geometric key.",
    },
  ],
  "dot-products-and-projections": [
    {
      id: "dp1",
      prompt: "If u·v = 0 for nonzero vectors, they are…",
      options: [
        "Parallel",
        "Orthogonal (at right angles in the usual geometry)",
        "The same vector",
        "Undefined",
      ],
      answerIndex: 1,
      explanation:
        "Zero cosine means a right angle (in Euclidean interpretation).",
    },
    {
      id: "dp2",
      prompt: "Cosine similarity in ML is essentially…",
      options: [
        "A determinant",
        "A normalized dot product measuring alignment",
        "A replacement for probability",
        "Always equal to Euclidean distance",
      ],
      answerIndex: 1,
      explanation:
        "Normalize vectors, then take the dot product to get cosine of the angle.",
    },
  ],
  "bases-dimension-structure": [
    {
      id: "b1",
      prompt: "A basis of a space is…",
      options: [
        "Any dependent set",
        "An independent spanning set (unique coordinates for every vector)",
        "Always exactly two vectors",
        "A probability distribution",
      ],
      answerIndex: 1,
      explanation:
        "Independence plus spanning gives a coordinate system.",
    },
    {
      id: "b2",
      prompt: "Dimension counts…",
      options: [
        "The number of matrices in a book",
        "How many vectors appear in any basis of the space",
        "Only the ambient drawing dimension on paper",
        "The learning rate",
      ],
      answerIndex: 1,
      explanation:
        "All bases of a given space have the same size; that size is the dimension.",
    },
  ],
};

export const PROBABILITY_CHECKS: Record<string, CheckItem[]> = {
  "chance-and-probability": [
    {
      id: "p1",
      prompt: "In a fair six-sided die, P(rolling a 2) is…",
      options: ["1", "1/6", "2/6 always meaning certainty", "0"],
      answerIndex: 1,
      explanation:
        "One favorable outcome among six equally likely faces.",
    },
    {
      id: "p2",
      prompt: "Softmax in classifiers is used to…",
      options: [
        "Delete probabilities",
        "Turn scores into a distribution over classes",
        "Compute determinants",
        "Guarantee zero entropy",
      ],
      answerIndex: 1,
      explanation:
        "Softmax yields positive weights that sum to 1.",
    },
  ],
  "conditional-probability-and-bayes": [
    {
      id: "c1",
      prompt: "P(A|B) means…",
      options: [
        "Probability of B ignoring A",
        "Probability of A restricted to the world where B occurred",
        "Always equal to P(A)P(B)",
        "1 - P(A)",
      ],
      answerIndex: 1,
      explanation:
        "Conditioning renormalizes on the event B.",
    },
    {
      id: "c2",
      prompt: "Base rates matter for medical tests because…",
      options: [
        "Rare conditions can still yield many false positives even with accurate tests",
        "Priors never matter",
        "Bayes' rule is optional poetry",
        "Tests are always perfect",
      ],
      answerIndex: 0,
      explanation:
        "Without the prior, intuition about P(disease|positive) often fails.",
    },
  ],
  "expectation-and-loss": [
    {
      id: "e1",
      prompt: "Expectation of a discrete random variable is…",
      options: [
        "The maximum value only",
        "The probability-weighted average of its values",
        "Always an integer",
        "The variance squared",
      ],
      answerIndex: 1,
      explanation:
        "E[X] = Σ x p(x), the center of mass of the distribution.",
    },
    {
      id: "e2",
      prompt: "Empirical risk in ML is…",
      options: [
        "A type of GPU",
        "An average loss on observed data approximating expected loss",
        "Always zero after one step",
        "Unrelated to expectation",
      ],
      answerIndex: 1,
      explanation:
        "We approximate E[loss] with a sample average (empirical risk).",
    },
  ],
  "information-and-entropy": [
    {
      id: "h1",
      prompt: "Entropy of a sure outcome is…",
      options: ["Infinite", "0", "1 always", "Negative one"],
      answerIndex: 1,
      explanation:
        "No uncertainty, no expected surprisal.",
    },
    {
      id: "h2",
      prompt: "Cross-entropy loss for a one-hot label mainly penalizes…",
      options: [
        "The log probability the model assigns to the correct class (when small)",
        "Only the number of layers",
        "Matrix rank alone",
        "Learning rate schedule",
      ],
      answerIndex: 0,
      explanation:
        "With a one-hot target, H(p,q) reduces to -log q_correct.",
    },
  ],
};

const CHECKS_BY_COURSE: Record<string, Record<string, CheckItem[]>> = {
  foundations: FOUNDATION_CHECKS,
  algebra: ALGEBRA_CHECKS,
  "calculus-intuition": CALCULUS_CHECKS,
  "linear-algebra": LINALG_CHECKS,
  probability: PROBABILITY_CHECKS,
};

export function getLessonChecks(courseId: string, slug: string): CheckItem[] {
  return CHECKS_BY_COURSE[courseId]?.[slug] ?? [];
}
