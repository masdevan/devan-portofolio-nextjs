'use client'

import Link from "next/link"
import { Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const scrollToElement = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    ;(window as any).scrollToElement = scrollToElement
  }, [])

  return (
    <>
      <header className="fixed top-0 w-full bg-[#111111]/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 sm:px-8 py-3 md:py-4 max-w-[1300px]">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              Devan Sugiharta
            </Link>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <Link href="#hero" className="text-gray-300 hover:text-gray-100 transition-colors">Home</Link>
              <Link href="#about" className="text-gray-300 hover:text-gray-100 transition-colors">About</Link>
              <Link href="#skills" className="text-gray-300 hover:text-gray-100 transition-colors">Skills</Link>
              <Link href="#projects" className="text-gray-300 hover:text-gray-100 transition-colors">Projects</Link>
              <Link href="#contact" className="text-gray-300 hover:text-gray-100 transition-colors">Contact</Link>
            </div>
            <button
              className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 border border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 w-9 border border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="fixed inset-0 bg-black/80" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[60] w-3/4 bg-[#111111] border-l border-gray-800 shadow-lg p-6">
            <div className="flex flex-col gap-5 pt-8">
              <Link href="#hero" className="text-lg text-white hover:text-gray-100 transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('hero') }}>Home</Link>
              <Link href="#about" className="text-lg text-white hover:text-gray-100 transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('about') }}>About</Link>
              <Link href="#skills" className="text-lg text-white hover:text-gray-100 transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('skills') }}>Skills</Link>
              <Link href="#projects" className="text-lg text-white hover:text-gray-100 transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('projects') }}>Projects</Link>
              <Link href="#contact" className="text-lg text-white hover:text-gray-100 transition-colors" onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('contact') }}>Contact</Link>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 border border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white mt-4"
                onClick={() => { setIsMobileMenuOpen(false); (window as any).scrollToElement?.('contact') }}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none text-white"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
