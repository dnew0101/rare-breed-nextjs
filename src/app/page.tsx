import { Divider } from "@nextui-org/react";
import HeroSection from "@/components/homepage/HeroSection";
import LosSection from "@/components/homepage/LosSection";
import SamSection from "@/components/homepage/SamSection";
import RayeSection from "@/components/homepage/RayeSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import FaqSection from "@/components/homepage/FaqSection";
import LocationSection from "@/components/homepage/LocationSection";

export default async function Home() {
  return ( 
  <>
    <HeroSection />
    <Divider className="w-[80%] justify-self-center mt-12"/>
    <LosSection />
    <Divider className="w-[80%] justify-self-center mt-12"/>
    <SamSection />
    <Divider className="w-[80%] justify-self-center mt-12"/>
    <RayeSection />
    <Divider className="w-[80%] justify-self-center mt-12"/>
    <TestimonialSection />
    <Divider className="w-[80%] justify-self-center"/>
    <LocationSection />
    <Divider className="w-[80%] justify-self-center"/>
    <FaqSection />
  </>);
};
