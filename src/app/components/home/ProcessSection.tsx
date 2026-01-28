"use client";

import React, { useEffect, useRef, useState } from "react";
import { ibmPlexSerif } from "@/app/fonts";

const steps = [
  {
    id: "01",
    title: "Consultation",
    desc: "Providing expert legal advice tailored to your specific needs.",
    barPosition: "top",
  },
  {
    id: "02",
    title: "Strategy & Planning",
    desc: "Creating a tailored legal strategy to meet your goals.",
    barPosition: "bottom",
  },
  {
    id: "03",
    title: "Execution",
    desc: "Executing the legal strategy for resolution of your legal matters.",
    barPosition: "top",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  // 🔹 Scroll → Progress (0 → 1, clamped)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Above section → 0
      // Below section → 1
      const total = rect.height + viewportHeight;
      const current = viewportHeight - rect.top;

      let p = current / total;
      p = Math.max(0, Math.min(1, p));

      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* ===== HEADER ===== */}
      <div className="mt-28 px-10">
        <p className="text-sm mb-4">→ Our Process</p>
        <h1 className={`text-5xl ${ibmPlexSerif.className}`}>
          A precise, business-first methodology
          <br />
          designed for efficiency and legal clarity.
        </h1>
      </div>

      {/* ===== PROCESS SECTION ===== */}
      <section ref={containerRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-16 grid grid-cols-1 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative px-10 pt-14 pb-16"
            >
              {/* OPEN VERTICAL SIDES */}
              <div className="absolute inset-y-0 left-0 w-px bg-[#9aa6d1]" />
              <div className="absolute inset-y-0 right-0 w-px bg-[#9aa6d1]" />

              {/* TOP / BOTTOM BORDER */}
              {step.barPosition === "top" && (
                <div className="absolute top-0 left-0 right-0 h-px bg-[#9aa6d1]" />
              )}
              {step.barPosition === "bottom" && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#9aa6d1]" />
              )}

              {/* 🔵 BLUE BAR — STARTS TOP-RIGHT → MOVES LEFT */}
              <div
                className={`
                  absolute h-2 w-12 bg-[#193170]
                  ${step.barPosition === "top" ? "top-0 left-0" : "bottom-0  left-0"}
                `}
                style={{
                  right: `calc(${progress * 100}% - ${progress * 48}px)`,
                }}
              />

              {/* NUMBER */}
              <div className={`w-14 h-14 border border-[#9aa6d1] flex items-center justify-center text-[#193170] font-semibold text-lg ${ibmPlexSerif.className}`}>
                {step.id}
              </div>

              {/* CONTENT */}
              <h3
                className={`mt-8 text-2xl font-semibold ${ibmPlexSerif.className}`}
              >
                {step.title}
              </h3>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
