import React from 'react'

import { ibmPlexSerif } from '@/app/fonts'

const tags = [
  { src: "/Images/Banco.png", alt: "Banco Do Brasil" },
  { src: "/Images/Mackler.png", alt: "McMakler" },
  { src: "/Images/vsg.png", alt: "VSG Altglienicke" },
   { src: "/Images/cargo.png", alt: "Cargomotion" },
   { src: "/Images/canna.png", alt: "Canna Capital Plc" },
  // add more if needed
];

export default function DealExperience() {
  return (
    <div className='mx-20.75'>
      <div className='mt-33.75 '>
            <section className="">
              <p className="text-[16px] mb-2">→ Our Deal Experience</p>
              <h1 className={`text-[55px] font-medium leading-17.75 ${ibmPlexSerif.className} `}>
              Proven experience in high-value legal mandates in the digital economy.
                </h1>
      </section>
      </div>
<div className="relative  bg-white  mt-18.75">
  <div className="relative max-w-7xl  px-4">

   {/* LEFT BLUE STRIP */}
<div className="absolute left-4 top-1/2 -translate-y-1/2 h-42.25 w-1.5 bg-[#1f3a8a] z-30" />

{/* RIGHT BLUE STRIP */}
<div className="absolute right-4 top-1/2 -translate-y-1/2 h-42.25 w-1.5 bg-[#1f3a8a] z-30" />


    {/* CLIPPING AREA */}
    <div className=" overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...tags, ...tags, ...tags].map((tag, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-94 h-24 bg-[#1f3a8a] mx-3 px-5.75"

          >
            <div className="flex items-center gap-6">
              <img
                src={tag.src}
                alt={tag.alt}
                className="w-17 h-17 object-contain"
              />
              <p className={`${ibmPlexSerif.className} text-white text-[37px] whitespace-wrap ml-5.5 leading-9 py-4.5`}>
                {tag.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

    </div>
  )
}
