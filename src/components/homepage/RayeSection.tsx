"use client";

import { useEffect, useState } from 'react';
import { fetchArtist } from '../../backend/api/fetchArtist';
import Carousel from './Carousel';
import { Divider, Skeleton } from '@nextui-org/react';
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
    className="artist-section relative w-full h-[90vh] m-0 p-0 overflow-hidden z-20 bg-background">
      {/* Carousel Background */}
      {artistData && <Carousel items={artistData.photosCollection.items} reverse={true} />}

      {/* Slanted Section */}
      <div className="slanted-section flex flex-row absolute top-0 m-0 h-[100%] w-full bg-neutral-950 opacity-90 text-white z-10">
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
      </div>
      <style jsx>{`
        .slanted-section {
          clip-path: polygon(0 0, 90% 0, 30% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default ArtistSection;