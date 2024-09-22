"use client"
import React, { useEffect, useState } from 'react';
import DesignCard from '../../components/global/DesignCard';
import fetchAvailableDesigns from '../../backend/api/fetchAvailableDesigns';

interface Design {
  image: {
    url: string;
  };
  designName: string;
  artistName: string;
  price: number;
  size: string;
  artistNotes?: string;
}

const AvailableDesigns: React.FC = () => {
  const [designs, setDesigns] = useState<Design[]>([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      const data = await fetchAvailableDesigns();
      setDesigns(data);
    };

    fetchDesigns();
  }, []);

return (
  <div className="relative p-4 min-h-screen justify-center">
    <h1 className=" relative z-10 flex text-4xl font-bold mt-10 mb-16 text-center self-center justify-center">Available Designs</h1>
    
    {designs.length > 0 ? (
        <div className="relative z-10 flex flex-wrap justify-around">
          {designs.map((design, index) => (
            <div key={index} className="w-[80vw] min-h-[60vh] mb-12 sm:w-[40vw] sm:min-h-[30vh] lg:w-[28vw] lg:min-h-[25vh] xl:w-[25vw] 2xl:w-[20vw]">
              <DesignCard
                image={design.image.url}
                designName={design.designName}
                artistName={design.artistName}
                price={design.price.toString()}
                size={design.size}
                notes={design.artistNotes}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative z-10 text-center text-lg text-default-500 mt-10">
          <p>No designs currently posted. Reach out to our artists for custom work or check back later. We frequently post new flash designs!</p>
        </div>
      )}
  </div>
);};

export default AvailableDesigns;