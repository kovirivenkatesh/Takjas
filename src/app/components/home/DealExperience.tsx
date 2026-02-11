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
    <>
      {/* ================= DESKTOP VIEW ================= */}

      <div className='hidden sm:block mx-20.75'>
        <div className='mt-33.75 '>
          <section className="">
            <p className="text-[16px] mb-2">→ Our Deal Experience</p>
            <h1 className={`text-[55px] font-medium leading-17.75 ${ibmPlexSerif.className} `}>
              Proven experience in high-value legal mandates in the digital economy.
            </h1>
          </section>
        </div>
        <div className="relative  bg-[#F5F5F5]  mt-18.75">
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


      {/* ================= MOBILE VIEW ================= */}

      <div className="block sm:hidden px-4">

        {/* ===== TEXT SECTION ===== */}
        <div className="mt-12">
          <section>
            <p className="text-[14px] mb-2">→ Our Deal Experience</p>

            <h1
              className={`text-[30px] leading-tight font-medium ${ibmPlexSerif.className}`}
            >
              Proven experience in high-value legal mandates in the digital economy.
            </h1>
          </section>
        </div>

        <div className="relative bg-[#F5F5F5] mt-12 sm:mt-18.75">
          <div className="relative max-w-7xl px-2 sm:px-4">

            {/* LEFT BLUE STRIP */}
            <div className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 h-24 sm:h-42.25 w-1 sm:w-1.5 bg-[#1f3a8a] z-30" />


            {/* RIGHT BLUE STRIP */}
            <div className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 h-24 sm:h-42.25 w-1 sm:w-1.5 bg-[#1f3a8a] z-30" />


            {/* CLIPPING AREA */}
            <div className="overflow-hidden">
              <div className="flex w-max animate-marquee">
                {[...tags, ...tags, ...tags].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center min-w-60 sm:w-94 h-20 sm:h-24 bg-[#1f3a8a] mx-2 sm:mx-3 px-4 sm:px-5.75"

                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <img
                        src={tag.src}
                        alt={tag.alt}
                        className="w-10 h-10 sm:w-17 sm:h-17 object-contain"
                      />

                      <p
                        className={`${ibmPlexSerif.className} text-white text-[20px] sm:text-[37px] leading-snug sm:leading-9`}

                      >
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

    </>
  )
}
