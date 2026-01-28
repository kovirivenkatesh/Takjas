import { ibmPlexSerif } from "@/app/fonts";

export default function MissionVisionSection() {
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
        <div className="bg-[#193170] px-16 py-24">

          {/* MISSION */}
          <div className="mb-40">
            <p className="text-md tracking-wide text-[#F5F5F5] mb-6">
             → Our Mission
            </p>
            <p className={`text-2xl leading-relaxed text-[#B2B2B2] max-w-md ${ibmPlexSerif.className}`}>
              A business law firm with a dedicated focus on assisting founders,
              start-ups and scale-ups, investors and executives. We give the
              highest priority to our clients’ peace of mind by being responsive,
              empathetic and business-savvy problem solvers and project managers.
            </p>
          </div>

          {/* VISION */}
          <div>
            <p className="text-md tracking-wide text-[#F5F5F5] mb-6">
              → Our Vision
            </p>
            <p className={`text-2xl leading-relaxed text-[#B2B2B2] max-w-md ${ibmPlexSerif.className}`}>
              We aim to set the standard for business-focused legal counsel in the
              European digital economy. Our goal is to be a strategic partner for
              founders and investors, using our legal expertise and operational
              insight to reduce friction and support their ambitious growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
