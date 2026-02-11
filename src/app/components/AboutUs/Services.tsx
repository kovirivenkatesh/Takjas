'use client'

import { ibmPlexSerif } from "@/app/fonts";
import { useEffect, useRef, useState } from "react";

export default function MissionVisionSection() {
  const [hasEntered, setHasEntered] = useState(false);
  const [stripTop, setStripTop] = useState(20);
  const containerRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<"mission" | "vision">("mission");
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileMissionRef = useRef<HTMLDivElement>(null);
  const mobileVisionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasEntered || !missionRef.current || !visionRef.current || !containerRef.current) return;

      const y = e.clientY;
      const containerTop = containerRef.current.getBoundingClientRect().top;

      const missionTop = missionRef.current.getBoundingClientRect().top - containerTop;
      const visionTop = visionRef.current.getBoundingClientRect().top - containerTop;

      if (y < visionRef.current.getBoundingClientRect().top) {
        setActive("mission");
        setStripTop(missionTop);
      } else {
        setActive("vision");
        setStripTop(visionTop);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hasEntered]);

  useEffect(() => {
    if (!containerRef.current || !missionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const missionRect = missionRef.current!.getBoundingClientRect();
          const containerRect = containerRef.current!.getBoundingClientRect();

          setStripTop(missionRect.top - containerRect.top);
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>

      {/* ================= DESKTOP VIEW ================= */}

      <section className="hidden sm:block bg-[#F5F5F5] mt-16 pl-22.5">
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-10 ">

          {/* LEFT STICKY CARD */}
          <div className="relative">
            <div className="sticky top-16 ">
              <div className="bg-[#F5F5F5]">

                {/* IMAGE */}
                <img
                  src="/Images/aboutus.png"
                  alt="Team"
                  className="w-173 h-123 object-cover mb-3.5"
                />

                {/* QUOTE BOX */}
                <div className="border border-[#193170] bg-[#E4ECFF] pt-4.75 pb-4.5 pl-5 pr-6.5 mb-2 ">
                  <p className={`text-[20px] text-[#193170] leading-6  font-medium mb-2 ${ibmPlexSerif.className}
            `}>
                    “Our expertise eliminates friction and secures the<br /> transaction.”
                  </p>
                  <span className="block text-[12px] text-gray-500 leading-6">
                    — Philip S. Taube, Co-Founder, Partner, Managing Director
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT BLUE CONTENT */}
          <div
            ref={containerRef}
            className="relative bg-[#193170] px-16 py-24"
          >

            {/* BLUE STRIP */}
            <div
              className={`
    absolute -left-2 w-2 bg-[#0b2e7a]
    transition-all duration-1500 ease-out
    ${hasEntered ? "opacity-100" : "opacity-0"}
  `}
              style={{
                height: "257px",
                top: stripTop,

              }}
            />


            {/* MISSION */}
            <div ref={missionRef} className="pt-27.75 pl-9.25 pr-22">
              <p className="text-[20px] tracking-wide leading-6.25 mb-6.5 text-[#F5F5F5]">
                → Our Mission
              </p>

              <p
                className={`
    relative text-[32px]  mb-71.25
    ${ibmPlexSerif.className}

    text-transparent
    bg-clip-text
    transition-[background-position] duration-1500 ease-out

    ${active === "mission"
                    ? "bg-[linear-gradient(90deg,white_0%,white_50%,#B2B2B2_50%,#B2B2B2_100%)] bg-size-[200%_100%] bg-left"
                    : "bg-[linear-gradient(90deg,white_0%,white_50%,#B2B2B2_50%,#B2B2B2_100%)] bg-size-[200%_100%] bg-right"
                  }
  `}
              >

                A business law firm with a dedicated focus on assisting founders,
                start-ups and scale-ups, investors and executives.
              </p>
            </div>

            {/* VISION */}
            <div ref={visionRef} className="pl-9.25 pr-22">
              <p className="text-[20px] tracking-wide leading-6.25 mb-6.5 text-[#F5F5F5]">
                → Our Vision
              </p>

              <p
                className={`
    relative  text-[32px]  leading-relaxed max-w-md
    ${ibmPlexSerif.className}

    text-transparent
    bg-clip-text
    transition-[background-position] duration-1500 ease-out

    ${active === "vision"
                    ? "bg-[linear-gradient(90deg,white_0%,white_50%,#B2B2B2_50%,#B2B2B2_100%)] bg-size-[200%_100%] bg-left"
                    : "bg-[linear-gradient(90deg,white_0%,white_50%,#B2B2B2_50%,#B2B2B2_100%)] bg-size-[200%_100%] bg-right"
                  }
  `}
              >
                We aim to set the standard for business-focused legal counsel in the
                European digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOBILE VIEW ================= */}
      <section className="block sm:hidden bg-[#F5F5F5] mt-12">
        <div className="flex flex-col">

          {/* IMAGE */}
          <div className="px-6">
            <img
              src="/Images/aboutus.png"
              alt="Team"
              className="w-full h-64 object-cover rounded-md mb-6"
            />

            {/* QUOTE BOX */}
            <div className="border border-[#193170] bg-[#E4ECFF] p-5 mb-10">
              <p className={`text-base text-[#193170] leading-6 font-medium mb-2 ${ibmPlexSerif.className}`}>
                “Our expertise eliminates friction and secures the transaction.”
              </p>
              <span className="block text-xs text-gray-500">
                — Philip S. Taube, Co-Founder, Partner, Managing Director
              </span>
            </div>
          </div>

          {/* BLUE CONTENT */}
          <div
            ref={mobileContainerRef}
            className="relative bg-[#193170] px-6 py-16"
          >
            {/* MOBILE STRIP (static optional) */}
            <div className="absolute left-0 top-10 w-1 h-24 bg-[#0b2e7a]" />

            {/* MISSION */}
            <div className="mb-12">
              <p className="text-base mb-4 text-[#F5F5F5]">
                → Our Mission
              </p>

              <p className={`text-xl leading-relaxed text-white ${ibmPlexSerif.className}`}>
                A business law firm with a dedicated focus on assisting founders,
                start-ups and scale-ups, investors and executives.
              </p>
            </div>

            {/* VISION */}
            <div>
              <p className="text-base mb-4 text-[#F5F5F5]">
                → Our Vision
              </p>

              <p className={`text-xl leading-relaxed text-white ${ibmPlexSerif.className}`}>
                We aim to set the standard for business-focused legal counsel in the
                European digital economy.
              </p>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
