import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import RBLogo from "./RBLogo";

export default function Header() {
  return (
    <Navbar className="bg-black opacity-80 text-2xl" style={{fontFamily: 'Odachi, san-serif'}}>
      <NavbarBrand>
        <RBLogo />
        <Link className="pl-2 font-bold text-inherit" href="/">Rare Breed Ink</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/artist/los/page.tsx" aria-current="page">
            Los
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/artist/sam/page.tsx" aria-current="page">
            Sam
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/artist/raye/page.tsx" aria-current="page">
            Raye
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/available-designs">
            Available Designs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about/page.tsx">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}