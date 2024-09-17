import { createClient, ContentfulClientApi } from 'contentful';

const client: ContentfulClientApi<any> = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export default client;