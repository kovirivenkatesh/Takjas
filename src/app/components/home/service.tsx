'use client'

import Image from 'next/image'
import { ibmPlexSerif } from '@/app/fonts'
import Link from 'next/link'

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
  }
]

export default function ServicesSection() {
  return (
    <section className=" bg-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">

         
         {/* LEFT – STICKY */}
<div className="relative">
  <div className="sticky top-0  bg-[#F5F5F5]  h-183.5">

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
                    className="relative h-[90.36] w-[90.36] flex items-center justify-center transition-transform duration-500 ease-out -rotate-15 group-hover:rotate-45"

                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
                      <g clipPath="url(#clip0_1411_5996)">
                        <path d="M85.4942 76.4124L84.8086 42.2179L50.611 42.7261C50.2539 42.6841 49.8919 42.7193 49.5496 42.8293C49.2072 42.9393 48.8925 43.1216 48.6268 43.3639C48.3611 43.6061 48.1505 43.9026 48.0093 44.2333C47.8681 44.564 47.7996 44.9212 47.8084 45.2806C47.8173 45.6401 47.9032 45.9935 48.0605 46.3168C48.2178 46.6402 48.4427 46.926 48.7201 47.1548C48.9974 47.3837 49.3207 47.5503 49.668 47.6434C50.0153 47.7364 50.3786 47.7538 50.7332 47.6943L76.3599 47.3535L43.0049 81.8936C42.5424 82.3725 42.2892 83.0154 42.3008 83.681C42.3124 84.3466 42.588 84.9803 43.0668 85.4428C43.5457 85.9052 44.1886 86.1585 44.8542 86.1468C45.5198 86.1352 46.1535 85.8597 46.616 85.3808L79.971 50.8407L80.5248 76.4636C80.5387 77.1296 80.8167 77.7627 81.2974 78.2237C81.7782 78.6847 82.4224 78.9358 83.0883 78.9218C83.7542 78.9078 84.3873 78.6299 84.8483 78.1491C85.3093 77.6684 85.5605 77.0242 85.5465 76.3582L85.4942 76.4124Z" fill="#193170" fillOpacity="0.6" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1411_5996">
                          <rect width="90.3603" height="90.3603" fill="white" transform="translate(62.7695) rotate(44)" />
                        </clipPath>
                      </defs>
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
    </section>
  )
}
