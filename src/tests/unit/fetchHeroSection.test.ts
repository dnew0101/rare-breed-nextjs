import { GraphQLClient } from 'graphql-request';
import { fetchHeroSection } from '../../backend/api/fetchHeroSection';

jest.mock('graphql-request', () => ({
  GraphQLClient: jest.fn().mockImplementation(() => ({
    request: jest.fn(),
  })),
}));

const mockGraphQLClient = GraphQLClient as jest.MockedClass<typeof GraphQLClient>;

describe('GetHeroSection Query', () => {
  const mockHeroSectionResponse = {
    heroSection: {
      heroImage: {
        url: 'https://example.com/image.jpg',
        title: 'Hero Image Title',
      },
      heroTitle: 'Welcome to Our Website',
      subtitle: 'This is the hero subtitle',
    },
  };

  it('fetches hero section data successfully', async () => {
    // Mock the request function to return the mock data
    mockGraphQLClient.prototype.request.mockResolvedValueOnce(mockHeroSectionResponse);

    const result = await fetchHeroSection('some-id');
    
    expect(result).toEqual(mockHeroSectionResponse.heroSection);
    expect(mockGraphQLClient.prototype.request).toHaveBeenCalledWith(expect.anything(), {
      id: 'some-id',
    });
  });
});
