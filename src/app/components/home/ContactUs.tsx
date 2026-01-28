"use client";

import { ibmPlexSerif } from "@/app/fonts";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
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
              Let's discuss your transaction or complex legal<br/> challenge.
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
  );
}
