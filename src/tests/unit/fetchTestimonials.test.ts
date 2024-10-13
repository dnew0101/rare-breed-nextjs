import { GraphQLClient } from 'graphql-request';
import fetchClientTestimonials from '../../backend/api/fetchTestimonials';

jest.mock('graphql-request', () => ({
  GraphQLClient: jest.fn().mockImplementation(() => ({
    request: jest.fn(),
  })),
}));

const mockGraphQLClient = GraphQLClient as jest.MockedClass<typeof GraphQLClient>;

describe('GetClientTestimonials Query', () => {
  const mockTestimonialsResponse = {
    clientTestimonialsCollection: {
      items: [
        {
          clientName: 'John Doe',
          testimonial: 'Great service!',
        },
        {
          clientName: 'Jane Smith',
          testimonial: 'Amazing work!',
        },
      ],
    },
  };

  it('fetches client testimonials successfully', async () => {
    // Mock the request function to return the mock data
    mockGraphQLClient.prototype.request.mockResolvedValueOnce(mockTestimonialsResponse);

    const result = await fetchClientTestimonials();

    expect(result).toEqual(mockTestimonialsResponse.clientTestimonialsCollection.items);
    expect(mockGraphQLClient.prototype.request).toHaveBeenCalledWith(expect.anything());
  });
});