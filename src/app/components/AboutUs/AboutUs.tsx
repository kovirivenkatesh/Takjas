"use client";

import Image from "next/image";
import { useState } from "react";
import { ibmPlexSerif } from "@/app/fonts";

export default function AboutSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className="relative w-full flex"
      onMouseEnter={() => setRevealed(true)}
    >
      {/* LEFT SECTION */}
      <div className="relative w-1/2 bg-white flex flex-col justify-center px-16 py-24 mt-16">
        <p className="text-sm mb-4 text-[#5E6784]">
          Home / <span className="text-[#193170]">About Us</span>
        </p>

        {/* 🔥 WHITE REVEAL ONLY FOR H2 */}
        <div
          className={`
            overflow-hidden
            transition-[clip-path] duration-1000
            ease-[cubic-bezier(0.76,0,0.24,1)]
            ${revealed ? "clip-path-reveal" : "clip-path-hidden"}
          `}
        >
          <h2
            className={`
              text-[clamp(3rem,4vw,3.75rem)] font-semibold mt-10 leading-16
              ${ibmPlexSerif.className}
            `}
          >
            Legal Precision Meets Commercial Mandate
          </h2>
        </div>

        <p className="text-[#5E6784] mb-6 max-w-md mt-6 text-sm">
          We are an integrated legal practice committed to ensuring certainty
          and compliance throughout the complex digital economy lifecycle.
        </p>

        <button className="w-fit px-6 py-3 bg-[#193170] text-white">
          Get in touch
        </button>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative w-1/2 h-140 overflow-hidden">
        <Image
          src="/Images/GetInTouch.jpg"
          alt="About"
          fill
          
         
        />

        {/* BLUE CURTAIN (ONE-TIME) */}
        <div
          className={`
            absolute inset-0 bg-[#193170]
            transition-transform duration-700
            ease-[cubic-bezier(0.76,0,0.24,1)]
            ${revealed ? "-translate-y-full" : "translate-y-0"}
            pointer-events-none
          `}
        />
      </div>
    </div>
  );
}
