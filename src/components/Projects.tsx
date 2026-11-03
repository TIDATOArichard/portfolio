"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolioData";
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("Tous");
  const categories = ["Tous", "Déployé", "Full-Stack", "Frontend", "Open Source"];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (filter === "Tous") return true;
    if (filter === "Déployé") return project.status === "Déployé" || project.status === "En production";
    if (filter === "Full-Stack") return project.tags.some(t => t.toLowerCase().includes("full-stack") || t.toLowerCase().includes("database") || t.toLowerCase().includes("next.js"));
    if (filter === "Frontend") return project.tags.some(t => t.toLowerCase().includes("react") || t.toLowerCase().includes("frontend") || t.toLowerCase().includes("responsive"));
    if (filter === "Open Source") return project.status === "Open Source" || project.tags.includes("Python");
    return true;
  });

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-[#ffffff10] text-[#dfdfdf]"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#a476ff] mb-2 shiny-sec flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Mes Réalisations
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Projets Sélectionnés
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs md:text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 border ${
                  filter === cat
                    ? "bg-[#a476ff] text-black font-semibold border-[#a476ff]"
                    : "bg-[#1414149c] text-[#f3f3f380] border-[#ffffff10] hover:text-white hover:border-[#ffffff25]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-[#1414149c] border border-[#ffffff10] hover:border-[#a476ff]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-[#181818]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border ${
                        project.status === "Déployé" || project.status === "En production"
                          ? "bg-[#A9FF5B]/20 text-[#A9FF5B] border-[#A9FF5B]/40 shadow-[0_0_12px_rgba(169,255,91,0.2)]"
                          : "bg-black/60 text-[#a476ff] border-[#a476ff]/40"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-3">
                  <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#a476ff] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[#f3f3f390] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#1d1d1d] text-[#dfdfdf] border border-[#ffffff0a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#ffffff0a]">
                <span className="text-xs text-[#f3f3f360]">
                  Explorer le code ou la démo
                </span>

                <div className="flex items-center gap-2">
                  {/* GitHub Repo Button */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    aria-label={`Code source de ${project.title}`}
                    className="w-11 h-11 flex justify-center items-center text-[#f3f3f398] hover:text-white transition duration-300 border border-[#ffffff15] hover:border-[#a476ff] rounded-xl bg-[#1d1d1d] hover:bg-[#252525]"
                    title="Code source GitHub"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>

                  {/* Live Preview Button */}
                  {project.preview ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.preview}
                      aria-label={`Aperçu en ligne de ${project.title}`}
                      className="w-11 h-11 flex justify-center items-center text-[#f3f3f398] hover:text-white transition duration-300 border border-[#ffffff15] hover:border-[#A9FF5B] rounded-xl bg-[#1d1d1d] hover:bg-[#252525]"
                      title="Voir en ligne"
                    >
                      <ExternalLink className="w-5 h-5 text-[#A9FF5B]" />
                    </a>
                  ) : (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      aria-label={`Détails de ${project.title}`}
                      className="w-11 h-11 flex justify-center items-center text-[#f3f3f398] hover:text-white transition duration-300 border border-[#ffffff15] hover:border-[#a476ff] rounded-xl bg-[#1d1d1d] hover:bg-[#252525]"
                      title="Voir le dépôt"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA: More projects on GitHub */}
        <div className="pt-6 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioData.personal.github}
            aria-label="Voir tous les projets sur GitHub"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-[#f3f3f3] hover:text-white transition duration-300 ease-in-out border border-[#ffffff15] hover:border-[#a476ff] rounded-full bg-[#1414149c] hover:bg-[#1a1a1a] hover:scale-[1.02] shadow-lg group"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform text-[#a476ff]" />
            <span className="text-sm sm:text-base font-medium">
              Découvrir tous mes dépôts sur GitHub (@{portfolioData.personal.handle})
            </span>
            <ExternalLink className="w-4 h-4 text-[#f3f3f380] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

