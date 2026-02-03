"use client";

import { ibmPlexSerif } from "@/app/fonts";
import {  LinkedinIcon,Phone, Mail, MapPin } from "lucide-react";
import { useState,useEffect } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What makes the firm unique?",
    a: "Our firm combines deep legal expertise with a business-first mindset, ensuring practical and commercially aligned solutions.",
  },
  {
    q: "Does the firm work internationally?",
    a: "Yes. We regularly advise clients across multiple jurisdictions and work with trusted international partners.",
  },
  {
    q: "How quickly can we start the project?",
    a: "In most cases, we can begin within a few days after an initial consultation and scope alignment.",
  },
  {
    q: "What is your step-by-step process?",
    a: "We follow a structured approach: consultation, strategy & planning, execution, and continuous communication.",
  },
  {
    q: "How do you structure legal fees?",
    a: "Our fee structures are transparent and tailored, including fixed fees, retainers, or hourly billing depending on the matter.",
  },
  {
    q: "How is our data kept secure (GDPR)?",
    a: "We adhere strictly to GDPR requirements and implement robust technical and organizational security measures.",
  },
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className={`font-bold text-[16px] mb-11 relative ${ibmPlexSerif.className}`}>
        {title}
        <span className="absolute -top-3 left-0 w-6 h-0.75 bg-[#1b3470]" />
      </h4>

      <ul className="space-y-5.75 text-sm text-[#626262] ">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="hover:text-[#1b3470] transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default function FooterSection() {
  const [hasRevealed, setHasRevealed] = useState(false);

   const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY ? "down" : "up");
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div className="mt-33.75 ">
    <section className="relative bg-[#1b3470] text-white  overflow-hidden group">
  
  {/* ===== BLUE CURTAIN (RIGHT HALF) ===== */}
  <div
    className="absolute top-0 right-0 w-1/2 h-full bg-[#324981]/90 transform -translate-y-full transition-transform duration-2500 ease-in-out group-hover:translate-y-0 pointer-events-none"

  />

  <div className=" mx-20.75 relative  grid grid-cols-1 md:grid-cols-2 gap-30.5 pt-19.5">

    {/* ===== LEFT CONTENT ===== */}
    <div className="flex flex-col justify-between">
      <div>
        <p className="text-[16px] mb-2">→ Contact Us</p>

        <h2 className={`text-[55px]  font-medium leading-17.75 mb-6.5 ${ibmPlexSerif.className}`}>
          Schedule Your
         
          Initial Consultation
        </h2>

        <p className="text-[16px] text-[white/80] leading-6.25 ">
          Let's discuss your transaction or complex legal challenge.
        </p>
      </div>

      <div className="mt-18 space-y-7 text-[20px] mb-14.25">
        <div className="flex items-center gap-7">
          <Phone size={18} />
          <span>+49 (0)30 257 44 863</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail size={18} />
          <span>info@takjas.com</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin size={18} />
          <span>Fehrbelliner Str. 23, 10119 Berlin, Germany</span>
        </div>
      </div>
    </div>

    {/* ===== RIGHT FORM ===== */}
    <form className="space-y-8 relative z-10">
      <input
        type="text"
        placeholder="Name  *"
        className="w-full bg-transparent border border-white/60 px-6.25 py-5 text-[18px] outline-none placeholder:text-white/70"
      />

      <input
        type="email"
        placeholder="Email  *"
        className="w-full bg-transparent border border-white/60 px-6.25 py-5 text-[18px] outline-none placeholder:text-white/70"
      />

      <input
        type="tel"
        placeholder="Phone No.  *"
        className="w-full bg-transparent border border-white/60 px-6.25 py-5 text-[18px] outline-none placeholder:text-white/70"
      />

      <textarea
        placeholder="Message"
        rows={4.5}
        className="w-full bg-transparent border border-white/60 px-6.25 py-5 text-[18px] outline-none resize-none placeholder:text-white/70"
      />

      <button
        type="submit"
        className="w-full bg-white text-[#1b3470] px-6.25 py-1 text-[22px] font-medium"
      >
        Submit
      </button>
    </form>

  </div>
</section>


      {/* ===== FAQ SECTION ===== */}
      <section className="ml-20.75 mr-17.75 mt-20 mb-14.25 bg-white">
        <div className="max-w-7xl  grid grid-cols-1 md:grid-cols-2 gap-30.5 ">

          {/* LEFT */}
          <div>
            <p className="text-sm mb-2.25">→ FAQs</p>

            <h2 className={`text-[55px] leading-17.75 mb-9.75 font-medium ${ibmPlexSerif.className}`}>
              Clarifying our expertise and client process.
            </h2>

            <p className=" text-[16px] text-[#676767]  leading-5.75 max-w-md">
              We address the common concerns of founders and investors upfront.
              Our commitment to transparent communication ensures you have the
              necessary information to proceed with confidence.
            </p>
          </div>

          {/* RIGHT */}
          <div className="mt-8.25">
            {faqs.map((item, index) => (
              <div key={index} className="group border-b border-[#F2C94C]">
                <div className="flex items-center justify-between pt-5.75 pb-3 cursor-pointer">
                  <span className="text-[#193170]  text-[22px] font-medium">
                    {item.q}
                  </span>

                  <span className="text-[24px] text-[#193170]   transition-transform duration-300 group-hover:rotate-45  ">
                    +
                  </span>
                </div>

                <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                  <p className="pb-5 text-sm text-gray-600">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
      onMouseEnter={() => setHasRevealed(true)}
      className="relative bg-[#0b1633] py-19 text-center overflow-hidden"
    >
      {/* LEFT BAR IMAGE */}
      <Image
        src="/Images/leftbar.png"
        alt="Decorative left bar"
        width={434}
        height={434}
        className={`absolute bottom-0 left-0 pointer-events-none   transform
          ${
            hasRevealed
              ? "translate-x-0 translate-y-0"
              : "-translate-x-full translate-y-full"
          }
          transition-transform duration-1500 ease-out
        `}
      />

      {/* RIGHT BAR IMAGE */}
      <Image
        src="/Images/rightbar.png"
        alt="Decorative right bar"
        width={434}
        height={434}
        className={` absolute bottom-0 right-0 pointer-events-none  transform
          ${
            hasRevealed
              ? "translate-x-0 translate-y-0"
              : "translate-x-full translate-y-full"
          }
          transition-transform duration-1500 ease-out delay-150
        `}
      />

      {/* CONTENT */}
      <h2
        className={`relative z-10 text-[55px] px-75.5 leading-17.75 text-white mb-8 ${ibmPlexSerif.className}`}
      >
        Start resolving your most
        complex queries today
      </h2>

      <button className="relative z-10 text-[22px] w-63.5 h-15.75 bg-white text-[#1b3470] px-2.5 py-0 ">
        Get in touch
      </button>
    </section>


    {/* ===== FOOTER ===== */}
<footer className="bg-white mt-13  ">

  {/* ===== MAIN FOOTER (HOVER AREA) ===== */}
  <div className="relative overflow-hidden group  ">

    {/* TAKJAS WATERMARK IMAGE */}
   <Image
  src="/Images/takjas.png"
  alt="Takjas watermark"
  width={900}
  height={400}
  className=" absolute right-0 bottom-65 z-0 opacity-30 pointer-events-none select-none transition-all duration-1200 ease-out  group-hover:bottom-0"
/>



    {/* FOOTER CONTENT */}
    <div className="relative z-10 ml-22 mr-18.75">
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-25.5 ">

          {/* ===== BRAND ===== */}
          <div className="flex flex-col  mb-15.25">

            <div
              className={`w-12.75 h-12.75 bg-[#1b3470] flex items-center justify-center text-white mb-2.25 font-bold text-2xl ${ibmPlexSerif.className}`}
            >
              T
            </div>

            <p className={`text-[11px] text-[#193170] font-medium mb-22.75 ${ibmPlexSerif.className} `}>
              Legal Certainty.Business Clarity.
            </p>

            <div className="flex flex-col gap-2 ">
              <div className="w-8.75 h-8.75 p-1.25 mb-1.25  bg-[#F6F6F6] rounded-sm">
                <MapPin size={24} className="text-[#1b3470]" />
              </div>

              <p className=" text-[#626262] text-[15px] leading-5.5  mb-8.75">
                Fehrbelliner Str. 23,
                
                10119 Berlin, Germany
              </p>
            </div>

            <div className="flex  gap-4">
              <a className="w-8.75 h-8.75 p-1.25 flex items-center justify-center border border-gray-200 rounded-sm bg-[#F6F6F6] text-[#1b3470]">
                <LinkedinIcon size={18} />
              </a>
              <a className="w-8.75 h-8.75 p-1.25 flex items-center justify-center border border-gray-200 rounded-sm bg-[#F6F6F6] text-[#1b3470]">
                <Phone size={18} />
              </a>
              <a className="w-8.75 h-8.75 p-1.25 flex items-center justify-center border border-gray-200 rounded-sm bg-[#F6F6F6] text-[#1b3470]">
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* ===== LINKS ===== */}
          <FooterColumn
            title="Links"
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/aboutUs" },
              { label: "Services", href: "/services" },
              { label: "Career", href: "/career" },
              { label: "Legal Notice\n (Imprint)", href: "/imprint" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ]}
          />

          {/* ===== SERVICES ===== */}
          <div className="">
            <FooterColumn
              title="Services"
              items={[
                { label: "Compliance & Risk Management", href: "/services/compliance-risk-management" },
                { label: "Corporate, M&A, Venture Capital", href: "/services/corporate-ma-venture-capital" },
                { label: "Real Estate Law", href: "/services/real-estate-law" },
                { label: "Employment & Incentives", href: "/services/employment-incentives" },
                { label: "Dispute Resolution", href: "/services/dispute-resolution" },
                { label: "Finance & Restructuring", href: "/services/finance-restructuring" },
              ]}
            />
          </div>

          {/* ===== NEWSLETTER ===== */}
          <div className="">
            <h4 className={`font-semibold  relative mb-3.75 ${ibmPlexSerif.className}`}>
              Subscribe for Newsletter
             
            </h4>

            <div className="flex flex-wrap">
              <input
                className="w-52 h-14 pl-4 pr-10 py-4.5 border border-gray-200 text-[14px] bg-[#F6F6F6]"
                placeholder="Your email"
              />
              <button className="bg-[#1b3470] text-white px-6 w-32 h-14 text-sm">
                Send
              </button>
            </div>

            <p className="text-[14px] leading-0.2 text-[#8D8D8D] mt-4">
              No spam. Only releases, updates and discounts
            </p>
          </div>

        </div>
      </section>
    </div>
  </div>

  {/* ===== COPYRIGHT (SEPARATE) ===== */}
  <div className="bg-[#1b3470] text-white text-center py-4.5 text-medium text-[14px]">
    © 2025 Takjas, All rights reserved.
  </div>

</footer>

    </div>
  );
}

