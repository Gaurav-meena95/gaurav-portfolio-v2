export const PERSONAL_INFO = {
  name: "Gaurav Meena",
  tagline: "Open Source Contributor · Full Stack Developer · AI Undergrad",
  bioHeadline: "Building autonomous AI systems, high-scale mobile workflows, and open-source software.",
  bioDescription: "Bachelor of Technology (Artificial Intelligence) at Newton School of Technology, Rishihood University (CGPA 7.43/10.0). Open Source Contributor to TraceRoot.AI (YC S25) with 12 merged PRs, developer of 1M+ download workflows in Flutter, and competitive programmer with 533 solved problems on LeetCode.",
  status: "Open for Opportunities",
  location: "India",
  email: "gaurav.meena2024@nst.rishihood.edu.in",
  phone: "+91 7724014495",
  resumeUrl: "https://my.newtonschool.co/template/user/meenajigaurav9589/resume/h/n985qywuqlac/",
  socials: {
    github: "https://github.com/Gaurav-meena95",
    linkedin: "https://www.linkedin.com/in/gaurav-meena-3917b2323/",
    leetcode: "https://leetcode.com/u/Gaurav_meena95/",
    codeforces: "https://codeforces.com/profile/G.meena",
    codechef: "https://codechef.com/users/gaurav_meena95",
    personalPortfolio: "https://my.newtonschool.co/template/user/meenajigaurav9589/resume/h/n985qywuqlac/",
  },
  metrics: [
    { label: "Merged YC PRs", value: "12 Merged", highlight: "TraceRoot.AI (YC S25)" },
    { label: "Real User Downloads", value: "1M+", highlight: "Travel Buddy App" },
    { label: "LeetCode Solved", value: "533", highlight: "1,459 Peak Contest Rating" },
    { label: "Hackathon Standing", value: "Top 500", highlight: "MumbaiHacks 2025 (3k+ teams)" },
  ]
};

export const OPEN_SOURCE_SPOTLIGHT = {
  company: "TraceRoot.AI",
  batch: "YC S25",
  role: "Open Source Contributor",
  period: "June 2026 – Present",
  location: "Remote",
  logo: "/oss/traceroot-ai.png",
  totalPRs: "45+ Authored",
  mergedPRs: "12 Merged PRs",
  keyContributions: [
    {
      title: "OpenAI BYOK Model Configuration",
      desc: "Extended OpenAI BYOK model configuration with new model catalog entries, cache-aware pricing, and pricing validation.",
      prs: ["#2053", "#2395"],
      tags: ["FastAPI", "Python", "React", "Pricing Validation"]
    },
    {
      title: "Detector Creation Failure Remediation",
      desc: "Fixed detector creation failures by improving backend API responses and implementing robust frontend exception handling.",
      prs: ["#1611"],
      tags: ["Backend API", "Exception Handling", "React"]
    },
    {
      title: "SDK Metrics & Production PR Delivery",
      desc: "Authored 45+ pull requests with 12 merged, covering product fixes, BYOK features, dashboard metrics, Slack integration, and SDK/integration documentation.",
      tags: ["SDK Documentation", "Slack Integration", "Dashboard Metrics"]
    }
  ]
};

export const WORK_EXPERIENCE = [
  {
    role: "Open Source Contributor",
    company: "TraceRoot.AI (YC S25)",
    period: "June 2026 – Present",
    location: "Remote",
    badge: "YC S25 Contributor",
    points: [
      "Extended OpenAI BYOK model configuration with new model catalog entries, cache-aware pricing, and pricing validation.",
      "Fixed detector creation failures by improving backend API responses and implementing robust frontend exception handling.",
      "Authored 45+ pull requests, with 12 merged, covering product fixes, BYOK features, and SDK/integration documentation (Ex: #2053, #2395, #1611)."
    ],
    tech: ["FastAPI", "Python", "React", "OpenAI BYOK", "Slack API", "Docker"]
  },
  {
    role: "Full Stack Developer",
    company: "Travel Buddy",
    period: "June 2026 – September 2026",
    location: "Remote",
    badge: "1M+ Downloads Platform",
    points: [
      "Built 7 flight-booking workflows in Flutter, including search filters, fare calendars, passenger details, seat, and meal selection.",
      "Integrated 11+ native capabilities, including Razorpay checkout, Firebase messaging, biometric chat lock, selfie verification.",
      "Delivered features across booking, feeds, meetups, and dark mode for a travel platform with Real user 1M+ downloads."
    ],
    tech: ["Flutter", "Dart", "Firebase", "Razorpay", "Biometric Lock", "Dark Mode"]
  },
  {
    role: "Web Developer",
    company: "Carmaacarcare",
    period: "March 2026 – May 2026",
    location: "Remote",
    badge: "1,000+ Users",
    points: [
      "Built a React Native rewards game where users earn coins through gameplay, reducing unrestricted AI feature use to reduce cost.",
      "Implemented coin-based access to AI dent detection, with additional credits available via bookings, for serving 1,000+ users.",
      "Fixed and revamped the admin portal, resolving interface issues and improving core dashboard workflows for business operations."
    ],
    tech: ["React Native", "JavaScript", "AI Dent Detection", "Admin Dashboard", "Node.js"]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (Artificial Intelligence)",
    institution: "Newton School of Technology, Rishihood University",
    period: "2024 – 2028",
    grade: "CGPA: 7.43 / 10.0",
    badge: "B.Tech (AI)",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Jawahar Navodaya Vidyalaya, Bhopal",
    period: "2022 – 2023",
    grade: "Marks: 75.0%",
    badge: "Class XII",
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Jawahar Navodaya Vidyalaya, Bhopal",
    period: "2020 – 2021",
    grade: "Marks: 93.0%",
    badge: "Class X",
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Open Source — TraceRoot.AI (YC S25)",
    category: "Open Source",
    date: "2026",
    icon: "git",
    highlight: "12 Merged / 45+ PRs",
    desc: "Contributed 12 merged PRs to product features, bug fixes, SDK and documentation. Delivered improvements in BYOK pricing, detector reliability, dashboard metrics, and Slack integration. Ex: #2053, #2395, #1611.",
    badge: "YC S25"
  },
  {
    title: "LeetCode: 533 Problems Solved",
    category: "Competitive Programming",
    date: "Active",
    icon: "code",
    highlight: "Peak Rating: 1,459",
    desc: "Solved 533 problems; contest rating 1,439 (peak 1,459) across 51 contests, earned 10 Badges. Handle: Gaurav_meena95.",
    badge: "10 Badges"
  },
  {
    title: "MumbaiHacks 2025 — Agentic AI Hackathon",
    category: "Certifications & Hackathons",
    date: "Nov 2025",
    icon: "award",
    highlight: "Top 500 of 3,000+ Teams",
    desc: "Tech Entrepreneurs Association of Mumbai: Selected in Top 500 teams from 3,000+ innovators at Agentic AI Hackathon, built a voice AI soil advisory system for farmers.",
    badge: "Finalist"
  },
  {
    title: "Supercontributor — Hacktoberfest 2025 (DigitalOcean)",
    category: "Certifications",
    date: "Sep 2025",
    icon: "award",
    highlight: "Top 10,000 Globally",
    desc: "Earned DigitalOcean Supercontributor recognition with 6+ merged PRs, ranking among the global top 10,000 contributors.",
    badge: "DigitalOcean"
  },
  {
    title: "Samsung Solve for Tomorrow 2023",
    category: "Extra-Curricular Activities",
    date: "2023",
    icon: "zap",
    highlight: "Rs. 1 Lakh Funding @ IIT Delhi",
    desc: "Selected in Top 50 teams nationwide, received Rs. 1 lakh in funding grant and attended bootcamp at IIT Delhi.",
    badge: "Top 50 Teams"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "AI / ML",
    skills: [
      { name: "RAG", logo: "openai" },
      { name: "LLM", logo: "claude" },
      { name: "Vector Embeddings", logo: "openai" },
      { name: "LangChain", logo: "langchain-ai" },
      { name: "LangGraph", logo: "langgraph" },
      { name: "NumPy", logo: "numpy" },
      { name: "Pandas", logo: "pandas" },
      { name: "Scikit-learn", logo: "python" },
      { name: "TensorFlow", logo: "python" },
      { name: "Keras", logo: "python" }
    ]
  },
  {
    name: "Computer Language",
    skills: [
      { name: "Python", logo: "python" },
      { name: "TypeScript", logo: "typescript" },
      { name: "JavaScript", logo: "javascript" },
      { name: "HTML", logo: "html5" },
      { name: "CSS", logo: "css3" },
      { name: "SQL", logo: "postgresql" }
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React Native", logo: "react" },
      { name: "Next.js", logo: "nextjs" },
      { name: "React", logo: "react" },
      { name: "Node.js", logo: "nodejs" },
      { name: "Express JS", logo: "express" },
      { name: "FastAPI", logo: "fastapi" },
      { name: "Prisma ORM", logo: "typescript" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "Framer Motion", logo: "vite" }
    ]
  },
  {
    name: "Databases & Data Tools",
    skills: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Supabase", logo: "supabase" },
      { name: "MySQL", logo: "postgresql" },
      { name: "NoSQL", logo: "mongodb" },
      { name: "Tableau", logo: "gcp" },
      { name: "Spreadsheet", logo: "gcp" },
      { name: "Matplotlib & seaborn", logo: "python" }
    ]
  },
  {
    name: "Cloud, DevOps & Core CS",
    skills: [
      { name: "Git and Github", logo: "github" },
      { name: "AWS", logo: "aws" },
      { name: "Google Cloud Platform", logo: "gcp" },
      { name: "Postman", logo: "postman" },
      { name: "REST APIs", logo: "fastapi" },
      { name: "Data Structures & Algorithms", logo: "leetcode" },
      { name: "DBMS", logo: "postgresql" },
      { name: "Computer Networks", logo: "linux" },
      { name: "Figma (UI/UX)", logo: "vite" }
    ]
  }
];
