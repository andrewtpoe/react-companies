import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

// setup your `RestLink` with your endpoint
const link = new RestLink({
  uri: process.env.REACT_APP_API_URL,
});

// setup your client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: !(process.env.NODE_ENV === 'production'),
  link,
});

export default client;
