"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ibmPlexSerif } from "@/app/fonts";
import Link from "next/link";

export default function GetInTouchSection() {
  const [revealed, setRevealed] = useState(false);

  // 🔥 trigger animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 200); // small delay for smooth entrance

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pl-22.25 h-150 overflow-hidden">
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
                    : "translate-y-full"    // sides go DOWN
                  : "translate-y-0"
              }
            `}
            style={{ transitionDelay: `${i * 120}ms` }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full grid grid-cols-2 gap-18">

        {/* LEFT CONTENT */}
        <div className=" relative   mt-29.5 overflow-hidden">

          {/* REVEAL MASK */}
          <div
            className={`
              absolute inset-0 bg-white z-20
              transition-transform duration-2000 ease-out delay-200
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
           <p className="text-[16px] text-gray-500 mb-5.25">
  <Link
    href="/"
    className="hover:text-[#193170] transition-colors"
  >
    Home
  </Link>

  {" / "}

  <Link
    href="/services"
    className="hover:text-[#193170] transition-colors"
  >
    Services
  </Link>

  {" / "}

  <span className="text-[#193170] ">
    Employment & Incentives
  </span>
</p>

            <h2
              className={`text-[66px] font-medium leading-20 mb-6 ${ibmPlexSerif.className}`}
            >
              Talent: Pay, Growth, Compliance
            </h2>

            <p className="text-[16px] text-gray-600 mb-10.75 leading-6.25">
              Expert legal counsel essential for managing critical workforce transitions, executive compensation, and strategic incentive programs.
            </p>

            <button className="bg-[#193170] text-white px-2.5 py-3 text-[16px]">
              Get in touch
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-171 ">
          <Image
            src="/Images/4a.jpg"
            alt="Corporate meeting"
            fill
           
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
