'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { announcements } from '@/data/announcements'

export function AnnouncementBar({ visible }: { visible: boolean }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((prev) => (prev - 1 + announcements.length) % announcements.length)
  const next = () => setCurrent((prev) => (prev + 1) % announcements.length)

  return (
    <div className={'grid transition-[grid-template-rows] duration-300 ' + (visible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
      <div className="overflow-hidden">
        <div className={'transition-transform duration-300 ' + (visible ? '' : '-translate-y-full')}>
          <div className="flex items-center bg-black py-2.5">
            <button onClick={prev} className="flex-shrink-0 ml-2 text-white/50 hover:text-white transition-colors" aria-label="Previous">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <div className="flex-1 overflow-hidden text-center text-white/70 text-xs font-semibold tracking-wider">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: 'translateX(-' + (current * 100) + '%)' }}
              >
                {announcements.map((text, i) => (
                  <span key={i} className="w-full flex-shrink-0">{text}</span>
                ))}
              </div>
            </div>
            <button onClick={next} className="flex-shrink-0 mr-2 text-white/50 hover:text-white transition-colors" aria-label="Next">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
