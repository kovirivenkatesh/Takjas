'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ibmPlexSerif } from '@/app/fonts'

export default function Aboutus() {
  const imageRef = useRef<HTMLDivElement | null>(null)
  const [showQuote, setShowQuote] = useState(false)

  useEffect(() => {
    if (!imageRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowQuote(entry.isIntersecting)
      },
      { threshold: 0.35 }
    )

    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full bg-[#1E3A75] py-24 -mt-8">
      <div className="max-w-7xl mx-auto px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          {/* IMAGE CONTAINER */}
          <div
            ref={imageRef}
            className="relative w-full h-98 overflow-hidden"
          >
            <Image
              src="/Images/aboutUs.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />

            {/* QUOTE – COMES FROM INSIDE IMAGE */}
            <div
              className={`
                absolute left-6 right-6 bottom-0
                bg-white p-6 shadow-xl
                transition-all duration-2500 ease-[cubic-bezier(0.77,0,0.175,1)]
                ${showQuote
                  ? 'translate-y-0 mb-7 opacity-100'
                  : 'translate-y-32 opacity-0'}
              `}
            >
              <p
                className={`text-[#193170] font-semibold text-lg leading-relaxed ${ibmPlexSerif.className}`}
              >
                “We operate where legal precision meets business reality.”
              </p>
              <p className="mt-4 text-sm text-[#2A2A2A]">
                – Philipp S. Takjas

                Co-Founder, Partner, Managing Director
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white -mt-2">
          <p className="text-sm text-[#F5F5F5] mb-4">→ About Us</p>

          <h2
            className={`
    text-3xl leading-snug font-semibold
    bg-clip-text text-transparent bg-no-repeat
    transition-[background-position] duration-1500 ease-out
    ${showQuote
                ? 'bg-[linear-gradient(90deg,#B2B2B2_0%,#B2B2B2_50%,#ffffff_50%,#ffffff_100%)] bg-size-[200%_100%] bg-position-[0%_0%]'
                : 'bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_100%)] bg-size-[100%_100%] bg-position-[100%_0%]'
              }
  `}
          >

            A business law firm with a dedicated focus on assisting founders,
            start-ups and scale-ups,investors and executives.
          </h2>

          <button className="mt-8 bg-white text-[#1E3A75] px-6 py-2 text-sm font-medium rounded-md">
            Know more
          </button>

          <div className='flex flex-col mt-10'>
            <p>Defined by our core values:</p>
            <div className='flex flex-row mt-5 gap-5'>
              <button className='border border-[#FFFFFF66]  p-2 '>Responsiveness</button>
              <button className='border border-[#FFFFFF66] p-2'>Commercial Focus</button>
              <button className='border border-[#FFFFFF66] p-2 '>Botique Expertise</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
