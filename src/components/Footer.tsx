"use client";

import { portfolioData } from "@/data/portfolioData";
import LikeButton from "./LikeButton";
import { Github, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 border-t border-[#ffffff10] text-[#dfdfdf]">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {/* Column 1: Socials & Interactive Like */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center space-x-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Richard"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1414149c] border border-[#ffffff15] text-[#f3f3f398] hover:text-white hover:border-[#a476ff] hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Email de Richard"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1414149c] border border-[#ffffff15] text-[#f3f3f398] hover:text-white hover:border-[#a476ff] hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Richard"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1414149c] border border-[#ffffff15] text-[#f3f3f398] hover:text-white hover:border-[#25D366] hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-[#25D366]" />
              </a>
            </div>

            <div className="pt-2">
              <LikeButton />
            </div>

            <p className="text-xs text-[#f3f3f360] text-center md:text-left">
              Fait avec passion et dévouement pour le web moderne.
            </p>
          </div>

          {/* Column 2: Tech Specs */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a476ff] shiny-sec">
              Stack Technique
            </span>
            <div className="space-y-3 w-full max-w-xs">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#1414149c] border border-[#ffffff0a]">
                <span className="text-xs text-[#f3f3f370] w-24">Built with</span>
                <span className="text-xs font-medium text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white inline-block" />
                  Next.js 14 App Router
                </span>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#1414149c] border border-[#ffffff0a]">
                <span className="text-xs text-[#f3f3f370] w-24">Styled with</span>
                <span className="text-xs font-medium text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] inline-block" />
                  Tailwind CSS
                </span>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#1414149c] border border-[#ffffff0a]">
                <span className="text-xs text-[#f3f3f370] w-24">Deployed on</span>
                <span className="text-xs font-medium text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#A9FF5B] inline-block" />
                  Vercel Edge Network
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Spotify / Vibe Embed */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a476ff] shiny-sec">
              Ambiance de Code
            </span>
            <div className="w-full max-w-xs rounded-2xl overflow-hidden border border-[#ffffff10] shadow-xl bg-[#121212]">
              <iframe
                style={{ borderRadius: "14px", border: 0 }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Coding Focus Playlist"
              />
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#ffffff10] flex flex-col sm:flex-row items-center justify-between text-xs text-[#f3f3f360] gap-4 text-center sm:text-left">
          <p>
            Copyright © {currentYear}{" "}
            <span className="text-white font-medium">{personal.name}</span>. Tous droits réservés.
          </p>
          <p className="flex items-center gap-2">
            <span>Inspiré de</span>
            <a
              href="https://darkminimal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a476ff] hover:underline inline-flex items-center gap-1"
            >
              DarkMinimal <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
