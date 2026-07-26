'use client'

import Link from "next/link"
import { Github, Linkedin, Mail, Globe, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'

export function Footer() {

  return (
    <footer className="bg-[#111111] border-t border-white/10">
      <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url(/dy-pattern.webp)',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
        />
        <div className="container mx-auto px-4 sm:px-8 relative z-10 max-w-[1300px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
            Let's Work Together
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6">Get In Touch</h3>
                <p className="text-base sm:text-lg text-white/70 mb-6 md:mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
                    <span className="text-sm sm:text-base text-white/70">masdevansugiharta@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
                    <span className="text-sm sm:text-base text-white/70">085728133473</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
                    <span className="text-sm sm:text-base text-white/70">Indonesia, Jawa Tengah</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6">Connect With Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <a href="https://github.com/masdevan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors h-9 px-4 py-2 border border-white/20 text-white/80 bg-transparent hover:bg-white/10 hover:text-white">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/devan.ys" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors h-9 px-4 py-2 border border-white/20 text-white/80 bg-transparent hover:bg-white/10 hover:text-white">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    Instagram
                  </a>
                  <a href="mailto:masdevansugiharta@gmail.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors h-9 px-4 py-2 border border-white/20 text-white/80 bg-transparent hover:bg-white/10 hover:text-white">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Email
                  </a>
                  <a href="https://wa.me/6285728133473" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors h-9 px-4 py-2 border border-white/20 text-white/80 bg-transparent hover:bg-white/10 hover:text-white">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    WhatsApp
                  </a>
                  <a href="https://devansugiharta.my.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors h-9 px-4 py-2 border border-white/20 text-white/80 bg-transparent hover:bg-white/10 hover:text-white">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    Website
                  </a>
                  <a href="https://www.linkedin.com/in/masdevansugiharta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors h-9 px-4 py-2 border border-white/20 text-white/80 bg-transparent hover:bg-white/10 hover:text-white">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pointer-events-none mt-20">
          <h1 className="text-[15vw] md:text-[15vw] lg:text-[12vw] font-black text-white/[0.04] whitespace-nowrap select-none animate-shiny">
            SUGIHARTA
          </h1>
        </div>
      </section>
      <div className="border-t border-white/10 py-6 md:py-8 pb-20">
        <div className="container mx-auto px-4 sm:px-8 max-w-[1300px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xs sm:text-sm text-white/50">
                &copy; {new Date().getFullYear()} Devan Yudistira Sugiharta. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link href="/privacy-policy" className="text-xs sm:text-sm m-auto text-white/50 hover:text-white/80 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-xs sm:text-sm m-auto text-white/50 hover:text-white/80 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
