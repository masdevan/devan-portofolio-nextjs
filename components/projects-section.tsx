"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import type { Project } from "@/types"

interface ProjectsSectionProps {
  projects: Project[]
}

function usePerPage() {
  const [perPage, setPerPage] = useState(3)
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)")
    const update = () => setPerPage(query.matches ? 3 : 1)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])
  return perPage
}

function ProjectSlider({ images, title }: { images: string[]; title: string }) {
  const perPage = usePerPage()
  const total = images.length
  const pages = Math.max(1, Math.ceil(total / perPage))
  const [index, setIndex] = useState(0)
  const dragStart = useRef<number | null>(null)
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)

  const prev = () => setIndex((i) => (i - 1 + pages) % pages)
  const next = () => setIndex((i) => (i + 1) % pages)

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX
    setDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStart.current === null) return
    setDragX(e.clientX - dragStart.current)
  }

  const endDrag = () => {
    if (dragStart.current === null) return
    if (dragX < -50) next()
    else if (dragX > 50) prev()
    dragStart.current = null
    setDragging(false)
    setDragX(0)
  }

  return (
    <div className="relative group">
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className={`flex -mx-1.5 ${dragging ? "transition-none" : "transition-transform duration-300"}`}
          style={{ transform: `translateX(calc(-${index * 100}% + ${dragX}px))` }}
        >
          {images.map((src, i) => (
            <div key={i} className={`shrink-0 px-1.5 ${perPage === 3 ? "w-1/3" : "w-full"}`}>
              <div className="relative aspect-video overflow-hidden rounded-[8px] border border-white/10">
                <Image
                  src={src}
                  alt={`${title} - ${i + 1}`}
                  fill
                  draggable={false}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {pages > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous images"
            className="absolute left-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next images"
            className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
      {pages > 1 && (
        <div className="flex gap-1.5 mt-4 justify-center">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-12 md:py-20 bg-[#111111]">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1400px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
          Featured Projects
        </h2>
        <div className="flex flex-col gap-10 md:gap-16 max-w-7xl mx-auto">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="flex items-center justify-between gap-2 mb-4 md:mb-6">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 overflow-hidden shrink-0">
                    <Image src={project.logo || project.images[0]} alt={project.title} width={24} height={24} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white min-w-0">{project.title}</h3>
                </div>
                <div className="flex gap-2 sm:gap-3 shrink-0">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md px-2.5 sm:px-3 h-8 w-8 sm:w-auto text-xs sm:text-sm font-medium text-gray-200 border border-white/20 hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md px-2.5 sm:px-3 h-8 w-8 sm:w-auto text-xs sm:text-sm font-medium text-gray-200 border border-white/20 hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
              <ProjectSlider images={project.images} title={project.title} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
