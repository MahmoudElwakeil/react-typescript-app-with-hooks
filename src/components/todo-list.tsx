import useFetch from "../custom-hooks/fetch-todos";
import { TODOViewModel } from "../models/todo-view-mode";

function TODoList() {
  const [todos, setTodos] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      {todos &&
        todos.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default TODoList;
