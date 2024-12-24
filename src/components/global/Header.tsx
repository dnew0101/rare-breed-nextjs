"use client";

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  NavbarMenu, 
  NavbarMenuItem, 
  NavbarMenuToggle, 
  Divider 
} from "@nextui-org/react";
import RBLogo from "./RBLogo";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar isBordered 
    className={`text-3xl ${isMenuOpen ? "flex items-center bg-black bg-opacity-80" : "bg-black opacity-80"}`} 
    style={{ fontFamily: 'TrueLies, sans-serif' }}>
      <NavbarBrand className="items-center mr-1">
        <Link className="font-bold text-inherit" href="/">
          <RBLogo />
          <p className="opacity-0 md:opacity-100 mt-1 ml-2">Rare Breed Ink</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex justify-items-end gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/artist/los" aria-label="Los page">
            Los
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/artist/sam" aria-label="Sam page">
            Sam
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/artist/raye" aria-label="Raye page">
            Raye
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/available-designs">
            Designs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
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
            <Link className="text-3xl mt-5 font-thin" color="foreground" href="/available-designs" size="lg" aria-current="page">
              Available Designs
            </Link>
          </NavbarMenuItem>
          <Divider className="bg-gray-500 bg-opacity-45 w-[80%]"/>
          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/artist/los" size="lg" aria-current="page">
              Los
            </Link>
          </NavbarMenuItem>
            <Divider className="bg-gray-500 bg-opacity-45 w-[80%]"/>
          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/artist/sam" size="lg" aria-current="page">
              Sam
            </Link>
          </NavbarMenuItem>
            <Divider className="bg-gray-500 bg-opacity-45 w-[80%]"/>
          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/artist/raye" size="lg" aria-current="page">
              Raye
            </Link>
          </NavbarMenuItem>
            <Divider className="bg-gray-500 bg-opacity-45 w-[80%]"/>
          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/available-designs" size="lg" aria-current="page">
              Contact
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      )}
    </Navbar>
  );
}