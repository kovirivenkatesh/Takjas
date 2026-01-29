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
    <section className="bg-white py-32 -mt-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ml-10">

        {/* LEFT STICKY CARD */}
        <div className="relative">
          <div className="sticky top-32">
            <div className="bg-[white]">

              {/* IMAGE */}
              <img
                src="/Images/aboutus.png"
                alt="Team"
                className="w-full object-cover"
              />

              {/* QUOTE BOX */}
              <div className="border border-[#193170] bg-[#E4ECFF] px-5 py-4 mt-3">
                <p className={`text-lg text-[#193170] leading-snug  font-semibold ${ibmPlexSerif.className}
            `}>
                  “Our expertise eliminates friction and secures the<br/> transaction.”
                </p>
                <span className="block text-xs text-gray-500 mt-2">
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
          <div ref={missionRef} className="mb-40 pl-6">
            <p className="text-sm tracking-wide mb-6 text-[#F5F5F5]">
              → Our Mission
            </p>

            <p
  className={`
    relative text-2xl leading-relaxed max-w-md
    ${ibmPlexSerif.className}

    text-transparent
    bg-clip-text
    transition-[background-position] duration-1500 ease-out

    ${
      active === "mission"
        ? "bg-[linear-gradient(90deg,white_0%,white_50%,#f472b6_50%,#f472b6_100%)] bg-size-[200%_100%] bg-left"
        : "bg-[linear-gradient(90deg,white_0%,white_50%,#f472b6_50%,#f472b6_100%)] bg-size-[200%_100%] bg-right"
    }
  `}
>
        
              A business law firm with a dedicated focus on assisting founders,
              start-ups and scale-ups, investors and executives.
            </p>
          </div>

          {/* VISION */}
          <div ref={visionRef} className="pl-6">
            <p className="text-sm tracking-wide mb-6 text-[#F5F5F5]">
              → Our Vision
            </p>

         <p
  className={`
    relative text-2xl leading-relaxed max-w-md
    ${ibmPlexSerif.className}

    text-transparent
    bg-clip-text
    transition-[background-position] duration-1500 ease-out

    ${
      active === "vision"
        ? "bg-[linear-gradient(90deg,white_0%,white_50%,#f472b6_50%,#f472b6_100%)] bg-size-[200%_100%] bg-left"
        : "bg-[linear-gradient(90deg,white_0%,white_50%,#f472b6_50%,#f472b6_100%)] bg-size-[200%_100%] bg-right"
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
  );
}
