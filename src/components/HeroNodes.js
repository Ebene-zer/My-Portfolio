export default function HeroNodes() {
  return (
    <div className="hero-nodes pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
      {/* Group A: follows green layer direction */}
      <span className="process-node process-a" style={{ top: "10%", left: "8%", animationDelay: "0s", ["--t"]: "30s" }}>
        {/* curly braces */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M11 5c-2 0-3 1.5-3 3 0 1-.6 1.8-2 2.2 1.4.4 2 1.2 2 2.2 0 1.5 1 3 3 3" />
          <path d="M13 5c2 0 3 1.5 3 3 0 1 .6 1.8 2 2.2-1.4.4-2 1.2-2 2.2 0 1.5-1 3-3 3" />
        </svg>
      </span>
      <span className="process-node process-a" style={{ top: "30%", left: "-4%", animationDelay: "6s", ["--t"]: "36s" }}>
        {/* fuller gear */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="12" cy="12" r="6.5" />
          <path d="M12 2.5v2.2" />
          <path d="M12 19.3v2.2" />
          <path d="M4.7 12H2.5" />
          <path d="M21.5 12h-2.2" />
          <path d="M6.6 6.6l1.6 1.6" />
          <path d="M15.8 15.8l1.6 1.6" />
          <path d="M17.4 6.6l-1.6 1.6" />
          <path d="M8.2 15.8l-1.6 1.6" />
        </svg>
      </span>
      <span className="process-node process-a" style={{ top: "65%", left: "12%", animationDelay: "12s", ["--t"]: "32s" }}>
        {/* database */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <ellipse cx="12" cy="7" rx="5" ry="2.5" />
          <path d="M7 7v10" />
          <path d="M17 7v10" />
          <ellipse cx="12" cy="12" rx="5" ry="2.5" />
          <ellipse cx="12" cy="17" rx="5" ry="2.5" />
        </svg>
      </span>

      {/* Group B: follows gold counter-diagonal */}
      <span className="process-node process-b" style={{ top: "5%", left: "78%", animationDelay: "3s", ["--t"]: "38s" }}>
        {/* fuller gear */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="12" cy="12" r="6.5" />
          <path d="M12 2.5v2.2" />
          <path d="M12 19.3v2.2" />
          <path d="M4.7 12H2.5" />
          <path d="M21.5 12h-2.2" />
          <path d="M6.6 6.6l1.6 1.6" />
          <path d="M15.8 15.8l1.6 1.6" />
          <path d="M17.4 6.6l-1.6 1.6" />
          <path d="M8.2 15.8l-1.6 1.6" />
        </svg>
      </span>
      <span className="process-node process-b" style={{ top: "40%", left: "92%", animationDelay: "9s", ["--t"]: "44s" }}>
        {/* curly braces */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M11 5c-2 0-3 1.5-3 3 0 1-.6 1.8-2 2.2 1.4.4 2 1.2 2 2.2 0 1.5 1 3 3 3" />
          <path d="M13 5c2 0 3 1.5 3 3 0 1 .6 1.8 2 2.2-1.4.4-2 1.2-2 2.2 0 1.5-1 3-3 3" />
        </svg>
      </span>
      <span className="process-node process-b" style={{ top: "78%", left: "70%", animationDelay: "15s", ["--t"]: "42s" }}>
        {/* database */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <ellipse cx="12" cy="7" rx="5" ry="2.5" />
          <path d="M7 7v10" />
          <path d="M17 7v10" />
          <ellipse cx="12" cy="12" rx="5" ry="2.5" />
          <ellipse cx="12" cy="17" rx="5" ry="2.5" />
        </svg>
      </span>

      {/* A couple of larger, faint nodes */}
      <span className="process-node process-a process-lg" style={{ top: "18%", left: "46%", animationDelay: "4s", ["--t"]: "52s" }}>
        {/* database (large) */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <ellipse cx="12" cy="7" rx="5" ry="2.5" />
          <path d="M7 7v10" />
          <path d="M17 7v10" />
          <ellipse cx="12" cy="12" rx="5" ry="2.5" />
          <ellipse cx="12" cy="17" rx="5" ry="2.5" />
        </svg>
      </span>
      <span className="process-node process-b process-lg" style={{ top: "72%", left: "38%", animationDelay: "10s", ["--t"]: "56s" }}>
        {/* gear (large) */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 6.2v-2.2" />
          <path d="M6.2 12H4" />
          <path d="M20 12h-2.2" />
        </svg>
      </span>
    </div>
  );
}
