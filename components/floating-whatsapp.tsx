'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const prevScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY
      setVisible(cur > prevScroll.current && cur > 200)
      prevScroll.current = cur
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="https://wa.me/6285728133473"
      target="_blank"
      rel="noopener noreferrer"
      className={'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-white/80 hover:text-white hover:border-white/30 transition-all duration-500 shadow-lg shadow-black/30 ' + (visible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0 pointer-events-none')}
    >
      <MessageCircle className="w-5 h-5 text-white" />
      <span className="text-sm font-medium">Chat via WhatsApp</span>
    </a>
  )
}
