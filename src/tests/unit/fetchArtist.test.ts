import { GraphQLClient } from 'graphql-request';
import { fetchArtist } from '../../backend/api/fetchArtist'; // Adjust the path accordingly

jest.mock('graphql-request', () => ({
  GraphQLClient: jest.fn().mockImplementation(() => ({
    request: jest.fn(),
  })),
}));

const mockGraphQLClient = GraphQLClient as jest.MockedClass<typeof GraphQLClient>;

describe('GetArtist Query', () => {
  const mockArtistResponse = {
    artist: {
      name: 'John Doe',
      bio: 'An amazing tattoo artist.',
      photosCollection: {
        items: [
          {
            title: 'Artwork 1',
            description: 'Description of artwork 1.',
            fileName: 'artwork1.jpg',
            url: 'https://example.com/artwork1.jpg',
            sys: { id: '1' },
          },
          {
            title: 'Artwork 2',
            description: 'Description of artwork 2.',
            fileName: 'artwork2.jpg',
            url: 'https://example.com/artwork2.jpg',
            sys: { id: '2' },
          },
        ],
      },
      slug: 'john-doe',
      buttonText: 'View Portfolio',
    },
  };

  it('fetches artist data successfully', async () => {
    mockGraphQLClient.prototype.request.mockResolvedValueOnce(mockArtistResponse);

    const result = await fetchArtist('some-artist-id');

    expect(result).toEqual(mockArtistResponse.artist);
    expect(mockGraphQLClient.prototype.request).toHaveBeenCalledWith(expect.anything(), {
      id: 'some-artist-id',
    });
  });
});
