import axios from "axios";
import { Dispatch } from "redux";
import { TodoActionProps, TodoActionTypeProps } from "../../types/todo";

export const fetchTodo: any = () => {
  return async (dispatch: Dispatch<TodoActionProps>) => {
    try {
      dispatch({ type: TodoActionTypeProps.FETCH_TODO_LOAD });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch({
        type: TodoActionTypeProps.FETCH_TODO_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionTypeProps.FETCH_TODO_ERROR,
        payload: "Произошла ошибка при загрузке списка дел",
      });
    }
  };
};
