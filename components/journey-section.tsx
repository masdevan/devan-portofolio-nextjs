import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface JourneyItem {
    period: string
    company: string | string[]
    role: string
    description: string
}

const journeyData: JourneyItem[] = [
    {
        period: "March 2021 - January 2024",
        company: "Freelancer",
        role: "Frontend Developer",
        description:
            "It was a phase where I was new to coding and started with HTML, CSS, and BOOTSTRAP, with the help of W3 School as my learning media, And the first time I got a job, it was called AVA CLEAN, a website for selling cleaning products for motorbikes.",
    },
    {
        period: "January 2024 - August 2024",
        company: ["PT. Karir Anak Indonesia", "Nine Dragon Labs Studio"],
        role: "Full Stack Developer",
        description:
            "The place where I plunged into the digital programming industry, in the Indonesian Child Career internship program with studio placement at Nine Dragon Labs Studio and located in Semarang, I gained a lot of experience starting from Laravel, ReactJS, VueJS and other popular Frameworks at that time.",
    },
    {
        period: "August 2024 - September 2025",
        company: ["PT. Jaringan Rumah Usaha", "AllFillDev Studio"],
        role: "Project Manager",
        description:
            "A place where I can learn and work to become a Project Manager after being a production worker for a long time. I learned about Project Management, Handling Clients, Meeting with Clients, and other interesting things.",
    },
]

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
                    <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-gray-800" aria-hidden />
                    <div className="space-y-6 md:space-y-8">
                        {journeyData.map((item, index) => (
                            <div key={index} className="relative pl-10 sm:pl-14">
                                <div className="absolute left-4 sm:left-5 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-gray-300 border border-gray-600" />
                                <Card className="bg-[#161616] border border-gray-800">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <Badge variant="secondary" className="text-xs bg-[#1a1a1a] text-gray-200 border border-gray-600 cursor-default select-none pointer-events-none hover:bg-[#1a1a1a] transition-none">
                                                {item.period}
                                            </Badge>
                                            {Array.isArray(item.company) ? (
                                                item.company.map((companyName, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-300">
                                                        {companyName}
                                                    </Badge>
                                                ))
                                            ) : (
                                                <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                                                    {item.company}
                                                </Badge>
                                            )}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.role}</h3>
                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


