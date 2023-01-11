import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';

import client from '@/api/apollo-client';
import Layout from '@/components/common/Layout';
import TodoList from '@/components/TodoList/TodoList';

const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <TodoList />
      </Layout>
    </ApolloProvider>
  );
};

export default Home;
