import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import RBLogo from "./RBLogo";

export default function Header() {
  return (
    <Navbar className="bg-black opacity-80 text-3xl" style={{ fontFamily: 'TrueLies, sans-serif' }}>
      <NavbarBrand className="items-center ml-1 mr-1">
        <Link className="pl-2 font-bold text-inherit" href="/">
          <RBLogo />
          Rare Breed Ink
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
    </Navbar>
  );
}