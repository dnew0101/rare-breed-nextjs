import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

interface FaqSection {
  questionTitle: string;
  tag: string;
  answer: string;
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
        answer
      }
    }
  }
`;

const fetchFaqs = async () => {
    const data: FaqSectionResponse = await graphQLClient.request(query);
    return data.faQsCollection.items || [];
};

export default fetchFaqs;