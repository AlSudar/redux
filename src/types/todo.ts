export enum TodoActionTypeProps {
  FETCH_TODO_LOAD = "TODO_FETCH_LOAD",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
  FETCH_TODO_SET_PAGE = "FETCH_TODO_SET_PAGE",
}

export interface TodoStateProps {
  error: null | string;
  loading: boolean;
  todos: any[];
  user: null | number;
}

interface TodoActionErrorProps {
  type: TodoActionTypeProps.FETCH_TODO_ERROR;
  payload: string;
}

interface TodoActionLoadProps {
  type: TodoActionTypeProps.FETCH_TODO_LOAD;
}

interface TodoActionSuccessProps {
  type: TodoActionTypeProps.FETCH_TODO_SUCCESS;
  payload: any[];
}

interface TodoActionSetPageProps {
  type: TodoActionTypeProps.FETCH_TODO_SET_PAGE;
  payload: number;
}

export type TodoActionProps =
  | TodoActionErrorProps
  | TodoActionLoadProps
  | TodoActionSuccessProps
  | TodoActionSetPageProps;
