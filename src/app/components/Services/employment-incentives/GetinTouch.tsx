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
    <>

      {/* ================= DESKTOP VIEW ================= */}

      <section className="hidden sm:block relative pl-22.25 h-150 overflow-hidden">
        {/* ================= CURTAIN (BLUE) ================= */}
        <div className="absolute inset-0 flex z-20 pointer-events-none">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`
              w-1/3 bg-[#193170]
              transition-transform duration-1200 ease-in-out
              ${revealed
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
              absolute inset-0   bg-[#F5F5F5]  z-20
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

              <button
                className="group w-45.25 mb-18 h-12.25 bg-[#193170] text-white rounded-md  text-[22px]"
              >
                {/* Arrow: hidden initially, shown on hover */}
                <span className="hidden group-hover:inline pr-2">
                  →
                </span>

                {/* Text: shrinks on hover */}
                <span className="group-hover:text-[18px]">
                  Get in touch
                </span>
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

      {/* ================= MOBILE VIEW ================= */}
      <section className="block sm:hidden relative bg-[#F5F5F5] overflow-hidden">

        {/* ================= CURTAIN (BLUE) ================= */}
        <div className="absolute inset-0 flex z-20 pointer-events-none">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`
          w-1/3 bg-[#193170]
          transition-transform duration-1200 ease-in-out
          ${revealed
                  ? i === 1
                    ? "-translate-y-full"
                    : "translate-y-full"
                  : "translate-y-0"
                }
        `}
              style={{ transitionDelay: `${i * 120}ms` }}
            />
          ))}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 px-6 pt-28 pb-12 flex flex-col gap-10">

          {/* ================= TEXT CONTENT ================= */}
          <div className="relative overflow-hidden">

            {/* REVEAL MASK */}
            <div
              className={`
          absolute inset-0 bg-[#F5F5F5] z-20
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
          ${revealed ? "scale-100" : "scale-105"}
        `}
            >
              {/* Breadcrumb */}
              <p className="text-[13px] text-gray-500 mb-4 leading-5">
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
                <span className="text-[#193170]">
                  Employment & Incentives
                </span>
              </p>

              {/* Heading */}
              <h2
                className={`text-[28px] leading-tight font-medium mb-5 ${ibmPlexSerif.className}`}
              >
                Talent: Pay, Growth, Compliance
              </h2>

              {/* Description */}
              <p className="text-[14px] text-gray-600 mb-8 leading-6">
                Expert legal counsel essential for managing critical workforce transitions, executive compensation, and strategic incentive programs.
              </p>

              {/* Button */}
              <button className="group w-full h-12 bg-[#193170] text-white rounded-md text-[16px] flex items-center justify-center transition-all duration-300">
                <span className="hidden group-hover:inline mr-2">
                  →
                </span>
                <span className="group-hover:text-[14px] transition-all duration-300">
                  Get in touch
                </span>
              </button>
            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative w-full h-70 overflow-hidden rounded-lg">
            <Image
              src="/Images/4a.jpg"
              alt="Corporate meeting"
              fill
              className={`
          object-cover
          transition-transform duration-1000 ease-out
          ${revealed ? "scale-100" : "scale-110"}
        `}
            />
          </div>

        </div>
      </section>
    </>
  );
}
