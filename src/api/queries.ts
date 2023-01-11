import { gql } from '@/__generated__/gql';

export const GET_TODOS = gql(`
  query todos($inputTodos: InputTodos) {
    todos(input: $inputTodos) {
      id
      text
      userId
    }
  }
`);
