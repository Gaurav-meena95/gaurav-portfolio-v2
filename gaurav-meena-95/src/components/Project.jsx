import { useState, useEffect, useCallback, useMemo } from 'react';
import { Section, SectionHeading, Reveal, TechTag, PillLink, GitHubIcon, ArrowIcon } from './SiteUI';
import { GITHUB_REPOS_FALLBACK } from '../data/githubReposFallback';

const CATEGORY_META = {
  "AI / Agents": { color: "#8b5cf6", glyph: "◇" },
  "Dev Tools": { color: "#38bdf8", glyph: "⌘" },
  "Full Stack": { color: "#10b981", glyph: "❖" },
  "Mobile / Apps": { color: "#00A3FF", glyph: "◈" },
  "Systems": { color: "#f59e0b", glyph: "∆" },
};

const LANES = [
  { id: "all", label: "all" },
  { id: "ai", label: "ai / agents" },
  { id: "tools", label: "dev tools" },
  { id: "web", label: "full stack" },
  { id: "mobile", label: "mobile / apps" },
];

const ITEMS_PER_PAGE = 10;

// Pinned verified resume projects
const RESUME_PROJECTS = [
  {
    slug: "CodeRelay",
    name: "CodeRelay",
    tagline: "Sync accepted solutions from LeetCode to GitHub with a modular adapter.",
    description: "Built a Manifest V3 extension using TypeScript and Vite to sync accepted solutions from LeetCode and other platforms to GitHub. Integrated GitHub REST API to automate commits with customizable schemas.",
    category: "Dev Tools",
    lane: "tools",
    tech: ["typescript", "vite", "github", "leetcode"],
    date: "Oct 2026",
    repo: "https://github.com/Gaurav-meena95/CodeRelay",
    live: "https://github.com/Gaurav-meena95/CodeRelay",
    featured: true,
  },
  {
    slug: "form-filling-agent",
    name: "Form Filling Agent",
    tagline: "Autonomous browser form-filling agent with hybrid RAG and Chroma cache.",
    description: "Built an AI-powered form-filling agent using LangGraph and LLaMA 3.3 70B to automate browser-based form completion with ChromaDB hybrid RAG, crawl4ai, and structured JSON schemas.",
    category: "AI / Agents",
    lane: "ai",
    tech: ["langgraph", "python", "fastapi", "docker"],
    date: "Apr 2026",
    repo: "https://github.com/Gaurav-meena95/form-filling-agent",
    live: "https://github.com/Gaurav-meena95/form-filling-agent",
    featured: true,
  },
  {
    slug: "JewelTrack",
    name: "JewelTrack",
    tagline: "Smart jewellery inventory, GST billing, and collateral tracking system.",
    description: "Full-stack jewellery business management system for inventory, billing, custom orders, and collateral tracking. Built with React.js, Node.js, Express.js, MongoDB, and JWT authentication.",
    category: "Full Stack",
    lane: "web",
    tech: ["react", "nodejs", "express", "mongodb", "tailwindcss"],
    date: "Dec 2025",
    repo: "https://github.com/Gaurav-meena95/JewelTrack",
    live: "https://github.com/Gaurav-meena95/JewelTrack",
    featured: true,
  },
];

// Project Card rendered with sleek gradient cover, centered bold name, and glyph (exact match to user screenshot)
function ProjectCard({ project, isFeatured = false }) {
  const meta = CATEGORY_META[project.category] || { color: "#38bdf8", glyph: "⌘" };
  const maxTech = 4;
  const extra = (project.tech?.length || 0) - maxTech;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-portfolio-border bg-portfolio-card transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
      {/* Cover banner - EXACT match to screenshot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-portfolio-border bg-portfolio-bg">
        <div
          className="flex h-full w-full items-center justify-center relative select-none"
          style={{
            background: `radial-gradient(120% 120% at 15% 0%, ${meta.color}2e, transparent 60%), linear-gradient(160deg, #0a0f1c, #030712)`,
          }}
        >
          <span
            className="font-display text-2xl sm:text-[1.75rem] font-semibold tracking-tight text-white/90 text-center px-4 transition-transform duration-300 group-hover:scale-105"
            style={{ textShadow: `0 0 32px ${meta.color}55` }}
          >
            {project.name}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute -right-3 -top-4 select-none text-[6.5rem] leading-none opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]"
            style={{ color: meta.color }}
          >
            {meta.glyph}
          </span>
        </div>

        {/* Category chip (bottom left) */}
        <span
          className="absolute bottom-2.5 left-2.5 rounded-md px-2.5 py-0.5 font-mono text-[11px] font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/10"
          style={{ background: `${meta.color}33` }}
        >
          {project.category}
        </span>

        {/* Resume Featured badge (top right) */}
        {isFeatured && (
          <span className="absolute top-2.5 right-2.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300 backdrop-blur-sm">
            ★ Resume Featured
          </span>
        )}
      </div>

      {/* Content panel */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-[15px] sm:text-[16px] font-semibold tracking-tight text-portfolio-text group-hover:text-white transition-colors truncate">
            {project.name}
          </h3>
          <span className="shrink-0 font-mono text-[11px] text-portfolio-muted">{project.date}</span>
        </div>

        <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-portfolio-muted line-clamp-2">
          {project.tagline || project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech?.slice(0, maxTech).map((k) => (
            <TechTag key={k} k={k} />
          ))}
          {extra > 0 && (
            <span className="inline-flex items-center rounded-md border border-portfolio-border bg-portfolio-border/40 px-2 py-1 text-[11px] font-medium text-portfolio-muted font-mono">
              +{extra}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="mt-4 flex items-center gap-2 pt-2 border-t border-portfolio-border/40">
          {project.repo && (
            <PillLink href={project.repo}>
              <GitHubIcon className="h-3.5 w-3.5" /> Source
            </PillLink>
          )}
          {project.live && (
            <PillLink href={project.live} primary={!project.repo || project.live !== project.repo}>
              <ArrowIcon className="h-3.5 w-3.5" /> Live Demo
            </PillLink>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [viewMode, setViewMode] = useState("all"); // 'featured' or 'all'
  const [lane, setLane] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [allProjects, setAllProjects] = useState(GITHUB_REPOS_FALLBACK);

  const username = "Gaurav-meena95";

  // Live GitHub API fetch with rate-limit protection
  const fetchGithubRepos = useCallback(async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
      if (!res.ok) return; // Keep GITHUB_REPOS_FALLBACK if rate limited
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const filtered = data.filter((r) => !r.archived && !r.disabled && r.name !== "gaurav-portfolio-v2");

      const resumeSlugs = new Set(["coderelay", "form-filling-agent", "jeweltrack"]);

      const mapped = filtered.map((r) => {
        const isResume = resumeSlugs.has(r.name.toLowerCase());
        const lang = r.language || "Code";
        let category = "Full Stack";
        let laneId = "web";

        const text = `${r.name} ${r.description || ""} ${lang}`.toLowerCase();
        if (text.includes("agent") || text.includes("rag") || text.includes("langgraph") || text.includes("ai") || text.includes("forecast")) {
          category = "AI / Agents";
          laneId = "ai";
        } else if (text.includes("tool") || text.includes("relay") || text.includes("cli") || text.includes("extension") || text.includes("hft")) {
          category = "Dev Tools";
          laneId = "tools";
        } else if (text.includes("app") || text.includes("flutter") || text.includes("mobile")) {
          category = "Mobile / Apps";
          laneId = "mobile";
        }

        let tech = [lang.toLowerCase()];
        if (lang === "Python") tech.push("fastapi");
        if (lang === "TypeScript") tech.push("react");
        if (text.includes("flutter")) tech.push("flutter");

        return {
          slug: r.name,
          name: r.name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          tagline: r.description || "Open-source engineering repository.",
          category,
          lane: laneId,
          tech: Array.from(new Set(tech)).slice(0, 4),
          date: new Date(r.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
          repo: r.html_url,
          live: r.homepage && r.homepage.trim() ? r.homepage : r.html_url,
          featured: isResume,
        };
      });

      if (mapped.length > 0) {
        setAllProjects(mapped);
      }
    } catch {
      // Graceful fallback to pre-compiled GITHUB_REPOS_FALLBACK
    }
  }, [username]);

  useEffect(() => {
    fetchGithubRepos();
  }, [fetchGithubRepos]);

  // Filter projects by lane
  const filteredProjects = useMemo(() => {
    const list = viewMode === "featured" ? RESUME_PROJECTS : allProjects;
    if (lane === "all") return list;
    return list.filter((p) => p.lane === lane);
  }, [viewMode, lane, allProjects]);

  // Pagination for "all" mode (10 per page)
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const displayedProjects = useMemo(() => {
    if (viewMode === "featured") {
      return filteredProjects;
    }
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [viewMode, filteredProjects, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabSwitch = (mode) => {
    setViewMode(mode);
    setCurrentPage(1);
  };

  const handleLaneChange = (lId) => {
    setLane(lId);
    setCurrentPage(1);
  };

  return (
    <Section id="projects">
      {/* Section Header with switcher action */}
      <SectionHeading
        title={viewMode === "featured" ? "featured work" : "all projects archive"}
        action={
          <button
            onClick={() => handleTabSwitch(viewMode === "featured" ? "all" : "featured")}
            className="inline-flex items-center gap-1.5 rounded-md border border-portfolio-border bg-portfolio-card px-3 py-1.5 font-mono text-[12px] text-portfolio-text transition-colors hover:border-white/25 hover:bg-white/5 cursor-pointer"
          >
            {viewMode === "featured" ? (
              <>
                <span>all {allProjects.length} projects (10/page)</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </>
            ) : (
              <>
                <span>← show featured ({RESUME_PROJECTS.length})</span>
              </>
            )}
          </button>
        }
      />

      {/* Mode Switcher Tabs + Category Filter */}
      <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-portfolio-border/60 pb-4">
        {/* View Mode Buttons */}
        <div className="inline-flex rounded-lg border border-portfolio-border bg-portfolio-card p-1">
          <button
            onClick={() => handleTabSwitch("featured")}
            className={`rounded-md px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              viewMode === "featured"
                ? "bg-portfolio-text text-portfolio-bg shadow-sm font-semibold"
                : "text-portfolio-muted hover:text-portfolio-text"
            }`}
          >
            <span>✦</span> featured ({RESUME_PROJECTS.length})
          </button>
          <button
            onClick={() => handleTabSwitch("all")}
            className={`rounded-md px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              viewMode === "all"
                ? "bg-portfolio-text text-portfolio-bg shadow-sm font-semibold"
                : "text-portfolio-muted hover:text-portfolio-text"
            }`}
          >
            <span>⌘</span> all projects ({allProjects.length})
          </button>
        </div>

        {/* Category Lane Filter */}
        <div className="flex flex-wrap gap-1.5">
          {LANES.map((l) => (
            <button
              key={l.id}
              onClick={() => handleLaneChange(l.id)}
              className={`rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors cursor-pointer ${
                lane === l.id
                  ? "bg-portfolio-text text-portfolio-bg font-semibold"
                  : "border border-portfolio-border text-portfolio-muted hover:border-white/25 hover:text-portfolio-text"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid (2 columns) */}
      <div className="grid gap-4 sm:grid-cols-2">
        {displayedProjects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.05}>
            <ProjectCard project={p} isFeatured={p.featured || viewMode === "featured"} />
          </Reveal>
        ))}
      </div>

      {/* Pagination Controls (10 per page in "all" view) */}
      {viewMode === "all" && totalPages > 1 && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-portfolio-border/70 pt-6">
          <p className="font-mono text-[12px] text-portfolio-muted">
            showing <span className="text-portfolio-text font-medium font-sans">{(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)}</span> of <span className="text-portfolio-text font-medium font-sans">{filteredProjects.length}</span> projects (10 per page)
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1 font-mono text-[12px]">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-md border border-portfolio-border px-3 py-1 text-portfolio-muted hover:border-white/25 hover:text-portfolio-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              ← prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`h-7 w-7 rounded-md text-[12px] font-mono transition-colors cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-portfolio-text text-portfolio-bg font-bold"
                    : "border border-portfolio-border text-portfolio-muted hover:border-white/25 hover:text-portfolio-text"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded-md border border-portfolio-border px-3 py-1 text-portfolio-muted hover:border-white/25 hover:text-portfolio-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              next →
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}
