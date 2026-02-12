"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ibmPlexSerif } from '@/app/fonts'
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const services = [
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
    href: '/services/dispute-resolution',
    arrow_fill: '#193170',
    arrow_opacity: '0.6',
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
    href: '/services/corporate-ma-venture-capital',
    arrow_fill: 'white',
    arrow_opacity: '0.6',
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
    arrow_fill: '#193170',
    arrow_opacity: '0.6',
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
    href: '/services/finance-restructuring',
    arrow_fill: 'white',
    arrow_opacity: '0.6',
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
    href: '/services/employment-incentives',
    arrow_fill: '#193170',
    arrow_opacity: '0.6',
  },


];

export default function OtherServicesSection() {
 const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) {
              setActiveCard(index);
            }
          }
        });
      },
      {
        threshold: 0.6, // trigger when 60% visible
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);


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
    <>

      {/* ================= DESKTOP VIEW ================= */}

    <section className=" hidden sm:block mt-23.5 ml-22.75 mr-16.75">
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
                  className={`absolute right-0 text-[20px] font-medium leading-17.75 translate-x-full transition-transform duration-500 ease-out group-hover:-translate-x-26 -mt-1 z-30 ${ibmPlexSerif.className} ${service.iconBorder ? 'text-[#FFFFFF]' : 'text-[#3E538D]'}`}
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
                  className="relative h-[92.5] w-[92.5] flex items-center justify-center transition-transform duration-500 ease-out -rotate-15 group-hover:rotate-45"

                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M43.1939 34.1937L42.5083 -0.000834531L8.31067 0.507331C7.95356 0.465313 7.59159 0.500512 7.24926 0.610549C6.90694 0.720586 6.59225 0.902891 6.3265 1.14512C6.06076 1.38735 5.85016 1.68384 5.70897 2.01454C5.56777 2.34523 5.49927 2.70241 5.50812 3.06187C5.51696 3.42134 5.60293 3.77471 5.76022 4.09807C5.9175 4.42142 6.14243 4.7072 6.41976 4.93607C6.6971 5.16494 7.02037 5.33155 7.36769 5.42462C7.71502 5.51768 8.07828 5.53504 8.4329 5.47552L34.0596 5.13471L0.704562 39.6749C0.242131 40.1537 -0.0111324 40.7967 0.000485592 41.4623C0.0121036 42.1279 0.28765 42.7616 0.766512 43.224C1.24537 43.6864 1.88832 43.9397 2.55392 43.9281C3.21951 43.9165 3.85323 43.6409 4.31566 43.1621L37.6707 8.62191L38.2245 34.2449C38.2384 34.9108 38.5164 35.5439 38.9971 36.0049C39.4779 36.4659 40.1221 36.717 40.788 36.7031C41.4539 36.6891 42.087 36.4111 42.548 35.9304C43.009 35.4496 43.2602 34.8054 43.2462 34.1395L43.1939 34.1937Z"
                      fill={service.arrow_fill}
                      fillOpacity={service.arrow_opacity}
                    />
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

     {/* ================= MOBILE VIEW ================= */}
      <section className="block sm:hidden bg-[#F5F5F5] mt-16 px-4">
        <div className="max-w-screen-sm mx-auto">

          <p className="text-[14px] mb-3 leading-6">
            → Other Services
          </p>

          <h2
            className={`text-[28px] font-medium leading-snug mb-10 ${ibmPlexSerif.className}`}
          >
            Explore Other Legal Solutions
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}

                className={`relative overflow-hidden border border-white transition-all duration-700 ${service.bg
                  }`}
              >

                {/* ARROW CORNER */}
                <div className="absolute top-0 right-0 z-20 overflow-hidden">

                  {/* EXPANDING CONTAINER */}
                  <div
                    className={`
      flex items-center justify-end
      h-16 w-16 origin-top-right
      transition-all duration-700 ease-out
      ${activeCard === index ? "w-46" : "w-16"}
      
    `}
                    style={{ backgroundColor: service.arrow }}
                  >

                    {/* INNER CONTENT */}
                    <div className="flex items-center gap-3 pr-6">

                      {/* KNOW MORE */}
                      <Link
                        href={service.href}
                        className={`
          whitespace-nowrap text-[14px] font-medium
          transition-all duration-500
          ${ibmPlexSerif.className}
          ${service.iconBorder ? "text-white" : "text-[#3E538D]"}
          ${activeCard === index
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-4"
                          }
          sm:group-hover:opacity-100 sm:group-hover:translate-x-0
        `}
                      >
                        Know more
                      </Link>

                      {/* ARROW */}
                      <div
                        className={`
          h-[32.5px] w-[32.5px]
          flex items-center justify-center text-center
          transition-transform duration-500 ease-out
          ${activeCard === index ? "rotate-45" : "-rotate-15"}
          
        `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                        >
                          <path
                            d="M43.1939 34.1937L42.5083 -0.000834531L8.31067 0.507331C7.95356 0.465313 7.59159 0.500512 7.24926 0.610549C6.90694 0.720586 6.59225 0.902891 6.3265 1.14512C6.06076 1.38735 5.85016 1.68384 5.70897 2.01454C5.56777 2.34523 5.49927 2.70241 5.50812 3.06187C5.51696 3.42134 5.60293 3.77471 5.76022 4.09807C5.9175 4.42142 6.14243 4.7072 6.41976 4.93607C6.6971 5.16494 7.02037 5.33155 7.36769 5.42462C7.71502 5.51768 8.07828 5.53504 8.4329 5.47552L34.0596 5.13471L0.704562 39.6749C0.242131 40.1537 -0.0111324 40.7967 0.000485592 41.4623C0.0121036 42.1279 0.28765 42.7616 0.766512 43.224C1.24537 43.6864 1.88832 43.9397 2.55392 43.9281C3.21951 43.9165 3.85323 43.6409 4.31566 43.1621L37.6707 8.62191L38.2245 34.2449C38.2384 34.9108 38.5164 35.5439 38.9971 36.0049C39.4779 36.4659 40.1221 36.717 40.788 36.7031C41.4539 36.6891 42.087 36.4111 42.548 35.9304C43.009 35.4496 43.2602 34.8054 43.2462 34.1395L43.1939 34.1937Z"
                            fill={service.arrow_fill}
                            fillOpacity={service.arrow_opacity}
                          />
                        </svg>
                      </div>

                    </div>
                  </div>
                </div>


                {/* BOTTOM DECOR */}
                <div
                  className="absolute bottom-0 right-0 h-16 w-16"
                  style={{ backgroundColor: service.bot_arrow }}
                />

                {/* ===== CONTENT ===== */}
                <div className="relative z-10 px-6 py-8 flex flex-col gap-5">

                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className={
                      service.iconBorder
                        ? "invert brightness-0 contrast-100"
                        : ""
                    }
                  />

                  <h3
                    className={`text-[22px] leading-tight ${service.title_color} ${ibmPlexSerif.className}`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[15px] leading-6 ${service.desc_color}`}
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`border ${service.btn_color} text-[12px] font-medium ${service.btn_text} px-2 py-1 rounded-md`}
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
      </section>
    </>
  );
}
