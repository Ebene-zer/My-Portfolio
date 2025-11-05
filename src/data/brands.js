// Normalized brand registry and Tech Stack section definitions
// Each brand entry: name -> { color, slug?, url? }

export const BRANDS = {
  // Languages
  Python: { color: "#3776AB", slug: "python", url: "https://www.python.org/" },
  Java: { color: "#007396", slug: "java", url: "https://www.java.com/" },
  "C++": { color: "#00599C", slug: "cplusplus", url: "https://isocpp.org/" },
  SQL: { color: "#336791", slug: "postgresql", url: "https://en.wikipedia.org/wiki/SQL" },
  JavaScript: {
    color: "#F7DF1E",
    slug: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  // Frameworks / Libraries (used in familiar section)
  React: { color: "#61DAFB", slug: "react", url: "https://react.dev/" },
  "Next.js": { color: "#000000", slug: "nextdotjs", url: "https://nextjs.org/" },
  "Tailwind CSS": { color: "#06B6D4", slug: "tailwindcss", url: "https://tailwindcss.com/" },
  PyQt6: {
    color: "#41CD52",
    slug: "qt",
    url: "https://www.riverbankcomputing.com/software/pyqt/",
  },
  "MongoDB Atlas": {
    color: "#47A248",
    slug: "mongodb",
    url: "https://www.mongodb.com/atlas",
  },

  // Tools & Platforms
  Git: { color: "#F05032", slug: "git", url: "https://git-scm.com/" },
  GitHub: { color: "#181717", slug: "github", url: "https://github.com/" },
  Postman: { color: "#FF6C37", slug: "postman", url: "https://www.postman.com/" },
  Figma: { color: "#F24E1E", slug: "figma", url: "https://www.figma.com/" },
  Trello: { color: "#0052CC", slug: "trello", url: "https://trello.com/" },
  "GitHub Actions": {
    color: "#2088FF",
    slug: "githubactions",
    url: "https://github.com/features/actions",
  },
  "CI/CD": { color: "#6B7280" },

  // Split HTML/CSS into separate chips
  HTML5: {
    color: "#E34F26",
    slug: "html5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  CSS3: {
    color: "#1572B6",
    slug: "css3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },

  // Alias display for a specific entry in Tools list
  "CI/CD (GitHub Actions)": {
    color: "#2088FF",
    slug: "githubactions",
    url: "https://github.com/features/actions",
  },
};

export const TECH_SECTIONS = [
  {
    label: "Languages",
    ariaLabel: "Languages",
    items: ["Python", "Java", "C++", "SQL"],
  },
  // Keep the prior simplified structure: no dedicated Framework section, as requested
  {
    label: "Tools & Platforms",
    ariaLabel: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Trello",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    label: "Also Familiar With",
    ariaLabel: "Also Familiar With",
    items: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "React",
      "Next.js",
      "CI/CD",
      "PyQt6",
      "MongoDB Atlas",
    ],
  },
];
