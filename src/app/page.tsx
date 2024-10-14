import Image from "next/image";
import HeroSection from "@/components/homepage/HeroSection";
import LosSection from "@/components/homepage/LosSection";
import SamSection from "@/components/homepage/SamSection";
import RayeSection from "@/components/homepage/RayeSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import ContactSection from "@/components/homepage/ContactSection";
import FaqSection from "@/components/homepage/FaqSection";


export default async function Home() {
  return ( 
  <>
    <HeroSection />
    <LosSection />
    <SamSection />
    <RayeSection />
    <TestimonialSection />
    <ContactSection />
    <FaqSection />
  </>);
};
