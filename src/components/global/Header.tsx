import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import RBLogo from "./RBLogo";

export default function Header() {
  return (
    <Navbar className="bg-black opacity-80">
      <NavbarBrand>
        <RBLogo />
        <p className="pl-2 font-bold text-inherit">Rare Breed Ink</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about/page.tsx">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/artist/los/page.tsx" aria-current="page">
            Los
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/artist/sam/page.tsx" aria-current="page">
            Sam
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/artist/raye/page.tsx" aria-current="page">
            Raye
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Available Designs
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}