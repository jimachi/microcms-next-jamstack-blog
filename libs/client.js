import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'arsx0gma3a',
  apiKey: process.env.API_KEY,
});
