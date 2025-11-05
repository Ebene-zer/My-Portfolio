export default function TechStack() {
  // Importing within the component to keep this file tree-shakeable if not used elsewhere
  const { BRANDS, TECH_SECTIONS } = require("@/data/brands.js");

  const renderBrandVisual = (name) => {
    const entry = BRANDS[name] || {};
    const hex = (entry.color || "#6B7280").replace("#", "");
    if (entry.slug) {
      return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`https://cdn.simpleicons.org/${entry.slug}/${hex}`}
          alt=""
          aria-hidden="true"
          className="h-3.5 w-3.5"
          loading="lazy"
          decoding="async"
        />
      );
    }
    // Fallback: colored dot
    return (
      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" focusable="false">
        <circle cx="8" cy="8" r="7" fill={`#${hex}`} stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      </svg>
    );
  };

  return (
    <div className="mt-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-black">Tech Stack</h3>
      <div className="mt-3 grid gap-4 sm:grid-cols-3">
        {TECH_SECTIONS.map((section, sIdx) => (
          <div key={section.label} className={sIdx === 0 ? "" : "mt-4 sm:mt-0"}>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" aria-hidden="true" />
              {section.label}
            </h4>
            <ul className="mt-2 flex flex-wrap gap-2" aria-label={section.ariaLabel}>
              {section.items.map((t, i) => {
                const entry = BRANDS[t] || {};
                const href = entry.url || "#";
                return (
                  <li key={t}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${t} website`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 opacity-0 transition will-change-transform hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] dark:bg-gray-800 dark:text-gray-200"
                      style={{
                        animation: "stack-in 600ms cubic-bezier(0.16,1,0.3,1) forwards",
                        animationDelay: `${i * 70}ms`,
                      }}
                    >
                      {renderBrandVisual(t)}
                      {t}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
