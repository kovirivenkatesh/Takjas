'use client'


import { ibmPlexSerif } from './fonts'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Aboutus from './components/home/Aboutus'
import ServicesSection from './components/home/service'
import CoreValuesSection from './components/home/CoreValues'
import DealExperience from './components/home/DealExperience'
import ProcessSection from './components/home/ProcessSection'
import FooterSection from './components/home/Footer'





const HEADER_OFFSET = 160 // px

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [animatingUp, setAnimatingUp] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (animatingUp) {
      const t = setTimeout(() => {
        setAnimatingUp(false)
      }, 2200) // MUST match CSS duration

      return () => clearTimeout(t)
    }
  }, [animatingUp])

  if (!mounted) return null

  return (
    <>
      <div className="relative overflow-hidden">
        {/* HERO WRAPPER — reserves space for absolute image */}
        <div
          className={`relative transition-all duration-1500 ${expanded ? 'pt-10 ' : 'pb-36'
            }`}
        >
          <section className="h-screen bg-white flex items-center justify-center text-center px-10 -mt-6 relative overflow-visible">
            <div className="relative w-full max-w-6xl">

              {/* TEXT */}
              <div
                className={`transition-all duration-1500
          ease-[cubic-bezier(0.77,0,0.175,1)]
          ${expanded ? 'translate-y-32 opacity-0' : 'translate-y-0 opacity-100'}`}
              >
                <h1 className={`text-6xl font-semibold ${ibmPlexSerif.className} leading-[1.15]`}>
                  Your Strategic Legal Partner
                  <br />
                  in the Digital Economy
                </h1>

                <p className="mt-6 text-lg text-[#5E6784]">
                  Specialized in Venture Capital, Corporate Law, and M&amp;A
                </p>

                <button className="mt-6 bg-[#193170] text-white py-3 px-12 text-xl">
                  Get in touch
                </button>
              </div>

              {/* 🔥 TRIGGER ZONE */}
              {!expanded && (
                <div
                  className="absolute left-0 right-0 h-24"
                  style={{ top: 'calc(50% + 30px)' }}
                  onMouseEnter={() => {
                    if (!expanded && !animatingUp) {
                      setAnimatingUp(true)
                      setExpanded(true)
                    }
                  }}
                />
              )}

              {/* IMAGE */}
              <div
                className="absolute transition-[transform,width,height]
          duration-1500
          ease-[cubic-bezier(0.77,0,0.175,1)]"
                style={{
                  top: '120%',
                  left: '50%',
                  width: expanded ? '120%' : '70%',
                  height: expanded ? '90vh' : '20rem',
                  transform: expanded
                    ? `translate(-50%, calc(-110% + ${HEADER_OFFSET}px))`
                    : 'translate(-50%, 0%)',
                  pointerEvents: animatingUp ? 'none' : 'auto',
                }}
              >
                {expanded && (
                  <div
                    className="absolute top-32 left-0 right-0 h-24 z-20"
                    onMouseEnter={() => setExpanded(false)}
                  />
                )}

                <Image
                  src="/Images/GetInTouch.jpg"
                  alt="Get In Touch"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

            </div>
          </section>
        </div>


        {/* BLUE OVERLAY (unchanged logic) */}
        <section
          className={`fixed top-18.5 left-0 w-full h-[calc(105vh-60px)] z-50 overflow-hidden
    ${collapsed ? 'pointer-events-none' : ''}`}
          onMouseEnter={() => setCollapsed(true)}
        >
          <div className={`absolute top-0 left-0 h-full w-1/3 bg-[#193170]
      transition-transform duration-2000 ease-in-out
      ${collapsed ? 'translate-y-full' : ''}`}
          />
          <div className={`absolute top-0 left-1/3 h-full w-1/3 bg-[#193170]
      flex items-center justify-center z-10 overflow-hidden
      transition-transform duration-2000
      ease-[cubic-bezier(0.77,0,0.175,1)]
      ${collapsed ? '-translate-y-full' : 'translate-y-0'}`}
          >
            <div className={`transition-all duration-800
        ease-[cubic-bezier(0.55,0.055,0.675,0.19)]
        ${collapsed
                ? 'translate-y-24 scale-95 opacity-0'
                : 'translate-y-0 scale-100 opacity-100'
              }`}
            >
              <Image src="/Images/T.png" alt="T" width={120} height={120} />
            </div>
          </div>
          <div className={`absolute top-0 right-0 h-full w-1/3 bg-[#193170]
      transition-transform duration-2000 ease-in-out
      ${collapsed ? 'translate-y-full' : ''}`}
          />
        </section>
      </div>

      <Aboutus />
      <ServicesSection />
      <CoreValuesSection />
      <DealExperience />
    <ProcessSection />
    <FooterSection />
   
    </>
  )
}
