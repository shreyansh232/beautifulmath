import type { ReactNode } from "react";

export function Diagram({
  caption,
  children,
}: {
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto border-y border-border py-5">
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Place value of 203 as stacked powers of ten */
export function PlaceValueDiagram() {
  return (
    <Diagram caption="Same digits, different places - position carries magnitude.">
      <svg
        viewBox="0 0 420 160"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Place value diagram for 203"
      >
        <text x="210" y="22" textAnchor="middle" className="fill-current" fontSize="14" fontWeight="600">
          203
        </text>
        {[
          { x: 70, digit: "2", place: "hundreds", value: "2 × 100" },
          { x: 210, digit: "0", place: "tens", value: "0 × 10" },
          { x: 350, digit: "3", place: "ones", value: "3 × 1" },
        ].map((col) => (
          <g key={col.place}>
            <rect
              x={col.x - 36}
              y={40}
              width="72"
              height="48"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.35"
            />
            <text
              x={col.x}
              y={70}
              textAnchor="middle"
              className="fill-current"
              fontSize="22"
              fontWeight="600"
            >
              {col.digit}
            </text>
            <text
              x={col.x}
              y="112"
              textAnchor="middle"
              className="fill-current"
              fontSize="11"
              opacity="0.7"
            >
              {col.place}
            </text>
            <text
              x={col.x}
              y="132"
              textAnchor="middle"
              className="fill-current"
              fontSize="11"
              opacity="0.7"
            >
              {col.value}
            </text>
          </g>
        ))}
      </svg>
    </Diagram>
  );
}

/** Number line with directed integers */
export function NumberLineDiagram() {
  return (
    <Diagram caption="Integers add direction: left of zero is debt / below / opposite.">
      <svg
        viewBox="0 0 440 90"
        className="mx-auto h-auto w-full max-w-lg text-foreground"
        role="img"
        aria-label="Number line from negative three to positive three"
      >
        <line
          x1="20"
          y1="45"
          x2="420"
          y2="45"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <polygon points="420,45 408,40 408,50" className="fill-current" />
        {[-3, -2, -1, 0, 1, 2, 3].map((n, i) => {
          const x = 50 + i * 55;
          return (
            <g key={n}>
              <line
                x1={x}
                y1="38"
                x2={x}
                y2="52"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y="72"
                textAnchor="middle"
                className="fill-current"
                fontSize="12"
              >
                {n}
              </text>
            </g>
          );
        })}
      </svg>
    </Diagram>
  );
}

/** Multiplication as scaling / area */
export function ScalingDiagram() {
  return (
    <Diagram caption="3 × 4 as an array: three rows of four - rearrange and the count stays.">
      <svg
        viewBox="0 0 280 160"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Three by four grid of dots"
      >
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <circle
              key={`${row}-${col}`}
              cx={40 + col * 50}
              cy={30 + row * 40}
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          )),
        )}
        <text x="140" y="150" textAnchor="middle" className="fill-current" fontSize="12" opacity="0.75">
          3 rows × 4 columns = 12
        </text>
      </svg>
    </Diagram>
  );
}

/** Invertible shift on a number line */
export function InverseOpsDiagram() {
  return (
    <Diagram caption="Add 5, then subtract 5 - the arrow undoes the arrow.">
      <svg
        viewBox="0 0 400 110"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Adding five then subtracting five on a number line"
      >
        <line x1="30" y1="55" x2="370" y2="55" stroke="currentColor" strokeWidth="1.5" />
        {[
          { x: 80, label: "x" },
          { x: 200, label: "x+5" },
          { x: 320, label: "x" },
        ].map((p) => (
          <g key={p.x + p.label}>
            <circle cx={p.x} cy="55" r="5" className="fill-current" />
            <text
              x={p.x}
              y="80"
              textAnchor="middle"
              className="fill-current"
              fontSize="12"
            >
              {p.label}
            </text>
          </g>
        ))}
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" />
          </marker>
        </defs>
        <path
          d="M90 40 C130 18, 150 18, 190 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          markerEnd="url(#arrow)"
        />
        <text x="140" y="22" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.75">
          +5
        </text>
        <path
          d="M210 70 C250 92, 270 92, 310 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          markerEnd="url(#arrow)"
        />
        <text x="260" y="100" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.75">
          −5
        </text>
      </svg>
    </Diagram>
  );
}

/** Part-whole fraction and equivalent ratio */
export function RatioDiagram() {
  return (
    <Diagram caption="Three of four equal parts - same relative size as six of eight.">
      <svg
        viewBox="0 0 400 130"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Two bars showing three fourths and six eighths"
      >
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={`a-${i}`}
            x={20 + i * 40}
            y={24}
            width="36"
            height="28"
            fill={i < 3 ? "currentColor" : "none"}
            fillOpacity={i < 3 ? 0.2 : 0}
            stroke="currentColor"
            strokeWidth="1.25"
          />
        ))}
        <text x="100" y="72" textAnchor="middle" className="fill-current" fontSize="12">
          3/4
        </text>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={`b-${i}`}
            x={200 + i * 22}
            y={24}
            width="20"
            height="28"
            fill={i < 6 ? "currentColor" : "none"}
            fillOpacity={i < 6 ? 0.2 : 0}
            stroke="currentColor"
            strokeWidth="1.25"
          />
        ))}
        <text x="288" y="72" textAnchor="middle" className="fill-current" fontSize="12">
          6/8
        </text>
        <text x="200" y="110" textAnchor="middle" className="fill-current" fontSize="12" opacity="0.75">
          same ratio - different clothes
        </text>
      </svg>
    </Diagram>
  );
}

/** Balance scale for equations */
export function BalanceDiagram() {
  return (
    <Diagram caption="An equation is a balance: do the same invertible thing to both sides.">
      <svg
        viewBox="0 0 360 150"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Balance scale for two x plus three equals eleven"
      >
        <line x1="180" y1="30" x2="180" y2="70" stroke="currentColor" strokeWidth="1.5" />
        <line x1="60" y1="70" x2="300" y2="70" stroke="currentColor" strokeWidth="1.5" />
        <line x1="60" y1="70" x2="60" y2="88" stroke="currentColor" strokeWidth="1.5" />
        <line x1="300" y1="70" x2="300" y2="88" stroke="currentColor" strokeWidth="1.5" />
        <rect x="20" y="88" width="80" height="36" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <rect x="260" y="88" width="80" height="36" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <text x="60" y="111" textAnchor="middle" className="fill-current" fontSize="13">
          2x + 3
        </text>
        <text x="300" y="111" textAnchor="middle" className="fill-current" fontSize="13">
          11
        </text>
        <polygon points="180,70 172,62 188,62" className="fill-current" />
      </svg>
    </Diagram>
  );
}

/** Function as input to output machine */
export function FunctionMachineDiagram() {
  return (
    <Diagram caption="A function assigns exactly one output to each allowed input.">
      <svg
        viewBox="0 0 420 100"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Function machine from x to f of x"
      >
        <text x="40" y="55" className="fill-current" fontSize="16">
          x
        </text>
        <line x1="70" y1="50" x2="130" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="130,50 120,45 120,55" className="fill-current" />
        <rect x="140" y="25" width="140" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="210" y="55" textAnchor="middle" className="fill-current" fontSize="14">
          f
        </text>
        <line x1="280" y1="50" x2="340" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="340,50 330,45 330,55" className="fill-current" />
        <text x="370" y="55" className="fill-current" fontSize="16">
          f(x)
        </text>
      </svg>
    </Diagram>
  );
}

/** Simple line graph y = 2x + 1 */
export function LineGraphDiagram() {
  return (
    <Diagram caption="Each x maps to one y. The graph is the set of those pairs in the plane.">
      <svg
        viewBox="0 0 280 220"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Graph of y equals 2x plus 1"
      >
        <line x1="40" y1="180" x2="250" y2="180" stroke="currentColor" strokeWidth="1.25" />
        <line x1="40" y1="180" x2="40" y2="20" stroke="currentColor" strokeWidth="1.25" />
        <line x1="60" y1="160" x2="200" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="120" r="3.5" className="fill-current" />
        <circle cx="140" cy="80" r="3.5" className="fill-current" />
        <text x="250" y="195" textAnchor="end" className="fill-current" fontSize="11" opacity="0.7">
          x
        </text>
        <text x="28" y="28" className="fill-current" fontSize="11" opacity="0.7">
          y
        </text>
        <text x="140" y="210" textAnchor="middle" className="fill-current" fontSize="12" opacity="0.75">
          y = 2x + 1
        </text>
      </svg>
    </Diagram>
  );
}

/** Slope as rise over run */
export function SlopeDiagram() {
  return (
    <Diagram caption="Slope is rise over run: how much y changes when x changes by 1 (locally).">
      <svg
        viewBox="0 0 300 180"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Rise over run on a line segment"
      >
        <line x1="40" y1="140" x2="240" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="80" y1="120" x2="180" y2="120" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 3" />
        <line x1="180" y1="120" x2="180" y2="70" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 3" />
        <circle cx="80" cy="120" r="3.5" className="fill-current" />
        <circle cx="180" cy="70" r="3.5" className="fill-current" />
        <text x="130" y="138" textAnchor="middle" className="fill-current" fontSize="12">
          run
        </text>
        <text x="198" y="98" className="fill-current" fontSize="12">
          rise
        </text>
      </svg>
    </Diagram>
  );
}

/** Area under a curve as accumulation */
export function AreaUnderCurveDiagram() {
  return (
    <Diagram caption="An integral accumulates area (signed) under a graph - totaling change.">
      <svg
        viewBox="0 0 300 180"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Area under a curve approximated by rectangles"
      >
        <line x1="30" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1.25" />
        <line x1="30" y1="150" x2="30" y2="20" stroke="currentColor" strokeWidth="1.25" />
        {[
          [50, 110],
          [90, 85],
          [130, 70],
          [170, 60],
          [210, 55],
        ].map(([x, h], i) => (
          <rect
            key={x}
            x={x}
            y={150 - h}
            width="32"
            height={h}
            fill="currentColor"
            fillOpacity={0.12 + i * 0.04}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        <path
          d="M50 40 Q 140 20 242 95"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </Diagram>
  );
}

/** Two vectors in the plane */
export function VectorDiagram() {
  return (
    <Diagram caption="A vector is magnitude plus direction - an arrow, or a list of coordinates.">
      <svg
        viewBox="0 0 280 200"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Two vectors from the origin"
      >
        <line x1="40" y1="160" x2="250" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="40" y1="160" x2="40" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <defs>
          <marker id="vec" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" />
          </marker>
        </defs>
        <line x1="40" y1="160" x2="180" y2="100" stroke="currentColor" strokeWidth="1.75" markerEnd="url(#vec)" />
        <line x1="40" y1="160" x2="120" y2="50" stroke="currentColor" strokeWidth="1.75" markerEnd="url(#vec)" />
        <text x="190" y="95" className="fill-current" fontSize="12">
          v
        </text>
        <text x="125" y="48" className="fill-current" fontSize="12">
          w
        </text>
      </svg>
    </Diagram>
  );
}

/** Matrix transforming a square */
export function MatrixMapDiagram() {
  return (
    <Diagram caption="A matrix is a packed linear map: it sends every vector to another by multiply-and-add.">
      <svg
        viewBox="0 0 400 140"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Square mapped to a parallelogram"
      >
        <rect x="40" y="40" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="70" y="120" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.7">
          input
        </text>
        <line x1="120" y1="70" x2="200" y2="70" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="200,70 190,65 190,75" className="fill-current" />
        <text x="160" y="58" textAnchor="middle" className="fill-current" fontSize="12">
          A
        </text>
        <polygon
          points="240,50 320,40 340,100 260,110"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text x="290" y="130" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.7">
          output
        </text>
      </svg>
    </Diagram>
  );
}

/** Probability as shaded fraction of outcomes */
export function ProbabilityDiagram() {
  return (
    <Diagram caption="Probability weights outcomes. Equal outcomes: favorable count over total count.">
      <svg
        viewBox="0 0 320 100"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Six boxes with two shaded"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x={20 + i * 48}
            y={25}
            width="40"
            height="40"
            fill={i < 2 ? "currentColor" : "none"}
            fillOpacity={i < 2 ? 0.2 : 0}
            stroke="currentColor"
            strokeWidth="1.25"
          />
        ))}
        <text x="160" y="90" textAnchor="middle" className="fill-current" fontSize="12" opacity="0.75">
          2 of 6 shaded → probability 1/3
        </text>
      </svg>
    </Diagram>
  );
}

/** Softmax / distribution bars */
export function DistributionDiagram() {
  return (
    <Diagram caption="A discrete distribution is a list of non-negative weights that sum to 1.">
      <svg
        viewBox="0 0 300 150"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Three probability bars summing to one"
      >
        {[
          { x: 50, h: 90, label: "0.5" },
          { x: 130, h: 54, label: "0.3" },
          { x: 210, h: 36, label: "0.2" },
        ].map((b) => (
          <g key={b.x}>
            <rect
              x={b.x}
              y={120 - b.h}
              width="40"
              height={b.h}
              fill="currentColor"
              fillOpacity="0.2"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <text x={b.x + 20} y="138" textAnchor="middle" className="fill-current" fontSize="11">
              {b.label}
            </text>
          </g>
        ))}
      </svg>
    </Diagram>
  );
}

/** Angle formed by two rays */
export function AngleDiagram() {
  return (
    <Diagram caption="An angle is a turn: how much one ray has rotated away from another.">
      <svg
        viewBox="0 0 320 180"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Two rays meeting at a vertex with an angle marked"
      >
        <line x1="40" y1="140" x2="280" y2="140" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="140" x2="220" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M 100 140 A 60 60 0 0 0 148 88"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.7"
        />
        <text x="130" y="118" className="fill-current" fontSize="13">
          θ
        </text>
        <circle cx="40" cy="140" r="3" className="fill-current" />
        <text x="28" y="160" className="fill-current" fontSize="11" opacity="0.7">
          vertex
        </text>
      </svg>
    </Diagram>
  );
}

/** Labeled triangle */
export function TriangleDiagram() {
  return (
    <Diagram caption="A triangle is three points joined by three segments. Sides and angles lock together.">
      <svg
        viewBox="0 0 320 200"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Triangle ABC with side labels"
      >
        <polygon
          points="60,160 260,160 160,40"
          fill="currentColor"
          fillOpacity="0.06"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text x="50" y="178" className="fill-current" fontSize="13" fontWeight="600">
          A
        </text>
        <text x="262" y="178" className="fill-current" fontSize="13" fontWeight="600">
          B
        </text>
        <text x="154" y="30" className="fill-current" fontSize="13" fontWeight="600">
          C
        </text>
        <text x="150" y="178" textAnchor="middle" className="fill-current" fontSize="12" opacity="0.75">
          c
        </text>
        <text x="90" y="100" className="fill-current" fontSize="12" opacity="0.75">
          b
        </text>
        <text x="210" y="100" className="fill-current" fontSize="12" opacity="0.75">
          a
        </text>
      </svg>
    </Diagram>
  );
}

/** Right triangle with squares on sides (Pythagoras intuition) */
export function PythagorasDiagram() {
  return (
    <Diagram caption="On a right triangle, the square on the hypotenuse matches the sum of the squares on the legs.">
      <svg
        viewBox="0 0 360 260"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Right triangle with squares on each side"
      >
        {/* triangle 3-4-5 scaled */}
        <polygon
          points="80,180 200,180 80,90"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* right angle mark */}
        <path d="M 80 165 L 95 165 L 95 180" fill="none" stroke="currentColor" strokeWidth="1" />
        {/* square on horizontal leg (length 120) */}
        <rect
          x="80"
          y="180"
          width="120"
          height="60"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <text x="140" y="215" textAnchor="middle" className="fill-current" fontSize="12">
          a²
        </text>
        {/* square on vertical leg (length 90) */}
        <rect
          x="20"
          y="90"
          width="60"
          height="90"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <text x="50" y="140" textAnchor="middle" className="fill-current" fontSize="12">
          b²
        </text>
        {/* square on hypotenuse - simplified parallelogram-ish square tilted */}
        <polygon
          points="200,180 290,120 210,30 120,90"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <text x="210" y="110" textAnchor="middle" className="fill-current" fontSize="12">
          c²
        </text>
      </svg>
    </Diagram>
  );
}

/** Circle with radius and area hint */
export function CircleDiagram() {
  return (
    <Diagram caption="A circle is all points at a fixed distance (the radius) from a center. Area grows with the square of that radius.">
      <svg
        viewBox="0 0 300 220"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Circle with radius drawn"
      >
        <circle
          cx="150"
          cy="110"
          r="70"
          fill="currentColor"
          fillOpacity="0.06"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="150" cy="110" r="3" className="fill-current" />
        <line x1="150" y1="110" x2="220" y2="110" stroke="currentColor" strokeWidth="1.5" />
        <text x="180" y="102" className="fill-current" fontSize="12">
          r
        </text>
        <text x="150" y="200" textAnchor="middle" className="fill-current" fontSize="12" opacity="0.75">
          A = π r²
        </text>
      </svg>
    </Diagram>
  );
}

/** Right triangle with opposite / adjacent / hypotenuse */
export function RightTriangleTrigDiagram() {
  return (
    <Diagram caption="Fix an acute angle. Opposite, adjacent, and hypotenuse name the sides relative to that angle.">
      <svg
        viewBox="0 0 320 200"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Right triangle with trig side labels"
      >
        <polygon
          points="50,160 250,160 50,50"
          fill="currentColor"
          fillOpacity="0.06"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M 50 145 L 65 145 L 65 160" fill="none" stroke="currentColor" strokeWidth="1" />
        <path
          d="M 80 160 A 30 30 0 0 0 72 133"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.7"
        />
        <text x="88" y="148" className="fill-current" fontSize="13">
          θ
        </text>
        <text x="150" y="178" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.8">
          adjacent
        </text>
        <text x="28" y="110" className="fill-current" fontSize="11" opacity="0.8">
          opposite
        </text>
        <text x="160" y="95" className="fill-current" fontSize="11" opacity="0.8">
          hypotenuse
        </text>
      </svg>
    </Diagram>
  );
}

/** Unit circle with angle and point */
export function UnitCircleDiagram() {
  return (
    <Diagram caption="On the unit circle, the point at angle θ is (cos θ, sin θ).">
      <svg
        viewBox="0 0 300 280"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Unit circle with cosine and sine projections"
      >
        <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="150" y1="30" x2="150" y2="270" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle
          cx="150"
          cy="150"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* point at about 50 degrees */}
        <line x1="150" y1="150" x2="201" y2="89" stroke="currentColor" strokeWidth="1.5" />
        <line x1="201" y1="150" x2="201" y2="89" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
        <line x1="150" y1="150" x2="201" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
        <circle cx="201" cy="89" r="4" className="fill-current" />
        <path
          d="M 190 150 A 40 40 0 0 0 176 118"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.7"
        />
        <text x="198" y="132" className="fill-current" fontSize="12">
          θ
        </text>
        <text x="175" y="168" className="fill-current" fontSize="11" opacity="0.8">
          cos θ
        </text>
        <text x="210" y="120" className="fill-current" fontSize="11" opacity="0.8">
          sin θ
        </text>
      </svg>
    </Diagram>
  );
}

/** Simple sine wave */
export function SineWaveDiagram() {
  return (
    <Diagram caption="As θ runs, sin θ oscillates between -1 and 1. Same pattern, forever repeating.">
      <svg
        viewBox="0 0 360 140"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Sine wave over one period"
      >
        <line x1="20" y1="70" x2="340" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <path
          d="M 20 70 C 50 20, 80 20, 110 70 S 170 120, 200 70 S 260 20, 290 70 S 340 120, 340 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <text x="110" y="128" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.7">
          π
        </text>
        <text x="200" y="128" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.7">
          2π
        </text>
        <text x="40" y="28" className="fill-current" fontSize="12" opacity="0.8">
          sin θ
        </text>
      </svg>
    </Diagram>
  );
}

/** Nested number systems sketch */
export function NumberHierarchyDiagram() {
  return (
    <Diagram caption="Number systems nest: naturals inside integers inside rationals inside reals (sketch, not a literal set diagram).">
      <svg
        viewBox="0 0 340 200"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Nested boxes for N Z Q R"
      >
        <rect x="20" y="20" width="300" height="160" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <text x="36" y="40" className="fill-current" fontSize="12" opacity="0.75">reals ℝ</text>
        <rect x="40" y="50" width="260" height="110" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.85" />
        <text x="56" y="70" className="fill-current" fontSize="12" opacity="0.75">rationals ℚ</text>
        <rect x="60" y="80" width="220" height="65" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.85" />
        <text x="76" y="100" className="fill-current" fontSize="12" opacity="0.75">integers ℤ</text>
        <rect x="90" y="110" width="140" height="25" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.25" />
        <text x="160" y="127" textAnchor="middle" className="fill-current" fontSize="12">naturals ℕ</text>
      </svg>
    </Diagram>
  );
}

/** Similar triangles with shared angles */
export function SimilarTrianglesDiagram() {
  return (
    <Diagram caption="Same angles, different size: corresponding sides stay in constant ratio.">
      <svg
        viewBox="0 0 360 180"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Two similar triangles"
      >
        <polygon points="40,140 140,140 40,60" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="180,150 320,150 180,40" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
        <text x="70" y="170" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.75">small</text>
        <text x="250" y="170" textAnchor="middle" className="fill-current" fontSize="11" opacity="0.75">scaled copy</text>
      </svg>
    </Diagram>
  );
}

/** Coordinate plane with a point */
export function CoordinatePlaneDiagram() {
  return (
    <Diagram caption="Coordinates turn geometry into numbers: every point is an ordered pair (x, y).">
      <svg
        viewBox="0 0 280 280"
        className="mx-auto h-auto w-full max-w-xs text-foreground"
        role="img"
        aria-label="Coordinate plane with point"
      >
        <line x1="20" y1="140" x2="260" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        <line x1="140" y1="20" x2="140" y2="260" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        <polygon points="260,140 250,135 250,145" className="fill-current" opacity="0.45" />
        <polygon points="140,20 135,30 145,30" className="fill-current" opacity="0.45" />
        <text x="250" y="158" className="fill-current" fontSize="12" opacity="0.7">x</text>
        <text x="150" y="32" className="fill-current" fontSize="12" opacity="0.7">y</text>
        <circle cx="200" cy="80" r="4" className="fill-current" />
        <line x1="200" y1="80" x2="200" y2="140" stroke="currentColor" strokeDasharray="3 3" opacity="0.5" />
        <line x1="140" y1="80" x2="200" y2="80" stroke="currentColor" strokeDasharray="3 3" opacity="0.5" />
        <text x="208" y="76" className="fill-current" fontSize="12">(3, 4)</text>
      </svg>
    </Diagram>
  );
}

/** Two lines intersecting as a system */
export function SystemLinesDiagram() {
  return (
    <Diagram caption="A linear system is often two lines. Their intersection is the shared solution.">
      <svg
        viewBox="0 0 300 200"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Two intersecting lines"
      >
        <line x1="20" y1="160" x2="280" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="40" x2="270" y2="170" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <circle cx="150" cy="100" r="4" className="fill-current" />
        <text x="160" y="95" className="fill-current" fontSize="12">solution</text>
      </svg>
    </Diagram>
  );
}

/** Zooming toward a tangent / limit */
export function LimitZoomDiagram() {
  return (
    <Diagram caption="Zoom in on a smooth curve: the wiggle looks straighter. That local slope is the derivative idea.">
      <svg
        viewBox="0 0 340 160"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Curve with zoom box and tangent"
      >
        <path d="M 20 120 C 80 20, 140 140, 200 60 S 300 40, 320 90" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="150" y="40" width="70" height="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
        <line x1="240" y1="30" x2="320" y2="70" stroke="currentColor" strokeWidth="1.25" opacity="0.8" />
        <text x="250" y="120" className="fill-current" fontSize="11" opacity="0.75">zoom → tangent</text>
      </svg>
    </Diagram>
  );
}

/** Projection of one vector onto another */
export function ProjectionDiagram() {
  return (
    <Diagram caption="Projection asks: how much of this arrow lies along that direction?">
      <svg
        viewBox="0 0 320 180"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Vector projected onto another"
      >
        <line x1="40" y1="140" x2="280" y2="140" stroke="currentColor" strokeWidth="1.5" />
        <text x="250" y="158" className="fill-current" fontSize="12" opacity="0.75">b</text>
        <line x1="40" y1="140" x2="180" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <text x="160" y="70" className="fill-current" fontSize="12" opacity="0.75">a</text>
        <line x1="40" y1="140" x2="160" y2="140" stroke="currentColor" strokeWidth="2" />
        <line x1="180" y1="50" x2="160" y2="140" stroke="currentColor" strokeDasharray="4 3" opacity="0.6" />
        <text x="90" y="132" className="fill-current" fontSize="11" opacity="0.8">proj</text>
      </svg>
    </Diagram>
  );
}

/** Prior to posterior Bayes sketch */
export function BayesUpdateDiagram() {
  return (
    <Diagram caption="Bayes updates belief: start with a prior, multiply by how well the data fit, then renormalize.">
      <svg
        viewBox="0 0 340 120"
        className="mx-auto h-auto w-full max-w-md text-foreground"
        role="img"
        aria-label="Prior times likelihood to posterior"
      >
        <rect x="20" y="35" width="70" height="50" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.25" />
        <text x="55" y="65" textAnchor="middle" className="fill-current" fontSize="12">prior</text>
        <text x="110" y="65" textAnchor="middle" className="fill-current" fontSize="18">×</text>
        <rect x="130" y="35" width="90" height="50" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.25" />
        <text x="175" y="65" textAnchor="middle" className="fill-current" fontSize="11">likelihood</text>
        <text x="240" y="65" textAnchor="middle" className="fill-current" fontSize="18">→</text>
        <rect x="260" y="35" width="60" height="50" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.25" />
        <text x="290" y="65" textAnchor="middle" className="fill-current" fontSize="11">posterior</text>
      </svg>
    </Diagram>
  );
}

/** Gradient descent steps on a curve */
export function GradientDescentDiagram() {
  return (
    <Diagram caption="Gradient descent: follow the downhill direction in small steps to seek a lower loss.">
      <svg
        viewBox="0 0 320 160"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Bowl curve with descending steps"
      >
        <path d="M 30 40 Q 160 200 290 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {[
          { x: 70, y: 70 },
          { x: 100, y: 95 },
          { x: 130, y: 110 },
          { x: 160, y: 118 },
        ].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" className="fill-current" />
        ))}
        <text x="50" y="55" className="fill-current" fontSize="11" opacity="0.75">start</text>
        <text x="170" y="140" className="fill-current" fontSize="11" opacity="0.75">lower loss</text>
      </svg>
    </Diagram>
  );
}

/** Parallel lines cut by a transversal */
export function ParallelLinesDiagram() {
  return (
    <Diagram caption="A transversal across parallel lines makes matching angle patterns - Euclid's parallel world.">
      <svg
        viewBox="0 0 300 180"
        className="mx-auto h-auto w-full max-w-sm text-foreground"
        role="img"
        aria-label="Two parallel lines cut by a transversal"
      >
        <line x1="30" y1="50" x2="270" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="130" x2="270" y2="130" stroke="currentColor" strokeWidth="1.5" />
        <line x1="80" y1="20" x2="220" y2="160" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
        <text x="40" y="42" className="fill-current" fontSize="11" opacity="0.7">∥</text>
        <text x="40" y="122" className="fill-current" fontSize="11" opacity="0.7">∥</text>
      </svg>
    </Diagram>
  );
}

/** Fraction as part of a whole pie */
export function FractionPieDiagram() {
  return (
    <Diagram caption="A fraction names a part of a whole. Three fourths means three equal slices out of four.">
      <svg
        viewBox="0 0 220 200"
        className="mx-auto h-auto w-full max-w-[12rem] text-foreground"
        role="img"
        aria-label="Circle divided into four with three shaded"
      >
        <circle cx="110" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 110 100 L 110 30 A 70 70 0 0 1 180 100 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 110 100 L 180 100 A 70 70 0 0 1 110 170 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 110 100 L 110 170 A 70 70 0 0 1 40 100 Z" fill="currentColor" fillOpacity="0.2" />
        <line x1="110" y1="30" x2="110" y2="170" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" />
        <text x="110" y="195" textAnchor="middle" className="fill-current" fontSize="12">3/4</text>
      </svg>
    </Diagram>
  );
}
