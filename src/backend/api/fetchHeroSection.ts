import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

interface HeroSection {
    title: string;
    description: string;
}
  
interface GraphQLResponse {
    heroSection: HeroSection;
}

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
});

const query = gql`
    query GetHeroSection($id: String!) {
        heroSection(id: $id) {
            sys {
                id
            }
            contentfulMetadata {
                tags {
                id
                name
                }
            }
            heroImage {
                url
                title
            }
            heroTitle
            subtitle
        }
    }
`;

export const fetchHeroSection = async (id: string) => {
    const variables = { id };
    const data: GraphQLResponse = await graphQLClient.request(query, variables);
    return data.heroSection;
};