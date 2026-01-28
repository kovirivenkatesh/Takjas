"use client";
import { ibmPlexSerif } from "@/app/fonts";
import Image from "next/image";

const items = [
    {
        image: "/Images/venture.png",
        label: "Venture Capital & Financing",
        size: 52,
        msg: 'We manage the legal execution of financing rounds, venture debt, and convertible loan agreements to secure your path to growth.'
    },
    {
        image: "/Images/M&A.png",
        label: "M&A and Corporate Structuring",
        size: 36,
        msg: 'Expert counsel for mergers, acquisitions, and corporate spin-offs, ensuring your structure is legally optimized and always transaction-ready.'
    },
    {
        image: "/Images/risk.png",
        label: "Risk & Special Situations",
        size: 36,
        msg: 'Proactive legal strategy for complex disputes, including specialized advice on liability, risk assessment, and crisis management.'
    },
    {
        image: "/Images/incentives.png",
        label: "Incentives & Employment",
        size: 36,
        msg: 'Proactive legal strategy for complex disputes, including specialized advice on liability, risk assessment, and crisis management.'
    },
    {
        image: "/Images/privacy.png",
        label: "Privacy & Compliance",
        size: 36,
        msg: 'Establishing robust compliance frameworks and navigating complex regulatory requirements, with specific expertise in GDPR and data privacy.'
    },
];


export default function CoreLegalCompetence() {
    return (
        <section className="w-6xl mx-10 px-6 py-12 text-[#2C2C2C]">
            <p className="text-sm text-slate-500 mb-2">
                → Our Core Legal Competence
            </p>

            <h2
                className={`text-2xl md:text-3xl max-w-3xl leading-snug mb-10 font-semibold ${ibmPlexSerif.className}`}
            >
                Specialized counsel built on deep transactional expertise across the
                entire growth lifecycle.
            </h2>

            <div className="flex flex-col">
                {items.map((item, i) => (
                    <div key={i} className="relative group">
                        {/* TOP LINE */}
                        <div className="absolute top-0 left-0 w-full h-px bg-[#193170] z-30 pointer-events-none" />

                        {/* SHADOW + BG AREA (BETWEEN LINES) */}
                        <div
                            className="relative bg-transparent group-hover:bg-white transition-all duration-300 pl-6 pb-10 -ml-6 group-hover:shadow-xl"

                        >

                            <div className="flex items-start gap-6">
                                <div className="relative">
                                    {/* Animated bar */}
                                    <div
                                        className="absolute top-0 left-16 h-2 bg-[#193170] w-14 transition-all duration-700 ease-in-out group-hover:translate-x-150   group-hover:w-110   "
                                    />

                                    {/* Icon box */}
                                    <div className="w-20 h-20 bg-[#193170] flex items-center justify-center ">
                                        <div
                                            className="relative"
                                            style={{ width: item.size, height: item.size }}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.label}
                                                fill
                                                className="object-contain invert brightness-0"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <span
                                    className={`text-2xl text-[#193170] mt-7 ${ibmPlexSerif.className}`}
                                >
                                    {item.label}
                                </span>
                            </div>

                            {/* Message */}
                            <div
                                className="absolute top-5 -right-2 opacity-0 -translate-y-4 scale-95 group-hover:opacity-100 group-hover:translate-y-2 group-hover:scale-100 transition-all duration-300 ease-out delay-250 text-[#606060] text-sm leading-relaxed max-w-md z-20"

                            >
                                {item.msg}
                            </div>
                        </div>

                        {/* BOTTOM LINE */}

                        {i === items.length - 1 && (
                            <div className="absolute bottom-0 left-0 w-full h-px bg-[#193170]" />
                        )}

                    </div>

                ))}
            </div>
        </section>
    );
}
