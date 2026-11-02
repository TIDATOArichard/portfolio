"use client";

import { portfolioData } from "@/data/portfolioData";
import { 
  Code2, 
  Terminal, 
  Globe, 
  Database, 
  Cpu, 
  Layers, 
  FileCode, 
  Braces, 
  Server, 
  Zap, 
  GitBranch, 
  Cloud 
} from "lucide-react";

const techIcons: Record<string, React.ReactNode> = {
  "Next.js": <Zap className="w-5 h-5 text-[#a476ff]" />,
  "React": <Cpu className="w-5 h-5 text-[#61dafb]" />,
  "TypeScript": <FileCode className="w-5 h-5 text-[#3178c6]" />,
  "JavaScript": <Braces className="w-5 h-5 text-[#f7df1e]" />,
  "TailwindCSS": <Layers className="w-5 h-5 text-[#38bdf8]" />,
  "Node.js": <Server className="w-5 h-5 text-[#68a063]" />,
  "Python": <Terminal className="w-5 h-5 text-[#4b8bbe]" />,
  "HTML5": <Globe className="w-5 h-5 text-[#e34f26]" />,
  "CSS3": <Code2 className="w-5 h-5 text-[#1572b6]" />,
  "Git": <GitBranch className="w-5 h-5 text-[#f05032]" />,
  "GitHub": <Terminal className="w-5 h-5 text-white" />,
  "Supabase": <Database className="w-5 h-5 text-[#3ecf8e]" />,
  "MySQL": <Database className="w-5 h-5 text-[#00758f]" />,
  "Vercel": <Cloud className="w-5 h-5 text-white" />,
  "Bash": <Terminal className="w-5 h-5 text-[#4eaa25]" />,
};

export default function LogoWall() {
  const technologies = portfolioData.technologies;
  const loopList = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative overflow-x-hidden py-10 my-4 select-none">
      {/* Left and right gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-[#101010] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-[#101010] to-transparent z-20" />

      {/* Infinite scrolling marquee */}
      <div className="flex animate-scroll w-max will-change-transform">
        {loopList.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 pr-10 md:pr-14 group transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <div className="p-2 rounded-xl bg-[#1414149c] border border-[#ffffff10] group-hover:border-[#a476ff]/50 group-hover:scale-110 transition-all duration-300">
              {techIcons[tech.name] || <Code2 className="w-5 h-5 text-[#a476ff]" />}
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium text-[#dfdfdf] whitespace-nowrap group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-[#f3f3f370] uppercase tracking-wider">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
