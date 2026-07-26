import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-[#111111]">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1300px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative flex justify-center md:justify-end">
              <Image
                src="/horizontal-image.webp"
                alt="Developer workspace"
                width={450}
                height={450}
                className="w-full max-w-[350px] md:max-w-[450px] shadow-2xl shadow-black/40"
              />
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
                Hello! I'm Devan Yudistira Sugiharta, a passionate full-stack developer with over 5 years of experience
                in creating digital solutions that make a difference. I specialize in modern web technologies and have
                a keen eye for user experience design.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
                My journey in tech started with a curiosity about how things work behind the scenes. Today, I build
                scalable applications, design intuitive interfaces, and solve complex problems with clean, efficient code.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-semibold transition-colors bg-[#1a1a1a] text-gray-200 border border-white/20 hover:bg-gray-800 hover:border-white/40">
                  5+ Years Experience
                </span>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-semibold transition-colors bg-[#1a1a1a] text-gray-200 border border-white/20 hover:bg-gray-800 hover:border-white/40">
                  50+ Projects Completed
                </span>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-semibold transition-colors bg-[#1a1a1a] text-gray-200 border border-white/20 hover:bg-gray-800 hover:border-white/40">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
