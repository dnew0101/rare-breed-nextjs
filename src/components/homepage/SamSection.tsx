"use client";

import { useEffect, useState } from 'react';
import { fetchArtist } from '../../backend/api/fetchArtist';
import Carousel from './Carousel';
import { Button } from '@nextui-org/react';

const ArtistSection = () => {
  const [artistData, setArtistData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        // Fetch the Artist Section data using the fetchArtist function
        const artistContent = await fetchArtist(`${process.env.NEXT_PUBLIC_CONTENTFUL_SAM_ID}`);
        setArtistData(artistContent);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArtistData();
  });

  if (loading) return <div>Loading Artist Section...</div>;
  if (error) return <div>Error fetching Artist Section...</div>;

  return (
    <section className="artist-section relative w-full h-[95vh]">
      {/* Carousel Background */}
      {artistData && <Carousel items={artistData.photosCollection.items} reverse={false} />}

      {/* Slanted Section */}
      <div className="absolute right-0 top-0 h-full w-full bg-black opacity-90 text-white z-10 flex slanted-section">
        <div className="p-[1.5em] flex flex-col justify-between h-full w-full">
          <h2 className="text-7xl font-bold mb-4 ml-4 self-end">{artistData.name}</h2>
          <p className="mb-4 flex-grow">{artistData.bio}</p>
          <Button className="btn btn-primary self-end mb-4 mr-12">{artistData.buttonText}</Button>
        </div>
      </div>

      <style jsx>{`
        .slanted-section {
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 70% 100%);
        }
      `}</style>
    </section>
  );
};

export default ArtistSection;