'use client'

import Link from "next/link"
import { ChevronDown, Mail, Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnnouncementBar } from "@/components/announcement-bar"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)
  const [barVisible, setBarVisible] = useState(true)
  const prevScroll = useRef(0)
  const projectsMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isProjectsMenuOpen) return

    const onPointerDown = (event: MouseEvent) => {
      if (!projectsMenuRef.current?.contains(event.target as Node)) {
        setIsProjectsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [isProjectsMenuOpen])

  useEffect(() => {
    const scrollToElement = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    ;(window as any).scrollToElement = scrollToElement
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY
      setBarVisible(cur <= prevScroll.current || cur <= 50)
      prevScroll.current = cur
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <AnnouncementBar visible={barVisible} />
      <header className="bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-8 py-3 md:py-4 max-w-[1300px]">
          <nav className="flex items-center justify-between relative">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              Devan Sugiharta
            </Link>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6 lg:space-x-8">
              <Link href="/#hero" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link>

              <div ref={projectsMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsProjectsMenuOpen((isOpen) => !isOpen)}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') setIsProjectsMenuOpen(false)
                  }}
                  aria-expanded={isProjectsMenuOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${isProjectsMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isProjectsMenuOpen && (
                  <div className="absolute left-1/2 top-full z-50 mt-2 w-44 -translate-x-1/2 overflow-hidden rounded-md border border-white/10 bg-[#161616] shadow-xl shadow-black/40">
                    <Link
                      href="/#projects"
                      onClick={() => setIsProjectsMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      All Projects
                    </Link>
                    <Link
                      href="/project/nucestatic"
                      onClick={() => setIsProjectsMenuOpen(false)}
                      className="block border-t border-white/10 px-4 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      Nucestatic
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 border border-white/20 text-gray-200 bg-transparent hover:bg-white/10 hover:text-white"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 w-9 border border-white/20 text-gray-200 bg-transparent hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div className={'md:hidden overflow-hidden transition-all duration-300 ease-in-out ' + (isMobileMenuOpen ? 'max-h-80' : 'max-h-0')}>
        <div className={'transition-transform duration-300 ease-in-out ' + (isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full')}>
          <div className="bg-[#111111]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 flex flex-col gap-4">
            <Link href="/#hero" className="text-base text-white/70 hover:text-white transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('hero') }}>Home</Link>
            <Link href="/#about" className="text-base text-white/70 hover:text-white transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('about') }}>About</Link>

            <Link href="/#projects" className="text-base text-white/70 hover:text-white transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('projects') }}>Projects</Link>
            <Link href="/project/nucestatic" className="text-base text-white/70 hover:text-white transition-colors pl-4" onClick={() => setIsMobileMenuOpen(false)}>Nucestatic</Link>
            <Link href="/#contact" className="text-base text-white/70 hover:text-white transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('contact') }}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
