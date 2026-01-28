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
import { Phone, Mail, MapPin } from "lucide-react";
import { ibmPlexSerif } from "@/app/fonts";




/* ================= FOOTER COLUMN ================= */
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-6 relative">
        {title}
        <span className="absolute -top-3 left-0 w-6 h-0.75 bg-[#1b3470]" />
      </h4>

      <ul className="space-y-3 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
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
<section className="w-full mt-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start">

    {/* LEFT — WHITE */}
    <div className="bg-[#F5F5F5] pt-20 px-10 flex flex-col justify-between">
      <div>
        <p className="text-sm mb-6 text-gray-600">→ Contact Us</p>

        <h2
          className={`text-5xl leading-tight mb-6 text-[#2C2C2C] ${ibmPlexSerif.className}`}
        >
          Schedule Your
          <br />
          Initial Consultation
        </h2>

        <p className="text-sm text-gray-600 max-w-sm">
          Contact us today to explore your legal requirements and uncover how we can support you in overcoming your challenges.
        </p>
      </div>

      <div className="mb-16 space-y-3 text-sm text-[#1b3470]">
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
          <span>
            Fehrbelliner Str. 23, 10119 Berlin, Germany
          </span>
        </div>
      </div>
    </div>

    {/* RIGHT — BLUE */}
    <div className="bg-[#1b3470] pt-16 px-10">
      <form className="flex flex-col gap-6 max-w-md mx-auto">

        <input
          type="text"
          placeholder="Name *"
          className="w-full bg-transparent border border-white/60 px-5 py-4 text-sm text-white outline-none placeholder:text-white/70"
        />

        <input
          type="email"
          placeholder="Email *"
          className="w-full bg-transparent border border-white/60 px-5 py-2 text-sm text-white outline-none placeholder:text-white/70"
        />

        <input
          type="tel"
          placeholder="Phone No. *"
          className="w-full bg-transparent border border-white/60 px-5 py-2 text-sm text-white outline-none placeholder:text-white/70"
        />

        <textarea
          placeholder="Message"
          rows={5}
          className="w-full bg-transparent border border-white/60 px-5 py-2 text-sm text-white outline-none resize-none placeholder:text-white/70"
        />

        <button
          type="submit"
          className="w-full bg-white text-[#1b3470] py-2 text-sm font-medium mb-8"
        >
          Submit
        </button>
      </form>
    </div>

  </div>
</section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-white -mt-6">
          <section className="py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-10">

              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#1b3470] flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>

                <p className="text-sm text-gray-600">
                  Legal Certainty.
                  <br />
                  Business Clarity.
                </p>

                <p className="text-sm text-gray-600">
                  Fehrbelliner Str. 23,
                  <br />
                  10119 Berlin, Germany
                </p>
              </div>

              <FooterColumn
                title="Links"
                items={[
                  "Home",
                  "About Us",
                  "Services",
                  "Career",
                  "Legal Notice (Imprint)",
                  "Privacy Policy",
                ]}
              />

              <FooterColumn
                title="Services"
                items={[
                  "Compliance & Risk Management",
                  "Corporate, M&A, Venture Capital",
                  "Real Estate Law",
                  "Employment & Incentives",
                  "Dispute Resolution",
                  "Finance & Restructuring",
                ]}
              />

              <div>
                <h4 className="font-semibold mb-6 relative">
                  Subscribe for Newsletter
                  <span className="absolute -top-3 left-0 w-6 h-0.75 bg-[#1b3470]" />
                </h4>

                <div className="flex mb-4">
                  <input
                    className="w-full px-4 py-3 border border-gray-200 text-sm"
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

          <div className="bg-[#1b3470] text-white text-center py-4 text-sm">
            © 2025 Takjas, All rights reserved.
          </div>
        </footer>

      </motion.div>
    
    </div>
  );
}
