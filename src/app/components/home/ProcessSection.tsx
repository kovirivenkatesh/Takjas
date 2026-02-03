'use client'

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ibmPlexSerif } from '@/app/fonts'

const steps = [
  {
    id: "01",
    title: "Consultation",
    desc: "Providing expert legal advice tailored to your specific needs",
  },
  {
    id: "02",
    title: "Strategy & Planning",
    desc: "Creating a tailored legal strategy to meet your goals.",
  },
  {
    id: "03",
    title: "Execution",
    desc: "Executing the legal strategy for resolution of your legal matters. ",
  },
];

const DealExperience = () => {
  const x = useMotionValue(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);



  const [barTop, setBarTop] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY) {
        // scrolling DOWN → left to right
        animate(x, 310, { duration: 1, ease: "easeOut" });
      } else {
        // scrolling UP → right to left
        animate(x, 0, { duration: 1, ease: "easeOut" });
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, x]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries.filter(
          (entry) => entry.intersectionRatio >= 0.5
        );

        if (!visibleCards.length) return;

        const mostVisible = visibleCards.reduce((a, b) =>
          b.intersectionRatio > a.intersectionRatio ? b : a
        );

        const target = mostVisible.target as HTMLElement;

        const index = Number(target.dataset.index);
        setActiveIndex(index);
        setBarTop(target.offsetTop);
      },
      {
        threshold: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <>

      {/* ================= DESKTOP VIEW ================= */}

      <div className="hidden sm:block mt-33.75 mx-20.75">
        <section className="w-full">
          <section className="space-y-12  px-2">
                       <p className="text-[16px] mb-2">→ Our Process</p>
                       <h1 className={`text-[55px] font-medium leading-17.75 ${ibmPlexSerif.className} `}>
                      A precise, business-first methodology designed for efficiency and legal clarity.
                         </h1>
               </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-18.75">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
              relative border border-[#193170]  pt-10 pb-10 px-4
              ${index === 0 ? "border-b-0" : ""}
              ${index === 1 ? "border-t-0" : ""}
              ${index === 2 ? "border-b-0" : ""}
            `}
              >
                {/* TOP BAR (card 1 & 3) */}
                {index !== 1 && (
                  <motion.span
                    style={{ x }}
                    className="absolute top-0 left-0 h-2.5 w-14 bg-[#193170]"
                  />
                )}

                {/* BOTTOM BAR (card 2) */}
                {index === 1 && (
                  <motion.span
                    style={{ x }}
                    className="absolute bottom-0 left-0 h-2.5 w-14 bg-[#193170]"
                  />
                )}

                {/* Number box */}
                <div className="w-22.5 h-22.5 border border-[#193170] flex items-center justify-center mb-10 mt-8.75">
                  <span className="text-[#193170] text-[32px] font-medium">
                    {step.id}
                  </span>
                </div>

                <h2 className={`text-[#313131] text-[32px] font-semibold mb-10.25 ${ibmPlexSerif.className} `}>
                  {step.title}
                </h2>

                <p className="text-[#606060]  text-[16px] leading-relaxed mb-18.75">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>


      {/* ================= MOBILE VIEW ================= */}

      <div className="block sm:hidden">
        <section className="w-full px-8">
          <h1 className="text-white text-[35px] font-semibold mb-12">
            How We Build Your ERP
          </h1>

          <div className="relative md:hidden px-6">

            {/* STATIC VERTICAL LINE */}
            <div
              className="
    absolute
    left-2
    top-0
    bottom-0
    w-0.5
    bg-[#8A38F5]/30
    rounded-full
  "
            />

            {/* 🔵 SINGLE MOVING BLUE LINE */}
            <motion.div
              className="absolute left-2 w-1 bg-[#8A38F5] rounded-full"
              animate={{
                top: barTop,
                height: 56,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            />


            {/* CARDS */}
            <div className="flex flex-col gap-20">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}

                  className={`
          relative pl-12 pr-6 py-10
          transition-all duration-500
          ${activeIndex === index
                      ? "bg-[#2A173E] border border-[#8A38F575] rounded-md"
                      : "bg-transparent border border-transparent"
                    }
        `}
                >
                  {/* Number box */}
                  <div className="w-14 h-14 border border-[#FF94D2] flex items-center justify-center mb-4 -mt-4 -ml-8">
                    <span className="text-[#FF94D2] text-xl font-medium">
                      {step.id}
                    </span>
                  </div>

                  <h2 className="text-[#313131] text-2xl font-semibold mb-4 -ml-8">
                    {step.title}
                  </h2>

                  <p className="text-[#606060] text-md leading-normal -ml-8  whitespace-pre-line">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </>

  );
};

export default DealExperience;
