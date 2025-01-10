import { useTodo } from '../store/Todos';
import { useSearchParams } from 'react-router-dom';

const TodosItem = () => {
  const [id] = useSearchParams();
  const data = id.get('todo');
  const { todos, deleteTodo, toggelTodo } = useTodo();

  let filterTodo = todos;
  if (data === 'complete') {
    filterTodo = filterTodo.filter((todo) => todo.isComplete);
  }
  if (data === 'active') {
    filterTodo = filterTodo.filter((todo) => !todo.isComplete);
  }

  return (
    <ul className="flex flex-col gap-2">
      {filterTodo.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between bg-gray-700 p-2 rounded-md">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => toggelTodo(todo.id)}
              className="w-5 h-5"
            />
            <label className={todo.isComplete ? 'line-through' : ''}>{todo.text}</label>
          </div>
          {todo.isComplete && (
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodosItem;
