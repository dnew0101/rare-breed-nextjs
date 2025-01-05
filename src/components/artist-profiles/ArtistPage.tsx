import React from 'react'

type ArtistPageProps = {
  name: string; //artist name... obviously.
  profilePicture: string; //artist profile picture from Contentful
  bio: string; //artist biography
  links: string[]; //array of social media urls
  gallery: string[]; //array of image urls, likely the same as homepage carousel
  availableDesigns: string; //url to available designs, with filter set to artist-specific designs
  booking: string; //url to artist's JotForm site, or their preferred booking platform
  schedule: string; //simple UI display based on the availability of artist
}

export const ArtistPage = ({ name, profilePicture, bio, links, gallery, availableDesigns, booking, schedule }: ArtistPageProps) => {
  return (
    <div>MainCard</div>
  )
}
