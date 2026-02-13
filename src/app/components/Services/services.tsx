"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ibmPlexSerif } from "@/app/fonts";
import Link from "next/link";

export default function AboutSection() {
  const [revealed, setRevealed] = useState(false);

  // 🔥 trigger on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 200); // small delay for smoother feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden sm:block">
        <div className="relative ml-22 flex gap-18 ">
          {/* LEFT SECTION */}
          <div className="relative w-163  bg-[#F5F5F5] flex flex-col  mt-29.5">
            <p className="text-[16px]  text-[#5E6784] mb-5.25">
              <Link
                href="/"
                className="hover:text-[#193170]  transition-colors"
              >
                Home
              </Link>
              {" / "}
              <span className="text-[#193170]">Services</span>
            </p>

            {/* TEXT REVEAL */}
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
              text-[65px] font-medium leading-20  mb-6
              ${ibmPlexSerif.className}
            `}
              >
                Comprehensive Legal Counsel for the Digital Economy
              </h2>
            </div>

            <p className="text-[#5E6784] mb-10.75 max-w-md text-[16px] leading-6.25">
              We provide focused expertise across the entire corporate lifecycle, ensuring certainty and strategic advantage for founders and investors.
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

          {/* RIGHT IMAGE SECTION */}
          <div className="relative w-257 h-185  overflow-hidden">
            <Image
              src="/Images/services.png"
              alt="About"
              fill
              className={`
              object-cover 
              transition-transform duration-1200 ease-out
              ${revealed ? "scale-100" : "scale-150"}
            `}
            />

            {/* BLUE CURTAIN */}
            <div
              className={`
            absolute inset-0 bg-[#193170]
            transition-transform duration-1200
            ease-[cubic-bezier(0.76,0,0.24,1)]
            ${revealed ? "-translate-y-full" : "translate-y-0"}
            pointer-events-none
          `}
            />
          </div>
        </div>
      </div>

 {/* ================= MOBILE VIEW ================= */}
      <div className="block sm:hidden">
        <div className="px-6 flex flex-col gap-12">

          {/* LEFT SECTION */}
          <div className="bg-[#F5F5F5] flex flex-col pt-28 pb-12">

            {/* Breadcrumb */}
            <p className="text-sm text-[#5E6784] mb-4">
              <Link href="/" className="hover:text-[#193170] transition-colors">
                Home
              </Link>
              {" / "}
              <span className="text-[#193170]">Services</span>
            </p>

            {/* TEXT REVEAL */}
            <div
              className={`overflow-hidden transition-[clip-path] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${revealed ? "clip-path-reveal" : "clip-path-hidden"}`}
            >
              <h2
                className={`text-3xl leading-tight mb-6 font-medium ${ibmPlexSerif.className}`}
              >
                Comprehensive Legal Counsel for the Digital Economy
              </h2>
            </div>

            <p className="text-[#5E6784] mb-8 text-base leading-6">
             We provide focused expertise across the entire corporate lifecycle, ensuring certainty and strategic advantage for founders and investors.
            </p>

            <button className="group w-full h-12 bg-[#193170] text-white rounded-md text-lg transition-all duration-300 hover:scale-105">
              <span className="hidden group-hover:inline pr-2">→</span>
              <span className="group-hover:text-base">Get in touch</span>
            </button>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative w-full h-72 overflow-hidden rounded-md">
            <Image
               src="/Images/services.png"
              alt="About"
              fill
              className={`
              object-cover 
              transition-transform duration-1200 ease-out
              ${revealed ? "scale-100" : "scale-150"}
            `}
            />

            {/* BLUE CURTAIN */}
            <div
              className={`absolute inset-0 bg-[#193170] transition-transform duration-1200 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${revealed ? "-translate-y-full" : "translate-y-0"}
        pointer-events-none`}
            />
          </div>

        </div>
      </div>
    </>
  );
}
