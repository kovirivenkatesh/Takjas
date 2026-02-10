"use client";

import { ibmPlexSerif } from '@/app/fonts'
import { useEffect, useRef, useState } from 'react';

const values = [
  "Responsiveness",
  "Transparency",
  "Strategy",
  "Empathy",
];

export default function CoreValuesSection() {
  const buttonsRef = useRef<HTMLDivElement | null>(null);
const [startLoop, setStartLoop] = useState(false);
const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartLoop(true);
      }
    },
    { threshold: 0.5 }
  );

  if (buttonsRef.current) observer.observe(buttonsRef.current);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!startLoop) return;

  const interval = setInterval(() => {
    setActiveIndex(prev => (prev + 1) % values.length);
  }, 1000); // ⏱ 2 seconds

  return () => clearInterval(interval);
}, [startLoop]);

  return (
       <>
     {/* ================= DESKTOP VIEW ================= */}

    <div className=' hidden sm:block mt-33.75'>
      <section className="  ml-21.25 mr-10.75">
        <p className="text-[16px] mb-2">→ Our Core Values</p>
        <h1 className={`text-[55px] font-medium leading-17.75 text-[#2C2C2C] mb-18.75 ${ibmPlexSerif.className}`}>The foundational pillars that define every client interaction and legal strategy.</h1>

        {/* ===== TOP BUTTONS ===== */}
        <div className="flex border border-[#0000004D] bg-[#F5F5F5] ">
          {values.map((item, index) => (
            <button
              key={index}
              className="relative overflow-hidden w-76 px-6 py-5.25 border-r last:border-r-0 group flex items-center justify-start text-left"

            >
              {/* 🔹 INITIAL TOP-LEFT BAR */}
              <span
                className="absolute top-0 left-0 w-22.25 h-2 bg-[#1f3a8a] transition-all duration-600 ease-in-out group-hover:w-full group-hover:h-full"

              />

              {/* 🔹 BUTTON TEXT */}
              <span
                className={`relative z-10 text-[#193170] font-medium transition-colors duration-300 group-hover:text-white text-[28px] ${ibmPlexSerif.className}`}

              >
                {item}
              </span>
            </button>
          ))}
        </div>
      </section>


      {/* ===== IMAGE SECTION ===== */}
      <div className="relative mt-33.75 w-full h-144 overflow-hidden group/image">

        {/* IMAGE */}
        <img
          src="/Images/GetInTouch1.png"
          alt="Legal discussion"
          className="w-360 h-144 object-cover transition-transform duration-700 ease-in-out group-hover/image:scale-110"

        />
        {/* TOP-RIGHT STRIP */}
        <div
          className="absolute top-0 right-0 h-3.75 w-132.5 bg-[#F5F5F5] origin-right transition-all duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:w-[calc(100%-390px)] z-30"

        />


        {/* STRIP */}
        <div
          className="absolute bottom-0 left-0 h-3.75 w-132.5 bg-[#F5F5F5] origin-left transition-[width] duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:w-[calc(100%-388px)] z-30"

        >
          {/* HR — REST STATE */}
          <div
            className="absolute bottom-0 left-0 h-px scale-y-[0.2] w-full bg-[#0f1f4a] opacity-100 transition-opacity duration-200 group-hover/image:opacity-0"

          />



          {/* HR — EXPANDED STATE */}
          <div
            className="absolute bottom-0 left-0 h-px w-full bg-[#0f1f4a] scale-y-[0.2] opacity-0 transition-opacity duration-200 group-hover/image:opacity-100 group-hover/image:delay-1500"

          />
        </div>


        {/* MAIN DARK BLUE OVERLAY */}
        <div className="absolute inset-0 bg-[#0f1f4a]/70" />

        {/* CONTENT WRAPPER */}
        <div className="absolute inset-0 flex flex-col justify-between p-10">


          {/* TOP-LEFT LOGO WRAPPER — ATTACHED TO IMAGE */}
          <div className="absolute top-0 left-0 bg-white/20 w-97.5 h-31 mb-43.5">
            <div className="w-7.5 h-7.75 bg-white flex items-center justify-center ml-23.5 mt-12.25 mb-11">
              <span className={`text-[#193170] font-medium text-[22px] ${ibmPlexSerif.className}`}>T</span>
            </div>
          </div>


          {/* 🔹 CENTER-LEFT TEXT */}
          <div className=" mt-60 ml-20.75 pr-90">
            <h2 className={`text-white text-[48px] font-bold leading-16.75 ${ibmPlexSerif.className}`}>
              Legal certainty is the foundation
              of operational confidence.
            </h2>

            <p className=" text-[#FFFFFF] text-[16px] pb-10 leading-5.75">
              We uphold uncompromising standards of integrity and transparency.
              Our proactive approach ensures every strategy is guided by clear
              commercial objectives and prompt, decisive communication.
            </p>
          </div>

          {/* BOTTOM-RIGHT BUTTON WRAPPER — ATTACHED TO IMAGE */}
          <div className="absolute bottom-0 right-0 bg-white/20 w-97 h-40 flex ">
            <div className="group/button bg-white w-40 h-10 flex items-center justify-center mx-26 my-16 cursor-pointer overflow-hidden">
              <span
                className="flex items-center text-[#193170] text-[22px] transition-all duration-300 group-hover/button:text-[18px]"

              >
                {/* Arrow */}
                <span
                  className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover/button:w-4"

                >
                  →
                </span>

                <span className="ml-1">
                  Get in touch
                </span>
              </span>
            </div>


          </div>
        </div>
      </div>


    </div>

     {/* ================= MOBILE VIEW ================= */}

<div className="block sm:hidden mt-16">

  {/* ===== TEXT SECTION ===== */}
  <section className="px-6">
    <p className="text-[14px] mb-2">→ Our Core Values</p>

    <h1
      className={`text-[32px] font-medium leading-tight text-[#2C2C2C] mb-10 ${ibmPlexSerif.className}`}
    >
      The foundational pillars that define every client interaction and legal strategy.
    </h1>

    {/* ===== TOP BUTTONS ===== */}
   {/* ===== TOP BUTTONS ===== */}
<div
  ref={buttonsRef}
  className="flex flex-col border border-[#0000004D] bg-[#F5F5F5]"
>
  {values.map((item, index) => (
    <button
      key={index}
      className="relative overflow-hidden px-6 py-5 border-b last:border-b-0 flex items-center justify-start text-left"
    >
      {/* BG FILL (same as desktop hover) */}
      <span
        className={`
          absolute top-0 left-0 bg-[#1f3a8a]
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            activeIndex === index
              ? 'w-full h-full'
              : 'w-16 h-2'
          }
        `}
      />

      {/* BUTTON TEXT */}
      <span
        className={`
          relative z-10 font-medium text-[20px]
          transition-colors duration-300
          ${
            activeIndex === index
              ? 'text-white'
              : 'text-[#193170]'
          }
          ${ibmPlexSerif.className}
        `}
      >
        {item}
      </span>
    </button>
  ))}
</div>

  </section>

  {/* ===== IMAGE SECTION ===== */}
  <div className="relative mt-16 w-full h-105 overflow-hidden">

    {/* IMAGE */}
    <img
      src="/Images/GetInTouch1.png"
      alt="Legal discussion"
      className="w-full h-full object-cover"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-[#0f1f4a]/70" />

    {/* CONTENT */}
    <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8">

      <h2
        className={`text-white text-[26px] font-semibold leading-tight mb-4 ${ibmPlexSerif.className}`}
      >
        Legal certainty is the foundation of operational confidence.
      </h2>

      <p className="text-white text-[14px] leading-relaxed mb-6">
        We uphold uncompromising standards of integrity and transparency.
        Our proactive approach ensures every strategy is guided by clear
        commercial objectives and prompt, decisive communication.
      </p>

      {/* CTA BUTTON */}
      <div className="self-start bg-white px-5 py-2">
        <span className="text-[#193170] font-medium text-[16px]">
          Get in touch →
        </span>
      </div>
    </div>
  </div>

</div>


    </>
  );
}
