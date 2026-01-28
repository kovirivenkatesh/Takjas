import Link from "next/link";
import { ChevronRight } from "lucide-react";

const services = [
  { title: "Compliance & Risk Management", href: "/services/compliance-risk" },
  { title: "Employment & Incentives", href: "/services/compliance-risk" },
  { title: "Corporate, M&A , Venture Capital", href: "/services/compliance-risk" },
  { title: "Dispute Resolution", href: "/services/compliance-risk" },
  { title: "Real Estate Law", href: "/services/compliance-risk" },
  { title: "Finance & Restructuring", href: "/services/compliance-risk" },
];

export default function ServicesDropdown() {
  return (
    <div className="bg-white shadow-xl border border-gray-200 rounded-md p-6 w-160">
      <div className="grid grid-cols-2 gap-4">
        {services.map((item, index) => (
          <Link key={index} href={item.href} className="block">
            {/* ✅ HOVER GROUP MUST BE HERE */}
            <div
              className="
                group relative overflow-hidden
                flex items-center gap-4
                px-4 py-3 h-13
                border border-[#E6EBF2]
                bg-[#F7F9FC] 
                cursor-pointer
              "
            >
              {/* SKY BLUE BG — LEFT → RIGHT */}
              <span
                className="
                  absolute inset-0
                  bg-[#EAF0FF]
                  -translate-x-full
                  group-hover:translate-x-0
                  transition-transform duration-400
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  z-0
                "
              />

              {/* STRIP CONTAINER */}
              <span className="relative w-1 h-8 overflow-hidden z-10">
                {/* OLD STRIP GOES DOWN */}
                <span
                  className="
                    absolute inset-0
                    bg-[#193170]
                    group-hover:translate-y-full
                    transition-transform duration-300 ease-in
                  "
                />

                {/* NEW STRIP FROM TOP */}
                <span
                  className="
                    absolute inset-0
                    bg-[#193170]
                    -translate-y-full
                    group-hover:translate-y-0
                    transition-transform duration-300 ease-out
                    delay-150
                  "
                />
              </span>

              {/* TEXT */}
              <span className="relative z-10 text-[#193170] font-medium text-sm">
                {item.title}
              </span>

              {/* ARROW — FROM RIGHT EDGE */}
              <span
                className="
                  absolute right-4
                  z-10
                  opacity-0
                  translate-x-3
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300 ease-out
                "
              >
                <ChevronRight size={16} className="text-[#193170]" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
