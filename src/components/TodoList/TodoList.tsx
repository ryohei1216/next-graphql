import { useMutation, useQuery } from '@apollo/client';
import { useState, FormEvent, ChangeEvent } from 'react';

import { CREATE_TODO } from '@/api/mutations';
import { GET_TODOS } from '@/api/queries';

const TodoList = (): JSX.Element => {
  const { data } = useQuery(GET_TODOS, { variables: { inputTodos: { userId: 'testid' } } });
  const [createTodo] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }, 'todos'],
  });
  const [text, setText] = useState<string>('');
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void createTodo({ variables: { newTodo: { text: text, userId: 'testid' } } }).then(() =>
      setText(''),
    );
  };

  return (
    <div className="flex">
      <div className="p-32">
        <form onSubmit={onSubmit}>
          <div className="py-2">
            <p>TODO</p>
            <input
              type="text"
              className="border border-solid border-gray-300"
              onChange={onChangeText}
              value={text}
            />
          </div>
          <button className="box-border rounded-md bg-gray-300 px-5 " type="submit">
            追加
          </button>
        </form>
      </div>
      <div className="p-32">
        <ul>
          {data?.todos.map((item) => (
            <li key={item.id}>・{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
