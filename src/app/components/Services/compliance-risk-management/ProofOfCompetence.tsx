"use client";
import { ibmPlexSerif } from "@/app/fonts";
import Image from "next/image";

const mandates = [
    {
        client: "Banco Do brasil",
        tag: "Financial Regulation & Structuring",
        desc:
            "Successfully structured and executed the complex multi-million credit facility, ensuring full EU compliance for the global banking group.",
        icon: "/Images/Banco.png",
    },
    {
        client: "McMalker",
        tag: "VC Financing Round",
        desc:
            "Managed complex negotiations with lead investors (Baillie Gifford) to secure major capital injection for market expansion and scale-up.",
        icon: "/Images/Mackler.png",
    },
    {
        client: "VSG Altglienicke",
        tag: "Corporate Spin-off & Restructuring",
        desc:
            "Structured the corporate and legal separation of the soccer team, allowing the client to reorganize their business.",
        icon: "/Images/vsg.png",
    },
   
];

export default function ProofOfCompetenceSection() {
    return (
        <section className="mt-23.5 ml-22.75   bg-[#F5F5F5] mr-16.75">
            <p className="leading-6.25 text-[16px] text-[#000000] mb-2.5">→ Proof of Competence</p>

            <h2
                className={`text-[55px] font-medium mb-18.75 leading-17.75 text-[#2C2C2C]  ${ibmPlexSerif.className}`}
            >
                 Proven expertise across complex Compliance & Risk Management
            </h2>

              <div className="border border-[#193170]  divide-y divide-[#193170]">
            {mandates.map((m, i) => (
              <div
                key={i}
                className="relative group   grid grid-cols-[147px_430px_1fr] h-50"
              >
              
          
                {/* ================= 1st COLUMN ================= */}
                <div className="relative z-10 flex items-center justify-center bg-[#193170] px-7.5 py-13.5">
                  <Image
                    src={m.icon}
                    alt={m.client}
                    width={88}
                    height={88}
                    className="object-contain"
                  />
                </div>
          
                {/* ================= 2nd COLUMN ================= */}
            <div className="relative z-10 flex items-center pl-5.25 pr-12.75 overflow-hidden">

  {/* SKY BLUE BASE */}
  <div className="absolute inset-0 bg-[#ACC3FF4A] z-0 group-hover:opacity-0 transition-opacity duration-300" />

  {/* DARK BLUE HOVER FILL */}
  <div className="absolute inset-y-0 left-0 w-0 bg-[#193170] z-10 transition-all duration-700 group-hover:w-full" />

  {/* TEXT */}
  <div
    className={`relative z-20 text-[48px] font-medium leading-17.75 text-[#193170] group-hover:text-white transition-colors duration-500 ${ibmPlexSerif.className}`}
  >
    {m.client}
  </div>
</div>

                {/* ================= 3rd COLUMN ================= */}
                <div className="relative z-10  flex flex-col pt-9.75 pl-7 pr-10.25 bg-[#F5F5F5] group-hover:bg-[#E9E9E9]">
                  <span className="inline-block w-fit mb-2.75 p-2 text-4 font-medium leading-4.75 border border-[#193170] text-[#193170] group-hover:bg-[#FFFFFFEB]">
                    {m.tag}
                  </span>
          
                  <p className="text-[18px] mb-7 leading-7 text-[#5D5D5D]">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
    );
}
