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
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-16 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Images/logo.png"
            alt="Company Logo"
            width={113}
            height={42}
            priority
          />
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group flex items-center h-10">
                {/* SERVICES LINK */}
                <Link
                  href={item.href}
                  className="relative flex items-center h-10 px-1"
                >
                  {item.name}

                  {/* ACTIVE STRIP */}
                  {isActive(item.href) && (
                    <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#193170]" />
                  )}
                </Link>

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
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#193170]" />
                )}
              </Link>
            )
          )}

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            className="flex items-center h-10 px-4 border border-[#193170]"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}




 