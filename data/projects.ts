import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "Vantera - Build your website",
    description: "Join thousands of developers who are already using Vantera to create, preview, and deploy web applications faster than ever before.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/vantera.png",
    demo: "https://vantera-app-builder.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website with modern design, animations, and content management system.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
    image: "/blank-web.webp",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
    tech: ["Vue.js", "Python", "FastAPI", "OpenWeather API"],
    image: "/blank-web.webp",
    github: "#",
    demo: "#",
  },
]
