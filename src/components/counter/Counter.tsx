import { useQuery } from '@apollo/client';

import { GET_TODOS } from '@/api/queries';

const Counter = (): JSX.Element => {
  const { data } = useQuery(GET_TODOS, { variables: { inputTodos: { userId: 'testid' } } });
  console.log(data?.todos);

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
