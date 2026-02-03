"use client";
import { ibmPlexSerif } from "@/app/fonts";
import Image from "next/image";

const items = [
    {
        image: "/Images/venture.png",
        label: "Venture Capital & Financing",
        size: 60,
        msg: 'We manage the legal execution of financing rounds, venture debt, and convertible loan agreements to secure your path to growth.'
    },
    {
        image: "/Images/M&A.png",
        label: "M&A and Corporate Structuring",
        size: 40,
        msg: 'Expert counsel for mergers, acquisitions, and corporate spin-offs, ensuring your structure is legally optimized and always transaction-ready.'
    },
    {
        image: "/Images/risk.png",
        label: "Risk & Special Situations",
        size: 40,
        msg: 'Proactive legal strategy for complex disputes, including specialized advice on liability, risk assessment, and crisis management.'
    },
    {
        image: "/Images/incentives.png",
        label: "Incentives & Employment",
        size: 40,
        msg: 'Proactive legal strategy for complex disputes, including specialized advice on liability, risk assessment, and crisis management.'
    },
    {
        image: "/Images/privacy.png",
        label: "Privacy & Compliance",
        size: 40,
        msg: 'Establishing robust compliance frameworks and navigating complex regulatory requirements, with specific expertise in GDPR and data privacy.'
    },
];


export default function CoreLegalCompetence() {
    return (
        <section className="mt-32.25 text-[#2C2C2C] pl-22.5  pr-21.25">
            <p className="text-[16px] text-slate-500 mb-2.25">
                → Our Core Legal Competence
            </p>

            <h2
                className={`text-[36px]  text-[#2C2C2C]   mb-18.75  leading-13.75 font-medium ${ibmPlexSerif.className}`}
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

                            <div className="flex items-start gap-6.5">
                                <div className="relative">
                                    {/* Animated bar */}
                                    <div
                                        className="absolute top-0 left-14 h-2 bg-[#193170] w-13 transition-all duration-700 ease-in-out group-hover:translate-x-144   group-hover:w-115   "
                                    />

                                    {/* Icon box */}
                                    <div className="w-22 h-22 bg-[#193170] flex items-center justify-center mb-15.5 ">
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
                                    className={`text-[32px]  leading-7.75 text-[#193170] mt-7.75 ${ibmPlexSerif.className}`}
                                >
                                    {item.label}
                                </span>
                            </div>

                            {/* Message */}
                            <div
                                className="absolute top-5 right-2 opacity-0 -translate-y-4 scale-95 group-hover:opacity-100 group-hover:translate-y-2 group-hover:scale-100 transition-all duration-300 ease-out delay-250 text-[#606060] text-[18px] leading-6.25 max-w-md z-20"

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
