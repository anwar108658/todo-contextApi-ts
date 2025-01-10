import Navbar from "./component/Navbar";
import TodoForm from "./component/TodoForm";
import TodosItem from "./component/TodosItem";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6">Todo App</h1>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <TodoForm />
      </div>
      <div className="w-full max-w-md bg-gray-700 mt-4 p-4 rounded-lg shadow-lg">
        <Navbar />
      </div>
      <div className="w-full max-w-md bg-gray-800 mt-4 p-4 rounded-lg shadow-lg">
        <TodosItem />
      </div>
    </div>
  );
};

export default App;
