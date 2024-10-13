import { GraphQLClient } from 'graphql-request';
import fetchAvailableDesigns from '../../backend/api/fetchAvailableDesigns'; // Adjust the path accordingly

jest.mock('graphql-request', () => ({
  GraphQLClient: jest.fn().mockImplementation(() => ({
    request: jest.fn(),
  })),
}));

const mockGraphQLClient = GraphQLClient as jest.MockedClass<typeof GraphQLClient>;

describe('GetAvailableDesigns Query', () => {
  const mockAvailableDesignsResponse = {
    availableDesignsPostCollection: {
      items: [
        {
          image: { url: 'https://example.com/design1.jpg' },
          designName: 'Design 1',
          artistName: 'Artist A',
          price: '$100',
          size: 'Medium',
          artistNotes: 'Special notes about design 1.',
        },
        {
          image: { url: 'https://example.com/design2.jpg' },
          designName: 'Design 2',
          artistName: 'Artist B',
          price: '$150',
          size: 'Large',
          artistNotes: 'Special notes about design 2.',
        },
      ],
    },
  };

  it('fetches available designs successfully', async () => {
    mockGraphQLClient.prototype.request.mockResolvedValueOnce(mockAvailableDesignsResponse);

    const result = await fetchAvailableDesigns();

    expect(result).toEqual(mockAvailableDesignsResponse.availableDesignsPostCollection.items);
    expect(mockGraphQLClient.prototype.request).toHaveBeenCalledWith(expect.anything());
  });
});
