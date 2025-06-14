import { HeroSection } from "./_components/sections/HeroSection";
import { AboutSection } from "./_components/sections/AboutSection";
import { SkillsSection } from "./_components/sections/SkillsSection";
import { ProjectsSection } from "./_components/sections/ProjectsSection";
import { BlogSection } from "./_components/sections/BlogSection";
import { TimelineSection } from "./_components/sections/TimelineSection";
import { ContactSection } from "./_components/sections/ContactSection";
import { FloatingNav } from "./_components/sections/FloatingNav";

export default function HomePage() {
  return (
    <main className="bg-background-dark min-h-screen">
      <FloatingNav />
      <HeroSection />
      <TimelineSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
