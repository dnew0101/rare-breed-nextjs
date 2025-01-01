import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

interface Artist {
    name: string;
    preferredBookingLink: string;
}

interface AvailableDesign {
    sys: {
      id: string;
    };
    image: {
        url: string;
    }
    designName: string;
    artistName: string;
    price: number;
    size: string;
    artistNotes: string;
    contact: string;
}

interface FetchAvailableDesignsResponse {
  availableDesignsPostCollection: {
    items: {
      sys: {
        id: string;
      };
      image: {
        url: string;
      };
      designName: string;
      artist: Artist;
      price: number;
      size: string;
      artistNotes: string;
    }[];
  };
}

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
});

const query = gql`
  query GetAvailableDesigns {
    availableDesignsPostCollection {
      items {
        artist {
          ...on Artist {
            name
            preferredBookingLink
          }
        }
        image {
          url
        }
        designName
        price
        size
        artistNotes
      }
    }
  }
`;

const fetchAvailableDesigns = async (): Promise<AvailableDesign[]> => {
  const data = await graphQLClient.request<FetchAvailableDesignsResponse>(query);
  return data.availableDesignsPostCollection.items.map((item) => ({
    sys: item.sys,
    image: item.image,
    designName: item.designName,
    artistName: item.artist ? item.artist.name : "", // Fallback for null artist
    price: item.price,
    size: item.size,
    artistNotes: item.artistNotes,
    contact: item.artist ? item.artist.preferredBookingLink : "", // Fallback for null artist
  }));
};
  
export default fetchAvailableDesigns;