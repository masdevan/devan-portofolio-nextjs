import Image from "next/image"
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-12 md:py-20 bg-[#111111]">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1300px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#161616] border border-gray-800 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 overflow-hidden rounded-lg">
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex flex-col space-y-1.5 pb-2">
                  <h3 className="text-lg sm:text-xl font-semibold leading-none tracking-tight text-white">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {project.description}
                  </p>
                </div>
                <div className="p-0 pt-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-[#1a1a1a] text-gray-200 border border-gray-600 hover:bg-gray-800 hover:border-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors h-8 px-3 border border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white"
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors h-8 px-3 bg-gray-200 hover:bg-gray-300 text-black"
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
