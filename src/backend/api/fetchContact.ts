import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

interface ContactSection {
    sectionTitle: string;
    shopAddress: string;
    phoneNumber: string;
    mapEmbedCode: string;
}
  
interface ContactSectionResponse {
    contactSection: ContactSection;
}

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
});

const query = gql`
    query GetContactSection($id: String!) {
        contactSection(id: $id) {
        sectionTitle
        shopAddress
        phoneNumber
        mapEmbedCode
        }
    }
`;

export const fetchContactSection = async (id: string) => {
    const variables = { id };
    const data: ContactSectionResponse = await graphQLClient.request(query, variables);
    return data.contactSection;
};