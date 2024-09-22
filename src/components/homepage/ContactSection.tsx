"use client"

import React, { useEffect, useState } from 'react';
import { fetchContactSection } from '../../backend/api/fetchContact';

interface ContactSectionData {
  sectionTitle: string;
  shopAddress: string;
  phoneNumber: string;
  mapEmbedCode: string;
}

const ContactSection = () => {
  const [contactSectionData, setContactSectionData] = useState<ContactSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getContactSectionData = async () => {
      try {
        const data = await fetchContactSection('YOUR_CONTACT_SECTION_ID');
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
    <section className="location-section bg-neutral-950 text-neutral-100 p-8">
      <h2 className="text-2xl font-bold mb-4">{contactSectionData?.sectionTitle}</h2>
      <p className="mb-2">Address: {contactSectionData?.shopAddress}</p>
      <p className="mb-2">Phone: {contactSectionData?.phoneNumber}</p>
      <div className="map-container mt-4" dangerouslySetInnerHTML={{ __html: contactSectionData?.mapEmbedCode || '' }} />
    </section>
  );
};

export default ContactSection;