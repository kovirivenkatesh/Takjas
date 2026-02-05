
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ibmPlexSerif } from "@/app/fonts";

const services = [
  { title: "Compliance & Risk Management", href: "/services/compliance-risk-management" },
  { title: "Employment & Incentives", href: "/services/employment-incentives" },
  { title: "Corporate, M&A , Venture Capital", href: "/services/corporate-ma-venture-capital" },
  { title: "Dispute Resolution", href: "/services/dispute-resolution" },
  { title: "Real Estate Law", href: "/services/real-estate-law" },
  { title: "Finance & Restructuring", href: "/services/finance-restructuring" },
];

export default function ServicesDropdown() {
  return (
    <div className="bg-white shadow-[0_4px_18px_rgba(0,0,0,0.25)] border border-gray-200 px-3.75 py-5.5 w-165 h-55.25">
      <div className="grid grid-cols-2 gap-4">
        {services.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="relative group/item overflow-hidden flex items-center gap-4 p-3.25 h-12 border border-[#E6EBF2] bg-[#EAF0FF] cursor-pointer">

              {/* 🔵 BACKGROUND FILL */}
              <span
               className="absolute inset-0 bg-[#C1D2FF70] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover/item:scale-x-100 z-0"

              />

            
{/* 🟦 STRIP CONTAINER */}
<span className="absolute left-0 top-0 w-1.25 h-full overflow-hidden z-20">

  {/* STRIP A — visible → moves DOWN + GAP */}
  <span
  className="absolute top-0 left-0 w-full h-full bg-[#193170] translate-y-0 transition-transform duration-1000 ease-in-out group-hover/item:translate-y-[calc(100%+6px)]"

  />

  {/* STRIP B — hidden ABOVE → moves DOWN into place */}
  <span
   className="absolute top-0 left-0 w-full h-full bg-[#193170] -translate-y-[calc(100%+6px)] transition-transform duration-1000 ease-in-out group-hover/item:translate-y-0"

  />

</span>



              {/* TEXT */}
              <span className={`relative z-10 text-[#193170] transition-colors duration-300 ${ibmPlexSerif.className}`}>
                {item.title}
              </span>

              {/* ARROW */}
       {/* ▶ FILLED TRIANGLE */}
<span
  className="absolute right-4 z-10 opacity-0 translate-x-3 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0"

>
  <span
    className="block w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-10 border-l-[#193170]"

  />
</span>


            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
