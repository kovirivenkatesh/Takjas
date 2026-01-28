'use client'

import Image from 'next/image'
import { ibmPlexSerif } from '@/app/fonts'

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
     btn_color:'border-[#19317040]',
     btn_text:'text-[#193170]',
    arrow: '#A1B9F9',
    bot_arrow:'#82A5FF',
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
     btn_color:'border-[#FFFFFF66]',
     btn_text:'text-[#FFFFFF]',
    arrow: '#355098',
     bot_arrow:'#355098',
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
     btn_color:'border-[#FFFFFF66]',
     btn_text:'text-[#FFFFFF]',
    arrow: '#5C5C5C',
     bot_arrow:'#4A4A4A',
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
    btn_color:'border-[#19317040]',
    btn_text:'text-[#193170]',
    arrow: '#A9A9A95C',
     bot_arrow:'#4A4A4A1F',
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
     btn_color:'border-[#19317040]',
     btn_text:'text-[#193170]',
    arrow: '#A1B9F9',
     bot_arrow:'#82A5FF',
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
     btn_color:'border-[#FFFFFF66]',
     btn_text:'text-[#FFFFFF]',
    arrow: '#355098',
     bot_arrow:'#355098',
      iconBorder: true, 
  }
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto pl-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT – STICKY */}
          <div className="relative">
            <div className="sticky top-20 h-130 flex items-center">
              <div className="max-w-md">
                <p className="text-sm mb-4">→ Our Services</p>

                <h2 className={`text-3xl font-semibold leading-snug ${ibmPlexSerif.className}`}>
                  We manage complex deals in Venture Capital and Corporate Law.
                  Trusted advisors in critical moments.
                </h2>

                <button className="mt-8 bg-[#1E3A75] text-white px-6 py-3 text-sm">
                  Explore our services
                </button>
              </div>
            </div>
           
          </div>

          {/* RIGHT – CARDS */}
          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative h-130 flex items-center overflow-hidden border-b border-white ${service.bg}`}
              >

                {/* ARROW CORNER */}
                <div className="absolute top-0 right-0 z-20 group-hover:pointer-events-none">

                  {/* expanding bg */}
                  <div
  className="absolute top-0 right-0
             h-28 w-28
             scale-100
             origin-top-right
             transition-all duration-700 ease-out
             group-hover:scale-x-[2]"
  style={{ backgroundColor: service.arrow }}
/>


                  {/* arrow */}
                  <div
                    className="relative h-24 w-24
             flex items-center justify-center
             transition-transform duration-500 ease-out
             -rotate-45
             group-hover:rotate-0"
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

                {/* BOTTOM RIGHT DECORATIVE BG */}
                <div
  className="absolute bottom-0 right-0 h-28 w-28 z-0"
  style={{ backgroundColor: service.bot_arrow }}
/>


                {/* CONTENT */}
                <div className="relative z-10 p-16 max-w-md">
                  <div className="mb-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={110}
                      height={110}
                      className={service.iconBorder? 'invert brightness-0 contrast-100' : ''}
                    />
                  </div>

                  <h3 className={`text-4xl mb-4 ${service.title_color} ${ibmPlexSerif.className}`}>
                    {service.title}
                  </h3>

                  <p className={`text-xs mb-6 ${service.desc_color}`}>
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className={`border ${service.btn_color}  text-xs ${service.btn_text} px-3 py-1`}
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
    </section>
  )
}
