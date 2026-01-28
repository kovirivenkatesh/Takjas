"use client";

import { useState } from "react";
import Image from "next/image";
import { ibmPlexSerif } from "@/app/fonts";


const items = [
  {
    title: "Executive Liability and Insolvency Risk",
    content:
      "Directors face personal liability in financial distress. We offer counsel to reduce exposure and navigate insolvency laws.",
  },
  {
    title: "Complexity in Secured Debt Structuring",
    content:
      "Secured lending needs careful documentation. Flawed agreements risk refinancing and capital stability.",
  },
];

export default function RegulatoryChallenge() {
  const [active, setActive] = useState<number | null>(null);


  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16  mt-20 mx-16">
      {/* LEFT IMAGE */}
      <div className="relative h-110 w-full overflow-hidden">
        <Image
          src="/Images/finance-challenge.jpg"
          alt="Corporate meeting"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="text-sm text-gray-500 mb-3">→ The Challenge</p>

        <h2 className={`text-4xl  ${ibmPlexSerif.className} mb-6 leading-tight`}>
          Identifying the Critical Pain Points in Financial Distress
        </h2>

        <p className="text-[#5E6784] mb-10 max-w-xl text-md">
          In the high-stakes world of corporate finance, risk manifests as both personal liability and structural vulnerabilities. Before proceeding, it is vital to understand the two critical pain points that require immediate, strategic legal counsel to protect the leadership and the company's financial integrity.
        </p>


        {/* ACCORDION */}
        <div className="space-y-2 max-w-2xl -mt-5">
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
                  className={`flex items-center justify-between px-5 py-1 cursor-pointer transition-colors duration-300   ${isOpen ? "bg-[#193170]" : "bg-transparent"} `}
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
                      className={`text-base font-medium ${isOpen ? "text-white" : "text-[#193170]"
                        }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* TRIANGLE ARROW (BIGGER) */}
                  <div className="w-8 h-8 flex items-center justify-center">
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
                  <p className="text-md text-[#5E6784] max-w-xl">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
