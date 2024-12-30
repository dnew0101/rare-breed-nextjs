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
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button
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
          <p className="opacity-0 md:opacity-100 mt-1 ml-2 text-xl">Rare Breed Ink</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex justify-items-end gap-4" justify="center">
      <NavbarItem className="mt-1">
          <Dropdown className="bg-black bg-opacity-90">
            <DropdownTrigger>
              <span className="text-2xl">Artists</span>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="los" href="/artist/los" aria-label="Los page">
                Los
              </DropdownItem>
              <DropdownItem key="sam" href="/artist/sam" aria-label="Sam page">
                Sam
              </DropdownItem>
              <DropdownItem key="raye" href="/artist/raye" aria-label="Raye page">
                Raye
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/available-designs">
            <span className="text-xl">Designs</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/available-designs">
            <span className="text-xl">Resources</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            <span className="text-xl">Contact</span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="block lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <NavbarMenu className="flex items-center bg-black bg-opacity-80"
        style={{ fontFamily: 'TrueLies, sans-serif' }}>
          <NavbarMenuItem className="mt-10">
            <Link className="text-3xl font-thin" color="foreground" href="/artist/los" size="lg" aria-current="page">
              Los's Page
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[40%] mt-2 mb-3"/>

          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/artist/sam" size="lg" aria-current="page">
              Sam's Page
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[40%] mt-2 mb-3"/>

          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/artist/raye" size="lg" aria-current="page">
              Raye's Page
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[40%] mt-2 mb-3"/>

          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/available-designs" size="lg" aria-current="page">
              Available Designs
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[40%] mt-2 mb-3"/>

          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/available-designs">
              Policies & Booking
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[40%] mt-2 mb-3"/>

          <NavbarMenuItem>
            <Link className="text-3xl font-thin" color="foreground" href="/available-designs">
              Aftercare
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[40%] mt-2 mb-3"/>

          <NavbarMenuItem>
            <Link className="text-3xl font-thin mr-3" color="foreground" href="/available-designs" size="lg" aria-current="page">
              Contact
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      )}
    </Navbar>
  );
}