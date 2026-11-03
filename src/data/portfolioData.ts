export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  preview?: string;
  status: "Déployé" | "En production" | "En développement" | "Open Source" | "Projet Web";
  tags: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export const portfolioData = {
  personal: {
    name: "TIDATOA Diminine Richard",
    shortName: "Richard TIDATOA",
    handle: "s_richard",
    role: "Développeur Full-Stack & Frontend",
    tagline: "Transformer vos idées en expériences numériques interactives, performantes et épurées.",
    bio: "Développeur passionné basé à Lomé au Togo, spécialisé dans l'écosystème JavaScript/TypeScript moderne (Next.js, React, Node.js). Je combine rigueur d'ingénierie et sensibilité design pour concevoir des applications web fluides, évolutives et esthétiques.",
    location: "Lomé, Togo",
    email: "tidatoar@gmail.com",
    phone: "+228 91443682",
    whatsapp: "https://wa.me/22891443682",
    github: "https://github.com/TIDATOArichard",
    avatar: "https://avatars.githubusercontent.com/u/204076196?v=4",
    statusText: "Disponible pour nouveaux projets & opportunités",
    stats: [
      { label: "Dépôts GitHub", value: "9+" },
      { label: "Technologies maîtrisées", value: "14+" },
      { label: "Engagement qualité", value: "100%" },
    ],
  },

  skills: [
    {
      title: "Développement Web & Frontend",
      description: "Architecture d'interfaces modernes, réactives et optimisées pour le SEO.",
      icon: "layout",
      items: [
        "Applications Next.js (App Router, Server Components & SSR)",
        "Single Page Applications (React, TypeScript & Modern State)",
        "Styling avancé avec Tailwind CSS, Flexbox & CSS Grid",
        "Animations fluides, transitions et micro-interactions interactives",
      ],
    },
    {
      title: "Backend & Architectures API",
      description: "Création de services robustes, performants et sécurisés.",
      icon: "server",
      items: [
        "Développement d'APIs RESTful avec Node.js & Express",
        "Scripts d'automatisation et traitement de données avec Python",
        "Gestion et modélisation de bases de données (PostgreSQL, Supabase, MySQL)",
        "Authentification, sécurité et validation rigoureuse des données",
      ],
    },
    {
      title: "UI/UX & Design Systèmes",
      description: "Création d'expériences utilisateur minimalistes, ergonomiques et engageantes.",
      icon: "palette",
      items: [
        "Esthétique Dark Minimal et interfaces inspirées des standards modernes",
        "Design adaptatif Mobile-First garantissant une navigation irréprochable",
        "Prototypage rapide avec Figma & Canva",
        "Accessibilité (a11y), contrastes soignés et typographie Montserrat",
      ],
    },
    {
      title: "Outils & Déploiement Cloud",
      description: "Flux de travail agile et intégration continue.",
      icon: "terminal",
      items: [
        "Gestion de versions avec Git & GitHub (Workflows, branches, PRs)",
        "Déploiement continu et optimisation serveur sur Vercel",
        "Environnements d'exécution, CLI PowerShell & Bash",
        "Audit des performances web (Lighthouse, Core Web Vitals)",
      ],
    },
  ] as SkillCategory[],

  technologies: [
    { name: "Next.js", category: "Framework" },
    { name: "React", category: "Library" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "TailwindCSS", category: "Styling" },
    { name: "Node.js", category: "Runtime" },
    { name: "Python", category: "Language" },
    { name: "HTML5", category: "Markup" },
    { name: "CSS3", category: "Styling" },
    { name: "Git", category: "VCS" },
    { name: "GitHub", category: "Platform" },
    { name: "Supabase", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Vercel", category: "Cloud" },
    { name: "Bash", category: "Tool" },
  ],

  projects: [
    {
      title: "DKM - Asky Guinea Fowl",
      description: "Application web de pointe développée avec TypeScript et Next.js/React. Conçue pour offrir une expérience fluide de gestion, une navigation intuitive et un design soigné.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "https://github.com/TIDATOArichard/DKM",
      preview: "https://askydkmguineafowl.vercel.app",
      status: "Déployé",
      tags: ["TypeScript", "React", "Next.js", "Vercel", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "Portfolio Minimaliste & Thème Dynamique",
      description: "Portfolio interactif complet conçu avec gestion dynamique de thèmes sombre/clair, menu responsive ergonomique, animations CSS personnalisées et formulaire de contact direct.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      link: "https://github.com/TIDATOArichard/portfoliorichard",
      preview: "https://github.com/TIDATOArichard/portfoliorichard",
      status: "En production",
      tags: ["JavaScript", "HTML5", "CSS3 Modern", "Responsive"],
      featured: true,
    },
    {
      title: "GestionSport",
      description: "Système de gestion et d'administration sportive centralisé. Permet le suivi des effectifs, plannings d'entraînements, licences et statistiques sportives.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
      link: "https://github.com/TIDATOArichard/GestionSport",
      status: "En développement",
      tags: ["Full-Stack", "Web App", "Database", "Analytics"],
      featured: false,
    },
    {
      title: "Massivement Web",
      description: "Projet éditorial web structuré autour d'une mise en page dynamique, de grilles typographiques soignées et d'une narration visuelle immersive.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
      link: "https://github.com/TIDATOArichard/Massivement",
      status: "Projet Web",
      tags: ["Editorial UI", "Frontend", "Typography", "CSS Grid"],
      featured: false,
    },
    {
      title: "Naruto Python Engine",
      description: "Application et scripts en Python explorant le traitement algorithmique, les structures de données et l'interaction modulaire avec la console.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      link: "https://github.com/TIDATOArichard/naruto",
      status: "Open Source",
      tags: ["Python", "Algorithms", "Automation", "Scripts"],
      featured: false,
    },
    {
      title: "TikTok Aura & Video Automation",
      description: "Outil d'expérimentation pour l'automatisation, l'analyse de signaux viraux et l'optimisation de flux médias pour les plateformes sociales.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      link: "https://github.com/TIDATOArichard/tiktok-aura-farming",
      status: "Open Source",
      tags: ["Automation", "Media Data", "Video Tech", "API"],
      featured: false,
    },
  ] as Project[],
};

