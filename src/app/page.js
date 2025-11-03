import Image from "next/image";
import ClientNav from "@/components/ClientNav";

export default function Home() {
  // Brand color map for simple inline dot icons
  const brandColors = {
    Python: "#3776AB",
    Java: "#007396",
    "C++": "#00599C",
    JavaScript: "#F7DF1E",
    "Next.js": "#000000",
    "Tailwind CSS": "#06B6D4",
    PyQt: "#41CD52",
    Git: "#F05032",
    GitHub: "#181717",
    Postman: "#FF6C37",
  };

  const renderBrandIcon = (name) => {
    const fill = brandColors[name] || "#9CA3AF"; // fallback gray-400
    // Small colored dot; stroke adds contrast on light chips, subtle in dark mode
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        focusable="false"
      >
        <circle cx="8" cy="8" r="7" fill={fill} stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      </svg>
    );
  };

  // Map display name -> Simple Icons slug and official URLs
  const brandSlugs = {
    Python: "python",
    Java: "java",
    "C++": "cplusplus",
    JavaScript: "javascript",
    "Next.js": "nextdotjs",
    "Tailwind CSS": "tailwindcss",
    PyQt: "qt",
    Git: "git",
    GitHub: "github",
    Postman: "postman",
  };

  const brandUrls = {
    Python: "https://www.python.org/",
    Java: "https://www.java.com/",
    "C++": "https://isocpp.org/",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "Next.js": "https://nextjs.org/",
    "Tailwind CSS": "https://tailwindcss.com/",
    PyQt: "https://www.riverbankcomputing.com/software/pyqt/",
    Git: "https://git-scm.com/",
    GitHub: "https://github.com/",
    Postman: "https://www.postman.com/",
  };

  // WhatsApp config (set NEXT_PUBLIC_WHATSAPP in your env, e.g. +233555123456)
  const whatsappNumberRaw = process.env.NEXT_PUBLIC_WHATSAPP || "";
  const whatsappNumber = whatsappNumberRaw.replace(/[^0-9]/g, ""); // keep digits only
  const whatsappText = "Hello Ebenezer, I saw your portfolio and would like to connect.";
  const whatsappHref =
    whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}` : null;

  const renderBrandLogo = (name) => {
    const slug = brandSlugs[name];
    const hex = (brandColors[name] || "#6B7280").replace("#", "");
    if (!slug) return renderBrandIcon(name);
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${slug}/${hex}`}
        alt=""
        aria-hidden="true"
        className="h-3.5 w-3.5"
        loading="lazy"
        decoding="async"
      />
    );
  };

  const projects = [
    {
      title: "Tradia",
      description: "Wholesale Management System.",
      tags: ["Python", "PyQt6"],
      href: "https://github.com/Ebene-zer/Tradia/releases",
      features: ["Inventory", "Sales", "Reports"],
      icon: "/tradia.ico",
    },

    {
      title: "Personal Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS"],
      features: ["Responsive Design", "Smooth Scrolling"],
      icon: "/favicon.ico",
    }
  ];

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black dark:focus:bg-black dark:focus:text-white"
      >
        Skip to content
      </a>

      {/* Top navigation */}
      <header className="sticky top-0 z-40 bg-[linear-gradient(90deg,var(--accent-gold),var(--accent-green))] text-white shadow-sm border-b border-[var(--accent-gold)]">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3"
        >
          <span className="text-base sm:text-lg font-semibold tracking-tight text-white">Ebenezer Fuachie</span>
          <ClientNav />
        </nav>
      </header>

      <main id="content" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Hero */}
        <section id="home" className="mb-16 scroll-mt-24 sm:mb-24">
          <div className="mb-6 flex flex-col items-center justify-between gap-6 sm:flex-row-reverse">
            <Image
              src="/profile.jpg"
              alt="Portrait of Ebenezer Fuachie"
              width={180}
              height={180}
              priority
              className="shrink-0 rounded-full ring-2 ring-[var(--accent-gold)] sm:-translate-x-[3cm] sm:translate-y-[1cm] transform transition-transform duration-300 ease-out [will-change:transform]"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Ebenezer Fuachie</h1>
              <p className="mt-2 text-xl font-medium text-gray-700 dark:text-gray-200 sm:text-2xl">
                Aspiring Software Engineer
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent-gold)] px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--accent-green)] px-5 py-3 text-sm font-medium text-[var(--accent-green)] transition hover:bg-[#16a34a1A]"
            >
              Contact Me
            </a>
          </div>

          
        </section>

        {/* About */}
  <section id="about" className="mb-16 scroll-mt-24 sm:mb-24">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <span className="mt-1 block h-1 w-12 rounded bg-[var(--accent-gold)]" aria-hidden="true" />
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
            Aspiring Software Engineer passionate about problem-solving and lifelong learning.
           I enjoy contributing to impactful solutions while learning and growing through every challenge and win.
           Currently open to internships and entry-level software development opportunities.

          </p>
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
            Area of interest: Software Development Life Cycle (SDLC), Data Structures & Algorithm and Backend development
          </p>
          {/* Divider between About and Tech Stack (tiny gold dots) */}
          <div className="mt-6 flex items-center justify-center" aria-hidden="true">
            <span className="mx-0.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]/90" />
            <span className="mx-0.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]/70" />
            <span className="mx-0.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]/90" />
          </div>

          {/* Tech Stack (moved under About) */}
          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black">Tech Stack</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {/* Language */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" aria-hidden="true" />
                  Language
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2" aria-label="Language">
                  {["Python", "Java", "C++", "JavaScript"].map((t, i) => (
                    <li key={t}>
                      <a
                        href={brandUrls[t] || "#"}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${t} website`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 opacity-0 transition will-change-transform hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] dark:bg-gray-800 dark:text-gray-200"
                        style={{ animation: 'stack-in 600ms cubic-bezier(0.16,1,0.3,1) forwards', animationDelay: `${i * 70}ms` }}
                      >
                        {renderBrandLogo(t)}
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Framework */}
              <div className="mt-4 sm:mt-0">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" aria-hidden="true" />
                  Framework
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2" aria-label="Framework">
                  {["Next.js", "Tailwind CSS", "PyQt"].map((t, i) => (
                    <li key={t}>
                      <a
                        href={brandUrls[t] || "#"}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${t} website`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 opacity-0 transition will-change-transform hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] dark:bg-gray-800 dark:text-gray-200"
                        style={{ animation: 'stack-in 600ms cubic-bezier(0.16,1,0.3,1) forwards', animationDelay: `${i * 70}ms` }}
                      >
                        {renderBrandLogo(t)}
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="mt-4 sm:mt-0">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" aria-hidden="true" />
                  Tools
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2" aria-label="Tools">
                  {["Git", "GitHub", "Postman"].map((t, i) => (
                    <li key={t}>
                      <a
                        href={brandUrls[t] || "#"}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${t} website`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 opacity-0 transition will-change-transform hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] dark:bg-gray-800 dark:text-gray-200"
                        style={{ animation: 'stack-in 600ms cubic-bezier(0.16,1,0.3,1) forwards', animationDelay: `${i * 70}ms` }}
                      >
                        {renderBrandLogo(t)}
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        
        </section>

        {/* Projects */}
  <section id="projects" className="mb-16 scroll-mt-24 sm:mb-24">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <span className="mt-1 block h-1 w-12 rounded bg-[var(--accent-gold)]" aria-hidden="true" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => {
              const external = p.href?.startsWith("http");
              return (
                <a
                  key={p.title}
                  href={p.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer noopener" : undefined}
                  className="group relative block rounded-xl border border-gray-200 p-5 transition hover:border-[var(--accent-gold)] hover:shadow-md dark:border-gray-800"
                >
                  <h3 className="flex items-center gap-2 text-lg font-semibold group-hover:underline group-hover:underline-offset-4">
                    {p.icon ? (
                      <Image
                        src={p.icon}
                        alt=""
                        aria-hidden="true"
                        width={20}
                        height={20}
                        className="h-5 w-5 rounded-sm"
                      />
                    ) : null}
                    {p.title}
                    {external && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 translate-x-0.5 -translate-y-0.5 opacity-0 transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M11 7h6v6" />
                      </svg>
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
                  {p.features?.length ? (
                    <ul className="mt-3 list-disc pl-5 text-xs text-gray-700 dark:text-gray-300">
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Contact */}
  <section id="contact" className="mb-8 scroll-mt-24 sm:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <span className="mt-1 block h-1 w-12 rounded bg-[var(--accent-gold)]" aria-hidden="true" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {/* Left: short message card */}
            <div className="rounded-2xl border border-[var(--accent-gold)]/50 bg-white/60 p-5 backdrop-blur dark:bg-black/40">
              <span className="inline-flex items-center rounded-full bg-[var(--accent-green)]/10 px-2.5 py-1 text-xs font-medium text-[var(--accent-green)]">
                Open to opportunities
              </span>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                Interested in working together or have a question? I typically respond within 24–48 hours.
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Email or WhatsApp is best, but you can also reach me on LinkedIn or GitHub.
              </p>
            </div>

            {/* Right: contact actions */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:fuachie717@gmail.com?subject=Hello%20Ebenezer&body=Hi%20Ebenezer%2C%20"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-gold)] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                aria-label="Email Ebenezer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-black">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8.236l7.386 5.54a1 1 0 0 0 1.228 0L20 8.236V18H4Z" />
                </svg>
                Email me
              </a>

              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366] px-5 py-3 text-sm font-medium text-[#128C7E] transition hover:bg-[#25D3661A]"
                  aria-label="WhatsApp Ebenezer"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]">
                    <path d="M20.52 3.48A11.983 11.983 0 0 0 12.01 0C5.4 0 .05 5.35.05 11.96c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.62a11.94 11.94 0 0 0 5.81 1.52h.01c6.61 0 11.96-5.35 11.96-11.96 0-3.2-1.25-6.2-3.46-8.46ZM12.02 21.3h-.01a9.34 9.34 0 0 1-4.76-1.31l-.34-.2-3.68.96.98-3.59-.22-.37a9.3 9.3 0 0 1-1.43-4.95c0-5.15 4.19-9.34 9.35-9.34 2.5 0 4.85.97 6.61 2.73a9.27 9.27 0 0 1 2.73 6.61c0 5.16-4.2 9.34-9.43 9.34Zm5.38-6.98c-.29-.14-1.73-.86-2-.96-.27-.1-.46-.14-.66.14-.19.28-.76.96-.94 1.15-.17.19-.35.21-.64.07-.29-.14-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.52.14-.17.19-.28.29-.48.1-.2.05-.38-.02-.52-.07-.14-.66-1.6-.91-2.19-.24-.57-.49-.49-.66-.5-.17-.01-.36-.01-.55-.01-.2 0-.52.07-.79.38-.27.31-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.14.19 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.73-.71 1.98-1.39.24-.67.24-1.25.17-1.39-.07-.14-.26-.22-.55-.36Z" />
                  </svg>
                  WhatsApp
                </a>
              )}

              <a
                href="https://github.com/Ebene-zer"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black px-5 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                aria-label="Open GitHub profile in new tab"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.16 8.98 7.55 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.22-1.63-1.22-1.63-.99-.68.07-.66.07-.66 1.09.08 1.66 1.12 1.66 1.12.97 1.66 2.53 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.18 1.12-2.95-.11-.27-.49-1.36.11-2.83 0 0 .93-.3 3.05 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.12-1.42 3.05-1.13 3.05-1.13.6 1.47.22 2.56.11 2.83.69.77 1.12 1.75 1.12 2.95 0 4.23-2.58 5.15-5.04 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.59-.01 2.94 0 .3.2.64.75.53 4.39-1.45 7.55-5.57 7.55-10.43C23.02 5.24 18.27.5 12 .5Z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/fuachie-ebenezer/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0A66C2] px-5 py-3 text-sm font-medium text-[#0A66C2] transition hover:bg-[#0A66C21A]"
                aria-label="Open LinkedIn profile in new tab"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#0A66C2]">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2V22h3V10ZM8 10h3v1.75h.04c.42-.8 1.44-1.64 2.97-1.64C18.17 10.11 19 12 19 14.83V22h-3v-6.3c0-1.5-.03-3.42-2.09-3.42-2.1 0-2.42 1.64-2.42 3.32V22H8V10Z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-[var(--accent-gold)] bg-white/60 py-8 text-sm text-gray-700 backdrop-blur dark:bg-black/40 dark:text-gray-300">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="font-semibold">Ebenezer Fuachie</span>. 
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-gray-800 transition hover:text-[var(--accent-gold)] dark:text-gray-200"
              aria-label="Back to top"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l7-7 7 7" />
              </svg>
              Back to top
            </a>
            <span className="hidden h-4 w-px bg-gray-300 dark:bg-gray-700 sm:inline" aria-hidden="true" />
            <a
              href="mailto:fuachie717@gmail.com?subject=Hello%20Ebenezer"
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-gray-800 transition hover:text-[var(--accent-gold)] dark:text-gray-200"
              aria-label="Email Ebenezer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8.236l7.386 5.54a1 1 0 0 0 1.228 0L20 8.236V18H4Z" />
              </svg>
              Email
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-gray-800 transition hover:text-[var(--accent-gold)] dark:text-gray-200"
              aria-label="WhatsApp Ebenezer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]">
                <path d="M20.52 3.48A11.983 11.983 0 0 0 12.01 0C5.4 0 .05 5.35.05 11.96c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.62a11.94 11.94 0 0 0 5.81 1.52h.01c6.61 0 11.96-5.35 11.96-11.96 0-3.2-1.25-6.2-3.46-8.46ZM12.02 21.3h-.01a9.34 9.34 0 0 1-4.76-1.31l-.34-.2-1.5.39a1 1 0 0 1-1.2-1.2l.39-1.5-1.31-.34a9.34 9.34 0 0 1-1.31-4.76v-.01a9.34 9.34 0 0 1 1.31-4.76l.34-.2-.39-1.5a1 1 0 0 1 1.2-1.2l1.5.39.2-.34A9.34 9.34 0 0 1 12.02 3h.01a9.34 9.34 0 0 1 4.76 1.31l.34.2 1.5-.39a1 1 0 0 1 1.2 1.2l-.39 1.5.2.34A9.34 9.34 0 0 1 21.3 12h.01a9.34 9.34 0 0 1-1.31 4.76l-.34.2.39 1.5a1 1 0 0 1-1.2 1.2l-1.5-.39-.2.34A9.34 9.34 0 0 1 12.02 21.3Z" />
              </svg>
              WhatsApp
            </a> 
            <a
              href="https://github.com/Ebene-zer"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-gray-800 transition hover:text-[var(--accent-gold)] dark:text-gray-200"
              aria-label="GitHub profile"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.16 8.98 7.55 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.22-1.63-1.22-1.63-.99-.68.07-.66.07-.66 1.09.08 1.66 1.12 1.66 1.12.97 1.66 2.53 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.18 1.12-2.95-.11-.27-.49-1.36.11-2.83 0 0 .93-.3 3.05 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.12-1.42 3.05-1.13 3.05-1.13.6 1.47.22 2.56.11 2.83.69.77 1.12 1.75 1.12 2.95 0 4.23-2.58 5.15-5.04 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.59-.01 2.94 0 .3.2.64.75.53 4.39-1.45 7.55-5.57 7.55-10.43C23.02 5.24 18.27.5 12 .5Z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fuachie-ebenezer/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[#0A66C2] transition hover:underline"
              aria-label="LinkedIn profile"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-[#0A66C2]">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2V22h3V10ZM8 10h3v1.75h.04c.42-.8 1.44-1.64 2.97-1.64C18.17 10.11 19 12 19 14.83V22h-3v-6.3c0-1.5-.03-3.42-2.09-3.42-2.1 0-2.42 1.64-2.42 3.32V22H8V10Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
