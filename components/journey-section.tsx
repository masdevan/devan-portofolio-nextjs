import { journeyData } from "@/data/journey"

export function JourneySection() {
    return (
        <section id="journey" className="py-12 md:py-20 bg-[#111111]">
            <div className="container mx-auto px-4 sm:px-8 max-w-[1300px]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 text-white">
                    Career Journey
                </h2>
                <p className="text-base sm:text-lg text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
                    Recent professional experiences, including time periods, companies, and roles.
                </p>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-white/10" aria-hidden />
                    <div className="space-y-6 md:space-y-8">
                        {journeyData.map((item, index) => (
                            <div key={index} className="relative pl-10 sm:pl-14">
                                <div className="absolute left-4 sm:left-5 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-white/30 border border-white/20" />
                                <div className="bg-[#161616] border border-white/10 rounded-lg">
                                    <div className="p-5 md:p-6">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#1a1a1a] text-gray-200 border border-white/20">
                                                {item.period}
                                            </span>
                                            {Array.isArray(item.company) ? (
                                                item.company.map((companyName, idx) => (
                                                    <span key={idx} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-white/20 text-gray-300">
                                                        {companyName}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-white/20 text-gray-300">
                                                    {item.company}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.role}</h3>
                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
