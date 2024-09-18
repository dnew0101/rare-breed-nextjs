import Head from 'next/head';

const Meta = () => {
    return (
        <Head>

        {/* Generic SEO values */}
        <title>Rare Breed Ink Studio | Tattoo Shop in Tacoma, WA</title>
        <meta name="description" content="One of Washington State's highest-rated tattoo studios, located conveniently in the heart of downtown Tacoma. Experience world-class body art from our talented and licensed artists." />
        <meta name="author" content="Rare Breed Ink" />
        <meta name="rating" content="5/5 stars, with several ratings on Google, Yelp, and Facebook." />
        <meta name="hours" content="11am-7pm" />
        <meta name="phone" content="(253)-301-1107" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rare Breed Ink Studio | Tattoo Shop in Tacoma, WA" />
        <meta property="og:description" content="Home to Tacoma's finest tattoo artists. Book your masterpiece today!" />
        <meta property="og:url" content="https://rarebreedinkstudio.com" />
        <meta property="og:image" content="https://rarebreedinkstudio.com/og-image.jpg" />
        <meta property="og:site_name" content="Rare Breed Ink" />
        <meta property="og:locale" content="en_US" />
        
        <link rel="canonical" href="https://rarebreedinkstudio.com" />

        {/* Structured Data for the Tattoo Studio */}
        <script type="application/ld+json">
            {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "Rare Breed Ink Studio",
            address: {
                "@type": "PostalAddress",
                streetAddress: "711 St Helens Ave, Ledger Square Building, Suite #201",
                addressLocality: "Tacoma",
                addressRegion: "WA",
                postalCode: "98402",
                addressCountry: "USA"
            },
            telephone: "(253)-301-1107",
            openingHours: "Mo-Su 11:00-19:00",
            image: "https://rarebreedinkstudio.com/og-image.jpg",
            artist: [
                {
                "@type": "Person",
                name: "Los",
                gender: "male",
                jobTitle: "Tattoo Artist and Founder",
                sameAs: "https://www.instagram.com/rarebreedinkstudio/",
                description: "Specializes in chicano tattoos, black and gray, realism, portraits, memorial."
                },
                {
                "@type": "Person",
                name: "Sam",
                gender: "female",
                jobTitle: "Tattoo Artist and Co-Founder",
                sameAs: "https://www.instagram.com/lovelyinink_/",
                description: "Specializes in anime and cartoon tattoos, Studio Ghibli tattoos, stipple, neo-traditional."
                },
                {
                "@type": "Person",
                name: "Raye",
                gender: "female",
                jobTitle: "Tattoo Artist",
                sameAs: "https://www.instagram.com/rayetattoos/",
                description: "Specializes in horror tattoos, illustrative, fine-line, neo-traditional and traditional styles."
                }
            ]
            })}
        </script>

        </Head>
    );
};

export default Meta;