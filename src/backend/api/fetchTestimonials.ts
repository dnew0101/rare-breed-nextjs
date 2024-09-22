import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

interface ClientTestimonials {
    clientName: string;
    testimonial: string;
}

interface ClientTestimonialsCollection {
    items: ClientTestimonials[];
}

interface FetchTestimonialsResponse {
    clientTestimonialsCollection: ClientTestimonialsCollection;
}

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
});

const query = gql`
    query GetClientTestimonials {
        clientTestimonialsCollection {
        items {
          clientName
          testimonial
        }
      }
    }
`;

const fetchTestimonials = async (): Promise<ClientTestimonials[]> => {
    const data = await graphQLClient.request<FetchTestimonialsResponse>(query);
    return data.clientTestimonialsCollection.items;
};
  
export default fetchTestimonials;