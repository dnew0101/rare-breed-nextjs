"use client";

import { useEffect, useState } from 'react';
import { fetchArtist } from '../../backend/api/fetchArtist';
import Carousel from './Carousel';
import { Divider, Skeleton, Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const ArtistSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [artistData, setArtistData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        // Fetch the Artist Section data using the fetchArtist function
        const artistContent = await fetchArtist(`${process.env.NEXT_PUBLIC_CONTENTFUL_RAYE_ID}`);
        setArtistData(artistContent);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArtistData();
  }, []);

  if (loading) {
    return (
      <section className="artist-section bg-neutral-950 flex flex-col items-center">
        <Skeleton className='h-[100vh] w-[100vw]' />
      </section>
    );
  }
  if (error) return <div>Error fetching Artist Section...</div>;

  return (
    <section 
    className="flex artist-section relative justify-self-center justify-center
     w-[100%] h-[90vh] min-h-[650px] mt-12 p-0 z-20 bg-background">
      {/* Artist Card Body Section */}
      <Card className='h-[100%] w-[90%] md:max-w-[70%] lg:max-w-[60%]'>
        <CardHeader className='h-[20%]'>
          <h1 className="text-7xl font-bold mb-6 self-center">{artistData.name}</h1>
        </CardHeader>
        <CardBody className='overflow-hidden h-[45%]'>
          {artistData && <Carousel items={artistData.photosCollection.items} reverse={true} />}
        </CardBody>
        <CardFooter className='flex flex-col justify-center h-[35%]'>
          <div className='flex flex-col h-[25%] w-[80%] justify-center items-center'>
            <p className='mt-4'>Specializes in black and grey realism, portrait, and religious pieces.</p>   
            <p>{artistData.bio}</p>  
          </div>
          <Divider className="max-w-[85%] mb-10 mt-10" />
          <div className='contact-grouping flex flex-row 
          w-[100%] lg:w-[50%] justify-around items-center'>
              <a aria-label={`${artistData.name}'s Instagram link.`} href="http://www.instagram.com/rarebreedinkstudio" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a>
          </div>
        </CardFooter>
      </Card>


      {/* Slanted Section */}
      {/* <div className="slanted-section flex flex-row absolute top-0 m-0 h-[100%] w-full bg-neutral-950 opacity-90 text-white z-10">
        <div className="divide-container flex flex-col mr-6 mb-6 h-[70%] w-[38%] justify-center self-center">

          <div className='content-container flex flex-col ml-6 mt-2 h-auto w-[90%] items-center text-center'>
              <h1 className="text-7xl font-bold mb-14 self-center">{artistData.name}</h1>

              <Divider className="mb-6 max-w-[85%]" />
                  <p>Specializes in fine-line, neo-traditional, and stipple.</p>   
                  <p>{artistData.bio}</p>   
              <Divider className="mt-6 max-w-[85%]" /> 

              <div className='contact-grouping flex flex-row w-[100%] lg:w-[50%] justify-around items-center mt-10'>
                <a aria-label={`${artistData.name}'s Instagram link.`} href="https://instagram.com/rayetattoos" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
              </div>  
          </div>
        </div>
      </div> */}
      {/* <style jsx>{`
        .slanted-section {
          clip-path: polygon(0 0, 90% 0, 30% 100%, 0 100%);
        }
      `}</style> */}
    </section>
  );
};

export default ArtistSection;