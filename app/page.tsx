import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { JourneySection } from "@/components/journey-section"

export default function Portfolio() {
  const skills = [
    { name: "JavaScript", category: "Frontend", icon: "Code" },
    { name: "React", category: "Frontend", icon: "Atom" },
    { name: "Next.js", category: "Frontend", icon: "Zap" },
    { name: "TypeScript", category: "Frontend", icon: "Type" },
    { name: "Node.js", category: "Backend", icon: "Server" },
    { name: "Python", category: "Backend", icon: "Terminal" },
    { name: "PostgreSQL", category: "Database", icon: "Table" },
    { name: "MongoDB", category: "Database", icon: "Database" },
    { name: "Tailwind CSS", category: "Design", icon: "Paintbrush" },
    { name: "AWS", category: "Cloud", icon: "Cloud" },
    { name: "Docker", category: "DevOps", icon: "Ship" },
    { name: "REST APIs", category: "Backend", icon: "LayoutDashboard" },
  ]

  const projects = [
    {
      title: "Vantera - Build your website",
      description: "Join thousands of developers who are already using Vantera to create, preview, and deploy web applications faster than ever before.",
      tech: ["Next.js", "Tailwind CSS"],
      image: "/vantera.png",
      demo: "https://vantera-app-builder.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, animations, and content management system.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
      image: "/blank-web.webp",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, animations, and content management system.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
      image: "/blank-web.webp",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
      tech: ["Vue.js", "Python", "FastAPI", "OpenWeather API"],
      image: "/blank-web.webp",
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <Footer />
    </div>
  )
}
