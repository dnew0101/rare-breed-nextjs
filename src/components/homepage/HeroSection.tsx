"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchHeroSection } from '../../backend/api/fetchHeroSection';
import { Button } from '@nextui-org/react';
import { b } from 'framer-motion/client';
import Rare_Breed_Logo from '../../../public/images/Rare_Breed_Logo.png';

const HeroSection = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [heroData, setHeroData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        
        // Fetch the Hero Section data using the fetchHeroSection function
        const heroContent = await fetchHeroSection(`${process.env.NEXT_PUBLIC_CONTENTFUL_HERO_ID}`);
        setHeroData(heroContent);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHeroData();

    //check initial screen width for mobile/desktop image rendering
    setIsMobile(window.innerWidth <= 768);

    //event listener for screen width change
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    //clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //prelim error handling
  if (loading) return <div>Loading Hero Section...</div>;
  if (error) return <div>Error fetching Hero Section...</div>;

  // Set image URL and description based on screen size
  const heroImageUrl = isMobile ? heroData.heroImageMobile.url : heroData.heroImage.url;
  const heroImageDescription = isMobile ? heroData.heroImageMobile.description : heroData.heroImage.description;


  return (
    <section className="hero-section relative flex h-[90vh] ml-6 mr-6 pl-4 pr-4 justify-center items-center
    md:m-0 md:h-[95vh]">
        <div className='mobile-container absolute flex flex-col w-full h-[90%] rounded-3xl overflow-hidden
        md:absolute md:h-full md:rounded-none'>
            <Image
              src={heroImageUrl}
              alt={heroImageDescription}
              layout='fill'
              objectFit='cover'
              quality={50}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className='content-container absolute flex flex-col h-full w-full'>
              <div className="text-container flex flex-col items-center justify-center text-center mt-24 p-4
              sm:mt-28
              md:top-24 md:text-center md:items-center">
                <Image
                  src={Rare_Breed_Logo}
                  alt="Rare Breed Logo"
                  width={300}
                  height={300}
                  priority
                />
                {/* <h1 className="text-6xl text-neutral-100 drop-shadow-lg
                md:text-9xl">
                  {heroData.heroTitle}
                </h1>
                <p className="text-white text-xs mt-8">{heroData.subtitle}</p> */}
                </div>

              <div className='button-container flex justify-evenly items-center w-full mt-auto mb-28 pl-4 pr-4'>

                  {/*Sends user to the contact page */}
                  <Button
                    className="bg-neutral-900"
                    size="md"
                    radius='full'
                    variant='faded'
                    onClick={() => window.open(heroData.buttonLink, '_blank')}>Book now
                  </Button>

                  {/*Sends user to the available designs page */}
                  <Button
                    className="bg-neutral-900"
                    size="md"
                    radius='full'
                    variant='faded'
                    >
                      <a href='/available-designs'>See designs</a>
                  </Button>

              </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;