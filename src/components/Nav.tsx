"use client";

import { useState, useEffect } from "react";
import { Home, FolderGit2, Sparkles, Send } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { label: "Accueil", href: "#home", icon: Home },
  { label: "Compétences", href: "#skills", icon: Sparkles },
  { label: "Projets", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Send },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [navWidth, setNavWidth] = useState<string>("80%");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 600;

      if (scrollY > 20) {
        setIsScrolled(true);
        if (window.innerWidth >= 768) {
          const scrollProgress = Math.min(scrollY / maxScroll, 1);
          const easeProgress = 1 - Math.pow(1 - scrollProgress, 3);
          const minW = 480;
          const maxW = window.innerWidth * 0.75;
          const current = maxW - (maxW - minW) * easeProgress;
          setNavWidth(`${Math.max(minW, current)}px`);
        }
      } else {
        setIsScrolled(false);
        setNavWidth(window.innerWidth >= 768 ? "70%" : "100%");
      }

      // Check active section
      const sections = ["home", "skills", "projects", "contact"];
      const scrollPosition = scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <nav
        style={{
          width: navWidth,
          transition: "width 0.25s ease-out, background-color 0.3s ease, border-color 0.3s ease",
        }}
        className={`fixed z-[100] transition-all duration-300 left-1/2 -translate-x-1/2
          md:top-6 bottom-0 md:bottom-auto w-full md:w-auto
          ${
            isScrolled
              ? "bg-[#141414e6] border-[#ffffff15] backdrop-blur-xl shadow-2xl md:rounded-full rounded-t-2xl border"
              : "bg-[#101010a0] border-transparent backdrop-blur-md md:rounded-full rounded-t-2xl border"
          }
        `}
      >
        <div className="container mx-auto flex justify-center items-center px-6 py-3.5">
          <ul className="flex w-full justify-around md:justify-center md:gap-10 gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              const Icon = item.icon;
              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`flex flex-col md:flex-row items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium transition-all duration-300 relative py-1 px-2.5 rounded-full group ${
                      isActive
                        ? "text-white"
                        : "text-[#f3f3f398] hover:text-white"
                    }`}
                  >
                    {/* Active indicator dot */}
                    <span
                      className={`hidden md:block w-2 h-2 rounded-full bg-[#A9FF5B] shadow-[0_0_8px_#A9FF5B] transition-all duration-300 ${
                        isActive
                          ? "opacity-100 scale-100 translate-x-0"
                          : "opacity-0 scale-0 -translate-x-2"
                      }`}
                    />

                    {/* Mobile icon */}
                    <span className="md:hidden">
                      <Icon
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isActive
                            ? "text-[#a476ff] scale-110"
                            : "text-[#f3f3f398]"
                        }`}
                      />
                    </span>

                    {/* Label */}
                    <span className="tracking-wide">{item.label}</span>

                    {/* Mobile active mini indicator */}
                    {isActive && (
                      <span className="md:hidden absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#A9FF5B] rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
