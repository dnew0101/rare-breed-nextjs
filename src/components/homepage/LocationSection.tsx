"use client"

import React, { useEffect, useState } from 'react';
import { fetchContactSection } from '../../backend/api/fetchContact';
import { Skeleton } from '@nextui-org/react';

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

  if (loading) {
    return (
      <section className="location-section bg-neutral-950 flex flex-col items-center">
        <Skeleton className='h-[100vh] w-[100vw]' />
      </section>
    );
  }
  if (error) return <div>{error}</div>;

  return (
    <section className="location-section text-neutral-100 p-8 flex flex-col items-center min-h-[650px] mt-6 mb-10">
      <h1 className="text-6xl sm:text-7xl font-thin mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {contactSectionData?.sectionTitle}</h1>

      <div className='justify-center text-center font-thin'
      style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <p className="mb-2">
          Phone: <a href={`tel:${contactSectionData?.phoneNumber}`} className="text-indigo-300 underline"><span className='font-light'>{contactSectionData?.phoneNumber}</span></a>
        </p>
        <p className="mb-2">Address: {contactSectionData?.shopAddress}</p>
        <p>Appointment Only!</p>
      </div>


      <div className='w-[90vw] sm:w-[70vw] map mt-10 opacity-70'>
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