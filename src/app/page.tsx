import HeroSection from "@/components/homepage/HeroSection";
import LosSection from "@/components/homepage/LosSection";
import SamSection from "@/components/homepage/SamSection";
import RayeSection from "@/components/homepage/RayeSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import ContactSection from "@/components/homepage/LocationSection";
import FaqSection from "@/components/homepage/FaqSection";
import { Divider } from "@nextui-org/react";
import LocationSection from "@/components/homepage/LocationSection";

export default async function Home() {
  return ( 
  <>
    <HeroSection />
    <LosSection />
    <SamSection />
    <RayeSection />
    <TestimonialSection />
    <Divider className="w-[80%] justify-self-center"/>
    <LocationSection />
    <Divider className="w-[80%] justify-self-center"/>
    <FaqSection />
  </>);
};
