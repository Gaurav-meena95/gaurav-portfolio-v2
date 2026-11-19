import { useState, useEffect, useCallback, useMemo } from 'react';
import { Section, SectionHeading, Reveal, TechTag, PillLink, GitHubIcon, ArrowIcon } from './SiteUI';

const CATEGORY_META = {
  "AI / Agents": { color: "#8b5cf6", glyph: "◇" },
  "Dev Tools": { color: "#38bdf8", glyph: "⌘" },
  "Full Stack": { color: "#10b981", glyph: "❖" },
  "Systems": { color: "#f59e0b", glyph: "∆" },
};

const LANES = [
  { id: "all", label: "all" },
  { id: "ai", label: "ai / agents" },
  { id: "tools", label: "dev tools" },
  { id: "web", label: "full stack" },
];

// Pinned resume projects
const RESUME_PROJECTS = [
  {
    slug: "coderelay",
    name: "CodeRelay",
    tagline: "sync accepted solutions from leetcode to github with a modular adapter.",
    description: "built a manifest v3 extension using typescript and vite to sync accepted solutions from leetcode and other platforms to github. integrated github rest api to automate commits.",
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
    tagline: "autonomous browser form-filling agent with hybrid rag and chroma cache.",
    description: "built an ai-powered form-filling agent using langgraph and llama 3.3 70b to automate browser-based form completion with chromadb hybrid rag and structured json schemas.",
    category: "AI / Agents",
    lane: "ai",
    tech: ["langgraph", "python", "fastapi", "docker"],
    date: "Apr 2026",
    repo: "https://github.com/Gaurav-meena95/form-filling-agent",
    live: "https://github.com/Gaurav-meena95/form-filling-agent",
    featured: true,
  },
  {
    slug: "jeweltrack",
    name: "JewelTrack",
    tagline: "smart jewellery inventory, gst billing, and collateral tracking system.",
    description: "full-stack jewellery business management system for inventory, billing, custom orders, and collateral tracking. built with react.js, node.js, express.js, mongodb, and jwt authentication.",
    category: "Full Stack",
    lane: "web",
    tech: ["react", "nodejs", "express", "mongodb", "tailwindcss"],
    date: "Dec 2025",
    repo: "https://github.com/Gaurav-meena95/JewelTrack",
    live: "https://github.com/Gaurav-meena95/JewelTrack",
    featured: true,
  },
];

function ProjectCard({ project }) {
  const meta = CATEGORY_META[project.category] || { color: "#38bdf8", glyph: "⌘" };
  const maxTech = 4;
  const extra = (project.tech?.length || 0) - maxTech;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-portfolio-border bg-portfolio-card transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
      {/* Cover panel matching portfolio_v1 */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-portfolio-border bg-portfolio-bg">
        <div
          className="flex h-full w-full items-center justify-center relative select-none"
          style={{
            background: `radial-gradient(120% 120% at 15% 0%, ${meta.color}2e, transparent 60%), linear-gradient(160deg, #0a0f1c, #030712)`,
          }}
        >
          <span
            className="font-display text-2xl font-semibold tracking-tight text-white/85 text-center px-4"
            style={{ textShadow: `0 0 32px ${meta.color}55` }}
          >
            {project.name}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute -right-3 -top-4 select-none text-[6.5rem] leading-none opacity-[0.07]"
            style={{ color: meta.color }}
          >
            {meta.glyph}
          </span>
        </div>

        {/* Category chip */}
        <span
          className="absolute bottom-2.5 left-2.5 rounded-md px-2 py-0.5 font-mono text-[10px] font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/10"
          style={{ background: `${meta.color}33` }}
        >
          {project.category}
        </span>
      </div>

      {/* Content panel matching portfolio_v1 */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[16px] font-semibold tracking-tight text-portfolio-text">
            {project.name}
          </h3>
          <span className="shrink-0 font-mono text-[11px] text-portfolio-muted">{project.date}</span>
        </div>

        <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-portfolio-muted">
          {project.tagline}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech?.slice(0, maxTech).map((k) => (
            <TechTag key={k} k={k} />
          ))}
          {extra > 0 && (
            <span className="inline-flex items-center rounded-md border border-portfolio-border bg-portfolio-border/40 px-2 py-1 text-[11px] font-medium text-portfolio-muted">
              +{extra}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          {project.repo && (
            <PillLink href={project.repo}>
              <GitHubIcon className="h-3.5 w-3.5" /> Source
            </PillLink>
          )}
          {project.live && (
            <PillLink href={project.live} primary={!project.repo}>
              <ArrowIcon className="h-3.5 w-3.5" /> Live
            </PillLink>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [lane, setLane] = useState("all");
  const [allProjects, setAllProjects] = useState(RESUME_PROJECTS);
  const [showAllRepos, setShowAllRepos] = useState(false);

  const username = "Gaurav-meena95";

  const fetchGithubRepos = useCallback(async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=40&sort=updated`);
      if (!res.ok) return;
      const data = await res.json();
      const filtered = data.filter((r) => !r.fork && !r.archived && !r.disabled);

      const resumeKeys = new Set(["coderelay", "form-filling-agent", "jeweltrack"]);

      const mapped = filtered
        .filter((r) => !resumeKeys.has(r.name.toLowerCase()))
        .map((r) => ({
          slug: r.name,
          name: r.name.replace(/[-_]/g, " "),
          tagline: r.description || "Open-source engineering repository.",
          category: r.language === "Python" ? "AI / Agents" : "Dev Tools",
          lane: r.language === "Python" ? "ai" : "tools",
          tech: r.language ? [r.language.toLowerCase()] : ["git"],
          date: new Date(r.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
          repo: r.html_url,
          live: r.homepage && r.homepage.trim() ? r.homepage : r.html_url,
          featured: false,
        }));

      setAllProjects([...RESUME_PROJECTS, ...mapped]);
    } catch {
      // safe fallback to resume projects
    }
  }, [username]);

  useEffect(() => {
    fetchGithubRepos();
  }, [fetchGithubRepos]);

  const shown = useMemo(() => {
    let list = lane === "all" ? allProjects : allProjects.filter((p) => p.lane === lane);
    if (!showAllRepos) {
      list = list.slice(0, 4);
    }
    return list;
  }, [lane, allProjects, showAllRepos]);

  return (
    <Section id="projects">
      <SectionHeading
        title="featured work"
        action={
          <button
            onClick={() => setShowAllRepos(!showAllRepos)}
            className="inline-flex items-center gap-1 text-[13px] text-portfolio-muted transition-colors hover:text-portfolio-text cursor-pointer"
          >
            {showAllRepos ? "show featured" : `all ${allProjects.length} projects`} <ArrowIcon className="h-3.5 w-3.5" />
          </button>
        }
      />

      <div className="mb-4 flex flex-wrap gap-1.5">
        {LANES.map((l) => (
          <button
            key={l.id}
            onClick={() => setLane(l.id)}
            className={`rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors cursor-pointer ${
              lane === l.id
                ? "bg-portfolio-text text-portfolio-bg"
                : "border border-portfolio-border text-portfolio-muted hover:border-white/25 hover:text-portfolio-text"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.06}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
