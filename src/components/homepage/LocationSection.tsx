"use client"

import React, { useEffect, useState } from 'react';
import { fetchContactSection } from '../../backend/api/fetchContact';

interface ContactSectionData {
  sectionTitle: string;
  shopAddress: string;
  phoneNumber: string;
  mapEmbedCode: string;
}

const LocationSection = () => {
  const [contactSectionData, setContactSectionData] = useState<ContactSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getContactSectionData = async () => {
      try {
        const data = await fetchContactSection(`${process.env.NEXT_PUBLIC_CONTENTFUL_CONTACT_ID}`);
        setContactSectionData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching contact section data');
        setLoading(false);
      }
    };

    getContactSectionData();
  }, []);

  if (loading) return <div>Loading location data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="location-section bg-neutral-950 text-neutral-100 p-8 flex flex-col items-center mt-6 mb-10">
      <h1 className="text-6xl sm:text-7xl font-bold mb-10">{contactSectionData?.sectionTitle}</h1>

      <div className='justify-center text-center'>
        <p className="mb-2">
          Phone: <a href={`tel:${contactSectionData?.phoneNumber}`} className="text-blue-500 underline">{contactSectionData?.phoneNumber}</a>
        </p>
        <p className="mb-2">Address: {contactSectionData?.shopAddress}</p>
        <p>Appointment Only!</p>
      </div>


      <div className='w-[70vw] map'>
        <div 
          className="flex map-container mt-4 rounded-lg justify-self-center mb-4"
          style={{ overflow: 'hidden', width: '100%', maxWidth: '800px', height: '500px' }}
          dangerouslySetInnerHTML={{ __html: contactSectionData?.mapEmbedCode || '' }}
        />
      </div>
    </section>
  );
};

export default LocationSection;