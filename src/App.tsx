import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div id="root">
      <UserList />
      <TodoList />
    </div>
  );
};

export default App;
