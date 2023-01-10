import { gql } from '@apollo/client';
import { useState } from 'react';

import client from '@/api/apollo-client';

export const useTodo = () => {
  const [todos, setTodos] = useState();
  const fetchTodos = async (useId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = await client.query({
      query: gql`
        query todos {
          todos(input: { userId: "testid" }) {
            id
            text
            userId
          }
        }
      `,
    });
    console.log(data);
  };

  return { fetchTodos };
};
