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
        client: "VSG\n Altglienicke",
        tag: "Corporate Spin-off & Restructuring",
        desc:
            "Structured the corporate and legal separation of the soccer team, allowing the client to reorganize their business.",
        icon: "/Images/vsg.png",
    },
   
];

export default function ProofOfCompetenceSection() {
    return (
        <section className="max-w-6xl mx-auto mt-5 mb-20">
            <p className="text-sm text-[#000000] mb-3">→ Proof of Competence</p>

            <h2
                className={`text-3xl md:text-4xl mb-10 max-w-3xl ${ibmPlexSerif.className}`}
            >
                Expertise proven across complex Finance <br/>& Restructuring
            </h2>

            <div className="border border-[#193170] divide-y divide-[#193170]">
                {mandates.map((m, i) => (
                    <div
                        key={i}
                        className="relative group overflow-hidden grid grid-cols-[90px_260px_1fr]"
                    >
                        {/* SKY BLUE BASE */}
                        <div className="absolute inset-0 bg-[#ACC3FF4A]" />

                        {/* LEFT SECTION (ICON + CLIENT ONLY) */}
                        <div className="relative col-span-2 overflow-hidden">
                            {/* DARK BLUE HOVER FILL */}
                            <div
                                className="absolute inset-y-0 left-0 w-22.5 bg-[#193170] transition-all duration-700 ease-in-out group-hover:w-full"
                            />

                            {/* CONTENT */}
                            <div className="relative z-10 grid grid-cols-[90px_1fr]">
                                {/* ICON */}
                                <div className="flex items-center justify-center mt-4">
                                    <Image
                                        src={m.icon}         
                                        alt={m.client}
                                        width={60}           
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>


                                {/* CLIENT NAME */}
                                <div
                                    className={`px-4 py-10 text-2xl font-semibold text-[#193170] group-hover:text-white transition-colors duration-500 whitespace-pre-line  ${ibmPlexSerif.className}`}
                                >
                                    {m.client}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT DESCRIPTION */}
                        <div className="relative z-10 px-6 py-6 bg-[#F5F5F5] group-hover:bg-[#E9E9E9]">
                            <span className="inline-block mb-2 px-3 py-2 text-sm border border-[#193170] text-[#193170] group-hover:bg-[#FFFFFFEB] ">
                                {m.tag}
                            </span>
                            <p className="text-lg text-[#5D5D5D]">
                                {m.desc}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}
