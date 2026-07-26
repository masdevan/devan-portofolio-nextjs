'use client'

import { Code, Database, Palette, Globe, Laptop, Server, Type, Table, Cloud, Ship, Atom, Zap, Paintbrush, PenTool, Terminal, GitBranch, Settings, Shield, LayoutDashboard } from 'lucide-react'
import { useState, useMemo } from 'react'
import type { Skill } from "@/types"

const iconMap = {
  Code,
  Database,
  Palette,
  Globe,
  Laptop,
  Server,
  Type,
  Table,
  Cloud,
  Ship,
  Atom,
  Zap,
  Paintbrush,
  PenTool,
  Terminal,
  GitBranch,
  Settings,
  Shield,
  LayoutDashboard,
}

function getIconComponent(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || Code
}

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(skills.map(skill => skill.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return skills;
    }
    return skills.filter(skill => skill.category === activeCategory);
  }, [skills, activeCategory]);

  return (
    <section id="skills" className="py-12 md:py-20 bg-[#111111]">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1300px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 text-white">
          Skills & Technologies
        </h2>
        <p className="text-base sm:text-lg text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Dive into my diverse skill set. These are some of the core technologies and platforms I master to transform ideas into impactful digital experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors py-1 px-3 h-auto ${
                activeCategory === category
                  ? "bg-gray-200 hover:bg-white/90 text-black"
                  : "border border-white/20 text-gray-200 bg-transparent hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIconComponent(skill.icon)
            return (
              <div key={index} className="bg-[#161616] border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 rounded-lg">
                <div className="p-6 text-center flex flex-col items-center">
                  <div className="p-2 sm:p-3 md:p-4 bg-[#1a1a1a] border border-white/15 mb-2 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-white/20 text-gray-300">
                    {skill.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        {filteredSkills.length === 0 && (
          <p className="text-center text-gray-400 mt-8 text-base sm:text-xl">No skills found for this category.</p>
        )}
      </div>
    </section>
  )
}
