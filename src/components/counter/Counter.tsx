import { useEffect } from 'react';

import { useTodo } from '@/hooks/useTodo';

type CounterProps = {
  initialNum: number;
};

const Counter = (props: CounterProps): JSX.Element => {
  const { initialNum } = props;
  const { fetchTodos } = useTodo();
  useEffect(() => {
    void fetchTodos('testid');
  }, [fetchTodos]);

  return (
    <div className="p-32">
      <div className="py-2">
        <p>タイトル</p>
        <input type="text" className="border border-solid border-gray-300" />
      </div>
      <div className="py-2">
        <p>コンテント</p>
        <input type="text" className="border border-solid border-gray-300" />
      </div>
      <button className="box-border rounded-md bg-gray-300 px-5 ">追加</button>
    </div>
  );
};

export default Counter;
