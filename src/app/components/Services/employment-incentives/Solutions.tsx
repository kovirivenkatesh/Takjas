"use client";


import { ibmPlexSerif } from "@/app/fonts";
import { Phone, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react";

const services = [
  {
    id: "01",
    title: "Executive \nCompensation &\n Contracts",
    desc:
      "Drafting executive service agreements, high-level compensation schemes, and managing sensitive offboarding negotiations.",
  },
  {
    id: "02",
    title: "Incentive Programs (ESOP/VSOP)",
    desc:
      "Structuring and implementing flexible and tax-efficient ESOP/VSOP programs to attract and retain key talent.",
  },
  {
    id: "03",
    title: "Workforce\n Management &\n Restructuring",
    desc:
      "Legal counsel for strategic reorganization, collective labor agreements, and managing complex terminations/disputes.",
  },
  {
    id: "04",
    title: "Business Immigration \n& Mobility",
    desc:
      "Navigating German immigration law to secure necessary work permits and residence visas for international employees.",
  },
];

export default function OurSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );
    }, 2500); // change timing here

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {/* ================= DESKTOP VIEW ================= */}

      <section className="hidden sm:block mt-23.5 ml-22.75 mr-16.75 ">
        {/* HEADER */}
        <p className="leading-6.25 text-[16px] text-[#000000] mb-2.5">→ Our Solutions</p>

        <h2 className={`text-[55px] font-medium mb-18.75 leading-17.75 text-[#2C2C2C] ${ibmPlexSerif.className} `}>
          A Cohesive Strategy for the Full Employee Lifecycle
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* LEFT SERVICES */}
          <div className="lg:col-span-2 space-y-6 overflow-x-scroll">
            {services.map((item) => (
              <div
                key={item.id}
                className="group relative border border-[#1931704D]  min-w-full"
              >


                {/* CARD BODY */}
                <div className="flex">
                  {/* NUMBER COLUMN */}

                  <div className="relative  bg-[#EAF1FF] flex flex-col">
                    {/* TOP DARK BLUE STRIP — ONLY NUMBER COLUMN */}
                    <div className="h-1.75 bg-[#193170]" />

                    {/* HOVER DARK BLUE FLOW */}
                    <div
                      className="absolute inset-x-0 top-0 bottom-0 bg-[#193170]  scale-y-0 group-hover:scale-y-100  origin-top transition-transform duration-2500 ease-[cubic-bezier(0.22,1,0.36,1)] "
                    />

                    {/* NUMBER */}
                    <div className="relative z-10 h-48.5 w-22   flex items-center justify-center">
                      <span
                        className={`text-[32px] font-medium text-black group-hover:text-white ${ibmPlexSerif.className}`}
                      >
                        {item.id}
                      </span>
                    </div>

                  </div>


                  {/* CONTENT COLUMN */}
                  <div className="relative bg-[#F5F5F5] group-hover:bg-white">

                    <div className="relative grid grid-cols-1 md:grid-cols-[292px_463px] h-48.5">

                      {/* TITLE COLUMN (FULL HEIGHT + PADDING) */}
                      <div className="relative h-full pl-5.5 pr-2.5 py-8 flex items-center">

                        {/* SKY BLUE FLOW — FILLS ENTIRE COLUMN INCLUDING PADDING */}
                        <div
                          className="absolute inset-0 bg-[#EAF1FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-2500 ease-[cubic-bezier(0.22,1,0.36,1)]"

                        />

                        {/* TITLE TEXT */}
                        <h3
                          className={`relative z-10 text-[#193170] text-[24px]
          leading-8.5 font-medium ${ibmPlexSerif.className}`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* DESCRIPTION COLUMN (OWN PADDING) */}
                      <div className="px-7.5  flex items-center">
                        <p className="text-[16px] text-[#32302F] leading-6.25">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* FORM */}
            <div className="relative group overflow-hidden border border-[#C9D3EA] bg-white">
              {/* SKY BLUE FLOW LAYER */}
              <div className="absolute inset-0 bg-[#EAF1FF] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-4000 ease-[cubic-bezier(0.22,1,0.36,1)]" />

              <div className="relative z-10 flex flex-col">
                {/* HEADER */}
                <div className="bg-[#193170] text-white px-6.25 py-5.5 h-35.5">
                  <h3 className={`text-[24px] mb-2.75 leading-6.75 font-medium ${ibmPlexSerif.className} `}>Begin Your Inquiry</h3>
                  <p className="text-[16px] leading-6.5 opacity-80">
                    Talk to an M&A specialist for quick, secure communication.
                  </p>
                </div>

                {/* FORM BODY */}
                <div className=" space-y-4 mt-3.5 mx-5">
                  {["Name", "Email", "Phone No.", "Message"].map((label, i) => (
                    <div key={i} className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-4000 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                      {label === "Message" ? (
                        <textarea
                          placeholder={label}
                          className="relative z-10 px-4 py-3 w-full h-40 mb-4.75 resize-none  bg-[#EAF1FF] group-hover:bg-transparent text-[#193170] text-[15px] placeholder-[#5E6784] outline-none"
                        />
                      ) : (
                        <input
                          placeholder={label}
                          className="relative z-10 px-4 py-3 w-full h-14 bg-[#EAF1FF] group-hover:bg-transparent text-[#193170] placeholder-[#5E6784] outline-none"
                        />
                      )}
                    </div>
                  ))}

                  <button className="w-full h-15 bg-[#193170] text-white text-[16px] py-1 px-3 mb-6">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* CONTACT US — spans 1 row */}
            <div className="row-span-1 bg-[#393E49] text-white px-6 py-6 h-50 flex flex-col justify-center">
              <h4 className="text-[20px] leading-6.25 font-medium mb-5.5">Contact Us</h4>

              <ul className="space-y-3.5 text-[16px] opacity-90">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-white" />
                  <span>+49 (0)30 257 44 863</span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-white" />
                  <span>info@takjas.com</span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-white mt-0.5 leading-5.75" />
                  <span>
                    Fehrbelliner Str. 23, 10119 Berlin, Germany
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOBILE VIEW ================= */}

      <section className="block sm:hidden px-5 py-12 bg-[#F5F5F5]">

        {/* HEADER */}
        <p className="text-sm text-black mb-3">
          → Our Solutions
        </p>

        <h2
          className={`text-3xl leading-snug font-medium mb-10 text-[#2C2C2C] ${ibmPlexSerif.className}`}
        >
          A Cohesive Strategy for the Full Employee Lifecycle
        </h2>

        {/* SERVICES */}
        <div className="space-y-5">

          {/* SERVICES */}
          <div className="space-y-5">

            {services.map((item, index) => {

              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className="border border-[#1931704D] bg-white overflow-hidden"
                >
                  <div className="flex">

                    {/* NUMBER COLUMN */}
                    <div className="relative bg-[#EAF1FF] w-16 flex items-center justify-center">

                      {/* TOP STRIP */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#193170]" />

                      {/* AUTO DARK BLUE FLOW */}
                      <div
                        className={`absolute inset-0 bg-[#193170] origin-top transition-transform duration-1000
                    ${isActive ? "scale-y-100" : "scale-y-0"}`}
                      />

                      <span
                        className={`relative z-10 text-xl font-medium transition-colors duration-500
                    ${isActive ? "text-white" : "text-black"}
                    ${ibmPlexSerif.className}`}
                      >
                        {item.id}
                      </span>
                    </div>

                    {/* CONTENT COLUMN */}
                    <div
                      className={`flex-1 relative transition-colors duration-500
                  ${isActive ? "bg-white" : "bg-[#F5F5F5]"}`}
                    >
                      <div className="relative p-5">

                        {/* AUTO SKY BLUE FLOW */}
                        <div
                          className={`absolute inset-0 bg-[#EAF1FF] origin-left transition-transform duration-1000
                      ${isActive ? "scale-x-100" : "scale-x-0"}`}
                        />

                        <div className="relative z-10">
                          <h3
                            className={`text-lg font-medium text-[#193170] mb-2 ${ibmPlexSerif.className}`}
                          >
                            {item.title}
                          </h3>

                          <p className="text-sm text-[#32302F] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>


        </div>

        {/* FORM */}
        <div className="mt-12 border border-[#C9D3EA] bg-white overflow-hidden">

          {/* HEADER */}
          <div className="bg-[#193170] text-white px-5 py-6">
            <h3 className={`text-lg font-medium mb-2 ${ibmPlexSerif.className}`}>
              Begin Your Inquiry
            </h3>
            <p className="text-sm opacity-80">
              Talk to an M&A specialist for quick, secure communication.
            </p>
          </div>

          {/* FORM BODY */}
          <div className="p-5 space-y-4">

            {["Name", "Email", "Phone No.", "Message"].map((label, i) =>
              label === "Message" ? (
                <textarea
                  key={i}
                  placeholder={label}
                  className="w-full h-32 px-4 py-3 bg-[#EAF1FF] text-[#193170] placeholder-[#5E6784] outline-none resize-none"
                />
              ) : (
                <input
                  key={i}
                  placeholder={label}
                  className="w-full h-12 px-4 bg-[#EAF1FF] text-[#193170] placeholder-[#5E6784] outline-none"
                />
              )
            )}

            <button className="w-full h-12 bg-[#193170] text-white text-sm">
              Submit
            </button>

          </div>
        </div>

        {/* CONTACT */}
        <div className="mt-10 bg-[#393E49] text-white p-6">

          <h4 className="text-lg font-medium mb-4">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm opacity-90">

            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>+49 (0)30 257 44 863</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@takjas.com</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <span>
                Fehrbelliner Str. 23, 10119 Berlin, Germany
              </span>
            </li>

          </ul>

        </div>

      </section>
    </>
  );
}
