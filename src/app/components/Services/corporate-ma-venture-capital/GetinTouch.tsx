"use client";

import { useState } from "react";
import Image from "next/image";
import { ibmPlexSerif } from "@/app/fonts";

export default function GetInTouchSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      className="relative w-full h-150 overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        if (!revealed) setRevealed(true);
      }}
    >
      {/* ================= CURTAIN (BLUE) ================= */}
      <div className="absolute inset-0 flex z-20 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`
              w-1/3 bg-[#193170]
              transition-transform duration-1200 ease-in-out
              ${
                revealed
                  ? i === 1
                    ? "-translate-y-full"   // middle goes UP
                    : "translate-y-full"    // left & right go DOWN
                  : "translate-y-0"
              }
            `}
            style={{ transitionDelay: `${i * 120}ms` }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full grid grid-cols-2 items-center ">
        
  
{/* LEFT CONTENT */}
<div className="px-16 relative overflow-hidden">

  {/* REVEAL MASK */}
  <div
    className={`
      absolute inset-0 bg-[#FFFFFF] z-20
      transition-transform duration-2000
      ease-out
      delay-200
      ${revealed ? "translate-x-full" : "translate-x-0"}
    `}
  />

  {/* ACTUAL TEXT */}
  <div
    className={`
      relative z-10
      transition-transform duration-1200
      ease-[cubic-bezier(0.16,1,0.3,1)]
      
      ${revealed ? "scale-100" : "scale-110"}
    `}
  >
    <p className="text-sm text-gray-500 mb-3">
      Home / Services / Corporate, M&A, Venture Capital
    </p>

    <h2
      className={`text-5xl font-semibold leading-snug mb-4 ${ibmPlexSerif.className}`}
    >
      Legal Precision For Your Corporate Ambitions
    </h2>

    <p className="text-sm text-gray-600 mb-6 max-w-md">
      Our comprehensive legal counsel is tailored for the digital economy, guiding founders and investors through every stage of the corporate lifecycle.
    </p>

    <button className="bg-[#193170] text-white px-6 py-3 text-sm">
      Get in touch
    </button>
  </div>
</div>

      {/* RIGHT IMAGE */}
<div className="relative h-full w-full overflow-hidden">
  <Image
    src="/Images/aboutus.png"
    alt="Corporate meeting"
    fill
    priority
    className={`
      object-cover
      transition-transform duration-1000 ease-out
      ${revealed ? "scale-100" : "scale-150"}
    `}
  />
</div>

      </div>
    </section>
  );
}
