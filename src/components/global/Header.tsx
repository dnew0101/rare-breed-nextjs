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
    className={`text-3xl ${isMenuOpen ? "flex items-center bg-background bg-opacity-90" : "bg-background opacity-90"}`} 
    style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <NavbarBrand className="items-center mr-1">
        <Link className="font-bold text-inherit" href="/">
          <RBLogo />
          <p className="hidden md:block mt-1 ml-2 text-xl font-extralight">Rare Breed Ink</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex justify-items-end gap-4" justify="center">
      <NavbarItem>
          <Dropdown className="bg-background bg-opacity-90">
            <DropdownTrigger>
              <Button color="default" variant="ghost" className="text-md font-extralight">
                Artists
              </Button>
            </DropdownTrigger>
            <DropdownMenu style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <DropdownItem key="los" href="/artist/los" aria-label="Los page">
                <span className="flex text-lg font-light justify-self-center">Los</span>
              </DropdownItem>
              <DropdownItem key="sam" href="/artist/sam" aria-label="Sam page">
                <span className="flex text-lg font-light justify-self-center">Sam</span>
              </DropdownItem>
              <DropdownItem key="raye" href="/artist/raye" aria-label="Raye page">
                <span className="flex text-lg font-light justify-self-center">Raye</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/available-designs">
            <Button color="default" variant="ghost" className="text-md font-extralight">Designs</Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown className="bg-background bg-opacity-90">
            <DropdownTrigger>
              <Button color="default" variant="ghost" className="text-md font-extralight">
                Resources
              </Button>
            </DropdownTrigger>
            <DropdownMenu style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <DropdownItem key="los" href="/artist/los" aria-label="Los page">
                <span className="flex text-lg font-light justify-self-center">About</span>
              </DropdownItem>
              <DropdownItem key="sam" href="/artist/sam" aria-label="Sam page">
                <span className="flex text-lg font-light justify-self-center">Aftercare</span>
              </DropdownItem>
              <DropdownItem key="raye" href="/artist/raye" aria-label="Raye page">
                <span className="flex text-lg font-light justify-self-center">Policies & Booking</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            <Button color="default" variant="ghost" className="text-md font-extralight">Contact</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="block lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <NavbarMenu className="flex items-center bg-black bg-opacity-80 font-light"
        style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <NavbarMenuItem className="mt-10">
            <Link className="text-2xl" color="foreground" href="/artist/los" size="lg" aria-current="page">
              Los
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[8%] mt-1 mb-2"/>

          <NavbarMenuItem>
            <Link className="text-2xl" color="foreground" href="/artist/sam" size="lg" aria-current="page">
              Sam
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[8%] mt-1 mb-2"/>

          <NavbarMenuItem>
            <Link className="text-2xl" color="foreground" href="/artist/raye" size="lg" aria-current="page">
              Raye
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[8%] mt-1 mb-2"/>

          <NavbarMenuItem>
            <Link className="text-2xl" color="foreground" href="/available-designs" size="lg" aria-current="page">
              About
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[8%] mt-1 mb-2"/>

          <NavbarMenuItem>
            <Link className="text-2xl" color="foreground" href="/available-designs" size="lg" aria-current="page">
              Contact
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[8%] mt-1 mb-2"/>

          <NavbarMenuItem>
            <Link className="text-2xl" color="foreground" href="/available-designs">
              Aftercare
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[8%] mt-1 mb-2"/>

          <NavbarMenuItem>
            <Link className="text-2xl" color="foreground" href="/available-designs" size="lg" aria-current="page">
              Available Designs
            </Link>
          </NavbarMenuItem>

          <Divider className="bg-gray-500 bg-opacity-45 w-[8%] mt-1 mb-2"/>

          <NavbarMenuItem>
            <Link className="text-2xl" color="foreground" href="/available-designs">
              Policies & Booking
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      )}
    </Navbar>
  );
}