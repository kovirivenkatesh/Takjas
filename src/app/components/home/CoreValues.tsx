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
    <div className='mt-33.75'>
      <section className="  ml-21.25 mr-10.75">
        <p className="text-[16px] mb-2">→ Our Core Values</p>
        <h1 className={`text-[55px] font-medium leading-17.75 text-[#2C2C2C] mb-18.75 ${ibmPlexSerif.className}`}>The foundational pillars that define every client interaction and legal strategy.</h1>

        {/* ===== TOP BUTTONS ===== */}
        <div className="flex border border-[#0000004D] bg-white w-full max-w-5xl">
          {values.map((item, index) => (
            <button
              key={index}
              className="
        relative overflow-hidden
       w-64
        px-6 py-5.25
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
          w-22.25 h-2
          bg-[#1f3a8a]
          transition-all duration-600
          ease-in-out
          group-hover:w-full
          group-hover:h-full
        "
              />

              {/* 🔹 BUTTON TEXT */}
              <span
                className={`
          relative z-10
          text-[#193170] font-medium
          transition-colors duration-300
          group-hover:text-white text-[28px]
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
      <div className="relative mt-33.75 w-full overflow-hidden group">

        {/* IMAGE */}
        <img
          src="/Images/GetInTouch.jpg"
          alt="Legal discussion"
          className="
      w-360 h-144 object-cover
      transition-transform duration-700 ease-in-out
      group-hover:scale-110
    "
        />

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
          <div className="max-w-xl mt-60 ml-20.75">
            <h2 className={`text-white text-[48px] font-bold leading-16.75 ${ibmPlexSerif.className}`}>
              Legal certainty is the foundation
              of operational confidence.
            </h2>

            <p className=" text-[#FFFFFF] text-[16px] leading-5.75">
              We uphold uncompromising standards of integrity and transparency.
              Our proactive approach ensures every strategy is guided by clear
              commercial objectives and prompt, decisive communication.
            </p>
          </div>

          {/* BOTTOM-RIGHT BUTTON WRAPPER — ATTACHED TO IMAGE */}
          <div className="absolute bottom-0 right-0 bg-white/20 w-97 h-40 flex ">
            <div className=" bg-white  w-40 h-10 flex items-center justify-center  mx-26 my-16">
              <span className="text-[#193170]  text-[17px]">Get in touch</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
