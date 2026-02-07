"use client";

import { useState } from "react";
import Image from "next/image";
import { ibmPlexSerif } from "@/app/fonts";


const items = [
  {
    title: "The Bottleneck of High-Velocity Transactions",
    content:
      "High-growth companies need speed. Slow documentation and legal advice create bottlenecks that jeopardize deals.",
  },
  {
    title: "Complexity in Global Data Compliance",
    content:
      "Initial governance failures and flawed agreements cause costly restructuring, hindering future funding or exit.",
  },
];

export default function RegulatoryChallenge() {
 const [active, setActive] = useState<number | null>(null);


  return (
     <section className="grid grid-cols-1 lg:grid-cols-2 gap-12.25  mt-23.5 ml-22.75 mr-16.75">
         {/* LEFT IMAGE */}
         <div className="relative h-124.25 w-139 overflow-hidden">
           <Image
             src="/Images/corporate_challenge.png"
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
            Navigating Complexity in High-Velocity Transactions
           </h2>
   
           <p className="text-[#5E6784] mb-7   leading-6.25 text-[16px]">
             In high-growth environments, legal bottlenecks can derail deals and compromise valuation. We focus on eliminating the friction between business goals and regulatory requirements, ensuring structural precision from the first funding round to the final signature.
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
                 className={`text-xl leading-none ${
                   isOpen ? "text-white" : "text-[#193170]"
                 }`}
               >
                 •
               </span>
   
               <span
                 className={`text-[20px] leading-7.25 font-medium mr-21.25 ${
                   isOpen ? "text-white" : "text-[#193170]"
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
             className={`h-px w-full transition-colors duration-300 ${
               isOpen ? "bg-[#193170]" : "bg-gray-200"
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
  );
}
