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
        const artistContent = await fetchArtist(`${process.env.NEXT_PUBLIC_CONTENTFUL_RAYE_ID}`);
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
      {artistData && <Carousel items={artistData.photosCollection.items} reverse={true} />}

      {/* Slanted Section */}
      <div className="absolute left-0 top-0 h-full w-full bg-zinc-900 opacity-95 text-white z-10 flex slanted-section">
        <div className="p-[1.5em] flex flex-col justify-between h-[100%] self-start">
          <h2 className="text-7xl font-bold mb-4 ml-4 self-start">{artistData.name}</h2>
          <p className="mb-4">{artistData.bio}</p>
          <Button className="btn btn-primary self-start ml-12">{artistData.buttonText}</Button>
        </div>
      </div>

      <style jsx>{`
        .slanted-section {
          clip-path: polygon(0 0, 70% 0, 30% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default ArtistSection;