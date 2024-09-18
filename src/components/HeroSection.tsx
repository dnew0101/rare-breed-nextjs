"use client"

import { useEffect, useState } from 'react';
import { fetchHeroSection } from '../utils/fetchHeroSection';

const HeroSection = () => {
  const [heroData, setHeroData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        // Fetch the Hero Section data using the fetchHeroSection function
        const heroContent = await fetchHeroSection(`${process.env.NEXT_PUBLIC_CONTENTFUL_MOBILE_HERO_ID}`);
        setHeroData(heroContent);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) return <div>Loading Hero Section...</div>;
  if (error) return <div>Error fetching Hero Section...</div>;

  return (
    <section
      className="hero-section relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroData.heroImage.url})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-36 sm:pt-36">
        <h1 className="text-4xl font-bold text-white">{heroData.heroTitle}</h1>
        <p className="text-white mt-4">{heroData.subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;