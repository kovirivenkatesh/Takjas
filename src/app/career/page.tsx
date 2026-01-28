"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ibmPlexSerif } from "@/app/fonts";
import { Phone, Mail, MapPin } from "lucide-react";

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


export default function CareerHeroCurtain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [removeCurtain, setRemoveCurtain] = useState(false);

  // Scroll trigger (once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <>
    <section
      ref={sectionRef}
      onMouseEnter={() => {
        if (!revealed) setRevealed(true);
      }}
      className="relative w-full min-h-screen flex bg-white overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <div className="w-1/2 px-20 py-24 z-10">
        <p className="text-sm text-gray-400 mb-6">Home / Career</p>

        <h1 className={`text-4xl font-semibold text-[#1f2937] ${ibmPlexSerif.className}  leading-tight mb-6`}>
          Build Your Legal Future <br/>
          in the Digital Economy
        </h1>

        <p className="text-[#5E6784] max-w-xl mb-10 text-sm">
         Are you an A-player who thrives on challenges? We have projects that offer growth and fun in a dynamic environment. We value your journey and offer competitive compensation. Contact us to start a rewarding career!
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Send us your application!
        </h3>

        <p className="text-[#5E6784] mb-6 text-sm">
         If interested, reach out. We look forward to receiving your CV and supporting documents.
        </p>

        <a
  href="mailto:career@takjas.com"
  className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-6 py-3"
>
  <Mail size={18} />
  career@takjas.com
</a>
      </div>

      {/* RIGHT IMAGE + CURTAIN */}
      <div className="relative w-1/2 min-h-screen overflow-hidden">
        {/* IMAGE */}
        <motion.img
          src="/Images/aboutus.png"
          alt="Career"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />

        {/* CURTAIN */}
        {!removeCurtain && (
          <div className="absolute inset-0 flex z-20">
            {/* Panel 1 */}
            <motion.div
              className="w-1/3 bg-[#1e3a8a]"
              initial={{ y: 0 }}
              animate={revealed ? { y: "100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              onAnimationComplete={() => setRemoveCurtain(true)}
            />

            {/* Panel 2 */}
            <motion.div
              className="w-1/3 bg-[#1e3a8a]"
              initial={{ y: 0 }}
              animate={revealed ? { y: "-100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Panel 3 */}
            <motion.div
              className="w-1/3 bg-[#1e3a8a]"
              initial={{ y: 0 }}
              animate={revealed ? { y: "100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
        )}
      </div>
      
    </section>

    <div className="mt-20">
       {/* ===== CTA SECTION ===== */}
      <section className="bg-[#0b1633] py-24 text-center">
        <h2 className={`text-4xl md:text-5xl text-white mb-8 ${ibmPlexSerif.className}`}>
          Start resolving your most
          <br />
          complex queries today
        </h2>

        <button className="bg-white text-[#1b3470] px-10 py-4 font-medium">
          Get in touch
        </button>
      </section>

         <section className="w-full bg-[#1b3470] text-white py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 px-10">

          {/* ===== LEFT CONTENT ===== */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm mb-6">→ Contact Us</p>

              <h2
                className={`text-5xl leading-tight mb-6 ${ibmPlexSerif.className}`}
              >
                Schedule Your
                <br />
                Initial Consultation
              </h2>

              <p className="text-sm text-white/80 max-w-sm">
                Let's discuss your transaction or complex legal<br /> challenge.
              </p>
            </div>

            {/* CONTACT INFO */}
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
                <span>
                  Fehrbelliner Str. 23, 10119 Berlin, Germany
                </span>
              </div>
            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <form className="space-y-6">
            {/* INPUT */}
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

            {/* TEXTAREA */}
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-transparent border border-white/60 px-5 py-4 text-sm outline-none resize-none placeholder:text-white/70"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-white text-[#1b3470] py-4 text-sm font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

        {/* ===== FOOTER ===== */}
      <footer className="bg-white">
        <section className="py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-10">

            {/* BRAND */}
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

            {/* LINKS */}
            <FooterColumn title="Links" items={[
              "Home", "About Us", "Services", "Career",
              "Legal Notice (Imprint)", "Privacy Policy"
            ]} />

            {/* SERVICES */}
            <FooterColumn title="Services" items={[
              "Compliance & Risk Management",
              "Corporate, M&A, Venture Capital",
              "Real Estate Law",
              "Employment & Incentives",
              "Dispute Resolution",
              "Finance & Restructuring"
            ]} />

            {/* NEWSLETTER */}
            <div>
              <h4 className="font-semibold mb-6 relative">
                Subscribe for Newsletter
                <span className="absolute -top-3 left-0 w-6 h-0.75 bg-[#1b3470]" />
              </h4>

              <div className="flex mb-4">
                <input className="w-full px-4 py-3 border border-gray-200 text-sm" placeholder="Your email" />
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
    </div>
    
    </>
  );
}
