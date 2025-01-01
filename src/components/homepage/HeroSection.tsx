"use client"

import { HeroCards } from './subcomponents/HeroCards';
import { useEffect, useState } from 'react';
import { fetchHeroSection } from '../../backend/api/fetchHeroSection';
// import LosGrabbingInkBottle4k from '../../../public/images/Hero-Photos-webp/LosGrabbingInkBottle4k.webp';
// import Desktop_Hero from '../../../public/images/Hero-Photos-webp/Desktop_Hero.webp';

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
    <section className="hero-section relative flex w-full h-[120vh] sm:h-[100vh] pl-4 pr-4 justify-center items-center min-h-[650px]
    md:m-0">

        <div className='mobile-container absolute flex flex-col w-full h-[100%] overflow-hidden
        md:absolute md:h-full md:rounded-none'>
            {/* <Image
              src={heroImageUrl}
              alt={'Hero Image'}
              quality={40}
              className='h-auto w-auto '
              fill
              priority
            /> */}
            <div className='content-container absolute flex flex-col h-full w-full'>
              <div className="text-container flex flex-col items-center justify-center text-center 
              mt-10 p-4
              sm:mt-24">
                {/* <Image
                  src={Rare_Breed_Logo}
                  alt="Rare Breed Logo"
                  width={0}
                  height={0}
                  className='h-[200px] w-[200px] md:h-[200px] md:w-[200px]'
                /> */}

                <h1 className="text-6xl text-neutral-100 drop-shadow-lg
                md:text-7xl font-thin"
                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {heroData?.heroTitle}
                </h1>
                <p className="text-white text-s mt-8 font-light"
                style={{ fontFamily: 'Montserrat, sans-serif' }}>{heroData?.subtitle}</p>
                
                </div>

              <div className='hero-cards-container flex justify-evenly self-center justify-items-center flex-col items-center mt-8 h-full w-full
              sm:flex-row sm:items-center
              xl:w-[90vw]'
>
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

              {/* <div className='button-card-container flex flex-col justify-evenly items-center 
              w-full min-h-[150px] h-auto pl-4 pr-4
              sm:flex-row'>

                  <Button
                    className="bg-background w-[70%] rounded-lg p-5
                    sm:w-[30%] 
                    md:rounded-full
                    lg:w-[20%]"
                    variant='bordered'
                  ><a href='/'>Book now</a></Button>

                  <Button
                    className="bg-background w-[70%] rounded-lg p-5
                    sm:w-[30%] 
                    md:rounded-full
                    lg:w-[20%]"
                    variant='bordered'
                  >
                    <a href='/available-designs'>See designs</a>
                  </Button>

              </div> */}
            </div>
        </div>
    </section>
  );
};

export default HeroSection;