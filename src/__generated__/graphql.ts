/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type InputTodos = {
  userId: Scalars['ID'];
};

export type InputUser = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createUser: User;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};

export type NewTodo = {
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type NewUser = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
  user: User;
  users: Array<User>;
};


export type QueryTodosArgs = {
  input?: InputMaybe<InputTodos>;
};


export type QueryUserArgs = {
  input?: InputMaybe<InputUser>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  text: Scalars['String'];
  userId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateTodoMutationVariables = Exact<{
  newTodo: NewTodo;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, text: string, userId: string } };

export type TodosQueryVariables = Exact<{
  inputTodos?: InputMaybe<InputTodos>;
}>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, text: string, userId: string }> };


export const CreateTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newTodo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewTodo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newTodo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<CreateTodoMutation, CreateTodoMutationVariables>;
export const TodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"todos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputTodos"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InputTodos"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputTodos"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<TodosQuery, TodosQueryVariables>;