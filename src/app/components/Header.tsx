"use client";

import Link from "next/link";
import Image from "next/image";
import { useState,useRef,useEffect } from "react";
import { usePathname } from "next/navigation";
import ServicesDropdown from "./Services/SerivceDropdown";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutUs" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Career", href: "/career" },
];

export default function Header() {
  const pathname = usePathname();
   const [menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef<HTMLDivElement>(null);
const buttonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (
      menuOpen &&
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menuOpen]);

  return (
    <>

    {/* ================= DESKTOP VIEW ================= */}

     <header className=" hidden sm:block fixed top-0 left-0 w-full h-24 bg-[#F5F5F5]  z-50 shadow-sm">
      <div className=" mx-22 flex justify-between py-6.5 relative ">
        {/* LOGO */}
        <Link href="/" className="flex items-center h-full">
          <div className="relative w-28 h-10.5">
            <Image
              src="/Images/logo.png"
              alt="Company Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>


        {/* NAV */}
        <nav className="flex gap-8 text-[17px] leading-6  items-center">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group flex items-center ">
                {/* SERVICES LINK */}
                <Link
                  href={item.href}
                  className="relative flex items-center h-10 px-1  group isolate"
                >
                  {/* BG (below text) */}
                  <span className="absolute -bottom-5 -right-3 w-24 h-0 bg-[#E4E9F8]/90 transition-all duration-500 ease-out group-hover:h-24" />
                  {/* TEXT (fully unaffected) */}
                  <span className="relative z-10">
                    {item.name}
                  </span>
                </Link>

                {isActive(item.href) && (
                  <span className="absolute -left-3.5 right-0 top-14 h-1.5 w-24 bg-[#193170]" />
                )}
                {/* DROPDOWN */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-6 opacity-0 invisible -translate-y-5 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-3 group-hover:scale-100 transition-all duration-700 ease-in-out origin-top"
                >
                  <ServicesDropdown />
                </div>
              </div>
            ) : (
              <Link
              key={item.name}
                href={item.href}
                className="relative flex items-center h-10 px-1  group isolate"
              >
                {/* BG (below text) */}
                <span
                  className={`absolute -bottom-5 w-24 h-0 bg-[#E4E9F8]/90 transition-all duration-500 ease-out group-hover:h-24 ${item.name === "About Us" ? "-right-2" : "-right-5"}`}
                />

                {/* TEXT (fully unaffected) */}
                <span className="relative z-10">
                  {item.name}
                </span>

                {/* ACTIVE STRIP */}
                {isActive(item.href) && (
                  <span
                    className={`absolute top-14 h-1.5 w-24 bg-[#193170] ${item.name === "About Us" ? "-left-2" : "-left-5"}`}
                  />
                )}

              </Link>
            )
          )}

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            className="flex items-center justify-center h-14.5 w-31.5 px-2 border text-[17px] border-[#193170] hover:bg-[#193170] hover:text-white "
          >
            Contact Us

          </Link>
        </nav>
      </div>
    </header>

  
     {/* ================= MOBILE VIEW ================= */}

<header className="block sm:hidden fixed top-0 left-0 w-full h-20 bg-[#F5F5F5] z-50 shadow-sm">
  <div className="px-6 h-full flex items-center justify-between">

    {/* LOGO */}
    <Link href="/" className="flex items-center">
      <div className="relative w-24 h-9">
        <Image
          src="/Images/logo.png"
          alt="Company Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>

    {/* HAMBURGER */}
    <button
  ref={buttonRef}
  onClick={() => setMenuOpen(!menuOpen)}
  className="flex flex-col gap-1.5"
>

      <span className="w-6 h-0.5 bg-[#193170]" />
      <span className="w-6 h-0.5 bg-[#193170]" />
      <span className="w-6 h-0.5 bg-[#193170]" />
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
     <div ref={menuRef}>
    <nav className="absolute top-full left-0 w-full bg-white shadow-md py-6">
      <ul className="flex flex-col gap-6 px-6 text-[16px]">

        {navItems.map(item => (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-[#193170]"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* CONTACT */}
        <li>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center py-3 border border-[#193170] text-[#193170] rounded-md"
          >
            Contact Us
          </Link>
        </li>

      </ul>
    </nav>
    </div>
  )}
</header>

    </>
   
  );
}




