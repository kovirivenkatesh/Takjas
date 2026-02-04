'use client'

import { ibmPlexSerif } from './fonts'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useLayoutEffect } from "react";

import Aboutus from './components/home/Aboutus'
import ServicesSection from './components/home/service'
import CoreValuesSection from './components/home/CoreValues'
import DealExperience from './components/home/DealExperience'
import ProcessSection from './components/home/ProcessSection'
import FooterSection from './components/home/Footer'


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const CURTAIN_DELAY = 300;
const CURTAIN_DURATION = 2000;

const HEADER_OFFSET = 73
export default function ScrollImageTakeover() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  /* ================= CURTAIN STATE ================= */
  const [collapsed, setCollapsed] = useState(false);
  const [curtainDone, setCurtainDone] = useState(false);

  /* ================= CURTAIN LOGIC ================= */
  useEffect(() => {
    const t1 = setTimeout(() => setCollapsed(true), CURTAIN_DELAY);
    const t2 = setTimeout(() => {
      setCurtainDone(true);
      window.scrollTo({ top: 0 });
    }, CURTAIN_DELAY + CURTAIN_DURATION);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  /* ================= LOCK SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = curtainDone ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [curtainDone]);

  /* ================= GSAP SCROLL ================= */
  useLayoutEffect(() => {
    if (!curtainDone) return;
    if (!sectionRef.current || !textRef.current || !imageRef.current) return;

    let ctx = gsap.context(() => {
      gsap.set(imageRef.current, {
        width: "58%",
        height: "45vh",
        y: 200,
        borderRadius: "36px",
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=240%",
          scrub: 1.4,
          pin: sectionRef.current, // 👈 EXPLICIT pin target
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
        .to(imageRef.current, { y: 0, ease: "power3.out" }, 0)
        .to(textRef.current, {
          autoAlpha: 0,
          y: -80,
          pointerEvents: "none",
        }, 0)
        .to(imageRef.current, {
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
        }, 0.25);

    }, sectionRef);

    return () => {
      // 🔥 THIS PREVENTS removeChild ERROR
      ScrollTrigger.getAll().forEach(st => st.kill());
      ctx.revert();
    };
  }, [curtainDone]);


  return (
    <>
      {/* ================= BLUE CURTAIN ================= */}
      <section
        className={`fixed left-0 w-full z-50 overflow-hidden
  ${collapsed ? 'pointer-events-none' : ''}`}
        style={{
          top: `${HEADER_OFFSET}px`,
          height: `calc(100vh - ${HEADER_OFFSET}px)`,
        }}
      >

        <div
          className={`absolute top-0 left-0 h-full w-1/3 bg-[#193170]  transition-transform duration-2000
          ${collapsed ? "translate-y-full" : ""}`}
        />

        <div
          className={`absolute top-0 left-1/3 h-full w-1/3 bg-[#193170] flex items-center justify-center transition-transform duration-2000
          ${collapsed ? "-translate-y-full" : ""}`}
        >
          <Image src="/Images/T.png" alt="T" width={120} height={120} />
        </div>

        <div
          className={`absolute top-0 right-0 h-full w-1/3 bg-[#193170] transition-transform duration-2000 ${collapsed ? "translate-y-full" : ""}`}
        />
      </section>

      {/* ================= SCROLL SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden bg-white"
      >
        {/* TEXT */}
        <div
          ref={textRef}
          className="absolute top-[18vh] left-1/2  w-full  -translate-x-1/2 px-68 text-center"
        >
          <h1 className="mb-2.5 text-[65px] leading-20 font-medium  ">
            Your Strategic Legal Partner in the Digital Economy
          </h1>
          <p className="mb-6.25 text-[16px] leading-6.25 text-[#5E6784]">
            Specialized in Venture Capital, Corporate Law, and M&A
          </p>
          <button className='w-45.25  mb-18 h-12.25 bg-[#193170] text-white rounded-md p-4'>Get in touch</button>
        </div>

        {/* IMAGE */}
        <div className="absolute inset-0 flex justify-center items-end">
          <div
            ref={imageRef}
            className="relative overflow-hidden bg-gray-200"
          >
            <Image
              src="/Images/GetInTouch.jpg"
              alt="Get in touch"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <Aboutus />
        <ServicesSection />
        <CoreValuesSection />
        <DealExperience />
        <ProcessSection />
        <FooterSection />

      </section>

    </>
  );
}
