"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Divider } from "@nextui-org/react";
import RBLogo from "./RBLogo";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar isBordered className="bg-black opacity-80 text-3xl" style={{ fontFamily: 'TrueLies, sans-serif' }}>
      <NavbarBrand className="items-center mr-1">
        <Link className="font-bold text-inherit" href="/">
          <RBLogo />
          <p className="invisible md:visible mt-1 ml-2">Rare Breed Ink</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex justify-items-end gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/artist/los/page.tsx" aria-current="page">
            Los
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/artist/sam/page.tsx" aria-current="page">
            Sam
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/artist/raye/page.tsx" aria-current="page">
            Raye
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/available-designs">
            Available Designs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="block sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <NavbarMenu className="flex items-center bg-black bg-opacity-80">
          <NavbarMenuItem>
            <Link className="text-3xl mt-5 font-thin" color="foreground" href="/artist/los/page.tsx" size="lg" aria-current="page">
              Los
            </Link>
          </NavbarMenuItem>
            <Divider className="bg-gray-500 bg-opacity-45"/>
          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/artist/sam/page.tsx" size="lg" aria-current="page">
              Sam
            </Link>
          </NavbarMenuItem>
            <Divider className="bg-gray-500 bg-opacity-45"/>
          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/artist/raye/page.tsx" size="lg" aria-current="page">
              Raye
            </Link>
          </NavbarMenuItem>
            <Divider className="bg-gray-500 bg-opacity-45"/>
          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/available-designs" size="lg" aria-current="page">
              Available Designs
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      )}
    </Navbar>
  );
}