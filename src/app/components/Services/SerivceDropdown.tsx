import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
   <div className="bg-white shadow-xl border border-gray-200 rounded-md p-6 w-160">
  <div className="grid grid-cols-2 gap-4">
    {services.map((item, index) => (
      <Link key={index} href={item.href} className="block">
        {/* 🔒 EACH ITEM IS ITS OWN HOVER ISLAND */}
  <div
  className=" relative overflow-hidden flex items-center gap-4 px-4 py-3 h-13 border border-[#E6EBF2] bg-[#EAF0FF]  cursor-pointer group "
>
  {/* BG FILL */}
  <span
    className="absolute inset-0 bg-[#193170] scale-x-0 origin-left hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"

  />

  {/* STRIP */}
  <span className="relative w-1 h-8 bg-[#193170] z-10" />

  {/* TEXT */}
  <span
    className=" relative z-10 text-[#193170] font-medium text-sm  transition-colors duration-300 "
  >
    {item.title}
  </span>

  {/* ARROW */}
  <span
    className="absolute right-4 z-10 opacity-0 translate-x-3 hover:opacity-100 hover:translate-x-0 transition-all duration-300 ease-out"

  >
    <ChevronRight size={16} className="text-blue-900" />
  </span>
</div>

      </Link>
    ))}
  </div>
</div>


  );
}
