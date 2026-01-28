"use client";

import { ibmPlexSerif } from "@/app/fonts";
import Image from "next/image";

const coreValues = [
  {
    title: "Responsiveness",
    description:
      "We aim for a one-hour response time. Critical deals require speed, and we ensure you are never left waiting.",
    image: "/Images/responsiveness.png",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no jargon. We outline potential risks and costs upfront so you can decide with confidence and clarity.",
    image: "/Images/transparency.png",
  },
  {
    title: "Strategy",
    description:
      "Business-first legal advice. We focus on feasible solutions, avoiding lengthy academic memos in favor of actionable results.",
    image: "/Images/strategy.png",
  },
  {
    title: "Empathy",
    description:
      "More than lawyers, we are partners. We understand the founder’s journey and provide personal support beyond just contracts.",
    image: "/Images/empathy.png",
  },
];

export default function CoreValues() {
  return (
    <section className="max-w-7xl px-6 mx-10">
      <p className="text-sm mb-4">→ Our Core Values</p>

      <h2
        className={`text-4xl font-semibold mb-12 max-w-3xl text-[#2C2C2C] ${ibmPlexSerif.className}`}
      >
        The foundational pillars that define every client interaction and legal
        strategy.
      </h2>

      {/* ================= CORE VALUES ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {coreValues.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden border border-[#0000004D] bg-white h-70 p-6"
          >
            {/* animated blue layer */}
            <div className="absolute top-0 left-0 h-2 w-20 bg-[#1E3A8A] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full origin-top-left" />

            {/* content */}
            <div className="relative z-10 h-full">
              <h3
                className={`text-xl font-semibold mb-2 text-[#193170] transition-colors duration-300 group-hover:text-white ${ibmPlexSerif.className}`}
              >
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed opacity-90 transition-colors duration-300 group-hover:text-white">
                {item.description}
              </p>
            </div>

            {/* bottom-left image box */}
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#CEDBFF80] flex items-center justify-center transition-colors duration-300 group-hover:bg-white z-10">
              <div className="relative w-12 h-12">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-0"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div className="relative mt-10 w-full overflow-hidden group">
        <img
          src="/Images/GetInTouch.jpg"
          alt="Legal discussion"
          className="w-full h-130 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-[#0f1f4a]/70" />

        <div className="absolute inset-0 p-10">
          <div className="absolute top-0 left-0 bg-white/20 h-20 w-40 p-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center ml-8">
              <span className="text-[#193170] font-bold">T</span>
            </div>
          </div>

          <div className="max-w-xl mt-60">
            <h2
              className={`text-white text-4xl font-semibold leading-tight ${ibmPlexSerif.className}`}
            >
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

          <div className="absolute bottom-0 right-0 bg-white/20 h-20 w-48 p-3">
            <div className="bg-white px-4 py-2 mt-3 ml-10">
              <span className="text-[#193170] font-bold">
                Get in touch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
