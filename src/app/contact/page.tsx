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
const hasMounted = useRef(false);

// SCROLL
const { scrollYProgress } = useScroll({
  target: imageRef,
  offset: ["start end", "end start"],
});

// BASE MOTION VALUE (0 → 1)
const interaction = useMotionValue(0);

// MAP TO PIXELS (logo movement)
const logoY = useTransform(interaction, [0, 1], [0, 300], {
  clamp: true,
});


// SYNC SCROLL → interaction
useEffect(() => {
  interaction.set(0);

  const unsubscribe = scrollYProgress.on("change", (v) => {
    if (!hasMounted.current) return; // ⛔ ignore initial scroll
    interaction.set(v);
  });

  hasMounted.current = true;

  return unsubscribe;
}, [scrollYProgress, interaction]);




  return (
    // 🔥 PAGE-LEVEL HOVER (ONCE ONLY)
    <div
      className="relative  "
      onMouseEnter={() => {
        if (!revealed) setRevealed(true);
      }}
    >

    
 {/* ================= IMAGE ================= */}
<section className=" bg-[#F5F5F5] mb-2.5 ">
  
   <div
  ref={imageRef}
  className="relative h-113 w-316.25"
  onMouseEnter={() => animate(interaction, 1, { duration: 1.2 })}
  onMouseLeave={() => animate(interaction, 0, { duration: 1.2 })}
>
  {/* PADDING WRAPPER */}
  <div className="relative h-full w-full px-19.25">
    <div className="relative h-full w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Images/contactUs.png"
        alt="clients"
        fill
          className="object-cover object-top"
        priority
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  </div>

  {/* TAKJAS LOGO IMAGE */}
 <motion.div
  initial={{ y: 0 }}
  style={{ y: logoY }}
  className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20 pointer-events-none"
>
  <Image
    src="/Images/takjas.png"
    alt="Takjas Logo"
    width={500}
    height={150}
    priority
    className="object-contain"
  />
</motion.div>

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

        {/* ================= FOOTER ================= */}
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
      </motion.div>
    
    </div>
  );
}
