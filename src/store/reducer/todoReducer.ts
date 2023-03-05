import {
  TodoActionProps,
  TodoActionTypeProps,
  TodoStateProps,
} from "../../types/todo";

const InitalState: TodoStateProps = {
  loading: false,
  error: null,
  todos: [],
  user: null,
};

export const todoReducer = (
  state = InitalState,
  action: TodoActionProps
): TodoStateProps => {
  console.log(state, action);

  switch (action.type) {
    case TodoActionTypeProps.FETCH_TODO_LOAD:
      return { loading: true, error: null, todos: [], user: null };

    case TodoActionTypeProps.FETCH_TODO_ERROR:
      return { loading: false, error: action.payload, todos: [], user: null };

    case TodoActionTypeProps.FETCH_TODO_SUCCESS:
      return { loading: false, error: null, todos: action.payload, user: null };

    // case TodoActionTypeProps.FETCH_TODO_SET_PAGE:
    //   return { loading: false, error: null, page: action.payload };

    default:
      return state;
  }
};
