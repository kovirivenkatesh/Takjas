"use client";

import { ibmPlexSerif } from "@/app/fonts";
import { Phone, Mail, MapPin } from "lucide-react";

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


export default function FooterSection() {
  return (
    <>
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

      {/* ===== FAQ SECTION ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 px-10">

          {/* LEFT */}
          <div>
            <p className="text-sm mb-6">→ FAQs</p>

            <h2 className={`text-5xl leading-tight ${ibmPlexSerif.className}`}>
              Clarifying our
              <br />
              expertise and client
              <br />
              process.
            </h2>

            <p className="mt-8 text-md text-gray-500 max-w-sm">
              We address the common concerns of founders and investors upfront.
              Our commitment to transparent communication ensures you have the
              necessary information to proceed with confidence.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            {faqs.map((item, index) => (
              <div key={index} className="group border-b border-[#C6C6C6]">
                <div className="flex items-center justify-between py-4 cursor-pointer">
                  <span className="text-[#193170] font-medium">
                    {item.q}
                  </span>

                  <span className="text-2xl text-[#193170]   transition-transform duration-300 group-hover:rotate-45  ">
                    +
                  </span>
                </div>

                <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
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
    </>
  );
}

