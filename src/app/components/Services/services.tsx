"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ibmPlexSerif } from "@/app/fonts";
import Link from "next/link";

export default function ServiceSection() {
  const [revealed, setRevealed] = useState(false);

  // 🔥 trigger animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 200); // small delay for smooth entry

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full flex">
      {/* LEFT SECTION */}
      <div className="relative w-1/2 bg-white flex flex-col justify-center px-16 py-24 mt-16">
                <p className="text-sm mb-4 text-[#5E6784]">
  <Link
    href="/"
    className="hover:text-[#193170] transition-colors"
  >
    Home
  </Link>
  {" / "}
  <span className="text-[#193170]">Services</span>
</p>

        {/* 🔥 TEXT REVEAL */}
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
            Legal Precision For Your Corporate Ambitions
          </h2>
        </div>

        <p className="text-[#5E6784] mb-6 max-w-md mt-6 text-sm">
          We provide focused expertise across the entire corporate lifecycle,
          ensuring certainty and strategic advantage for founders and investors.
        </p>

        <button className="w-fit px-6 py-3 bg-[#193170] text-white">
          Get in touch
        </button>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative w-1/2 h-140 overflow-hidden">
        <Image
          src="/Images/services.png"
          alt="Services"
          fill
          className="object-cover"
        />

        {/* 🔵 BLUE CURTAIN */}
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
