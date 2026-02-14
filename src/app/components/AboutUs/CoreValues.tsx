"use client";

import { ibmPlexSerif } from "@/app/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === coreValues.length - 1 ? 0 : prev + 1
      );
    }, 2500); // change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden sm:block mt-32.25">
        <div className="pl-22.5  pr-21.25">
          <p className="text-[16px] mb-2.25">→ Our Core Values</p>

          <h2
            className={`text-[55px] font-medium mb-18.75 leading-17.75  text-[#2C2C2C] ${ibmPlexSerif.className}`}
          >
            The foundational pillars that define every client interaction and legal
            strategy.
          </h2>
        </div>


        {/* ================= CORE VALUES ================= */}
        <div className="grid grid-cols-4 ml-22.5  mr-21.25">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-[#0000004D] bg-[#F5F5F5]  w-76.25 h-81 pt-5.25"
            >
              {/* animated blue layer */}
              <div className="absolute top-0 left-0 h-2 w-20 bg-[#1E3A8A] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full origin-top-left" />

              {/* content */}
              <div className="relative z-10">
                <h3
                  className={`text-[32px] font-medium mb-4.5  px-6 text-[#193170] transition-colors duration-300 group-hover:text-white ${ibmPlexSerif.className}`}
                >
                  {item.title}
                </h3>

                <p className="text-[16px] leading-5.75 px-10 text-[#4A4A4A] transition-colors duration-300 group-hover:text-white">
                  {item.description}
                </p>
              </div>

              {/* bottom-left image box */}
              <div className="absolute bottom-0 left-0 w-27.5 h-24.25 bg-[#CEDBFF80] flex items-center justify-center transition-colors duration-300 group-hover:bg-white z-10">
                <div className="relative w-16.25 h-16.25">
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

        {/* ===== IMAGE SECTION ===== */}
        <div className="relative mt-33.75 w-full h-144 overflow-hidden group/image">

          {/* IMAGE */}
          <img
            src="/Images/GetInTouch1.png"
            alt="Legal discussion"
            className="w-360 h-144 object-cover transition-transform duration-700 ease-in-out group-hover/image:scale-110"

          />
          {/* TOP-RIGHT STRIP */}
          <div
            className="absolute top-0 right-0 h-3.75 w-132.5 bg-[#F5F5F5] origin-right transition-all duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:w-[calc(100%-390px)] z-30"

          />


          {/* STRIP */}
          <div
            className="absolute bottom-0 left-0 h-3.75 w-132.5 bg-[#F5F5F5] origin-left transition-[width] duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:w-[calc(100%-388px)] z-30"

          >
            {/* HR — REST STATE */}
            <div
              className="absolute bottom-0 left-0 h-px scale-y-[0.2] w-full bg-[#0f1f4a] opacity-100 transition-opacity duration-200 group-hover/image:opacity-0"

            />



            {/* HR — EXPANDED STATE */}
            <div
              className="absolute bottom-0 left-0 h-px w-full bg-[#0f1f4a] scale-y-[0.2] opacity-0 transition-opacity duration-200 group-hover/image:opacity-100 group-hover/image:delay-1500"

            />
          </div>


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
            <div className=" mt-60 ml-20.75 pr-90">
              <h2 className={`text-white text-[48px] font-bold leading-16.75 ${ibmPlexSerif.className}`}>
                Legal certainty is the foundation
                of operational confidence.
              </h2>

              <p className=" text-[#FFFFFF] text-[16px] pb-10 leading-5.75">
                We uphold uncompromising standards of integrity and transparency.
                Our proactive approach ensures every strategy is guided by clear
                commercial objectives and prompt, decisive communication.
              </p>
            </div>

            {/* BOTTOM-RIGHT BUTTON WRAPPER — ATTACHED TO IMAGE */}
            <div className="absolute bottom-0 right-0 bg-white/20 w-97 h-40 flex ">
              <div className="group/button bg-white w-40 h-10 flex items-center justify-center mx-26 my-16 cursor-pointer overflow-hidden">
               
               <Link href="/contact" >
                <span
                  className="flex items-center text-[#193170] text-[22px] transition-all duration-300 group-hover/button:text-[18px]"

                >
                  {/* Arrow */}
                  <span
                    className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover/button:w-4"

                  >
                    →
                  </span>

                  <span className="ml-1">
                    Get in touch
                  </span>
                </span>
                </Link>
              </div>


            </div>
          </div>
        </div>
      </div>


      {/* ================= MOBILE VIEW ================= */}
      <div className="block sm:hidden mt-16">

        {/* ===== HEADING ===== */}
        <div className="px-6">
          <p className="text-[14px] mb-2">→ Our Core Values</p>

          <h2
            className={`text-[32px] leading-10 font-medium text-[#2C2C2C] ${ibmPlexSerif.className}`}
          >
            The foundational pillars that define every client interaction and legal strategy.
          </h2>
        </div>

        {/* ================= CORE VALUES ================= */}
        <div className="grid grid-cols-1 gap-6 px-6 mt-10">
          {coreValues.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative overflow-hidden border border-[#0000004D] bg-[#F5F5F5] p-6 pb-20 transition-all duration-500"
              >
                {/* Animated Blue Layer */}
                <div
                  className={`
              absolute top-0 left-0 bg-[#1E3A8A] origin-top-left
              transition-all duration-700 ease-in-out
              ${isActive ? "w-full h-full" : "w-16 h-2"}
            `}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className={`
                text-[24px] font-medium mb-3 transition-colors duration-500
                ${ibmPlexSerif.className}
                ${isActive ? "text-white" : "text-[#193170]"}
              `}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                text-[14px] leading-6 transition-colors duration-500
                ${isActive ? "text-white" : "text-[#4A4A4A]"}
              `}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Image Box */}
                <div
                  className={`
              absolute bottom-0 left-0 w-16 h-16 flex items-center justify-center
              transition-colors duration-500 z-10
              ${isActive ? "bg-white" : "bg-[#CEDBFF80]"}
            `}
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`
                  object-contain transition-all duration-500
                  ${isActive ? "brightness-0" : ""}
                `}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= IMAGE SECTION ================= */}

        <div className="relative mt-16 w-full h-105 overflow-hidden">

          {/* IMAGE */}
          <img
            src="/Images/GetInTouch1.png"
            alt="Legal discussion"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#0f1f4a]/70" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8">

            <h2
              className={`text-white text-[26px] font-semibold leading-tight mb-4 ${ibmPlexSerif.className}`}
            >
              Legal certainty is the foundation of operational confidence.
            </h2>

            <p className="text-white text-[14px] leading-relaxed mb-6">
              We uphold uncompromising standards of integrity and transparency.
              Our proactive approach ensures every strategy is guided by clear
              commercial objectives and prompt, decisive communication.
            </p>

            {/* CTA BUTTON */}
            <div className="self-start bg-white px-5 py-2">
              <Link href="/contact" >
              <span className="text-[#193170] font-medium text-[16px]">
                Get in touch →
              </span>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}
