"use client";


import { ibmPlexSerif } from "@/app/fonts";
import { Phone, Mail, MapPin } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Data Privacy (GDPR)",
    desc:
      "Full compliance strategy, documentation, and implementation for EU data protection laws and cross-border data transfer requirements.",
  },
  {
    id: "02",
    title: "Compliance Framework Design",
    desc:
      "Establishing robust internal control systems and bespoke governance structures to minimize executive liability.",
  },
  {
    id: "03",
    title: "Risk Assessment & Audits",
    desc:
      "Proactive legal audits, risk mapping, and continuous monitoring to identify vulnerabilities early.",
  },
  {
    id: "04",
    title: "Regulatory Defense & Training",
    desc:
      "Managing regulatory inquiries and providing specialized compliance training for leadership and teams.",
  },
];

export default function OurSolutionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* HEADER */}
      <p className="text-sm text-gray-500 mb-4">→ Our Solutions</p>

      <h2 className={`text-4xl font-serif max-w-4xl mb-14 leading-tight ${ibmPlexSerif.className} `}>
        Establishing robust, future-proof frameworks for enduring regulatory
        adherence
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT SERVICES */}
        <div className="lg:col-span-2 space-y-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative border border-[#1931704D] overflow-hidden"
            >


              {/* CARD BODY */}
              <div className="flex">
                {/* NUMBER COLUMN */}

                <div className="relative w-28 bg-[#EAF1FF] flex flex-col">
                  {/* TOP DARK BLUE STRIP — ONLY NUMBER COLUMN */}
                  <div className="h-1 bg-[#193170]" />

                  {/* HOVER DARK BLUE FLOW */}
                  <div
                    className="absolute inset-x-0 top-0 bottom-0 bg-[#193170]  scale-y-0 group-hover:scale-y-100  origin-top transition-transform duration-2500 ease-[cubic-bezier(0.22,1,0.36,1)] "
                  />

                  {/* NUMBER */}
                  <div className="relative z-10 flex-1 flex items-center justify-center">
                    <span className={`text-2xl  text-black font-semibold group-hover:text-white ${ibmPlexSerif.className} `}>
                      {item.id}
                    </span>
                  </div>
                </div>


                {/* CONTENT COLUMN */}
                <div className="relative flex-1 px-10 py-8 bg-[#F5F5F5] group-hover:bg-white">
                  {/* SKY BLUE FLOW RIGHT ON HOVER */}
                  <div
                    className="absolute inset-y-0 left-0 w-full bg-[#EAF1FF] scale-x-0 group-hover:scale-x-50 origin-left transition-transform duration-2500 ease-[cubic-bezier(0.22,1,0.36,1)]"

                  />

                  <div className="relative  grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
                    {/* TITLE */}
                    <h3 className={`text-[#193170] text-lg font-semibold ${ibmPlexSerif.className} `}>
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-[#32302F] leading-relaxed ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* FORM */}
          <div className="relative group overflow-hidden border border-[#C9D3EA] bg-white">
            {/* SKY BLUE FLOW LAYER */}
            <div className="absolute inset-0 bg-[#EAF1FF] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-4000 ease-[cubic-bezier(0.22,1,0.36,1)]" />

            <div className="relative z-10 flex flex-col">
              {/* HEADER */}
              <div className="bg-[#193170] text-white px-6 py-3">
                <h3 className={`text-lg mb-1 ${ibmPlexSerif.className} `}>Begin Your Inquiry</h3>
                <p className="text-sm opacity-80">
                  Talk to an M&A specialist for quick, secure communication.
                </p>
              </div>

              {/* FORM BODY */}
              <div className="px-6 py-4 space-y-2">
                {["Name", "Email", "Phone No.", "Message"].map((label, i) => (
                  <div key={i} className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-4000 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                    {label === "Message" ? (
                      <textarea
                        placeholder={label}
                        className="relative z-10 w-full h-24 resize-none px-4 py-3 bg-[#EAF1FF] group-hover:bg-transparent text-[#193170] placeholder-[#5E6784] outline-none"
                      />
                    ) : (
                      <input
                        placeholder={label}
                        className="relative z-10 w-full px-4 py-3 bg-[#EAF1FF] group-hover:bg-transparent text-[#193170] placeholder-[#5E6784] outline-none"
                      />
                    )}
                  </div>
                ))}

                <button className="w-full bg-[#193170] text-white py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* CONTACT US — spans 1 row */}
          <div className="row-span-1 bg-[#393E49] text-white px-6 py-2 flex flex-col justify-center">
            <h4 className="text-lg mb-4">Contact Us</h4>

            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <span>+49 (0)30 257 44 863</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <span>info@takjas.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-0.5" />
                <span>
                  Fehrbelliner Str. 23, 10119 Berlin, Germany
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
