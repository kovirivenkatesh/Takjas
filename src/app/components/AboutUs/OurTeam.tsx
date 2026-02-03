"use client";
import Image from "next/image";
import { ibmPlexSerif } from "@/app/fonts";
import { MapPin, GraduationCap } from "lucide-react";

const team = [
  {
    name: "Philipp S. Takjas",
    role: "Co-Founder, Partner, \nManaging Director (MD)",
    image: "/Images/team1.png",
    degree: "LL.M.",
    location: "Los Angeles",
    bio: "Philipp Takjas brings a wealth of legal expertise to the firm, with a particular focus on restructuring/insolvency, venture capital, finance and real estate. Philipp served as Chief Legal Officer and General Counsel for more than five years after working for more than ten years with top international law firms.",
    highlights: [
      "Takjas – Co-Founder, Managing Director (MD), 2023 to present.",
      "McMakler – Chief Legal Officer, 2018 to 2023; DIHAG Holding – Managing Director, GC, 2017 to 2018.",
      "Noerr – Associated Partner, 2017; Senior Associate, 2010 to 2016.",
      "Clifford Chance – Associate, 2008 to 2009.",
      "Salans – Trainee Attorney, 2007 (CMS).",
      "Hasche Sigle – Trainee Attorney, 2006; White & Case – Insolvency Case Manager, 2004 to 2006.",
    ]
  },
  {
    name: "Amarjot S. Mashon",
    role: "Junior Lawyer",
    image: "/Images/team2.png",
    degree: "LL.B.",
    location: "Amsterdam",
    bio: "Amarjot has deep knowledge of EU law and focuses on employment and immigration law as well as litigation. He also works in transactions and compliance, including criminal law. In addition to German and English, Amarjot also speaks Hindi, Punjabi, and Urdu.",
  },
  {
    name: "Ben L. Elleser",
    role: "Junior Lawyer",
    image: "/Images/team3.png",
    degree: "LL.B.",
    location: "Munich",
    bio: "Ben has completed his specialized studies on International Private Law with distinction and is currently preparing for the first state examination. He assists in advising on venture capital and restructurings.",
  },
  {
    name: "Bruno Trommer",
    role: "Junior Lawyer",
    image: "/Images/team4.jpg",
    degree: "LL.B.",
    location: "Hamburg",
    bio: "Bruno is highly knowledgeable in sustainable finance. During his law studies, he specialized in litigation and corporate insolvency law. Additionally, Bruno is pursuing a Master’s degree in Business Law and Economic Law (LL.M.oec.). He spent two semesters in the USA and participated in an exchange program with a Chinese university.",
  },
];

const people = [
  {
    name: "Philipp S. Takjas",
    role: "Co-Founder, Partner, Managing \n Director (MD)",
    className: "left-[31px] bottom-[79px] w-[241px] h-[94px]",
  },
  {
    name: "Ben L. Elleser",
    role: "Junior Lawyer",
    className: "left-[357px] bottom-[256px] w-[200px] h-[66px]",
  },
  {
    name: "Amarjot S. Mashon",
    role: "Junior Lawyer",
    className: "left-[743px] bottom-[205px] w-[200px] h-[66px]",
  },
  {
    name: "Bruno Trommer",
    role: "Junior Lawyer",
    className: "right-[23px] bottom-[13px] w-[200px] h-[66px]",
  },
];

export default function OurTeam() {
  return (
    <section className="mt-32.25 pl-22.5 pr-21">
      <p className="text-[16px] text-black mb-2.25">→ Our Team</p>

      <h2
        className={`text-[55px] mr-21.25 leading-17.75 text-[#2C2C2C]  mb-16 font-medium ${ibmPlexSerif.className}`}
      >
        Meet the legal strategists who drive your business forward
      </h2>

      {/* ROW */}
      <div className="flex items-start gap-5 overflow-visible">
        {team.map((member, i) => (
          <div
            key={i}
            className={`relative  group  flex  flex-none p-2 bg-[#1E3A8A] transition-all duration-500 ease-in-out h-126.5  overflow-hidden
${i === 0
                ? "w-67 hover:w-200.5"
                : i >= 2
                  ? `flex-row-reverse w-67  hover:w-139.5 `
                  : "w-67 hover:w-139.5"
              }

`}


          >

            {/* LEFT IMAGE COLUMN */}
            <div className="relative w-63 shrink-0 h-full ">
              {/* IMAGE HEIGHT CONTROLLER */}
              <div
                className="  w-full h-96 group-hover:h-122.25 transition-[height] duration-500 ease-in-out  "
              >
                {/* PADDING LAYER */}
                <div
                  className={`relative w-full h-full `}
                >

                  {/* IMAGE WRAPPER */}
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* BOTTOM TEXT */}
              <div
                className={`w-full mt-3 text-white transition-opacity duration-300 group-hover:opacity-0
  `}
              >
                <h3 className={`text-[24px]  leading-6.25 mb-1.25 font-semibold ${ibmPlexSerif.className}`}>
                  {member.name}
                </h3>
                <p className={`text-[16px] leading-5.5 mb-6 text-[#D4D4D4]  ${ibmPlexSerif.className}`}>
                  {member.role}
                </p>
              </div>

            </div>

            {/* RIGHT DETAIL PANEL */}
            <div
              className={`flex-1  mt-10 opacity-0 pointer-events-none transition-all duration-500
    ${i >= 2
                  ? "-translate-x-6 mr-5.75 ml-3.75 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
                  : "translate-x-6 ml-5.75 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
                }
  `}
            >


              <h3 className={`text-[24px] leading-6.25 text-[#FFFFFF] mb-1.25 ${ibmPlexSerif.className}`}>
                {member.name}
              </h3>

              <p className={`text-[16px] text-[#D4D4D4] leading-5.5 mb-2.75 ${ibmPlexSerif.className} `}>
                {member.role}
              </p>

              <div className="flex gap-6  mb-2.75">
                <span className="flex items-center gap-2 text-[#D4D4D4] text-[16px]">
                  <GraduationCap size={25} /> {member.degree}
                </span>
                <span className="flex items-center gap-2 text-[#D4D4D4]">
                  <MapPin size={25} /> {member.location}
                </span>
              </div>

              <p className={`text-[15px] leading-6 text-[#DADADA]
               ${i >= 1
                  ? "mb-24.75"
                  : "mb-6"
                }
              `}>
                {member.bio}
              </p>

              {member.highlights && member.highlights.length > 0 && (
                <ul className="text-[15px] text-[#DADADA] space-y-2 leading-6 list-disc list-outside mt-5 ml-3">
                  {member.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        ))}
      </div>

      <div className="relative h-163 w-full overflow-hidden mt-32.25 group">
        {/* IMAGE */}
        <Image
          src="/Images/clients.png"
          alt="Team"
          fill
          priority
          className="object-cover  transition-transform  duration-700 ease-in-out group-hover:scale-105"
        />

        {/* BLUE MASK (INITIAL STATE) */}
        <div
          className="absolute inset-0 bg-[#193170B8]  transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        />

        {/* TAKJAS IMAGE */}
        <div
          className={`absolute bottom-1 translate-y-1 ml-73 mr-69.25  transition-all duration-1500 ease-in-out  group-hover:-bottom-full group-hover:translate-y-0`}
        >
          <Image
            src="/Images/takjas.png"   // <-- your image
            alt="Takjas"
            width={715}                     // adjust size
            height={266}
            priority
            className="object-contain"
          />
        </div>

        {/* PERSON TAGS */}
        {people.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.className} bg-[#193170] text-white  scale-0 origin-center transform-gpu will-change-transform transition-transform duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-200 group-hover:scale-100 shadow-lg flex flex-col    ${ibmPlexSerif.className}`}

          >
            <p className="text-[16px] leading-6.25 flex justify-center font-semibold mb-1 pt-2.25">
              {p.name}
            </p>
            <p className="text-[14px] text-[#D4D4D4] flex justify-center text-center  ml-3.5 mr-5.5 mb-2.25 leading-5.5">
              {p.role}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

