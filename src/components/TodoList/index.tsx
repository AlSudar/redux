import { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const TodoList = () => {
  const { todos, error, loading } = useTypedSelector((state) => state.todo);
  const { fetchTodo } = useActions();

  useEffect(() => {
    fetchTodo();
  }, []);

  if (loading) {
    return <h1>Загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <ul>
      {todos.map((item, id) => (
        <li key={id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
