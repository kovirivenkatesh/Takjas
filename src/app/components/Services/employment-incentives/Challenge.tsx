"use client";

import { useState } from "react";
import Image from "next/image";
import { ibmPlexSerif } from "@/app/fonts";


const items = [
  {
    title: "Complexity in German Labor Law & Disputes",
    content:
      "German labor laws pose risks for routine decisions. Flawed terminations can lead to high costs and reputational damage.",
  },
  {
    title: "The Global Talent War & Incentives",
    content:
      "Competition for talent is fierce. Structuring attractive, legally compliant equity incentive programs (ESOP/VSOP) for domestic and international hires is complex.",
  },
];

export default function RegulatoryChallenge() {
  const [active, setActive] = useState<number | null>(null);


  return (
    <>

      {/* ================= DESKTOP VIEW ================= */}

      <div className="hidden sm:block">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12.25  mt-23.5 ml-22.75 mr-16.75">
          {/* LEFT IMAGE */}
          <div className="relative h-124.25 w-139 overflow-hidden">
            <Image
              src="/Images/employement_challenge.jpg"
              alt="Corporate meeting"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-[16px] text-[#000000] mb-2">→ The Challenge</p>

            <h2 className={`text-[48px]  ${ibmPlexSerif.className} mb-2.5 font-medium text-[#2C2C2C] leading-17.75`}>
              Identifying the Dual Risk to Talent and Compliance
            </h2>

            <p className="text-[#5E6784] mb-7   leading-6.25 text-[16px]">
              In a competitive market, talent retention is critical, but adherence to strict German labor law is mandatory. We help clients navigate the complexity of balancing aggressive international recruitment strategies with rigorous national compliance and litigation avoidance.
            </p>


            {/* ACCORDION */}
            <div className="space-y-5.5 ">
              {items.map((item, i) => {
                const isOpen = active === i;

                return (
                  <div
                    key={i}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* HEADER ROW */}
                    <div
                      className={`flex  justify-between  py-3 px-2 cursor-pointer transition-colors duration-300   ${isOpen ? "bg-[#193170]" : "bg-transparent"} `}
                    >
                      {/* LEFT DOT + TEXT */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xl leading-none ${isOpen ? "text-white" : "text-[#193170]"
                            }`}
                        >
                          •
                        </span>

                        <span
                          className={`text-[20px] leading-7.25 font-medium mr-21.25 ${isOpen ? "text-white" : "text-[#193170]"
                            }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* TRIANGLE ARROW (BIGGER) */}
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 14 12"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`block transition-transform duration-1500  ease-[cubic-bezier(0.22,1,0.36,1)] origin-center
        ${isOpen ? "scale-y-[-1] translate-y-px" : "scale-y-100 translate-y-0"}
      `}
                        >
                          <path
                            d="M1 1L7 11L13 1Z"
                            fill="none"
                            stroke={isOpen ? "#FFFFFF" : "#193170"}
                            strokeWidth="1"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                    </div>

                    {/* SEPARATOR LINE */}
                    <div
                      className={`h-px w-full transition-colors duration-300 ${isOpen ? "bg-[#193170]" : "bg-gray-200"
                        }`}
                    />

                    {/* CONTENT */}
                    <div
                      className={` overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isOpen ? "max-h-40 opacity-100 px-5 py-4" : "max-h-0 opacity-0"}
            `}
                    >
                      <p className="text-[16px] text-[#5E6784]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block sm:hidden bg-[#F5F5F5] px-6 ">

        <section className="flex flex-col gap-10">

          {/* IMAGE */}
          <div className="relative w-full h-62.5 rounded-lg overflow-hidden">
            <Image
              src="/Images/employement_challenge.jpg"
              alt="Corporate meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[14px] text-[#000000] mb-2">
              → The Challenge
            </p>

            <h2
              className={`text-[26px] leading-tight font-medium mb-4 text-[#2C2C2C] ${ibmPlexSerif.className}`}
            >
              Identifying the Dual Risk to Talent and Compliance
            </h2>

            <p className="text-[#5E6784] mb-8 leading-6 text-[14px]">
              In a competitive market, talent retention is critical, but adherence to strict German labor law is mandatory. We help clients navigate the complexity of balancing aggressive international recruitment strategies with rigorous national compliance and litigation avoidance.
            </p>

            {/* ================= ACCORDION ================= */}
            <div className="space-y-4">
              {items.map((item, i) => {
                const isOpen = active === i;

                return (
                  <div key={i} className="border-b border-gray-200">

                    {/* HEADER (Clickable) */}
                    <div
                      onClick={() =>
                        setActive(isOpen ? null : i)
                      }
                      className={`flex justify-between items-center py-4 cursor-pointer transition-colors duration-300 ${isOpen ? "bg-[#193170] px-3 rounded-md" : ""
                        }`}
                    >
                      {/* LEFT DOT + TITLE */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-lg ${isOpen
                            ? "text-white"
                            : "text-[#193170]"
                            }`}
                        >
                          •
                        </span>

                        <span
                          className={`text-[16px] font-medium ${isOpen
                            ? "text-white"
                            : "text-[#193170]"
                            }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* ARROW */}
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 14 12"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${isOpen
                            ? "rotate-180 text-white"
                            : "rotate-0 text-[#193170]"
                          }
                        `}
                      >
                        <path
                          d="M1 1L7 11L13 1Z"
                          fill="none"
                          stroke={
                            isOpen ? "#FFFFFF" : "#193170"
                          }
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isOpen
                          ? "max-h-40 opacity-100 py-3"
                          : "max-h-0 opacity-0"
                        }
                      `}
                    >
                      <p className="text-[14px] text-[#5E6784] leading-6">
                        {item.content}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </div>
    </>

  );
}
