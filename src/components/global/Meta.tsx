import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Rare Breed Ink Studio | Tattoo Shop in Tacoma, WA',
  description: 'One of Washington State\'s highest-rated tattoo studios, located conveniently in the heart of downtown Tacoma. Experience world-class body art from our talented and licensed artists.',
  authors: [{name: 'Rare Breed Ink Studio'}],

  // Open Graph meta tags
  openGraph: {
    type: 'website',
    title: 'Rare Breed Ink Studio | Tattoo Shop in Tacoma, WA',
    description: 'Home to Tacoma\'s finest tattoo artists. Book your masterpiece today!',
    url: 'https://rarebreedinkstudio.com',
    images: [
      {
        url: '/images/Hero-Photos-webp/RareBreedInkBackgroundPhoto.webp',
        alt: 'Rare Breed Ink Studio',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'Rare Breed Ink',
    locale: 'en_US',
  },
};

const Meta = () => {
    return (
      <>
        {/* Adding structured data (JSON-LD) using <Head> */}
        <Head>
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TattooParlor',
              name: 'Rare Breed Ink Studio',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '711 St Helens Ave, Ledger Square Building, Suite #201',
                addressLocality: 'Tacoma',
                addressRegion: 'WA',
                postalCode: '98402',
                addressCountry: 'USA',
              },
              telephone: '(253)-301-1107',
              openingHours: 'Mo-Su 11:00-19:00',
              image: 'https://rarebreedinkstudio.com/og-image.jpg',
              artist: [
                {
                  '@type': 'Person',
                  name: 'Los',
                  gender: 'male',
                  jobTitle: 'Tattoo Artist and Founder',
                  sameAs: 'https://www.instagram.com/rarebreedinkstudio/',
                  description: 'Specializes in chicano tattoos, black and gray, realism, portraits, memorial.',
                },
                {
                  '@type': 'Person',
                  name: 'Sam',
                  gender: 'female',
                  jobTitle: 'Tattoo Artist and Co-Founder',
                  sameAs: 'https://www.instagram.com/lovelyinink_/',
                  description: 'Specializes in anime and cartoon tattoos, Studio Ghibli tattoos, stipple, neo-traditional.',
                },
                {
                  '@type': 'Person',
                  name: 'Raye',
                  gender: 'female',
                  jobTitle: 'Tattoo Artist',
                  sameAs: 'https://www.instagram.com/rayetattoos/',
                  description: 'Specializes in horror tattoos, illustrative, fine-line, neo-traditional and traditional styles.',
                },
              ],
            })}
          </script>
        </Head>
      </>
    );
  };
  
  export default Meta;