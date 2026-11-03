"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Layout, 
  Server, 
  Palette, 
  Terminal, 
  ChevronDown, 
  CheckCircle2 
} from "lucide-react";

const categoryIconMap: Record<string, React.ReactNode> = {
  layout: <Layout className="w-6 h-6 text-[#a476ff]" />,
  server: <Server className="w-6 h-6 text-[#a476ff]" />,
  palette: <Palette className="w-6 h-6 text-[#a476ff]" />,
  terminal: <Terminal className="w-6 h-6 text-[#a476ff]" />,
};

export default function SkillsList() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    portfolioData.skills[0].title
  );

  const toggleCategory = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <div className="w-full text-left" id="skills">
      <div className="mb-6">
        <span className="text-sm font-semibold tracking-wider uppercase text-[#a476ff] shiny-sec block mb-2">
          Expertise & Savoir-faire
        </span>
        <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Ce que je fais
        </h3>
        <p className="text-sm md:text-base text-[#f3f3f398] mt-2 max-w-xl">
          Une approche complète de l'ingénierie logicielle : de la conception visuelle au déploiement en production.
        </p>
      </div>

      <div className="space-y-4 mt-6">
        {portfolioData.skills.map((category) => {
          const isOpen = openCategory === category.title;
          return (
            <div
              key={category.title}
              className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                isOpen
                  ? "bg-[#161616] border-[#a476ff]/40 shadow-[0_4px_24px_-8px_rgba(164,118,255,0.15)]"
                  : "bg-[#1414149c] border-[#ffffff10] hover:border-[#ffffff20] hover:bg-[#181818]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleCategory(category.title)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-[#1d1d1d] border border-[#ffffff10]">
                    {categoryIconMap[category.icon] || (
                      <Layout className="w-6 h-6 text-[#a476ff]" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-medium text-white">
                      {category.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#f3f3f380] hidden sm:block">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-2 rounded-full transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#a476ff]" : "text-[#f3f3f380]"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                  isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-2 border-t border-[#ffffff0a]">
                  <p className="text-xs text-[#f3f3f370] sm:hidden mb-3">
                    {category.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#dfdfdf]">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#A9FF5B] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

