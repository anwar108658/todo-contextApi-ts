import { FormEvent, useState } from 'react';
import { useTodo } from '../store/Todos';

const TodoForm = () => {
  const [value, setValue] = useState<string>('');
  const { addTodoHandler } = useTodo();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoHandler(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col items-center gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border rounded-md p-2 w-64 text-black"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
