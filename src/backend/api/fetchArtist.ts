import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

interface Photo {
    sys: {
      id: string;
    };
    url: string;
    title: string | null;
    description: string | null;
}
  
interface PhotosCollection {
    items: Photo[];
}
  
interface Artist {
    id: string;
    name: string;
    bio: string;
    photosCollection: PhotosCollection;
}
  
interface FetchArtistResponse {
    artist: Artist;
}
  
interface GraphQLResponse {
    artist: Artist;
}

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
});

const query = gql`
    query GetArtist($id: String!) {
        artist(id: $id) {
            name
            bio
            photosCollection {
                items {
                    title
                    description
                    fileName
                    url
                    sys {
                        id
                    }
                }
            }
            slug
            buttonText
        }
    }
`;

export const fetchArtist = async (id: string): Promise<FetchArtistResponse> => {
    const variables = { id };
    const data = await graphQLClient.request<{ artist: FetchArtistResponse }>(query, variables);
    return data.artist;
};