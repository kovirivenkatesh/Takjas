"use client";

import { ibmPlexSerif } from '@/app/fonts'

const values = [
  "Responsiveness",
  "Transparency",
  "Strategy",
  "Empathy",
];

export default function CoreValuesSection() {
  return (
    <div className='mt-28'>
      <section className="space-y-12  px-10">
        <p className="text-sm mb-4">→ Our Core Values</p>
        <h1 className={`text-5xl ${ibmPlexSerif.className}`}>The foundational pillars that define every client interaction and legal strategy.</h1>

        {/* ===== TOP BUTTONS ===== */}
        <div className="flex border border-gray-300 bg-white w-full max-w-4xl">
          {values.map((item, index) => (
            <button
              key={index}
              className="
        relative overflow-hidden
        flex-1
        px-6 py-4
        border-r last:border-r-0
        group

        flex items-center justify-start
        text-left
      "
            >
              {/* 🔹 INITIAL TOP-LEFT BAR */}
              <span
                className="
          absolute top-0 left-0
          w-10 h-0.75
          bg-[#1f3a8a]
          transition-all duration-600
          ease-[cubic-bezier(0.77,0,0.175,1)]
          group-hover:w-full
          group-hover:h-full
        "
              />

              {/* 🔹 BUTTON TEXT */}
              <span
                className={`
          relative z-10
          text-[#193170] font-semibold
          transition-colors duration-300
          group-hover:text-white
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
      <div className="relative mt-24 w-full overflow-hidden group">

        {/* IMAGE */}
        <img
          src="/Images/GetInTouch.jpg"
          alt="Legal discussion"
          className="
      w-full h-130 object-cover
      transition-transform duration-700 ease-in-out
      group-hover:scale-110
    "
        />

        {/* MAIN DARK BLUE OVERLAY */}
        <div className="absolute inset-0 bg-[#0f1f4a]/70" />

        {/* CONTENT WRAPPER */}
        <div className="absolute inset-0 flex flex-col justify-between p-10">


          {/* TOP-LEFT LOGO WRAPPER — ATTACHED TO IMAGE */}
          <div className="absolute top-0 left-0 bg-white/20 w-xs h-20 flex items-start p-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center ml-12">
              <span className="text-[#193170] font-bold">T</span>
            </div>
          </div>


          {/* 🔹 CENTER-LEFT TEXT */}
          <div className="max-w-xl mt-60">
            <h2 className={`text-white text-4xl font-semibold leading-tight ${ibmPlexSerif.className}`}>
              Legal certainty is the foundation
              <br />
              of operational confidence.
            </h2>

            <p className="mt-4 text-white/80 text-md">
              We uphold uncompromising standards of integrity and transparency.
              Our proactive approach ensures every strategy is guided by clear
              commercial objectives and prompt, decisive communication.
            </p>
          </div>

          {/* BOTTOM-RIGHT BUTTON WRAPPER — ATTACHED TO IMAGE */}
          <div className="absolute bottom-0 right-0 bg-white/20 w-xs h-20 flex items-start p-3">
            <div className=" bg-white flex items-center justify-center p-2 mt-3 ml-20">
              <span className="text-[#193170] font-bold">Get in touch</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
