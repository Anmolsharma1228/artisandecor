"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    {
      label: "Services",
      children: [
        { href: "/services/wall-design", label: "Wall Design" },
        { href: "/services/false-ceiling", label: "False Ceiling" },
        { href: "/services/office-interior", label: "Office Interior" },
        { href: "/services/home-interior", label: "Home Interior" },
        { href: "/services/furniture-work", label: "All Furniture Work" },
      ],
    },
    {
      label: "Products",
      children: [
        { href: "/product/wallpaper", label: "Wallpaper" },
        { href: "/product/carpet", label: "Carpet" },
        { href: "/product/gym-flooring", label: "Gym Flooring" },
        { href: "/product/window-blinds", label: "Window Blinds" },
        { href: "/product/pergola", label: "Pergola" },
        { href: "/product/cladding", label: "HPL, WPC, Cladding" },
        { href: "/product/decking", label: "Decking" },
        { href: "/product/curtains", label: "Curtains" },
        { href: "/product/all-panels", label: "All Type Of Panels" },
      ],
    },
    { href: "/catalogue", label: "Catalogues" },
    { href: "/ourwork", label: "Work Gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <nav>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo3.png"
              alt="AH Decor Logo"
              width={80}
              height={64}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[16px] font-medium text-black">
            {menuItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href="" className="flex items-center gap-1">
                    {item.label}
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-3 w-56">
                      <div
                        className="
                bg-white/95 backdrop-blur-md rounded-xl
                border border-black/5
                shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                animate-dropdown
              "
                      >
                        {item.children.map((child, index) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-black
                             transition-all duration-200
                             hover:bg-black/5 hover:translate-x-1"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5
          after:bg-[#FBC02D] after:w-0 hover:after:w-full after:transition-all
          ${pathname === item.href ? "after:w-full font-semibold" : ""}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden text-black text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="px-6 py-4 space-y-4 bg-white ">
          {menuItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label,
                    )
                  }
                  className="w-full flex justify-between font-semibold text-black"
                >
                  {item.label}
                  <FaChevronDown
                    className={`transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === item.label && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-black"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-black font-semibold md:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
