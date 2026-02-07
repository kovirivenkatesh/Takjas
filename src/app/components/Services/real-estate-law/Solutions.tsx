"use client";


import { ibmPlexSerif } from "@/app/fonts";
import { Phone, Mail, MapPin } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Transactions & Development",
    desc:
      "Legal counsel for the acquisition, disposition, and complex development of office and multifamily buildings.",
  },
  {
    id: "02",
    title: "Commercial Leasing",
    desc:
      "Full representation for landlords and tenants in negotiating and drafting commercial leases and tenancy disputes.",
  },
  {
    id: "03",
    title: "Finance & Joint Ventures",
    desc:
      "Structuring lending transactions, secured financing, and co-investment agreements (Joint Ventures - JVs).",
  },
  {
    id: "04",
    title: "Workouts & Restructuring",
    desc:
      "Advising on real estate work-outs, asset restructuring, and managing legal strategy around distressed property portfolios.",
  },
];

export default function OurSolutionsSection() {
  return (
     <section className=" mt-23.5 ml-22.75 mr-16.75 ">
         {/* HEADER */}
         <p className="leading-6.25 text-[16px] text-[#000000] mb-2.5">→ Our Solutions</p>
   
         <h2 className={`text-[55px] font-medium mb-18.75 leading-17.75 text-[#2C2C2C] ${ibmPlexSerif.className} `}>
          A Structured Strategy for Full Asset Lifecycle Management
         </h2>
   
         {/* GRID */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
           {/* LEFT SERVICES */}
           <div className="lg:col-span-2 space-y-6 overflow-x-scroll">
             {services.map((item) => (
               <div
                 key={item.id}
                 className="group relative border border-[#1931704D]  min-w-full"
               >
   
   
                 {/* CARD BODY */}
                 <div className="flex">
                   {/* NUMBER COLUMN */}
   
                   <div className="relative  bg-[#EAF1FF] flex flex-col">
                     {/* TOP DARK BLUE STRIP — ONLY NUMBER COLUMN */}
                     <div className="h-1.75 bg-[#193170]" />
   
                     {/* HOVER DARK BLUE FLOW */}
                     <div
                       className="absolute inset-x-0 top-0 bottom-0 bg-[#193170]  scale-y-0 group-hover:scale-y-100  origin-top transition-transform duration-2500 ease-[cubic-bezier(0.22,1,0.36,1)] "
                     />
   
                     {/* NUMBER */}
                     <div className="relative z-10 h-48.5 w-22   flex items-center justify-center">
                       <span
                         className={`text-[32px] font-medium text-black group-hover:text-white ${ibmPlexSerif.className}`}
                       >
                         {item.id}
                       </span>
                     </div>
   
                   </div>
   
   
                   {/* CONTENT COLUMN */}
           <div className="relative bg-[#F5F5F5] group-hover:bg-white">
   
     <div className="relative grid grid-cols-1 md:grid-cols-[292px_463px] h-48.5">
   
       {/* TITLE COLUMN (FULL HEIGHT + PADDING) */}
       <div className="relative h-full pl-5.5 pr-2.5 py-8 flex items-center">
   
         {/* SKY BLUE FLOW — FILLS ENTIRE COLUMN INCLUDING PADDING */}
         <div
          className="absolute inset-0 bg-[#EAF1FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-2500 ease-[cubic-bezier(0.22,1,0.36,1)]"

         />
   
         {/* TITLE TEXT */}
         <h3
           className={`relative z-10 text-[#193170] text-[24px]
           leading-8.5 font-medium ${ibmPlexSerif.className}`}
         >
           {item.title}
         </h3>
       </div>
   
       {/* DESCRIPTION COLUMN (OWN PADDING) */}
       <div className="px-7.5  flex items-center">
         <p className="text-[16px] text-[#32302F] leading-6.25">
           {item.desc}
         </p>
       </div>
   
     </div>
   </div>
   
                 </div>
               </div>
             ))}
   
           </div>
   
           {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
          {/* FORM */}
          <div className="relative group overflow-hidden border border-[#C9D3EA] bg-white">
            {/* SKY BLUE FLOW LAYER */}
            <div className="absolute inset-0 bg-[#EAF1FF] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-4000 ease-[cubic-bezier(0.22,1,0.36,1)]" />

            <div className="relative z-10 flex flex-col">
              {/* HEADER */}
              <div className="bg-[#193170] text-white px-6.25 py-5.5 h-35.5">
                <h3 className={`text-[24px] mb-2.75 leading-6.75 font-medium ${ibmPlexSerif.className} `}>Begin Your Inquiry</h3>
                <p className="text-[16px] leading-6.5 opacity-80">
                  Talk to an M&A specialist for quick, secure communication.
                </p>
              </div>

              {/* FORM BODY */}
              <div className=" space-y-4 mt-3.5 mx-5">
                {["Name", "Email", "Phone No.", "Message"].map((label, i) => (
                  <div key={i} className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-4000 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                    {label === "Message" ? (
                      <textarea
                        placeholder={label}
                        className="relative z-10 px-4 py-3 w-full h-40 mb-4.75 resize-none  bg-[#EAF1FF] group-hover:bg-transparent text-[#193170] text-[15px] placeholder-[#5E6784] outline-none"
                      />
                    ) : (
                      <input
                        placeholder={label}
                        className="relative z-10 px-4 py-3 w-full h-14 bg-[#EAF1FF] group-hover:bg-transparent text-[#193170] placeholder-[#5E6784] outline-none"
                      />
                    )}
                  </div>
                ))}

                <button className="w-full h-15 bg-[#193170] text-white text-[16px] py-1 px-3 mb-6">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* CONTACT US — spans 1 row */}
          <div className="row-span-1 bg-[#393E49] text-white px-6 py-6 h-50 flex flex-col justify-center">
            <h4 className="text-[20px] leading-6.25 font-medium mb-5.5">Contact Us</h4>

            <ul className="space-y-3.5 text-[16px] opacity-90">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <span>+49 (0)30 257 44 863</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <span>info@takjas.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-0.5 leading-5.75" />
                <span>
                  Fehrbelliner Str. 23, 10119 Berlin, Germany
                </span>
              </li>
            </ul>
          </div>
        </div>
   
         </div>
       </section>
  );
}
