"use client";

import { useEffect, useState } from 'react';
import { fetchArtist } from '../../backend/api/fetchArtist';
import Carousel from './Carousel';

const ArtistSection = () => {
  const [artistData, setArtistData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        // Fetch the Artist Section data using the fetchArtist function
        const artistContent = await fetchArtist(`${process.env.NEXT_PUBLIC_CONTENTFUL_LOS_ID}`);
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
    <section className="artist-section relative w-full bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center">{artistData.title}</h2>
      <p className="text-center mt-4">{artistData.bio}</p>

      {artistData && <Carousel items={artistData.photosCollection.items} autoSlide={true} />}

      <div className="text-center mt-8">
        <button className="btn btn-primary">{artistData.buttonText}</button>
      </div>
    </section>
  );
};

export default ArtistSection;