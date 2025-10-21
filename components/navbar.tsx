"use client";

import Image from "next/image";
import img from "../assets/images/Logo.png";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const currentPath = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroUINavbar
      maxWidth="xl"
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-500",
        scrolled
          ? "lg:bg-[#9bd0ff] lg:text-[#ffe0ffaa] sm:bg-[#9bd0ff] sm:text-[#ffe0ffaa] shadow-md"
          : "bg-white/95 backdrop-blur-sm shadow-sm lg:bg-transparent lg:shadow-none"
      )}
    >
      <NavbarContent className="basis-full gap-200" justify="center">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex relative justify-start items-center"
            href="/"
          >
            <svg className="absolute -top-0 -left-2 -z-10 w-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#006FEE"
                d="M55.6,-66.6C70.6,-53.7,80.2,-34.8,83,-15.1C85.9,4.5,82,24.8,72.6,42.6C63.1,60.5,48.2,75.8,29.5,83.9C10.8,91.9,-11.6,92.7,-31.2,85.6C-50.8,78.5,-67.5,63.6,-77.1,45.3C-86.7,27.1,-89.1,5.5,-85.5,-15C-81.8,-35.5,-72,-54.8,-56.8,-67.6C-41.5,-80.5,-20.8,-86.7,-0.2,-86.5C20.3,-86.2,40.7,-79.5,55.6,-66.6Z"
                transform="translate(100 100)"
              />
            </svg>
            <p className="font-bold text-2xl text-foreground">
              Ndae <i className="text-primary">Dev</i>
            </p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-8 justify-end">
          {siteConfig.navItems.map((item) => {
            const isActive = item.href === currentPath;

            return (
              <NavbarItem key={item.href}>
                <div className="group flex flex-col items-center relative">
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "text-gray-600 hover:text-primary transition-colors duration-200 pb-1",
                      isActive && "text-primary font-medium"
                    )}
                    color="foreground"
                    href={item.href}
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
        </ul>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
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
