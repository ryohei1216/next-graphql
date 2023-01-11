import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';

import client from '@/api/apollo-client';
import Layout from '@/components/common/Layout';
import Counter from '@/components/counter/Counter';

const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Counter />
      </Layout>
    </ApolloProvider>
  );
};

export default Home;
