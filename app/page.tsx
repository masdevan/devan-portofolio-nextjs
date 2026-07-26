import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { JourneySection } from "@/components/journey-section"
import { projects } from "@/data/projects"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <ProjectsSection projects={projects} />
      <Footer />
    </div>
  )
}
