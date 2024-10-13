import { GraphQLClient, gql } from 'graphql-request';
import { Document } from '@contentful/rich-text-types';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

interface FaqSection {
  questionTitle: string;
  tag: string;
  answer: {
    json: Document;
  } | null;
}

interface FaqSectionCollection {
  items: FaqSection[];
}

interface FaqSectionResponse {
  faQsCollection: FaqSectionCollection;
}

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

const query = gql`
  query GetFaqs {
    faQsCollection {
      items {
        questionTitle
        tag
        answer {
          json
        }
      }
    }
  }
`;

const fetchFaqs = async (): Promise<FaqSection[]> => {
  try {
    const data: FaqSectionResponse = await graphQLClient.request(query);
    return data.faQsCollection.items;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
};

export default fetchFaqs;