import { gql } from '@/__generated__';

export const CREATE_TODO = gql(`
  mutation createTodo($newTodo: NewTodo!) {
    createTodo(input: $newTodo){
      id
      text
      userId
    }
}
`);
