import { cn } from '../../lib/cn';

interface EnergyNetworkProps {
  className?: string;
  /** 0–1 local scene progress */
  progress?: number;
}

/** SVG/CSS energy network — Electric Sky Blue nodes, GPU-friendly transforms. */
export function EnergyNetwork({ className, progress = 1 }: EnergyNetworkProps) {
  const glow = 0.25 + progress * 0.55;
  const nodes = [
    { cx: 80, cy: 120 },
    { cx: 180, cy: 60 },
    { cx: 280, cy: 140 },
    { cx: 380, cy: 70 },
    { cx: 460, cy: 160 },
    { cx: 200, cy: 200 },
    { cx: 320, cy: 220 },
    { cx: 120, cy: 240 },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 5],
    [2, 5],
    [2, 6],
    [5, 7],
    [5, 6],
    [6, 4],
  ];

  return (
    <svg
      viewBox="0 0 520 300"
      className={cn('h-full w-full', className)}
      aria-hidden
      style={{ opacity: 0.55 + progress * 0.4 }}
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={`rgba(56, 189, 248, ${glow})`} />
          <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
        </radialGradient>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.1)" />
          <stop offset="50%" stopColor="rgba(56, 189, 248, 0.55)" />
          <stop offset="100%" stopColor="rgba(125, 211, 252, 0.15)" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        return (
          <line
            key={`e-${i}`}
            x1={n1.cx}
            y1={n1.cy}
            x2={n2.cx}
            y2={n2.cy}
            stroke="url(#edgeGrad)"
            strokeWidth={1.25}
            strokeDasharray="4 6"
            style={{
              strokeDashoffset: `${(1 - progress) * 40}`,
              opacity: 0.35 + progress * 0.65,
            }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={`n-${i}`} transform={`translate(${n.cx} ${n.cy})`}>
          <circle r={18 + progress * 8} fill="url(#nodeGlow)" />
          <circle
            r={3.5}
            fill="#38bdf8"
            style={{
              transform: `scale(${0.85 + progress * 0.25})`,
              transformOrigin: 'center',
            }}
          />
        </g>
      ))}
    </svg>
  );
}
