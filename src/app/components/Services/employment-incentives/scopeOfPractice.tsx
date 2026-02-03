"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ibmPlexSerif } from '@/app/fonts'
import Link from "next/link";
import { useRef, useEffect } from "react";

const services = [
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
        title: 'Dispute Resolution',
        description:
            'We represent clients in complex commercial conflicts, enforcing your rights before state courts and arbitration tribunals with strategic precision',
        tags: ['Commercial Litigation', 'Arbitration', 'Conflict Strategy', 'Mediation'],
        icon: '/Images/dispute.png',
        bg: 'bg-[#D0DDFF]',
        title_color: 'text-[#193170]',
        desc_color: 'text-[#6A7798]',
        btn_color: 'border-[#19317040]',
        btn_text: 'text-[#193170]',
        arrow: '#A1B9F9',
        bot_arrow: '#82A5FF',
        iconBorder: false,
        href: '/services/dispute-resolution'
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
    }
];

export default function ScopeOfPracticeSection() {
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
         <section className="mt-23.5 ml-22.75 mr-16.75">
            <div className="">
                <p className="leading-6.25 text-[16px] mb-2.5">→ Other Services</p>

                <h2 className={`text-[55px] font-medium mb-18.75 leading-17.75 text-[#2C2C2C] ${ibmPlexSerif.className}`}>
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
              className={`group relative h-171 overflow-hidden border border-white ${service.bg}`}
            >
              {/* ARROW CORNER */}
              <div className="absolute top-0 right-0 z-20 flex items-center gap-2 pr-6 pt-6">

                {/* KNOW MORE TEXT */}
               <Link
  href={service.href}
  className={`absolute right-0 text-[20px] font-medium leading-17.75 translate-x-full transition-transform duration-500 ease-out group-hover:-translate-x-24 -mt-1 z-30 ${ibmPlexSerif.className} ${service.iconBorder ? 'text-[#FFFFFF]' : 'text-[#3E538D]'}`}
>
  Know more
</Link>



                {/* ARROW BG */}
               <div
 className="absolute top-0 right-0 h-33 w-33 origin-top-right transition-[width] duration-700 ease-out group-hover:w-75"

  style={{ backgroundColor: service.arrow }}
/>
                {/* ARROW */}
                <div
                  className=" relative h-24 w-24 flex items-center justify-center transition-transform duration-500 ease-out  -rotate-45  group-hover:rotate-0"

                >
                  <svg
                    width="77"
                    height="77"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6A7798"
                    strokeWidth="1"
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
                className="absolute bottom-0 right-0 h-33 w-33 z-0"
                style={{ backgroundColor: service.bot_arrow }}
              />

              {/* CONTENT */}
              <div className="relative z-10 pl-12.5 pr-17.5 mt-16 flex flex-col">
                <div className="pt-16.5 ">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={144}
                    height={144}
                    className={
                      service.iconBorder
                        ? 'invert brightness-0 contrast-100'
                        : ''
                    }
                  />
                </div>

                <h3
                  className={`text-[54px] leading-15 mb-6 ${service.title_color} ${ibmPlexSerif.className}`}
                >
                  {service.title}
                </h3>

                <p className={`text-[17px] leading-6 mb-7.25 ${service.desc_color}`}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3.5 pr-21.75 ">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className={`border ${service.btn_color} text-[14px] font-medium leading-4.5 ${service.btn_text} p-1.75 rounded-[7px]`}
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
