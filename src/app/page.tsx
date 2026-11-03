import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoWall from "@/components/LogoWall";
import SkillsList from "@/components/SkillsList";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between max-w-6xl mx-auto relative pb-20 md:pb-0">
      <Nav />
      <div className="space-y-12 sm:space-y-16">
        <Hero />
        <LogoWall />
        <div className="py-8 md:py-12 border-t border-[#ffffff10]">
          <SkillsList />
        </div>
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

