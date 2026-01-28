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
    className: "left-8 bottom-16",
  },
  {
    name: "Ben L. Elleser",
    role: "Junior Lawyer",
    className: "left-[32%] top-[45%]",
  },
  {
    name: "Amarjot S. Mashon",
    role: "Junior Lawyer",
    className: "left-[55%] top-[45%]",
  },
  {
    name: "Bruno Trommer",
    role: "Junior Lawyer",
    className: "right-8 bottom-14",
  },
];

export default function OurTeam() {
  return (
    <section className="max-w-7xl ml-10 px-6 pt-20">
      <p className="text-sm text-black mb-3">→ Our Team</p>

      <h2
        className={`text-3xl md:text-4xl max-w-3xl mb-16 font-semibold ${ibmPlexSerif.className}`}
      >
        Meet the legal strategists who drive your business forward
      </h2>

      {/* ROW */}
      <div className="flex items-start gap-8 overflow-visible">
        {team.map((member, i) => (
          <div
            key={i}
            className={`relative  group  flex flex-none bg-[#1E3A8A] transition-all duration-500 ease-in-out h-110 overflow-hidden
${i === 0
                ? "w-68 hover:w-230"
                : i >= 2
                  ? `flex-row-reverse w-68 hover:w-125 `
                  : "w-68 hover:w-125"
              }

`}


          >

            {/* LEFT IMAGE COLUMN */}
            <div className="relative w-63 shrink-0 h-full ">
              {/* IMAGE HEIGHT CONTROLLER */}
              <div
                className=" absolute top-2 left-2.5 w-full h-85 group-hover:h-105 transition-[height] duration-500 ease-in-out  "
              >
                {/* PADDING LAYER */}
                <div
                  className={`relative w-full h-full ${i >= 2 ? "right-5" : ""}`}
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
                className={`absolute left-0 w-full p-4 text-white transition-opacity duration-300 group-hover:opacity-0
    ${i === 0
                    ? "bottom-0"
                    : i === 1
                      ? "bottom-5 pr-2"
                      : "bottom-5 -ml-6"
                  }

  `}
              >
                <h3 className={`text-lg ${ibmPlexSerif.className}`}>
                  {member.name}
                </h3>
                <p className={`text-sm text-white/80 whitespace-pre-line ${ibmPlexSerif.className}`}>
                  {member.role}
                </p>
              </div>

            </div>

            {/* RIGHT DETAIL PANEL */}
            <div
              className={`flex-1 p-6 text-white opacity-0 pointer-events-none transition-all duration-500
    ${i >= 2
                  ? "-translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
                  : "translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
                }
  `}
            >


              <h3 className={`text-xl mb-1 ${ibmPlexSerif.className}`}>
                {member.name}
              </h3>

              <p className={`text-sm text-[#D4D4D4] mb-4 ${ibmPlexSerif.className}`}>
                {member.role}
              </p>

              <div className="flex gap-6 text-md mb-4">
                <span className="flex items-center gap-2 text-[#D4D4D4]">
                  <GraduationCap size={20} /> {member.degree}
                </span>
                <span className="flex items-center gap-2 text-[#D4D4D4]">
                  <MapPin size={20} /> {member.location}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[#DADADA]">
                {member.bio}
              </p>

              {member.highlights && member.highlights.length > 0 && (
                <ul className="text-sm text-[#DADADA] space-y-2 list-disc list-outside mt-5 ml-4">
                  {member.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        ))}
      </div>

      <div className="relative h-120 w-full overflow-hidden mt-12 group">
        {/* IMAGE */}
        <Image
          src="/Images/clients.png"
          alt="Team"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* BLUE MASK (INITIAL STATE) */}
        <div
          className="absolute inset-0 bg-[#193170B8]  transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        />

        {/* TAKJAS IMAGE */}
        <div
          className={`absolute inset-x-0 top-1/2 -translate-y-1/2 -ml-16 mt-32 flex justify-center transition-all duration-1500 ease-in-out group-hover:top-full group-hover:translate-y-0`}
        >
          <Image
            src="/Images/takjas.png"   // <-- your image
            alt="Takjas"
            width={600}                     // adjust size
            height={90}
            priority
            className="object-contain"
          />
        </div>

        {/* PERSON TAGS */}
        {people.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.className} bg-[#193170] text-white px-6 py-4 scale-0 origin-center transform-gpu will-change-transform transition-transform duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-200 group-hover:scale-100 shadow-lg flex flex-col items-center justify-center text-center whitespace-pre-line ${ibmPlexSerif.className}`}

          >
            <p className="text-md leading-tight">
              {p.name}
            </p>
            <p className="text-sm text-[#D4D4D4] leading-tight">
              {p.role}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

