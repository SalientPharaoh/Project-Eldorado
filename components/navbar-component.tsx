"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-1";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About Us</HoveredLink>
            <HoveredLink href="/interface-design">Register as a Start-up</HoveredLink>
            <HoveredLink href="/seo">KYC Verification</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Invest in ISPO"
              href="/"
              src="/investing.png"
              description="Invest in the initial start-up public offering."
            />
            <ProductItem
              title="Start-up Listing"
              href="/"
              src="/building.png"
              description="Keep track of the prices of the start-ups. Choose where to invest and how much to invest."
            />
            <ProductItem
              title="Raise Capital"
              href="/"
              src="/crypto.png"
              description="If you are a start-up, you can raise capital by listing your start-up on our platform."
            />
            <ProductItem
              title="Peer-to-Peer Trade"
              href="/"
              src="/savings.png"
              description="Trade the shares of the start-ups with other investors at your price and convenience."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Account">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/dashboard">Dashboard</HoveredLink>
            <HoveredLink href="/queryForm">Raise a Query</HoveredLink>
            <HoveredLink href="/">Sign-out</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;