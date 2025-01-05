import React from 'react'
import { ArtistPage } from '../../../components/artist-profiles/ArtistPage'

function page() {
  return (
    <section>
      <div>Los page</div>
      <ArtistPage 
      name='Los'
      profilePicture='https://via.placeholder.com/150'
      bio='Los is a tattoo artist from Tacoma, WA. He specializes in black and grey realism, and has been tattooing for 10 years.'
      links={['https://www.instagram.com']}
      gallery={['https://via.placeholder.com/150']}
      availableDesigns='yes'
      booking='https://www.jotform.com'
      schedule='yes'
      />
    </section>
  )
}

export default page