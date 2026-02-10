'use client'

import Image from 'next/image'
import { ibmPlexSerif } from '@/app/fonts'
import Link from 'next/link'
import { Fragment } from 'react';
import { useEffect, useRef, useState } from 'react';

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
    arrow_fill: 'white',
    arrow_opacity: '0.6',
  },
  {
    title: 'Real Estate Law',
    description:
      'We advise on the full property lifecycle, handling complex acquisitions, developments, and distressed asset management for investors and developers',
    tags: ['Commercial Leasing', 'Real Estate Finance', 'Restructuring', 'Transactions'],
    icon: '/Images/realestate.png',
    bg: 'bg-[#212121]',
    title_color: 'text-[#FFFFFF]',
    desc_color: 'text-[#C6C6C6]',
    btn_color: 'border-[#FFFFFF66]',
    btn_text: 'text-[#FFFFFF]',
    arrow: '#5C5C5C',
    bot_arrow: '#4A4A4A',
    iconBorder: true,
    arrow_fill: 'white',
    arrow_opacity: '0.6',
  },
  {
    title: 'Employment & Incentives',
    description:
      'We design modern compensation models and guide businesses through critical workforce transitions, from executive onboarding to complex restructuring',
    tags: ['Workforce Restructuring', 'Executive Advisory', 'Incentive Programs', 'Global Mobility'],
    icon: '/Images/employment.png',
    bg: 'bg-white',
    title_color: 'text-[#193170]',
    desc_color: 'text-[#6A7798]',
    btn_color: 'border-[#19317040]',
    btn_text: 'text-[#193170]',
    arrow: '#A9A9A95C',
    bot_arrow: '#4A4A4A1F',
    iconBorder: false,
    arrow_fill: 'black',
    arrow_opacity: '0.42',
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
    arrow_fill: 'white',
    arrow_opacity: '0.6',
  }
]

export default function ServicesSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveCard(index);
          }
        });
      },
      {
        threshold: 1, // tweak for earlier/later trigger
      }
    );

    cardRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F5F5F5]">

      {/* ================= DESKTOP VIEW ================= */}

      <div className="hidden sm:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">


          {/* LEFT – STICKY */}
          <div className="relative">
            <div className="sticky top-0    h-183.5">

              {/* LEFT CARD */}
              <div className="h-183.5 px-21.25 pt-35.25 ">
                <p className="text-[16px] mb-[16.5px]">→ Our Services</p>

                <h2
                  className={`text-[36px] text-[#2C2C2C] leading-13 font-medium mb-14 ${ibmPlexSerif.className}`}
                >
                  We manage complex deals in Venture Capital and Corporate Law.
                  Trusted advisors in critical moments.
                </h2>

                <Link
                  href="/services"
                  className="inline-block mt-8 bg-[#1E3A75] font-semibold text-white px-6 py-3 text-[17.2px]"
                >
                  Explore our services
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT – CARDS */}
          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative h-201.25 flex items-center overflow-hidden border-b border-white ${service.bg}`}
              >

                {/* ARROW CORNER */}
                <div className="absolute top-0 right-0 z-20 group-hover:pointer-events-none">

                  {/* expanding bg */}
                  <div
                    className="absolute top-0 right-0 h-32 w-32 scale-100 origin-top-right transition-all duration-700 ease-out group-hover:scale-x-[2]"

                    style={{ backgroundColor: service.arrow }}
                  />


                  {/* arrow */}
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

                {/* BOTTOM RIGHT DECORATIVE BG */}
                <div
                  className="absolute bottom-0 right-0 h-32 w-32 z-0"
                  style={{ backgroundColor: service.bot_arrow }}
                />


                {/* CONTENT */}
                <div className="relative z-10 pl-16 ">
                  <div className="mb-7.25 ml-[59.65px]">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={169}
                      height={169}
                      className={service.iconBorder ? 'invert brightness-0 contrast-100' : ''}
                    />
                  </div>

                  <h3 className={`text-[64px] leading-17.75 pl-14.75 pr-20.75 mb-7.25 text-[#193170]  ${service.title_color} ${ibmPlexSerif.className}`}>
                    {service.title}
                  </h3>

                  <p className={`text-[20px] px-14.75  mb-8.5 ${service.desc_color}`}>
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 ml-14.75 mr-50">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className={`border ${service.btn_color}  text-[13px] font-medium ${service.btn_text}  p-[6.9_7]`}
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
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="w-full h-px bg-[#D1D5DB] -mt-0.5" />
      </div>

      {/* =================  MOBILE VIEW ================= */}

      <div className="block sm:hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT – STICKY */}
          <div className="relative">
            <div className="sticky top-0 h-100.5">

              {/* LEFT CARD */}
              <div className="h-183.5 px-6 pt-20 ">
                <p className="text-[14px] mb-3 sm:text-[16px] sm:mb-[16.5px]">
                  → Our Services
                </p>

                <h2
                  className={`text-[24px] leading-8 font-medium mb-8 sm:text-[36px] sm:leading-13 sm:mb-14 text-[#2C2C2C] ${ibmPlexSerif.className}`}
                >
                  We manage complex deals in Venture Capital and Corporate Law.
                  Trusted advisors in critical moments.
                </h2>

                <Link
                  href="/services"
                  className="inline-block mt-6 sm:mt-8 bg-[#1E3A75] font-semibold text-white px-5 py-3 sm:px-6 sm:py-3 text-[15px] sm:text-[17.2px]"
                >
                  Explore our services
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT – CARDS */}
          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                ref={el => {
                  cardRefs.current[index] = el;
                }}

                data-index={index}
                className={`relative h-auto py-12 flex items-center overflow-hidden border-b border-white ${service.bg}`}
              >


                {/* ARROW CORNER */}
                <div className="absolute top-0 right-0 z-20 group-hover:pointer-events-none">

                  {/* expanding bg */}
                  <div
                    className={`
    absolute top-0 right-0 h-24 w-24 origin-top-right
    transition-all duration-700 ease-out
    ${activeCard === index
                        ? 'scale-x-[2]'
                        : 'scale-x-100'
                      }
    sm:group-hover:scale-x-[2]
  `}
                    style={{ backgroundColor: service.arrow }}
                  />


                  {/* arrow */}
                  <div
                    className={`
    relative h-[92.5px] w-[92.5px]
    flex items-center justify-center
    transition-transform duration-500 ease-out
    ${activeCard === index
                        ? 'rotate-45'
                        : '-rotate-15'
                      }
    sm:group-hover:rotate-45
  `}
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <path d="M43.1939 34.1937L42.5083 -0.000834531L8.31067 0.507331C7.95356 0.465313 7.59159 0.500512 7.24926 0.610549C6.90694 0.720586 6.59225 0.902891 6.3265 1.14512C6.06076 1.38735 5.85016 1.68384 5.70897 2.01454C5.56777 2.34523 5.49927 2.70241 5.50812 3.06187C5.51696 3.42134 5.60293 3.77471 5.76022 4.09807C5.9175 4.42142 6.14243 4.7072 6.41976 4.93607C6.6971 5.16494 7.02037 5.33155 7.36769 5.42462C7.71502 5.51768 8.07828 5.53504 8.4329 5.47552L34.0596 5.13471L0.704562 39.6749C0.242131 40.1537 -0.0111324 40.7967 0.000485592 41.4623C0.0121036 42.1279 0.28765 42.7616 0.766512 43.224C1.24537 43.6864 1.88832 43.9397 2.55392 43.9281C3.21951 43.9165 3.85323 43.6409 4.31566 43.1621L37.6707 8.62191L38.2245 34.2449C38.2384 34.9108 38.5164 35.5439 38.9971 36.0049C39.4779 36.4659 40.1221 36.717 40.788 36.7031C41.4539 36.6891 42.087 36.4111 42.548 35.9304C43.009 35.4496 43.2602 34.8054 43.2462 34.1395L43.1939 34.1937Z"
                        fill={service.arrow_fill}
                        fillOpacity={service.arrow_opacity}
                      />
                    </svg>

                  </div>


                </div>

                {/* BOTTOM RIGHT DECORATIVE BG */}
                <div
                  className="absolute bottom-0 right-0 h-24 w-24 sm:h-32 sm:w-32 z-0"
                  style={{ backgroundColor: service.bot_arrow }}
                />

                {/* CONTENT */}
                <div className="relative z-10 pl-4 sm:pl-16">

                  <div className="mb-4 ml-4 sm:mb-7.25 sm:ml-[59.65px]">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={120}
                      height={120}
                      className={`sm:w-42.25 sm:h-42.25 ${service.iconBorder ? 'invert brightness-0 contrast-100' : ''}`}
                    />
                  </div>

                  <h3
                    className={`text-[28px] leading-8 pl-4 pr-4 mb-4 sm:leading-17.75 sm:pl-14.75 sm:pr-20.75 sm:mb-7.25 text-[#193170] ${service.title_color} ${ibmPlexSerif.className}`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[14px] px-4 mb-5 ${service.desc_color}`}
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 ml-4 mr-4">
                    {service.tags.map((tag, index) => (
                      <Fragment key={`${tag}-${index}`}>
                        <span
                          className={`border ${service.btn_color} text-[11px] font-medium ${service.btn_text} px-3 py-1`}
                        >
                          {tag}
                        </span>

                        {(index + 1) % 2 === 0 && (
                          <span className="basis-full h-0" />
                        )}
                      </Fragment>
                    ))}
                  </div>




                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="col-span-1 lg:col-span-2">
        <div className="w-full h-px bg-[#D1D5DB] -mt-0.5" />
      </div>

    </section>
  )
}
