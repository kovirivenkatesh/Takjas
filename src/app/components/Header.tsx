"use client";

import Link from "next/link";
import Image from "next/image";
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-white z-50 shadow-sm">
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
                  key={item.name}
                  href={item.href}
                  data-active={isActive(item.href)}
                  className="relative flex items-center h-full px-1"
                >
                  {item.name}



                </Link>
                {isActive(item.href) && (
                  <span className="absolute left-0 right-0 top-12 h-1.5 bg-[#193170]" />
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
                className="relative flex items-center h-10 px-1"
              >
                {item.name}

                {/* ACTIVE STRIP */}
                {isActive(item.href) && (
                  <span className="absolute left-0 right-0 top-14 h-1.5 bg-[#193170]" />
                )}
              </Link>
            )
          )}

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            className="flex items-center h-14.5 w-31.5 px-2 border border-[#193170]"
          >
            Contact Us

          </Link>
        </nav>
      </div>
    </header>
  );
}




