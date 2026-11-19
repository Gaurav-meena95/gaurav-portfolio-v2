import { useState } from 'react';

const KNOWN_LOGOS = {
  python: '/logos/python.svg',
  typescript: '/logos/typescript.svg',
  javascript: '/logos/javascript.svg',
  react: '/logos/react.svg',
  nextjs: '/logos/nextjs.svg',
  tailwindcss: '/logos/tailwindcss.svg',
  flutter: '/logos/flutter.svg',
  dart: '/logos/dart.svg',
  nodejs: '/logos/nodejs.svg',
  express: '/logos/express.svg',
  fastapi: '/logos/fastapi.svg',
  docker: '/logos/docker.svg',
  git: '/logos/git.svg',
  github: '/logos/github.svg',
  postgresql: '/logos/postgresql.svg',
  mongodb: '/logos/mongodb.svg',
  supabase: '/logos/supabase.svg',
  redis: '/logos/redis.svg',
  firebase: '/logos/firebase.svg',
  aws: '/logos/aws.svg',
  gcp: '/logos/gcp.svg',
  html5: '/logos/html5.svg',
  css3: '/logos/css3.svg',
  pytorch: '/logos/pytorch.svg',
  numpy: '/logos/numpy.svg',
  pandas: '/logos/pandas.svg',
  langgraph: '/logos/langgraph.svg',
  leetcode: '/logos/leetcode.svg',
  openai: '/logos/openai.svg',
  claude: '/logos/claude.svg',
  vite: '/logos/vite.svg',
  digitalocean: '/logos/digitalocean.svg',
  ycombinator: '/logos/ycombinator.svg',
};

export function TechLogo({ name, className = "w-4 h-4" }) {
  const [error, setError] = useState(false);
  const key = name?.toLowerCase().replace(/[^a-z0-9]/g, '');
  const src = KNOWN_LOGOS[key] || KNOWN_LOGOS[name?.toLowerCase()];

  if (!src || error) {
    return (
      <span className={`inline-flex items-center justify-center font-mono text-[10px] font-bold text-cyan-400 ${className}`}>
        {name?.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setError(true)}
      className={`object-contain inline-block shrink-0 ${className}`}
      loading="lazy"
    />
  );
}
