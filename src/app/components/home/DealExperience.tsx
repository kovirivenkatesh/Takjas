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
    <div>
      <div className='mt-28'>
            <section className="space-y-12  px-10">
              <p className="text-sm mb-4">→ Our Deal Experience</p>
              <h1 className={`text-5xl ${ibmPlexSerif.className} `}>
              Proven experience in high-value legal<br/> mandates in the digital economy.
                </h1>
      </section>
      </div>

   <div className="relative w-full overflow-hidden bg-white py-6 mt-10">
  <div className="flex w-max animate-marquee">
    {[...tags, ...tags, ...tags].map((tag, i) => (
      <div
        key={i}
        className="
          flex items-center justify-center
          w-[320px] h-20
          bg-[#1f3a8a]
          mx-3 px-6
        "
      >
        <div className="flex items-center gap-6">
          <img
            src={tag.src}
            alt={tag.alt}
            className="max-h-12 object-contain"
          />
          <p className={`${ibmPlexSerif.className} text-white text-2xl whitespace-nowrap`}>
            {tag.alt}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}
