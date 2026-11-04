const ticks = Array.from({ length: 72 }, (_, index) => index * 5);
const bolts = Array.from({ length: 8 }, (_, index) => index * 45);
const spokes = Array.from({ length: 12 }, (_, index) => index * 30);

export function HeroBlueprint() {
  return (
    <svg
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      <defs>
        <pattern
          id="blueprint-grid"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M30 0H0V30"
            stroke="#FFFFFF"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="blueprint-glow" cx="50%" cy="48%" r="50%">
          <stop stopColor="#F77912" stopOpacity="0.16" />
          <stop offset="1" stopColor="#F77912" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blueprint-core" cx="50%" cy="44%" r="52%">
          <stop stopColor="#F77912" stopOpacity="0.09" />
          <stop offset="1" stopColor="#111011" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="600" height="600" fill="url(#blueprint-grid)" />
      <rect width="600" height="600" fill="url(#blueprint-core)" />
      <circle cx="300" cy="290" r="260" fill="url(#blueprint-glow)" />

      {/* outer rotating tick ring */}
      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "300px 290px" }}
        strokeLinecap="square"
      >
        {ticks.map((angle) => (
          <g key={angle} transform={`rotate(${angle} 300 290)`}>
            <line
              x1="300"
              y1="48"
              x2="300"
              y2={angle % 30 === 0 ? "66" : "58"}
              stroke={angle % 30 === 0 ? "#F77912" : "#FFFFFF"}
              strokeOpacity={angle % 30 === 0 ? "0.65" : "0.24"}
              strokeWidth="1"
            />
          </g>
        ))}
        <circle
          cx="300"
          cy="290"
          r="250"
          stroke="#FFFFFF"
          strokeOpacity="0.07"
          strokeDasharray="1 9"
        />
        <path
          d="M300 40 A250 250 0 0 1 550 290"
          stroke="#F77912"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
      </g>

      {/* crosshairs / measurement axes */}
      <g stroke="#FFFFFF" strokeOpacity="0.12">
        <line x1="38" y1="290" x2="562" y2="290" />
        <line x1="300" y1="34" x2="300" y2="546" />
      </g>
      <g stroke="#F77912" strokeOpacity="0.55">
        <line x1="292" y1="290" x2="308" y2="290" />
        <line x1="300" y1="282" x2="300" y2="298" />
      </g>

      {/* dotted reference ring */}
      <circle
        cx="300"
        cy="290"
        r="222"
        stroke="#F77912"
        strokeOpacity="0.4"
        strokeDasharray="2 12"
      />

      {/* flange body */}
      <g>
        <circle
          cx="300"
          cy="290"
          r="192"
          stroke="#FFFFFF"
          strokeOpacity="0.34"
          strokeWidth="1.2"
        />
        <circle
          cx="300"
          cy="290"
          r="182"
          stroke="#FFFFFF"
          strokeOpacity="0.09"
        />
        <circle
          cx="300"
          cy="290"
          r="138"
          stroke="#FFFFFF"
          strokeOpacity="0.2"
        />
        <circle
          cx="300"
          cy="290"
          r="92"
          stroke="#F77912"
          strokeOpacity="0.62"
          strokeWidth="1.4"
        />
        <circle
          cx="300"
          cy="290"
          r="82"
          stroke="#FFFFFF"
          strokeOpacity="0.13"
        />
        <circle
          cx="300"
          cy="290"
          r="36"
          stroke="#FFFFFF"
          strokeOpacity="0.25"
        />
        <circle cx="300" cy="290" r="5" fill="#F77912" />

        {spokes.map((angle) => (
          <line
            key={angle}
            x1="300"
            y1="254"
            x2="300"
            y2="208"
            stroke="#FFFFFF"
            strokeOpacity="0.12"
            transform={`rotate(${angle} 300 290)`}
          />
        ))}

        {bolts.map((angle) => (
          <g key={angle} transform={`rotate(${angle} 300 290)`}>
            <circle
              cx="300"
              cy="126"
              r="15"
              stroke="#FFFFFF"
              strokeOpacity="0.32"
            />
            <circle
              cx="300"
              cy="126"
              r="4"
              stroke="#F77912"
              strokeOpacity="0.6"
            />
          </g>
        ))}

        {/* outer notches */}
        {Array.from({ length: 36 }, (_, index) => (
          <line
            key={`notch-${index}`}
            x1="300"
            y1="98"
            x2="300"
            y2="104"
            stroke="#FFFFFF"
            strokeOpacity={index % 3 === 0 ? "0.38" : "0.14"}
            transform={`rotate(${index * 10} 300 290)`}
          />
        ))}

        {/* measurement brackets */}
        <g stroke="#FFFFFF" strokeOpacity="0.22">
          <line x1="108" y1="290" x2="108" y2="502" />
          <line x1="108" y1="502" x2="492" y2="502" />
          <line x1="492" y1="502" x2="492" y2="290" />
          <line x1="102" y1="290" x2="114" y2="290" />
          <line x1="486" y1="290" x2="498" y2="290" />
        </g>
        <text
          x="300"
          y="522"
          textAnchor="middle"
          fill="#8C8C8C"
          fontSize="8"
          letterSpacing="3.4"
          fontFamily="ui-monospace, monospace"
        >
          CONJUNTO MECÂNICO / VISTA TÉCNICA
        </text>

        <text
          x="560"
          y="52"
          textAnchor="end"
          fill="#F77912"
          fontSize="8"
          letterSpacing="2.8"
          fontFamily="ui-monospace, monospace"
        >
          ANALISAR / DECIDIR
        </text>

        {/* corner registration marks */}
        <g stroke="#F77912" strokeOpacity="0.6">
          <path d="M24 78V24H78" />
          <path d="M522 24H576V78" />
          <path d="M576 502V556H522" />
          <path d="M78 556H24V502" />
        </g>
      </g>
    </svg>
  );
}
