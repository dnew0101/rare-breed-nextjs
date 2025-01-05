"use client"

import NextImage from 'next/image';
import { Image, Card } from '@nextui-org/react';
import { HeroCards } from './subcomponents/HeroCards';
import { useEffect, useState } from 'react';
import { fetchHeroSection } from '../../backend/api/fetchHeroSection';
// import LosGrabbingInkBottle4k from '../../../public/images/Hero-Photos-webp/LosGrabbingInkBottle4k.webp';
import Desktop_Hero from '../../../public/images/Hero-Photos-webp/Desktop_Hero.webp';

const HeroSection = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [heroData, setHeroData] = useState<any>(null);
  // const [loading, setLoading] = useState(false);

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [error, setError] = useState<any>(null);
  // const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {


    // --In favor of making hero photos local--
    // Keeping code block around for reference

    const fetchHeroData = async () => {
      try {
        
        const heroContent = await fetchHeroSection(`${process.env.NEXT_PUBLIC_CONTENTFUL_HERO_ID}`);
        setHeroData(heroContent);

        // setLoading(false);
      } catch (error) {
        // setError(error);
        // setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // if (loading) {
  //   return (
  //     <section className="hero-section bg-neutral-950 flex flex-col items-center">
  //       <Skeleton className='h-[100vh] w-[100vw]' />
  //     </section>
  //   );
  // }

  // Set image URL and description based on screen size
  // const heroImageUrl = isMobile ? LosGrabbingInkBottle4k : Desktop_Hero;
  //alt description for hero image
  // const heroImageDescription = isMobile ? heroData?.heroImageMobile?.description : heroData?.heroImage?.description;


  return (
    <section className="hero-section relative flex flex-col w-full h-[140vh] sm:h-[130vh] pl-4 pr-4 justify-center items-center min-h-[650px] md:m-0">
      <div className='hero-content-container relative flex flex-col w-full h-[60%] overflow-hidden md:rounded-none z-10 mt-8'>
        <div className='upper-hero-container relative flex flex-row self-start h-full w-full gap-[5%] justify-evenly rounded-xl bg-black opacity-90'
        >
          <div className='h-[80%] w-[80%] absolute rounded-xl mt-10'
          style={{
            backgroundImage:`url(${Desktop_Hero.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className="text-container flex flex-col items-start justify-center text-center p-4 w-100%
          md:max-w-[60%]">
            <h1 className="text-6xl text-neutral-100 drop-shadow-lg lg:text-7xl font-thin z-30" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {heroData?.heroTitle}
            </h1>
            <p className="text-white text-s mt-8 font-light self-center z-30" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {heroData?.subtitle}
            </p>
          </div>
          <div className='images-container relative flex flex-col self-center w-full h-full justify-center
          max-w-[40%]'>
            <div className='hero-image-container flex relative h-auto w-full self-center justify-center'>
              {/* <Image
                as={NextImage}
                src={Desktop_Hero?.src}
                alt='yep'
                width={500}
                height={500}>
              </Image> */}
            </div>
          </div>
        </div>
      </div>

      <div className='hero-cards-container relative flex flex-col justify-evenly justify-items-center items-center mt-auto 
      h-[40%] w-full self-center
      sm:flex-row sm:items-center 
      xl:w-[90vw] z-10'>
        <HeroCards 
          title='Curious about our designs?' 
          backgroundImage='' 
          backgroundAlt='' 
          buttonText='See designs'
          route='/available-designs'
        />
        <HeroCards 
          title='Already have an idea for us?' 
          backgroundImage='' 
          backgroundAlt='' 
          buttonText='Book now'
          route='/contact'
        />
        <HeroCards 
          title='Want to learn more about us?' 
          backgroundImage='' 
          backgroundAlt='' 
          buttonText='About us'
          route='/about'
          className='hidden lg:flex'
        />
      </div>
    </section>
  );
};

export default HeroSection;