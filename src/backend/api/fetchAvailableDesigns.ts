import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

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
}

interface AvailableDesignsCollection {
    items: AvailableDesign[];
}

interface FetchAvailableDesignsResponse {
    availableDesignsPostCollection: AvailableDesignsCollection;
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
                image {
                    url
                }
                designName
                artistName
                price
                size
                artistNotes
            }
        }
    }
`;

const fetchAvailableDesigns = async (): Promise<AvailableDesign[]> => {
    const data = await graphQLClient.request<FetchAvailableDesignsResponse>(query);
    return data.availableDesignsPostCollection.items;
};
  
export default fetchAvailableDesigns;