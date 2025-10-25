"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-sm",
        scrolled
          ? "bg-white/90 text-gray-900 shadow-md"
          : "bg-transparent text-white"
      )}
    >
      {/* Logo */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink
            href="/"
            className="flex items-center gap-2 relative font-bold text-2xl text-[#a1a1a1]"
          >
            <svg
              className="absolute -top-0 -left-2 -z-10 w-5"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#006FEE"
                d="M55.6,-66.6C70.6,-53.7,80.2,-34.8,83,-15.1C85.9,4.5,82,24.8,72.6,42.6C63.1,60.5,48.2,75.8,29.5,83.9C10.8,91.9,-11.6,92.7,-31.2,85.6C-50.8,78.5,-67.5,63.6,-77.1,45.3C-86.7,27.1,-89.1,5.5,-85.5,-15C-81.8,-35.5,-72,-54.8,-56.8,-67.6C-41.5,-80.5,-20.8,-86.7,-0.2,-86.5C20.3,-86.2,40.7,-79.5,55.6,-66.6Z"
                transform="translate(100 100)"
              />
            </svg>
            Ndae <i className="text-primary not-italic">Dev</i>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Hamburger Button */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle aria-label="Toggle menu" />
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden lg:flex gap-8" justify="end">
        {siteConfig.navItems.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <NavbarItem key={item.href}>
              <div className="group flex flex-col items-center relative">
                <NextLink
                  href={item.href}
                  scroll={true}
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "text-gray-600 hover:text-primary transition-colors duration-200 pb-1",
                    isActive && "text-primary font-medium"
                  )}
                >
                  {item.label}
                </NextLink>
                <span
                  className={clsx(
                    "h-0.5 bg-primary absolute bottom-0 transition-all duration-300 ease-in-out",
                    isActive ? "w-full" : "w-0",
                    !isActive && "group-hover:w-full"
                  )}
                />
              </div>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-4 flex flex-col gap-3">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <Link
                as={NextLink}
                href={item.href}
                size="lg"
                color="foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
