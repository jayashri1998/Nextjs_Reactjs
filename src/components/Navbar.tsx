"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex gap-8">
          <Link href="/" passHref>
            <MenuItem setActive={setActive} active={active} item="Home">
              Home
            </MenuItem>
          </Link>
          <div className="relative">
            <MenuItem setActive={setActive} active={active} item="Our Courses">
              Our Gallery
            </MenuItem>
            {active === "Our Courses" && (
              <div className="absolute top-full mt-2 flex flex-col space-y-4 bg-white shadow-lg p-4">
                <HoveredLink href="/course">All Courses</HoveredLink>
                <HoveredLink href="/course">Basic Music Theory</HoveredLink>
                <HoveredLink href="/course">Advanced Composition</HoveredLink>
                <HoveredLink href="/course">Songwriting</HoveredLink>
                <HoveredLink href="/course">Music Production</HoveredLink>
              </div>
            )}
          </div>
          <Link href="/contact" passHref>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
              Contact Us
            </MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
