import { GraphQLClient } from 'graphql-request';
import { fetchContactSection } from '../../backend/api/fetchContact'; // Adjust the path accordingly

jest.mock('graphql-request', () => ({
  GraphQLClient: jest.fn().mockImplementation(() => ({
    request: jest.fn(),
  })),
}));

const mockGraphQLClient = GraphQLClient as jest.MockedClass<typeof GraphQLClient>;

describe('GetContactSection Query', () => {
  const mockContactSectionResponse = {
    contactSection: {
      sys: { id: 'contact-section-id' },
      sectionTitle: 'Contact Us',
      shopAddress: '123 Tattoo St, Tattoo City, TC 12345',
      phoneNumber: '(123) 456-7890',
      mapEmbedCode: '<iframe src="https://example.com/map"></iframe>',
    },
  };

  it('fetches contact section data successfully', async () => {
    mockGraphQLClient.prototype.request.mockResolvedValueOnce(mockContactSectionResponse);

    const result = await fetchContactSection('some-contact-id');

    expect(result).toEqual(mockContactSectionResponse.contactSection);
    expect(mockGraphQLClient.prototype.request).toHaveBeenCalledWith(expect.anything(), {
      id: 'some-contact-id',
    });
  });
});