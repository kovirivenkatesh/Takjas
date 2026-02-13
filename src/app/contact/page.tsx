"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";

import Image from "next/image";
import { LinkedinIcon, Phone, Mail, MapPin } from "lucide-react";
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
  const [mobileRevealed, setMobileRevealed] = useState(false);
  const desktopImageRef = useRef<HTMLDivElement | null>(null);
  const mobileImageRef = useRef<HTMLDivElement | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null)
  const [formInView, setFormInView] = useState(false)
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // SCROLL
  const { scrollYProgress } = useScroll(
    isDesktop
      ? {
        target: desktopImageRef,
        offset: ["start end", "end start"],
      }
      : {}
  );



  // BASE MOTION VALUE (0 → 1)
  const interaction = useMotionValue(0);

  // MAP TO PIXELS (logo movement)
  const logoY = useTransform(interaction, [0, 1], [0, 300], {
    clamp: true,
  });

  const isReady = useRef(false);
  useEffect(() => {
    interaction.set(0);

    // allow browser to paint FIRST
    requestAnimationFrame(() => {
      isReady.current = true;
    });
  }, []);

  useEffect(() => {
    setMobileRevealed(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // SYNC SCROLL → interaction
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (!isReady.current) return;   // 🔒 block early scroll
      interaction.set(v);
    });

    return unsubscribe;
  }, [scrollYProgress, interaction]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormInView(true)
        }
      },
      { threshold: 0.35 }
    )

    if (formRef.current) observer.observe(formRef.current)
    return () => observer.disconnect()
  }, [])



  useEffect(() => {
    interaction.set(0);           // ensure visible
  }, []);

  const [lift, setLift] = useState("-62.5vh");

  useEffect(() => {
    const updateLift = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      if (width < 640) {
        // 📱 Mobile
        setLift("-23dvh");
      } else if (height >= 1200) {
        setLift("-48vh");
      } else if (height >= 900) {
        setLift("-42vh");
      } else {
        setLift("-62.5vh");
      }
    };


    updateLift();
    window.addEventListener("resize", updateLift);
    return () => window.removeEventListener("resize", updateLift);
  }, []);

  return (
    // 🔥 PAGE-LEVEL HOVER (ONCE ONLY)
    <>

      {/* ================= DESKTOP VIEW ================= */}

      <div
        className="hidden sm:block relative bg-[#F5F5F5]   "
        onMouseEnter={() => {
          if (!revealed) setRevealed(true);
        }}
      >


        {/* ================= IMAGE ================= */}
        <section className=" bg-[#F5F5F5] mb-2.5 ">

          <div
            ref={desktopImageRef}
            className="relative h-113 w-full"
            onMouseEnter={() => animate(interaction, 1, { duration: 1.2 })}
            onMouseLeave={() => animate(interaction, 0, { duration: 1.2 })}
          >
            {/* PADDING WRAPPER */}
            <div className="relative h-full w-full px-19.25">
              <div className="relative h-full w-full overflow-hidden max-w-316.25 mx-auto">
                {/* BACKGROUND IMAGE */}
                <Image
                  src="/Images/contactUs.png"
                  alt="clients"
                  fill
                  sizes="(max-width: 640px) 100vw, 80vw"

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
          animate={revealed ? { marginTop: lift } : { marginTop: "0vh" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="relative z-20"
        >



          {/* ================= CONTACT ================= */}
          <section className="relative bg-[#1b3470] text-white  overflow-hidden group">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-[#F5F5F5] z-0" />
            {/* ===== BLUE CURTAIN (RIGHT HALF) ===== */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-[#324981]/90 transform -translate-y-full transition-transform duration-2500 ease-in-out group-hover:translate-y-0 pointer-events-none"

            />

            <div className=" mx-20.75 relative  grid grid-cols-1 md:grid-cols-2 gap-30.5 pt-19.5 pb-13">

              {/* ===== LEFT CONTENT ===== */}
              <div className="flex flex-col  justify-between">
                <div>
                  <p className="text-[16px] mb-2 text-[#000000]">→ Contact Us</p>

                  <h2 className={`text-[55px] text-[#2C2C2C]  font-medium leading-17.75 mb-6.5 ${ibmPlexSerif.className}`}>
                    Schedule Your

                    Initial Consultation
                  </h2>

                  <p className="text-[16px] text-[#5E6784] leading-6.25 ">
                    Contact us today to explore your legal requirements and uncover how we can support you in overcoming your challenges.
                  </p>
                </div>

                <div className="mt-18 space-y-7 text-[20px] mb-14.25 text-[#193170]">
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
                  className="group/button w-full bg-white text-[#1b3470] px-6.25 py-1 font-medium flex items-center justify-center gap-0 transition-all duration-300"
                >
                  {/* Arrow */}
                  <span
                    className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover/button:w-8"
                  >
                    →
                  </span>

                  {/* Text */}
                  <span
                    className="text-[22px] transition-all duration-300 group-hover/button:text-[18px]"
                  >
                    Submit
                  </span>
                </button>
              </form>

            </div>
          </section>

          {/* ================= FOOTER ================= */}
          <footer className="bg-[#FDFDFD] pt-13 relative overflow-hidden group/footer ">
            {/* ===== TOP BLUE STRIP ===== */}
            <div className="absolute top-0 left-0 w-full h-2 overflow-hidden">
              <div
                className="h-1.75 w-41.5 bg-[#1b3470] transform translate-x-0 transition-transform duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/footer:translate-x-[calc(100vw-8rem)]"

              />
            </div>

            {/* ===== MAIN FOOTER (HOVER AREA) ===== */}
            <div className="relative  group  ">

              {/* FOOTER CONTENT */}
              <div className="relative px-22  max-w-360 mx-auto ">
                <section className="">
                  <div className="grid grid-cols-1 md:grid-cols-4  ">

                    {/* ===== BRAND ===== */}
                    <div className="flex flex-col  mb-15.25 mr-28.75">

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
                    <div className="mr-25.5">
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
                      <h4 className={`font-bold text-[16px] mb-11 relative ${ibmPlexSerif.className}`}>
                        Subscribe for Newsletter
                        <span className="absolute -top-3 left-0 w-6 h-0.75 bg-[#1b3470]" />
                      </h4>


                      <div className="flex">
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

              {/* ===== DECORATIVE RIGHT IMAGE ===== */}
              <div
                className="absolute right-0 bottom-0 translate-y-20 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-15 pointer-events-none z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" viewBox="0 0 554 206" fill="none">
                  <path d="M510.522 84.748L530.988 91.443C546.618 96.0647 553.708 104.831 553.708 119.494C553.708 144.837 533.405 149.14 516.968 149.14C500.531 149.14 485.385 140.214 480.067 133.043V101.802H482.806C486.029 127.304 497.631 141.649 517.13 141.649C536.627 141.649 540.173 134.796 540.173 122.045C540.173 109.293 535.661 107.541 523.414 103.556L504.077 97.3398C490.058 93.0367 482.162 85.0666 482.162 71.5192C482.162 57.9709 492.474 44.7421 516.807 44.7421C541.139 44.7421 542.59 48.7266 550.324 55.4207L552.097 82.6756H549.357C543.557 61.4776 533.566 52.0741 517.291 52.0741C501.015 52.0741 495.698 58.9274 495.698 68.8097C495.698 78.691 500.21 81.5607 510.361 84.5888L510.522 84.748ZM455.46 92.4721V130.943C455.46 141.637 461.706 144.191 467.952 144.191V147.544H441.689V116.576H440.728C437.205 131.262 428.878 149.14 407.099 149.14C385.32 149.14 379.395 139.562 379.395 114.34C379.395 89.1188 380.036 102.688 381.157 96.4624L441.368 90.7153V85.6073C441.368 68.2079 436.725 52.0846 416.707 52.0846C396.69 52.0846 394.929 61.1839 394.929 70.1239C394.929 79.0639 396.21 77.9462 398.291 79.2232V80.1807L382.758 81.7772C381.797 79.3834 381.157 76.1904 381.157 72.8382C381.157 59.2698 391.406 44.743 417.668 44.743C443.931 44.743 455.141 72.2001 455.141 92.7915L455.46 92.4721ZM412.383 139.562C431.92 139.562 439.447 116.735 441.048 94.7066L395.57 102.049C394.448 106.519 394.288 110.988 394.288 115.299C394.288 130.782 399.412 139.722 412.383 139.722V139.562ZM347.166 27.4667L333.584 13.5741L347.166 0L360.749 13.5741L347.166 27.4667ZM354.517 46.6294V157.294L339.017 206H336.619L339.975 147.713V63.2372C339.975 52.5376 333.423 49.9827 327.191 49.9827V46.6294H354.517ZM273.37 94.0657L298.471 133.14C304.227 142.193 313.66 143.781 319.735 143.781V147.117H291.756L257.701 95.336L242.672 112.967V130.757C242.672 141.399 249.228 143.941 255.142 143.941V147.276H215.332V143.941C221.567 143.941 228.123 141.558 228.123 130.757V22.1116C228.123 11.4702 221.567 8.92857 215.332 8.92857V5.59252H242.672V101.372L278.965 59.4386C286.16 51.1796 276.727 50.0675 264.416 50.0675V46.7315H312.221V49.9083C304.546 49.9083 294.954 52.1323 287.759 60.8682L260.259 92.6361L273.209 94.224L273.37 94.0657ZM194.452 92.4711V130.944C194.452 141.638 200.696 144.192 206.942 144.192V147.545H180.679V116.577H179.719C176.196 131.263 167.868 149.141 146.09 149.141C124.311 149.141 118.386 139.563 118.386 114.341C118.386 89.1198 119.026 102.689 120.148 96.4633L180.36 90.7163V85.6083C180.36 68.2089 175.715 52.0856 155.698 52.0856C135.681 52.0856 133.919 61.1849 133.919 70.1239C133.919 79.0639 135.201 77.9462 137.282 79.2232V80.1807L121.749 81.7772C120.788 79.3834 120.148 76.1904 120.148 72.8382C120.148 59.2698 130.396 44.743 156.659 44.743C182.921 44.743 194.131 72.2001 194.131 92.7915L194.452 92.4711ZM151.375 139.562C170.911 139.562 178.438 116.735 180.039 94.7066L134.56 102.049C133.438 106.519 133.279 110.988 133.279 115.299C133.279 130.782 138.403 139.722 151.375 139.722V139.562ZM120.632 2.95648L121.589 10.939L123.979 34.4068L120.154 34.8855C119.038 24.987 115.692 14.2912 103.9 14.2912H69.7978V129.076C69.7978 140.891 77.766 143.445 85.5739 143.445V147.276H38.564V143.445C46.2127 143.445 54.3401 141.05 54.3401 129.076V14.2912H20.3978C8.60527 14.2912 4.94019 24.8278 3.82435 34.566L0 34.0873L2.70852 10.7788L3.66508 2.79626C7.48944 4.55203 12.5889 4.87152 19.9191 4.87152H104.219C111.549 4.87152 116.648 4.71225 120.473 2.79626L120.632 2.95648Z" fill="#193170" />
                </svg>
              </div>
            </div>



            {/* ===== COPYRIGHT (SEPARATE) ===== */}
            <div className="bg-[#1b3470] text-white relative z-20 text-center py-4.5 text-[14px]">
              <div>© 2025 Takjas, All rights reserved.</div>
              <div className="text-[14px]  mt-1 text-[#FFFFFF8A]">
                Powered By <span className="text-[#FFFFFF]">SoftwareGiant</span>
              </div>
            </div>

          </footer>

        </motion.div>

      </div>

      {/* ================= MOBILE VIEW ================= */}

      <div
        className="block sm:hidden relative bg-[#F5F5F5]   "

      >


        {/* ================= IMAGE ================= */}
        <section className="bg-[#F5F5F5] mb-2.5">
          <div
            ref={mobileImageRef}
            className="relative h-65  w-full"
          >
            {/* PADDING WRAPPER */}
            <div className="relative h-full w-full px-4 ">
              <div className="relative h-full w-full overflow-hidden max-w-316.25 mx-auto">

                {/* BACKGROUND IMAGE */}
                <Image
                  src="/Images/contactUs.png"
                  alt="clients"
                  sizes="(max-width: 640px) 100vw, 80vw"

                  fill
                  className="object-cover object-top mt-10"
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
                className="object-contain w-55 h-auto"
              />
            </motion.div>
          </div>
        </section>


        {/* ================= LIFTING CONTENT ================= */}
        <motion.div
          initial={{ marginTop: "0vh" }}
          animate={mobileRevealed ? { marginTop: lift } : { marginTop: "0vh" }}

          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="relative z-20"
        >



          {/* ================= CONTACT ================= */}
          <section className="relative bg-[#1b3470] text-[#F5F5F5] overflow-hidden group/section">

            {/* ===== BLUE CURTAIN ===== */}
            <div
              className={`absolute top-0 right-0 w-full sm:w-1/2 h-full bg-[#324981]/90 transform -translate-y-full transition-transform duration-2500 ease-in-out pointer-events-none group-hover/section:translate-y-0 ${formInView ? "translate-y-0" : ""}`}

            />

            <div className="relative z-10 mx-6 sm:mx-20.75 grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-30.5 pt-16 sm:pt-19.5 pb-14 sm:pb-13">


              {/* ===== LEFT CONTENT ===== */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[14px] sm:text-[16px] mb-2">→ Contact Us</p>

                  <h2
                    className={`text-[32px] sm:text-[55px] font-medium leading-tight sm:leading-17.75 mb-6.5 ${ibmPlexSerif.className}`}

                  >
                    Schedule Your <br className="sm:hidden" />
                    Initial Consultation
                  </h2>

                  <p className="text-[14px] sm:text-[16px] text-white/80 leading-6">
                    Let's discuss your transaction or complex legal challenge.
                  </p>
                </div>

                <div className="mt-10 sm:mt-18 space-y-6 sm:space-y-7 text-[16px] sm:text-[20px]">
                  <div className="flex items-center gap-4 sm:gap-7">
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
              <form
                ref={formRef}
                className="space-y-6 sm:space-y-8 relative z-10"
              >
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full bg-transparent border border-white/60 px-5 sm:px-6.25 py-4 sm:py-5 text-[16px] sm:text-[18px] outline-none placeholder:text-white/70"
                />

                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full bg-transparent border border-white/60 px-5 sm:px-6.25 py-4 sm:py-5 text-[16px] sm:text-[18px] outline-none placeholder:text-white/70"
                />

                <input
                  type="tel"
                  placeholder="Phone No. *"
                  className="w-full bg-transparent border border-white/60 px-5 sm:px-6.25 py-4 sm:py-5 text-[16px] sm:text-[18px] outline-none placeholder:text-white/70"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border border-white/60 px-5 sm:px-6.25 py-4 sm:py-5 text-[16px] sm:text-[18px] outline-none resize-none placeholder:text-white/70"
                />

                <button
                  type="submit"
                  className="group/button w-full bg-white text-[#1b3470] py-3 font-medium flex items-center justify-center gap-0 transition-all duration-300"
                >
                  <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover/button:w-8">
                    →
                  </span>

                  <span className="text-[18px] sm:text-[22px] transition-all duration-300 group-hover/button:text-[18px]">
                    Submit
                  </span>
                </button>
              </form>

            </div>
          </section>


          {/* ================= FOOTER ================= */}
          <footer
            ref={footerRef}
            className="bg-[#FDFDFD] pt-10 sm:pt-12 lg:pt-13 relative overflow-hidden"
          >

            {/* ===== TOP BLUE STRIP ===== */}
            <div className="absolute top-0 left-0 w-full h-2 overflow-hidden">
              <div
                className={`h-1.5 sm:h-1.75 w-32 sm:w-41.5 bg-[#1b3470] transform transition-transform duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)]
           ${isFooterVisible ? "translate-x-[calc(100vw-8rem)]" : "translate-x-0"}`}
              />
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <div className="relative px-6 sm:px-10 lg:px-22 max-w-7xl mx-auto">

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* ===== BRAND ===== */}
                <div className="flex flex-col">

                  <div
                    className={`w-12 h-12 bg-[#1b3470] flex items-center justify-center text-white mb-2 font-bold text-xl ${ibmPlexSerif.className}`}
                  >
                    T
                  </div>

                  <p className={`text-xs text-[#193170] font-medium mb-8 ${ibmPlexSerif.className}`}>
                    Legal Certainty.Business Clarity.
                  </p>

                  <p className="text-[#626262] text-sm leading-6 mb-6">
                    Fehrbelliner Str. 23,<br />
                    10119 Berlin, Germany
                  </p>

                </div>

                {/* ===== LINKS ===== */}
                <FooterColumn
                  title="Links"
                  items={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/aboutUs" },
                    { label: "Services", href: "/services" },
                    { label: "Career", href: "/career" },
                    { label: "Legal Notice (Imprint)", href: "/imprint" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                  ]}
                />

                {/* ===== SERVICES ===== */}
                <FooterColumn
                  title="Services"
                  items={[
                    { label: "Compliance & Risk Management", href: "#" },
                    { label: "Corporate, M&A, Venture Capital", href: "#" },
                    { label: "Real Estate Law", href: "#" },
                    { label: "Employment & Incentives", href: "#" },
                    { label: "Dispute Resolution", href: "#" },
                    { label: "Finance & Restructuring", href: "#" },
                  ]}
                />

                {/* ===== NEWSLETTER ===== */}
                <div>
                  <h4 className={`font-bold text-base mb-6 relative ${ibmPlexSerif.className}`}>
                    Subscribe for Newsletter
                    <span className="absolute -top-2 left-0 w-6 h-0.5 bg-[#1b3470]" />
                  </h4>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      className="w-full sm:w-52 h-12 px-4 border border-gray-200 text-sm bg-[#F6F6F6]"
                      placeholder="Your email"
                    />
                    <button className="bg-[#1b3470] text-white px-6 h-12 text-sm">
                      Send
                    </button>
                  </div>

                  <p className="text-sm text-[#8D8D8D] mt-4">
                    No spam. Only releases, updates and discounts
                  </p>
                </div>

              </div>
            </div>

            {/* ===== TAKJAS DECORATIVE SVG ===== */}
            <div
              className={`absolute right-0 bottom-0 transform transition-all duration-1000 ease-out pointer-events-none
         ${isFooterVisible
                  ? "translate-y-0 opacity-15"
                  : "translate-y-20 opacity-0"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="350" height="150" viewBox="0 0 554 206" fill="none">
                <path d="M510.522 84.748L530.988 91.443C546.618 96.0647 553.708 104.831 553.708 119.494C553.708 144.837 533.405 149.14 516.968 149.14C500.531 149.14 485.385 140.214 480.067 133.043V101.802H482.806C486.029 127.304 497.631 141.649 517.13 141.649C536.627 141.649 540.173 134.796 540.173 122.045C540.173 109.293 535.661 107.541 523.414 103.556L504.077 97.3398C490.058 93.0367 482.162 85.0666 482.162 71.5192C482.162 57.9709 492.474 44.7421 516.807 44.7421C541.139 44.7421 542.59 48.7266 550.324 55.4207L552.097 82.6756H549.357C543.557 61.4776 533.566 52.0741 517.291 52.0741C501.015 52.0741 495.698 58.9274 495.698 68.8097C495.698 78.691 500.21 81.5607 510.361 84.5888L510.522 84.748ZM455.46 92.4721V130.943C455.46 141.637 461.706 144.191 467.952 144.191V147.544H441.689V116.576H440.728C437.205 131.262 428.878 149.14 407.099 149.14C385.32 149.14 379.395 139.562 379.395 114.34C379.395 89.1188 380.036 102.688 381.157 96.4624L441.368 90.7153V85.6073C441.368 68.2079 436.725 52.0846 416.707 52.0846C396.69 52.0846 394.929 61.1839 394.929 70.1239C394.929 79.0639 396.21 77.9462 398.291 79.2232V80.1807L382.758 81.7772C381.797 79.3834 381.157 76.1904 381.157 72.8382C381.157 59.2698 391.406 44.743 417.668 44.743C443.931 44.743 455.141 72.2001 455.141 92.7915L455.46 92.4721ZM412.383 139.562C431.92 139.562 439.447 116.735 441.048 94.7066L395.57 102.049C394.448 106.519 394.288 110.988 394.288 115.299C394.288 130.782 399.412 139.722 412.383 139.722V139.562ZM347.166 27.4667L333.584 13.5741L347.166 0L360.749 13.5741L347.166 27.4667ZM354.517 46.6294V157.294L339.017 206H336.619L339.975 147.713V63.2372C339.975 52.5376 333.423 49.9827 327.191 49.9827V46.6294H354.517ZM273.37 94.0657L298.471 133.14C304.227 142.193 313.66 143.781 319.735 143.781V147.117H291.756L257.701 95.336L242.672 112.967V130.757C242.672 141.399 249.228 143.941 255.142 143.941V147.276H215.332V143.941C221.567 143.941 228.123 141.558 228.123 130.757V22.1116C228.123 11.4702 221.567 8.92857 215.332 8.92857V5.59252H242.672V101.372L278.965 59.4386C286.16 51.1796 276.727 50.0675 264.416 50.0675V46.7315H312.221V49.9083C304.546 49.9083 294.954 52.1323 287.759 60.8682L260.259 92.6361L273.209 94.224L273.37 94.0657ZM194.452 92.4711V130.944C194.452 141.638 200.696 144.192 206.942 144.192V147.545H180.679V116.577H179.719C176.196 131.263 167.868 149.141 146.09 149.141C124.311 149.141 118.386 139.563 118.386 114.341C118.386 89.1198 119.026 102.689 120.148 96.4633L180.36 90.7163V85.6083C180.36 68.2089 175.715 52.0856 155.698 52.0856C135.681 52.0856 133.919 61.1849 133.919 70.1239C133.919 79.0639 135.201 77.9462 137.282 79.2232V80.1807L121.749 81.7772C120.788 79.3834 120.148 76.1904 120.148 72.8382C120.148 59.2698 130.396 44.743 156.659 44.743C182.921 44.743 194.131 72.2001 194.131 92.7915L194.452 92.4711ZM151.375 139.562C170.911 139.562 178.438 116.735 180.039 94.7066L134.56 102.049C133.438 106.519 133.279 110.988 133.279 115.299C133.279 130.782 138.403 139.722 151.375 139.722V139.562ZM120.632 2.95648L121.589 10.939L123.979 34.4068L120.154 34.8855C119.038 24.987 115.692 14.2912 103.9 14.2912H69.7978V129.076C69.7978 140.891 77.766 143.445 85.5739 143.445V147.276H38.564V143.445C46.2127 143.445 54.3401 141.05 54.3401 129.076V14.2912H20.3978C8.60527 14.2912 4.94019 24.8278 3.82435 34.566L0 34.0873L2.70852 10.7788L3.66508 2.79626C7.48944 4.55203 12.5889 4.87152 19.9191 4.87152H104.219C111.549 4.87152 116.648 4.71225 120.473 2.79626L120.632 2.95648Z" fill="#193170" />
              </svg>
            </div>

            {/* ===== COPYRIGHT ===== */}
            <div className="bg-[#1b3470] text-white text-center py-4 text-sm mt-12">
              <div>© 2025 Takjas, All rights reserved.</div>
              <div className="mt-1 text-white/70">
                Powered By <span className="text-white">SoftwareGiant</span>
              </div>
            </div>

          </footer>

        </motion.div>

      </div>
    </>
  );
}
