"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import LetterGlitch from "./LetterGlitch";
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle,
  FileText
} from "lucide-react";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="text-white pt-24 md:pt-36 pb-12" id="home">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Top notification pill */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1414149c] border border-[#ffffff15] backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A9FF5B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A9FF5B]"></span>
            </span>
            <span className="text-xs font-medium text-[#dfdfdf]">
              {personal.statusText}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#f3f3f380] px-3 py-1.5 rounded-full bg-[#14141450] border border-[#ffffff0a]">
            <MapPin className="w-3.5 h-3.5 text-[#a476ff]" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Main Title and Intro */}
        <div className="text-left space-y-6">
          <p className="text-base md:text-xl text-[#f3f3f398] font-medium tracking-wide">
            Salut, je suis{" "}
            <span className="text-white font-semibold underline decoration-[#a476ff]/60 underline-offset-4">
              {personal.name}
            </span>{" "}
            <span className="text-xs uppercase px-2 py-0.5 rounded bg-[#a476ff]/15 text-[#a476ff] border border-[#a476ff]/30 font-mono">
              {personal.handle}
            </span>
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Développeur <br />
              <span className="text-[#a476ff] shiny-sec">Full-Stack</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#f3f3f398] max-w-lg leading-relaxed">
              {personal.tagline}
            </p>
          </div>

          {/* Social links & Contact shortcuts */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={personal.github}
              aria-label="GitHub"
              className="flex items-center gap-2 text-[#f3f3f398] hover:text-white transition duration-300 ease-in-out border border-[#ffffff15] hover:border-[#a476ff]/50 px-4 py-2.5 rounded-xl bg-[#1414149c] hover:bg-[#1a1a1a] group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex items-center gap-2 text-[#f3f3f398] hover:text-white transition duration-300 ease-in-out border border-[#ffffff15] hover:border-[#a476ff]/50 px-4 py-2.5 rounded-xl bg-[#1414149c] hover:bg-[#1a1a1a] group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform text-[#a476ff]" />
              <span className="text-sm font-medium">{personal.email}</span>
            </a>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              aria-label="Téléphone"
              className="flex items-center gap-2 text-[#f3f3f398] hover:text-white transition duration-300 ease-in-out border border-[#ffffff15] hover:border-[#a476ff]/50 px-4 py-2.5 rounded-xl bg-[#1414149c] hover:bg-[#1a1a1a] group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform text-[#A9FF5B]" />
              <span className="text-sm font-medium">{personal.phone}</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 text-black bg-[#a476ff] hover:bg-[#b993ff] transition duration-300 font-semibold px-5 py-2.5 rounded-xl shadow-[0_0_20px_-5px_#a476ff]"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dual Card Presentation: Avatar Profile & Matrix Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Profile Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#1414149c] border border-[#ffffff10] backdrop-blur-md flex flex-col justify-between space-y-6">
            <div className="flex items-start gap-5">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#a476ff]/40 shadow-xl shrink-0 bg-[#202020]">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  {personal.shortName}
                  <CheckCircle className="w-4 h-4 text-[#A9FF5B]" />
                </h3>
                <p className="text-sm text-[#a476ff] font-medium">
                  {personal.role}
                </p>
                <p className="text-xs text-[#f3f3f370]">
                  Lomé, Togo • Fuseau GMT
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#dfdfdf] leading-relaxed">
              {personal.bio}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#ffffff0a]">
              {personal.stats.map((stat, i) => (
                <div key={i} className="text-center p-2.5 rounded-xl bg-[#1a1a1a]/80 border border-[#ffffff08]">
                  <span className="block text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] text-[#f3f3f380] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LetterGlitch Canvas Component */}
          <div className="lg:col-span-6 h-[320px] lg:h-auto min-h-[300px]">
            <LetterGlitch
              glitchColors={["#5e4491", "#A476FF", "#241a38", "#a9ff5b", "#8b5cf6"]}
              glitchSpeed={35}
              centerVignette={false}
              outerVignette={true}
              smooth={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
