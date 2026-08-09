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
