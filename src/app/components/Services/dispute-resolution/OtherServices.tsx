"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ibmPlexSerif } from '@/app/fonts'
import Link from "next/link";
import { useRef, useEffect } from "react";

const services = [
    {
        title: 'Real Estate Law',
        description:
            'We advise on the full property lifecycle, handling complex acquisitions, developments, and distressed asset management for investors and developers',
        tags: ['Commercial Leasing', 'Real Estate Finance', 'Restructuring', 'Transactions'],
        icon: '/Images/realestate.png',
        bg: 'bg-[#193170]',
        title_color: 'text-[#FFFFFF]',
        desc_color: 'text-[#C6C6C6]',
        btn_color: 'border-[#FFFFFF66]',
        btn_text: 'text-[#FFFFFF]',
        arrow: '#355098',
        bot_arrow: '#355098',
        iconBorder: true,
        href: '/services/real-estate-law'
    },
   
    {
        title: 'Compliance & Risk Management',
        description:
            'We help clients navigate complex regulatory environments by establishing robust internal structures that identify risks and ensure long-term adherence',
        tags: ['Regulatory Frameworks', 'Risk Assessment', 'Internal Audits', 'Crisis Prevention'],
        icon: '/Images/riskManagement.png',
        bg: 'bg-[#D0DDFF]',
        title_color: 'text-[#193170]',
        desc_color: 'text-[#6A7798]',
        btn_color: 'border-[#19317040]',
        btn_text: 'text-[#193170]',
        arrow: '#A1B9F9',
        bot_arrow: '#82A5FF',
        iconBorder: false,
        href: '/services/compliance-risk-management',
    },
    {
        title: 'Corporate, M&A, Venture Capital',
        description:
            'Strategic legal counsel covering the entire business lifecycle, from company formation and structural changes to successful exit transactions.',
        tags: ['Formation & Structuring', 'Ownership & Exits', 'Lending & Finance', 'Mittelstand Advisory'],
        icon: '/Images/corporate.png',
        bg: 'bg-[#193170]',
        title_color: 'text-[#FFFFFF]',
        desc_color: 'text-[#C6C6C6]',
        btn_color: 'border-[#FFFFFF66]',
        btn_text: 'text-[#FFFFFF]',
        arrow: '#355098',
        bot_arrow: '#355098',
        iconBorder: true,
        href: '/services/corporate-ma-venture-capital'
    },
    {
        title: 'Employment & Incentives',
        description:
            'We design modern compensation models and guide businesses through critical workforce transitions, from executive onboarding to complex restructuring',
        tags: ['Workforce Restructuring', 'Executive Advisory', 'Incentive Programs', 'Global Mobility'],
        icon: '/Images/employment.png',
        bg: 'bg-[#D0DDFF]',
        title_color: 'text-[#193170]',
        desc_color: 'text-[#6A7798]',
        btn_color: 'border-[#19317040]',
        btn_text: 'text-[#193170]',
        arrow: '#A1B9F9',
        bot_arrow: '#82A5FF',
        iconBorder: false,
        href: '/services/employment-incentives'
    },
    {
        title: 'Finance & Restructuring',
        description:
            'We guide startups and investors through complex financing rounds while providing strategic defense for executives during critical restructuring phases',
        tags: ['Venture Financing', 'Capital Protection', 'Executive Defense', 'Crisis Management'],
        icon: '/Images/finance.png',
        bg: 'bg-[#193170]',
        title_color: 'text-[#FFFFFF]',
        desc_color: 'text-[#C6C6C6]',
        btn_color: 'border-[#FFFFFF66]',
        btn_text: 'text-[#FFFFFF]',
        arrow: '#355098',
        bot_arrow: '#355098',
        iconBorder: true,
        href: '/services/finance-restructuring'
    },

    


];

export default function OtherServicesSection() {
    const scrollRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            const isScrollable =
                el.scrollWidth > el.clientWidth;

            if (!isScrollable) return;

            const atStart = el.scrollLeft === 0;
            const atEnd =
                Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;

            // Scroll down → move left
            if (e.deltaY > 0 && !atEnd) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }

            // Scroll up → move right
            if (e.deltaY < 0 && !atStart) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener("wheel", onWheel, { passive: false });

        return () => el.removeEventListener("wheel", onWheel);
    }, []);


    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto pl-16">
                <p className="text-sm mb-4">→ Other Services</p>

                <h2 className={`text-3xl font-semibold leading-snug ${ibmPlexSerif.className}`}>
                    Explore Other Legal Solutions
                </h2>

                {/*  CARDS GRID */}
                <div
                    ref={scrollRef}
                    className="grid grid-flow-col auto-cols-[580px] mt-10  overflow-x-auto overflow-y-visible"
                >

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative h-130 w-140 overflow-hidden border border-white ${service.bg}`}
                        >
                            {/* ARROW CORNER */}
                            <div className="absolute top-0 right-0 z-20 flex items-center gap-2 pr-6 pt-6">

                                {/* KNOW MORE TEXT */}
                                <Link
                                    href={service.href}
                                    className={`absolute right-0 text-md whitespace-nowrap translate-x-full transition-transform duration-500 ease-out group-hover:-translate-x-24 -mt-1 z-30 ${ibmPlexSerif.className} ${service.iconBorder ? 'text-[#FFFFFF]' : 'text-[#3E538D]'}`}
                                >
                                    Know more
                                </Link>



                                {/* ARROW BG */}
                                <div
                                    className="  absolute top-0 right-0 h-32 w-32  origin-top-right transition-all duration-700 ease-out  group-hover:scale-x-[2]"
                                    style={{ backgroundColor: service.arrow }}
                                />

                                {/* ARROW */}
                                <div
                                    className=" relative h-24 w-24 flex items-center justify-center transition-transform duration-500 ease-out  -rotate-45  group-hover:rotate-0"

                                >
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#6A7798"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </div>

                            {/* BOTTOM RIGHT DECOR */}
                            <div
                                className="absolute bottom-0 right-0 h-28 w-28 z-0"
                                style={{ backgroundColor: service.bot_arrow }}
                            />

                            {/* CONTENT */}
                            <div className="relative z-10 p-16 max-w-md h-full flex flex-col">
                                <div className="mb-6">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={110}
                                        height={110}
                                        className={
                                            service.iconBorder
                                                ? 'invert brightness-0 contrast-100'
                                                : ''
                                        }
                                    />
                                </div>

                                <h3
                                    className={`text-4xl mb-6 ${service.title_color} ${ibmPlexSerif.className}`}
                                >
                                    {service.title}
                                </h3>

                                <p className={`text-sm mb-6 ${service.desc_color}`}>
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2  mt-auto ">
                                    {service.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className={`border ${service.btn_color} text-xs ${service.btn_text} px-3 py-2 rounded-md`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="mb-20"></div>
        </section>
    );
}
