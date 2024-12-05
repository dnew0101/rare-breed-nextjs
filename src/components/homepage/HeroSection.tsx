"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchHeroSection } from '../../backend/api/fetchHeroSection';
import { Button, Skeleton } from '@nextui-org/react';
import Rare_Breed_Logo from '../../../public/images/Rare_Breed_Logo.webp';
import LosGrabbingInkBottle4k from '../../../public/images/Hero-Photos-webp/LosGrabbingInkBottle4k.webp';
import Desktop_Hero from '../../../public/images/Hero-Photos-webp/Desktop_Hero.webp';

const HeroSection = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [heroData, setHeroData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {


    //--In favor of making hero photos local--
    //Keeping code block around for reference

    // const fetchHeroData = async () => {
    //   try {
        
    //     const heroContent = await fetchHeroSection(`${process.env.NEXT_PUBLIC_CONTENTFUL_HERO_ID}`);
    //     setHeroData(heroContent);

    //     setLoading(false);
    //   } catch (error) {
    //     setError(error);
    //     setLoading(false);
    //   }
    // };

    // fetchHeroData();


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

  if (loading) {
    return (
      <section className="hero-section bg-neutral-950 flex flex-col items-center">
        <Skeleton className='h-[100vh] w-[100vw]' />
      </section>
    );
  }

  // Set image URL and description based on screen size
  const heroImageUrl = isMobile ? LosGrabbingInkBottle4k : Desktop_Hero;
  //alt description for hero image
  // const heroImageDescription = isMobile ? heroData?.heroImageMobile?.description : heroData?.heroImage?.description;


  return (
    <section className="hero-section relative flex h-[90vh] ml-6 mr-6 pl-4 pr-4 justify-center items-center
    md:m-0 md:h-[95vh]">
        <div className='mobile-container absolute flex flex-col w-full h-[90%] rounded-3xl overflow-hidden
        md:absolute md:h-full md:rounded-none'>
            <Image
              src={heroImageUrl}
              alt={'Hero Image'}
              quality={50}
              className='object-cover object-center'
              fill
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