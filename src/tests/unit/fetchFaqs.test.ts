import { GraphQLClient } from 'graphql-request';
import fetchFaqs from '../../backend/api/fetchFaqs';

jest.mock('graphql-request', () => ({
  GraphQLClient: jest.fn().mockImplementation(() => ({
    request: jest.fn(),
  })),
}));

const mockGraphQLClient = GraphQLClient as jest.MockedClass<typeof GraphQLClient>;

describe('GetFaqs Query', () => {
  const mockFaqsResponse = {
    faQsCollection: {
      items: [
        {
          questionTitle: 'What is the return policy?',
          tag: 'returns',
          answer: {
            json: {
              content: 'Our return policy is...'
            },
          },
        },
        {
          questionTitle: 'How long does shipping take?',
          tag: 'shipping',
          answer: {
            json: {
              content: 'Shipping takes 3-5 business days...'
            },
          },
        },
      ],
    },
  };

  it('fetches FAQs successfully', async () => {
    mockGraphQLClient.prototype.request.mockResolvedValueOnce(mockFaqsResponse);

    const result = await fetchFaqs();

    expect(result).toEqual(mockFaqsResponse.faQsCollection.items);
    expect(mockGraphQLClient.prototype.request).toHaveBeenCalledWith(expect.anything());
  });
});
