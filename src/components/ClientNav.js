"use client";

import { useEffect, useRef, useState } from "react";

export default function ClientNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const ids = ["home", "about", "projects", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        // Highlight section when its top crosses ~20% from viewport top
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const base = "text-base sm:text-lg text-white/90 hover:text-white px-2 py-2 rounded-md transition-colors";
  const activeCls = " text-white underline underline-offset-4 decoration-4";

  return (
    <div className="relative">
      {/* Desktop nav */}
      <div className="hidden gap-6 sm:flex">
        <a
          href="#about"
          className={base + (active === "about" ? activeCls : "")}
          aria-current={active === "about" ? "page" : undefined}
        >
          About
        </a>
        <a
          href="#projects"
          className={base + (active === "projects" ? activeCls : "")}
          aria-current={active === "projects" ? "page" : undefined}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={base + (active === "contact" ? activeCls : "")}
          aria-current={active === "contact" ? "page" : undefined}
        >
          Contact
        </a>
        <a
          href="/resume"
          className={base}
          title="View resume"
        >
          Resume
        </a>
      </div>

      {/* Mobile toggle button */}
      <button
        type="button"
        className="sm:hidden inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Open menu"
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          // X icon
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 6h18" />
            <path d="M3 12h18" />
            <path d="M3 18h18" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="menu"
          className="absolute right-0 z-50 mt-2 w-44 rounded-lg border border-white/20 bg-white/90 p-1 text-sm shadow-lg backdrop-blur dark:border-white/10 dark:bg-black/90 sm:hidden"
        >
          <a
            href="#about"
            role="menuitem"
            className="block rounded-md px-3 py-2 text-gray-900 hover:bg-white/60 dark:text-gray-100 dark:hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            role="menuitem"
            className="block rounded-md px-3 py-2 text-gray-900 hover:bg-white/60 dark:text-gray-100 dark:hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            role="menuitem"
            className="block rounded-md px-3 py-2 text-gray-900 hover:bg-white/60 dark:text-gray-100 dark:hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <a
            href="/resume"
            role="menuitem"
            className="block rounded-md px-3 py-2 text-gray-900 hover:bg-white/60 dark:text-gray-100 dark:hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
}
