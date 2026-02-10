'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ibmPlexSerif } from '@/app/fonts'
import Link from 'next/link'

export default function Aboutus() {
const mobileRef = useRef(null);
const [mobileInView, setMobileInView] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setMobileInView(true);
      } else {
        setMobileInView(false); // 👈 reset
      }
    },
    {
      threshold: 0.7,
    }
  );

  if (mobileRef.current) observer.observe(mobileRef.current);

  return () => observer.disconnect();
}, []);


  return (


    <>
    {/* ================= DESKTOP VIEW ================= */}

    <div className=" hidden sm:block w-full bg-[#1E3A75] pt-17.5 pb-19.75 -mt-8 group">
      <div className="max-w-7xl mx-auto px-16 grid grid-cols-1 lg:grid-cols-2 gap-31 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          {/* IMAGE CONTAINER */}
          <div

            className="relative w-126.25 h-96 overflow-hidden"
          >
            <Image
              src="/Images/aboutUs.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />

            {/* QUOTE – COMES FROM INSIDE IMAGE */}
            <div
              className="absolute left-6 right-6 bottom-0 bg-white pt-4.75 pr-8.25 pb-4.5 pl-8.5 shadow-xl transition-all duration-2000 ease-[cubic-bezier(0.77,0,0.175,1)] translate-y-32 opacity-0 group-hover:translate-y-0 group-hover:mb-7 group-hover:opacity-100"

            >
              <p
                className={`text-[#193170] font-semibold text-[17.2px] leading-relaxed pl-4 ${ibmPlexSerif.className}`}
              >
                “We operate where legal precision meets business reality.”
              </p>
              <p className="mt-4 text-[12px] text-[#2A2A2A] pl-4">
                – Philipp S. Takjas

                Co-Founder, Partner, Managing Director
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white -mt-2 group ">
          <p className="text-[20px] text-[#F5F5F5] mb-4">→ About Us</p>

          <h2
            className={`
    text-3xl leading-snug font-semibold
    bg-clip-text text-transparent bg-no-repeat

    /* Gray → White gradient */
    bg-[linear-gradient(90deg,#B2B2B2_0%,#B2B2B2_50%,#ffffff_50%,#ffffff_100%)]

    /* Large background for sliding */
    bg-size-[200%_100%]

    /* DEFAULT: show GRAY */
    bg-position-[0%_0%]

    /* Smooth animation */
    transition-[background-position] duration-1000
    ease-[cubic-bezier(0.77,0,0.175,1)]

    /* HOVER (entire section): turn WHITE */
    group-hover:bg-position-[100%_0%]
  `}
          >
            A business law firm with a dedicated focus on assisting founders,
            start-ups and scale-ups, investors and executives.
          </h2>


          <Link href="/aboutUs">
            <button className="mt-8 bg-white text-[#1E3A75] px-6 py-2 text-sm font-medium rounded-md">
              Know more
            </button>
          </Link>


          <div className='flex flex-col mt-10'>
            <p className='text-[13px]'>Defined by our core values:</p>
            <div className='flex flex-row mt-5 gap-5 '>
              <button className='border border-[#FFFFFF66] text-13.9 p-2 '>Responsiveness</button>
              <button className='border border-[#FFFFFF66] text-13.9 p-2'>Commercial Focus</button>
              <button className='border border-[#FFFFFF66] text-13.9 p-2 '>Botique Expertise</button>
            </div>
          </div>
        </div>

      </div>
    </div>

   {/* ================= MOBILE VIEW ================= */}
<div 
ref={mobileRef}
className="block sm:hidden w-full bg-[#1E3A75] pt-16 pb-16 -mt-6 overflow-x-hidden">

  <div className="mx-auto px-6 flex flex-col gap-12">

    {/* IMAGE */}
    <div className="relative flex justify-center">
      <div className="relative w-full max-w-90 h-65 rounded-xl overflow-hidden">
        <Image
          src="/Images/aboutUs.jpg"
          alt="Founder"
          fill
          className="object-cover"
        />

        {/* QUOTE (always visible on mobile) */}
        <div
  className={`
    absolute left-4 right-4 bottom-4 bg-white p-4 shadow-lg
    transition-all duration-2000
    ease-[cubic-bezier(0.77,0,0.175,1)]
    ${
      mobileInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-16 opacity-0'
    }
  `}
>

          <p
            className={`text-[#193170] font-semibold text-[14px] leading-relaxed ${ibmPlexSerif.className}`}
          >
            “We operate where legal precision meets business reality.”
          </p>
          <p className="mt-2 text-[11px] text-[#2A2A2A]">
            – Philipp S. Takjas<br />
            Co-Founder, Partner, Managing Director
          </p>
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="text-white text-center">

      <p className="text-[14px] text-[#F5F5F5] mb-3">→ About Us</p>

      <h2
  className={`
    text-[20px] leading-relaxed font-semibold
    bg-clip-text text-transparent bg-no-repeat
    bg-[linear-gradient(90deg,#B2B2B2_0%,#B2B2B2_50%,#ffffff_50%,#ffffff_100%)]
    bg-size-[200%_100%]
    transition-[background-position] duration-1000
    ease-[cubic-bezier(0.77,0,0.175,1)]
    ${
      mobileInView
        ? 'bg-position-[100%_0%]'
        : 'bg-position-[0%_0%]'
    }
    ${ibmPlexSerif.className}
  `}
>

        A business law firm with a dedicated focus on assisting founders,
        start-ups and scale-ups, investors and executives.
      </h2>

      <Link href="/aboutUs">
        <button className="mt-6 bg-white text-[#1E3A75] px-6 py-2 text-sm font-medium rounded-md">
          Know more
        </button>
      </Link>

      {/* VALUES */}
      <div className="mt-10">
        <p className="text-[12px] mb-4">Defined by our core values:</p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="border border-[#FFFFFF66] text-[12px] px-3 py-1 rounded">
            Responsiveness
          </span>
          <span className="border border-[#FFFFFF66] text-[12px] px-3 py-1 rounded">
            Commercial Focus
          </span>
          <span className="border border-[#FFFFFF66] text-[12px] px-3 py-1 rounded">
            Boutique Expertise
          </span>
        </div>
      </div>

    </div>
  </div>
</div>

    </>
  )
}
