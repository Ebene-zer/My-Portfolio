"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ClientNav from "./ClientNav";

export default function HeaderBar() {
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // When hero is not visible, show the avatar in the navbar
        setShowAvatar(!entry.isIntersecting);
      },
      {
        root: null,
        // Consider hero "out" slightly earlier than header height
        rootMargin: "-64px 0px 0px 0px",
        threshold: 0,
      }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[linear-gradient(90deg,var(--accent-gold),var(--accent-green))] text-white shadow-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3"
      >
        <div className="flex items-center gap-3">
          {/* Small avatar appears after scrolling past hero */}
          <Image
            src="/profile.jpg"
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className={`h-6 w-6 rounded-full ring-2 ring-[var(--accent-gold)] transition duration-300 ease-out ${showAvatar ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            priority={false}
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-white">
            Ebenezer Fuachie
          </span>
        </div>
        <ClientNav />
      </nav>
    </header>
  );
}
