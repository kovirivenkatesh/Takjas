"use client";

import { useState ,useRef,useEffect} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";

import Image from "next/image";
import {  LinkedinIcon,Phone, Mail, MapPin } from "lucide-react";
import { ibmPlexSerif } from "@/app/fonts";




/* ================= FOOTER COLUMN ================= */
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className={`font-semibold mb-10 relative ${ibmPlexSerif.className}`}>
        {title}
        <span className="absolute -top-3 left-0 w-6 h-0.75 bg-[#1b3470]" />
      </h4>

      <ul className="space-y-6 text-sm text-gray-600 whitespace-pre-line">
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

/* ================= PAGE ================= */
export default function Page() {
  const [revealed, setRevealed] = useState(false);
const imageRef = useRef<HTMLDivElement | null>(null);

// SCROLL
const { scrollYProgress } = useScroll({
  target: imageRef,
  offset: ["start end", "end start"],
});

// BASE MOTION VALUE (0 → 1)
const interaction = useMotionValue(0);

// MAP TO PIXELS (logo movement)
const logoY = useTransform(interaction, [0, 1], [0, 500]);

// SYNC SCROLL → interaction
useEffect(() => {
  return scrollYProgress.on("change", (v) => {
    interaction.set(v);
  });
}, [scrollYProgress, interaction]);


  return (
    // 🔥 PAGE-LEVEL HOVER (ONCE ONLY)
    <div
      className="relative max-w-full "
      onMouseEnter={() => {
        if (!revealed) setRevealed(true);
      }}
    >

    
 {/* ================= IMAGE ================= */}
<section className="w-full bg-[#F5F5F5] mt-16">
  <div className="px-16">
    <div
      ref={imageRef}
      className="relative h-[62vh] w-full overflow-hidden"
      onMouseEnter={() => animate(interaction, 1, { duration: 1.2 })}
      onMouseLeave={() => animate(interaction, 0, { duration: 1.2 })}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Images/clients.png"
        alt="clients"
        fill
        priority
        
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* TAKJAS LOGO IMAGE */}
      <motion.div
        style={{ y: logoY }}
        className="absolute left-1/2 top-72 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        <Image
          src="/Images/takjas.png"
          alt="Takjas Logo"
          width={420}
          height={140}
          priority
        />
      </motion.div>
    </div>
  </div>
</section>







      {/* ================= LIFTING CONTENT ================= */}
      <motion.div
  initial={{ marginTop: "0vh" }}
  animate={revealed ? { marginTop: "-70vh" } : { marginTop: "0vh" }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="relative z-20"
>


        {/* ================= CONTACT ================= */}
  <section className="relative w-full bg-[#1b3470] text-white py-24 overflow-hidden group">
  
  {/* ===== BLUE CURTAIN (RIGHT HALF) ===== */}
  <div
    className="absolute top-0 right-0 w-1/2 h-full bg-[#324981]/90 transform -translate-y-full transition-transform duration-2500 ease-in-out group-hover:translate-y-0 pointer-events-none"

  />

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 px-10">

    {/* ===== LEFT CONTENT ===== */}
    <div className="flex flex-col justify-between">
      <div>
        <p className="text-sm mb-6">→ Contact Us</p>

        <h2 className={`text-5xl leading-tight mb-6 ${ibmPlexSerif.className}`}>
          Schedule Your
          <br />
          Initial Consultation
        </h2>

        <p className="text-sm text-white/80 max-w-sm">
          Let's discuss your transaction or complex legal
          <br />
          challenge.
        </p>
      </div>

      <div className="mt-16 space-y-6 text-sm">
        <div className="flex items-center gap-4">
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
    <form className="space-y-6 relative z-10">
      <input
        type="text"
        placeholder="Name  *"
        className="w-full bg-transparent border border-white/60 px-5 py-4 text-sm outline-none placeholder:text-white/70"
      />

      <input
        type="email"
        placeholder="Email  *"
        className="w-full bg-transparent border border-white/60 px-5 py-4 text-sm outline-none placeholder:text-white/70"
      />

      <input
        type="tel"
        placeholder="Phone No.  *"
        className="w-full bg-transparent border border-white/60 px-5 py-4 text-sm outline-none placeholder:text-white/70"
      />

      <textarea
        placeholder="Message"
        rows={5}
        className="w-full bg-transparent border border-white/60 px-5 py-4 text-sm outline-none resize-none placeholder:text-white/70"
      />

      <button
        type="submit"
        className="w-full bg-white text-[#1b3470] py-4 text-sm font-medium"
      >
        Submit
      </button>
    </form>

  </div>
</section>

        {/* ================= FOOTER ================= */}
       <footer className="bg-white">

  {/* ===== MAIN FOOTER (HOVER AREA) ===== */}
  <div className="relative overflow-hidden group  min-h-105">

    {/* TAKJAS WATERMARK IMAGE */}
   <Image
  src="/Images/takjas.png"
  alt="Takjas watermark"
  width={900}
  height={400}
  className=" absolute right-0 bottom-65 z-0 opacity-30 pointer-events-none select-none transition-all duration-1200 ease-out  group-hover:bottom-0"
/>



    {/* FOOTER CONTENT */}
    <div className="relative z-10">
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-10">

          {/* ===== BRAND ===== */}
          <div className="flex flex-col items-center text-center space-y-6 -ml-16">

            <div
              className={`w-12 h-12 bg-[#1b3470] flex items-center justify-center text-white font-bold text-2xl ${ibmPlexSerif.className}`}
            >
              T
            </div>

            <p className={`text-xs text-[#193170] font-semibold ${ibmPlexSerif.className} ml-28 -mt-4`}>
              Legal Certainty.Business Clarity.
            </p>

            <div className="flex flex-col items-center gap-2 text-gray-600 text-sm mt-16">
              <div className="p-2 bg-[#F6F6F6] rounded-sm">
                <MapPin size={18} className="text-[#1b3470]" />
              </div>

              <p className="ml-16 text-[#626262]">
                Fehrbelliner Str. 23,
                <br />
                10119 Berlin, Germany
              </p>
            </div>

            <div className="flex items-center gap-4 ml-16 mt-5">
              <a className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm bg-[#F6F6F6] text-[#1b3470]">
                <LinkedinIcon size={18} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm bg-[#F6F6F6] text-[#1b3470]">
                <Phone size={18} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm bg-[#F6F6F6] text-[#1b3470]">
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
          <div className="-ml-20">
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
          <div className="-ml-16">
            <h4 className={`font-semibold mb-6 relative ${ibmPlexSerif.className}`}>
              Subscribe for Newsletter
              <span className="absolute -top-3 left-0 w-6 h-0.75 bg-[#1b3470]" />
            </h4>

            <div className="flex mb-4">
              <input
                className="w-full px-4 py-3 border border-gray-200 text-sm bg-[#F6F6F6]"
                placeholder="Your email"
              />
              <button className="bg-[#1b3470] text-white px-6 text-sm">
                Send
              </button>
            </div>

            <p className="text-xs text-gray-500">
              No spam. Only releases, updates and discounts
            </p>
          </div>

        </div>
      </section>
    </div>
  </div>

  {/* ===== COPYRIGHT (SEPARATE) ===== */}
  <div className="bg-[#1b3470] text-white text-center py-4 text-sm">
    © 2025 Takjas, All rights reserved.
  </div>

</footer>
      </motion.div>
    
    </div>
  );
}
